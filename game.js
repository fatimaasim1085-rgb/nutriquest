// ═══════════════════════════════════════════════════════════════
//  NutriQuest — Game Engine
// ═══════════════════════════════════════════════════════════════

const LETTERS = ['A', 'B', 'C', 'D'];
const CAT_COUNTS = { food: 12, clinical: 12, nutrient: 12, safety: 9 };

// Persist XP in localStorage
const SAVE_KEY = 'nutriquest_xp';
let totalXP = parseInt(localStorage.getItem(SAVE_KEY) || '0');

// ── State ────────────────────────────────────────────────────────
let state = {
  mode: null,        // 'classic' | 'category' | 'speed' | 'survival'
  selCat: null,      // selected category (for category mode)
  selDiff: null,     // selected difficulty (for all modes, or 'mix')
  queue: [],         // questions for this game
  idx: 0,            // current question index
  score: 0,          // raw points
  correct: 0,        // correct answers
  total: 0,          // total questions answered
  streak: 0,
  bestStreak: 0,
  lives: 3,          // for survival mode
  answered: false,
  timerInterval: null,
  timerLeft: 0,
  timeForQ: 0,
  catScores: { food: [0,0], clinical: [0,0], nutrient: [0,0], safety: [0,0] },
  shuffledOpts: [],  // shuffled option indices for current question
  correctOptPos: 0,  // position of correct answer in shuffled opts
  xpGained: 0
};

// ── Utility ──────────────────────────────────────────────────────
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

function getLevel(xp) {
  let lv = 0;
  for (let i = 0; i < LEVELS.length; i++) {
    if (xp >= LEVELS[i].xp) lv = i;
  }
  return lv;
}

function nextLevelXP(lv) {
  return lv < LEVELS.length - 1 ? LEVELS[lv + 1].xp : null;
}

function saveXP(gain) {
  totalXP += gain;
  localStorage.setItem(SAVE_KEY, totalXP);
}

// ── Screen manager ───────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ── XP bar render ────────────────────────────────────────────────
function renderXPBar() {
  const lv = getLevel(totalXP);
  const info = LEVELS[lv];
  const nextXP = nextLevelXP(lv);
  const pct = nextXP ? Math.round(((totalXP - info.xp) / (nextXP - info.xp)) * 100) : 100;

  document.getElementById('xp-badge-emoji').textContent = info.emoji;
  document.getElementById('xp-level-name').textContent = `Level ${lv + 1} — ${info.name}`;
  document.getElementById('xp-fill').style.width = pct + '%';
  document.getElementById('xp-numbers').textContent =
    nextXP ? `${totalXP} / ${nextXP} XP` : `${totalXP} XP — MAX LEVEL`;
}

// ═══════════════════════════════════════
//  HOME
// ═══════════════════════════════════════
function initHome() {
  renderXPBar();
  showScreen('screen-home');
}

// Mode card clicks → handled inline via onclick in HTML

// ═══════════════════════════════════════
//  SETUP FLOW
// ═══════════════════════════════════════
function selectMode(mode) {
  state.mode = mode;
  state.selCat = null;
  state.selDiff = null;

  if (mode === 'classic' || mode === 'speed') {
    showDiffPicker();
  } else if (mode === 'category') {
    showCatPicker();
  } else if (mode === 'survival') {
    // no cat/diff needed — mix everything
    startGame();
  }
}

function showCatPicker() {
  const s = document.getElementById('screen-setup');
  s.innerHTML = `
    <div class="wrap" style="padding: 32px 0;">
      <button class="btn-back" onclick="initHome()">← Back</button>
      <div class="section-title" style="animation:none;">Choose a category</div>
      <div class="cat-grid">
        ${Object.entries(CAT_META).map(([k, v]) => `
          <div class="cat-card" data-cat="${k}" onclick="pickCat('${k}')">
            <span class="cat-emoji">${v.emoji}</span>
            <span class="cat-name">${v.name}</span>
            <span class="cat-count">${CAT_COUNTS[k]} questions</span>
          </div>
        `).join('')}
      </div>
      <div id="cat-diff-wrap" style="display:none;">
        <div class="section-title" style="margin-top:20px; animation:none;">Choose difficulty</div>
        <div class="diff-grid" id="setup-diff-grid"></div>
        <button class="btn-primary" id="start-btn" onclick="startGame()" disabled>Start Game →</button>
      </div>
    </div>
  `;
  showScreen('screen-setup');
}

function pickCat(cat) {
  state.selCat = cat;
  document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('selected'));
  document.querySelector(`.cat-card[data-cat="${cat}"]`).classList.add('selected');
  document.getElementById('cat-diff-wrap').style.display = 'block';
  renderDiffGrid('setup-diff-grid');
}

function showDiffPicker() {
  const s = document.getElementById('screen-setup');
  const modeLabel = state.mode === 'speed' ? 'Speed Run ⚡' : 'Classic Mix 🎯';
  s.innerHTML = `
    <div class="wrap" style="padding: 32px 0;">
      <button class="btn-back" onclick="initHome()">← Back</button>
      <div class="section-title" style="animation:none;">${modeLabel} — Choose difficulty</div>
      <div class="diff-grid" id="setup-diff-grid"></div>
      <button class="btn-primary" id="start-btn" onclick="startGame()" disabled>Start Game →</button>
    </div>
  `;
  showScreen('screen-setup');
  renderDiffGrid('setup-diff-grid');
}

function renderDiffGrid(containerId) {
  const diffs = [
    { key: 'easy',   emoji: '🌱', label: 'Easy',     sub: '100 pts, 25s' },
    { key: 'medium', emoji: '🌿', label: 'Medium',   sub: '200 pts, 20s' },
    { key: 'hard',   emoji: '🔥', label: 'Hard',     sub: '350 pts, 15s' },
    { key: 'mix',    emoji: '🌪️', label: 'Mix',      sub: 'All levels' }
  ];
  document.getElementById(containerId).innerHTML = diffs.map(d => `
    <div class="diff-card" data-diff="${d.key}" onclick="pickDiff('${d.key}')">
      <span class="diff-emoji">${d.emoji}</span>
      <span class="diff-label">${d.label}</span>
      <span class="diff-pts">${d.sub}</span>
    </div>
  `).join('');
}

function pickDiff(diff) {
  state.selDiff = diff;
  document.querySelectorAll('.diff-card').forEach(c => c.classList.remove('selected'));
  document.querySelector(`.diff-card[data-diff="${diff}"]`).classList.add('selected');
  const btn = document.getElementById('start-btn');
  if (btn) btn.disabled = false;
}

// ═══════════════════════════════════════
//  GAME BUILD
// ═══════════════════════════════════════
function buildQueue() {
  let pool = [...QUESTION_BANK];

  if (state.mode === 'survival') {
    return shuffle(pool);
  }

  // Filter by category
  if (state.mode === 'category' && state.selCat) {
    pool = pool.filter(q => q.cat === state.selCat);
  }

  // Filter by difficulty
  if (state.selDiff && state.selDiff !== 'mix') {
    pool = pool.filter(q => q.diff === state.selDiff);
  }

  pool = shuffle(pool);

  // Determine question count
  let count = 15;
  if (state.mode === 'category') count = Math.min(12, pool.length);
  if (state.mode === 'speed')    count = 10;

  return pool.slice(0, count);
}

function getTimerForQ(q) {
  if (state.mode === 'speed') return 10;
  if (state.mode === 'survival') return DIFF_META[q.diff].time;
  if (state.selDiff && state.selDiff !== 'mix') return DIFF_META[state.selDiff].time;
  return DIFF_META[q.diff].time;
}

function getBasePoints(q) {
  if (state.mode === 'speed') return 150;
  return DIFF_META[q.diff].points;
}

// ═══════════════════════════════════════
//  START GAME
// ═══════════════════════════════════════
function startGame() {
  const q = state.queue = buildQueue();
  if (q.length === 0) {
    alert('No questions match your selection. Try a different combination!');
    return;
  }
  state.idx = 0;
  state.score = 0;
  state.correct = 0;
  state.total = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.lives = 3;
  state.xpGained = 0;
  state.catScores = { food: [0,0], clinical: [0,0], nutrient: [0,0], safety: [0,0] };

  showScreen('screen-game');
  loadQuestion();
}

// ═══════════════════════════════════════
//  LOAD QUESTION
// ═══════════════════════════════════════
function loadQuestion() {
  clearInterval(state.timerInterval);
  state.answered = false;

  const q = state.queue[state.idx];
  const total = state.mode === 'survival' ? '∞' : state.queue.length;

  // ── Header stats ──
  document.getElementById('stat-score').textContent = state.score;
  document.getElementById('stat-streak').textContent = state.streak;
  document.getElementById('q-count').textContent = `${state.idx + 1} / ${total}`;

  if (state.mode === 'survival') {
    document.getElementById('lives-wrap').style.display = 'flex';
    renderLives();
  } else {
    document.getElementById('lives-wrap').style.display = 'none';
  }

  // Multiplier badge
  const multBadge = document.getElementById('mult-badge');
  if (state.streak >= 5) {
    multBadge.textContent = '🔥 ×2 Streak';
    multBadge.style.display = 'inline-flex';
    document.getElementById('streak-stat').classList.add('multiplier-active');
  } else if (state.streak >= 3) {
    multBadge.textContent = '⚡ ×1.5 Streak';
    multBadge.style.display = 'inline-flex';
    document.getElementById('streak-stat').classList.add('multiplier-active');
  } else {
    multBadge.style.display = 'none';
    document.getElementById('streak-stat').classList.remove('multiplier-active');
  }

  // Progress bar
  const progPct = state.mode === 'survival'
    ? Math.min((state.idx / 30) * 100, 100)
    : (state.idx / state.queue.length) * 100;
  document.getElementById('progress-fill').style.width = progPct + '%';

  // ── Question card ──
  const cat = CAT_META[q.cat];
  document.getElementById('q-cat-badge').className = `q-cat-badge ${q.cat}`;
  document.getElementById('q-cat-badge').textContent = `${cat.emoji} ${cat.name}`;
  document.getElementById('q-diff-badge').className = `q-diff-badge ${q.diff}`;
  document.getElementById('q-diff-badge').textContent = `${DIFF_META[q.diff].emoji} ${DIFF_META[q.diff].label}`;
  document.getElementById('q-num').textContent = state.mode === 'survival'
    ? `Q${state.idx + 1}`
    : `Q${state.idx + 1}/${state.queue.length}`;
  document.getElementById('q-emoji').textContent = q.emoji;
  document.getElementById('q-text').textContent = q.q;

  // ── Options ──
  const indices = shuffle([0, 1, 2, 3]);
  state.shuffledOpts = indices;
  state.correctOptPos = indices.indexOf(q.ans);

  const container = document.getElementById('options-container');
  container.innerHTML = indices.map((origIdx, pos) => {
    const opt = q.opts[origIdx];
    return `
      <button class="opt-btn" id="opt-${pos}" onclick="selectAnswer(${pos})" data-pos="${pos}">
        <span class="opt-letter">${LETTERS[pos]}</span>
        <span class="opt-emoji">${opt.e}</span>
        <span>${opt.t}</span>
      </button>
    `;
  }).join('');

  // ── Feedback reset ──
  const fb = document.getElementById('feedback-strip');
  fb.className = 'feedback-strip';
  fb.style.display = 'none';
  fb.innerHTML = '';

  const nextBtn = document.getElementById('btn-next');
  nextBtn.className = 'btn-next';
  nextBtn.textContent = '';

  // ── Timer ──
  state.timeForQ = getTimerForQ(q);
  state.timerLeft = state.timeForQ;
  updateTimerDisplay();
  startTimer(q);

  // ── Card animation ──
  const card = document.getElementById('q-card');
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = 'cardIn 0.35s cubic-bezier(.4,0,.2,1) both';
}

// ── Timer ──────────────────────────────────────────────────────────
function startTimer(q) {
  document.getElementById('timer-wrap').style.display =
    (state.mode === 'survival') ? 'none' : 'flex';

  if (state.mode === 'survival') return;

  state.timerInterval = setInterval(() => {
    state.timerLeft--;
    updateTimerDisplay();
    if (state.timerLeft <= 0) {
      clearInterval(state.timerInterval);
      timeUp(q);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const pct = (state.timerLeft / state.timeForQ) * 100;
  const fill = document.getElementById('timer-fill');
  const num = document.getElementById('timer-num');
  fill.style.width = pct + '%';

  if (pct > 50) {
    fill.className = 'timer-bar-fill';
    num.className = 'timer-num';
  } else if (pct > 25) {
    fill.className = 'timer-bar-fill warn';
    num.className = 'timer-num warn';
  } else {
    fill.className = 'timer-bar-fill urgent';
    num.className = 'timer-num urgent';
  }

  num.textContent = state.timerLeft;
}

function timeUp(q) {
  if (state.answered) return;
  state.answered = true;

  // Reveal correct
  document.querySelectorAll('.opt-btn').forEach((btn, pos) => {
    btn.disabled = true;
    if (pos === state.correctOptPos) btn.classList.add('correct');
  });

  // Streak breaks
  state.streak = 0;
  if (state.mode === 'survival') {
    state.lives--;
    renderLives();
  }

  showFeedback(false, q);
  state.total++;
  state.catScores[q.cat][1]++;

  scheduleNext(q);
}

// ── Answer selection ────────────────────────────────────────────────
function selectAnswer(pos) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timerInterval);

  const q = state.queue[state.idx];
  const isCorrect = pos === state.correctOptPos;
  const timeBonus = state.timerLeft > state.timeForQ * 0.5;

  // Reveal all options
  document.querySelectorAll('.opt-btn').forEach((btn, p) => {
    btn.disabled = true;
    if (p === state.correctOptPos) btn.classList.add('correct');
    if (p === pos && !isCorrect) btn.classList.add('wrong');
  });

  state.total++;
  state.catScores[q.cat][1]++;

  if (isCorrect) {
    state.correct++;
    state.catScores[q.cat][0]++;
    state.streak++;
    if (state.streak > state.bestStreak) state.bestStreak = state.streak;

    // Calculate points
    let base = getBasePoints(q);
    let mult = state.streak >= 5 ? 2 : state.streak >= 3 ? 1.5 : 1;
    let bonus = timeBonus ? Math.round(base * 0.5) : 0;
    if (state.mode === 'survival') mult *= 1.5;
    let earned = Math.round(base * mult) + bonus;

    state.score += earned;
    state.xpGained += Math.round(earned / 50);

    document.getElementById('stat-score').textContent = state.score;
    document.getElementById('stat-streak').textContent = state.streak;

    // Show points pop
    showPointsPop(earned, bonus > 0, mult > 1);

    // Streak banner
    if (state.streak === 3 || state.streak === 5 || state.streak % 5 === 0) {
      showStreakBanner(state.streak);
    }
  } else {
    state.streak = 0;
    document.getElementById('stat-streak').textContent = '0';
    document.getElementById('streak-stat').classList.remove('multiplier-active');

    if (state.mode === 'survival') {
      state.lives--;
      renderLives();
    }
  }

  showFeedback(isCorrect, q);
  scheduleNext(q);
}

function showFeedback(isCorrect, q) {
  const fb = document.getElementById('feedback-strip');
  fb.className = `feedback-strip show ${isCorrect ? 'correct-fb' : 'wrong-fb'}`;
  fb.style.display = 'block';
  fb.innerHTML = `
    <div class="fb-head ${isCorrect ? 'ok' : 'bad'}">
      ${isCorrect ? '✅ Correct!' : '❌ Not quite'}
    </div>
    <div class="fb-body">${q.exp}</div>
    <div class="fb-ref">📖 ${q.ref}</div>
  `;

  // Show next button
  const nextBtn = document.getElementById('btn-next');
  const isLast = !isNextAvailable();
  nextBtn.textContent = isLast ? 'See Results →' : 'Next Question →';
  nextBtn.className = 'btn-next show';
}

function isNextAvailable() {
  if (state.mode === 'survival') {
    return state.lives > 0;
  }
  return state.idx < state.queue.length - 1;
}

function scheduleNext(q) {
  // No auto-advance — user clicks Next button
}

function renderLives() {
  const el = document.getElementById('lives-display');
  if (!el) return;
  el.innerHTML = Array.from({ length: 3 }, (_, i) =>
    `<span class="life ${i < (3 - state.lives) ? 'lost' : ''}">❤️</span>`
  ).join('');
}

function showPointsPop(pts, hasBonus, hasMulti) {
  const popup = document.createElement('div');
  popup.className = 'pts-pop';
  let text = `+${pts}`;
  if (hasMulti) text += ' 🔥';
  if (hasBonus) text += ' ⚡';
  popup.textContent = text;

  // Random horizontal offset within card
  const card = document.getElementById('q-card');
  const rect = card.getBoundingClientRect();
  popup.style.left = (rect.left + rect.width * 0.3 + Math.random() * rect.width * 0.4) + 'px';
  popup.style.top = (rect.top + 60) + 'px';

  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 1200);
}

function showStreakBanner(streak) {
  const existing = document.querySelector('.streak-banner');
  if (existing) existing.remove();

  const banner = document.createElement('div');
  banner.className = 'streak-banner';
  banner.textContent = streak >= 5 ? `🔥 ${streak} Streak! ×2 points!` : `⚡ ${streak} Streak! ×1.5!`;
  document.body.appendChild(banner);
  setTimeout(() => banner.remove(), 2500);
}

// ═══════════════════════════════════════
//  NEXT QUESTION
// ═══════════════════════════════════════
function nextQuestion() {
  // Check survival end
  if (state.mode === 'survival' && state.lives <= 0) {
    showResults();
    return;
  }

  state.idx++;

  // Check end of queue
  if (state.mode !== 'survival' && state.idx >= state.queue.length) {
    showResults();
    return;
  }

  // Survival: extend queue if running low
  if (state.mode === 'survival' && state.idx >= state.queue.length - 2) {
    const more = shuffle(QUESTION_BANK)
      .filter(q => !state.queue.slice(Math.max(0, state.idx - 10)).some(sq => sq.id === q.id))
      .slice(0, 10);
    state.queue.push(...more);
  }

  loadQuestion();
}

// ═══════════════════════════════════════
//  RESULTS
// ═══════════════════════════════════════
function showResults() {
  clearInterval(state.timerInterval);
  saveXP(state.xpGained);

  const pct = state.total > 0 ? Math.round((state.correct / state.total) * 100) : 0;

  // Determine grade
  let emoji, title, sub;
  if (pct >= 90)     { emoji = '🏆'; title = 'Outstanding!';     sub = 'You think like a Chief Dietitian.'; }
  else if (pct >= 75){ emoji = '🎓'; title = 'Well Done!';        sub = 'Strong clinical reasoning — keep going!'; }
  else if (pct >= 55){ emoji = '📚'; title = 'Good Progress';     sub = 'Review the explanations and retake.'; }
  else               { emoji = '🌱'; title = 'Keep Studying!';    sub = 'Every great dietitian started here.'; }

  document.getElementById('end-emoji').textContent = emoji;
  document.getElementById('end-title').textContent = title;
  document.getElementById('end-sub').textContent = sub;
  document.getElementById('end-score').textContent = state.correct;
  document.getElementById('end-denom').textContent = `out of ${state.total} correct`;
  document.getElementById('stat-pts').textContent = state.score;
  document.getElementById('stat-best-streak').textContent = state.bestStreak;
  document.getElementById('stat-pct').textContent = pct + '%';

  // XP gained
  document.getElementById('xp-gained-val').textContent = `+${state.xpGained} XP gained`;
  const newLv = getLevel(totalXP);
  document.getElementById('xp-gained-level').textContent =
    `Now: ${LEVELS[newLv].emoji} ${LEVELS[newLv].name}`;

  // Category breakdown
  const breakdown = document.getElementById('cat-breakdown-rows');
  breakdown.innerHTML = Object.entries(state.catScores)
    .filter(([, v]) => v[1] > 0)
    .map(([cat, [right, asked]]) => {
      const catInfo = CAT_META[cat];
      const catPct = Math.round((right / asked) * 100);
      const colors = { food: '#FF6B35', clinical: '#2ECC71', nutrient: '#45AAF2', safety: '#F5A623' };
      return `
        <div class="breakdown-row">
          <div class="breakdown-cat-name">${catInfo.emoji} ${catInfo.name}</div>
          <div class="breakdown-bar">
            <div class="breakdown-bar-fill" style="width:${catPct}%; background:${colors[cat]};"></div>
          </div>
          <div class="breakdown-score">${right}/${asked}</div>
        </div>
      `;
    }).join('');

  showScreen('screen-end');
}

// ═══════════════════════════════════════
//  RESTART
// ═══════════════════════════════════════
function restartSame() {
  startGame(); // re-builds queue with same settings
}

function goHome() {
  clearInterval(state.timerInterval);
  initHome();
}

// ═══════════════════════════════════════
//  FLOATING PARTICLES
// ═══════════════════════════════════════
function spawnParticles() {
  const foods = ['🥕','🥦','🍳','🥛','🐟','🥩','🫘','🌾','🍊','🥑','🥚','🧀','🫐','🥜','🌽','🍎','🥗','🫚','🧄','🍋'];
  const container = document.createElement('div');
  container.className = 'food-particles';
  document.body.appendChild(container);

  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = foods[Math.floor(Math.random() * foods.length)];
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = (15 + Math.random() * 20) + 's';
    p.style.animationDelay = (Math.random() * 20) + 's';
    p.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
    container.appendChild(p);
  }
}

// ═══════════════════════════════════════
//  INIT
// ═══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  spawnParticles();
  initHome();
});
