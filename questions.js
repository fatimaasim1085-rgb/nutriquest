// NutriQuest Question Bank
// Based on: Fundamentals of Foods, Nutrition and Diet Therapy — Mudambi & Rajagopal (5th Ed.)
// All options are similar length; no option is obviously longer than others.

const QUESTION_BANK = [

  // ─── FOOD DETECTIVE ──────────────────────────────────────────────
  {
    id: 1, cat: "food", diff: "easy", emoji: "👁️",
    q: "A child in rural Punjab can't see at dusk and keeps bumping into things after sunset. Which foods should the dietitian prescribe?",
    opts: [
      { e: "🥕", t: "Carrots, sweet potato, liver" },
      { e: "🌾", t: "Rice, roti, plain daal" },
      { e: "🧂", t: "Iodised salt and water" },
      { e: "🍊", t: "Oranges and lemon juice" }
    ],
    ans: 0,
    exp: "Night blindness is the first sign of Vitamin A deficiency. Orange/yellow vegetables, dark leafy greens, and liver are the best dietary sources.",
    ref: "Ch. 8 — Fat-Soluble Vitamins"
  },
  {
    id: 2, cat: "food", diff: "easy", emoji: "🦴",
    q: "A 5-year-old has soft, bowed legs and craniotabes (soft skull). The mother rarely goes outdoors. Which foods are most critical to add?",
    opts: [
      { e: "🥛", t: "Fortified milk and egg yolk" },
      { e: "🥩", t: "Red meat and lentils" },
      { e: "🌾", t: "Wheat bread and rice" },
      { e: "🥜", t: "Peanuts and sesame seeds" }
    ],
    ans: 0,
    exp: "Rickets is Vitamin D deficiency. Egg yolk and fortified milk provide Vitamin D; safe sun exposure and calcium from milk support bone mineralisation.",
    ref: "Ch. 8 — Fat-Soluble Vitamins"
  },
  {
    id: 3, cat: "food", diff: "easy", emoji: "🩸",
    q: "A teenage girl is constantly tired, pale, and breathless going upstairs. Her diet lacks meat. Which foods should she eat more of?",
    opts: [
      { e: "🥛", t: "Milk and plain cream" },
      { e: "🫘", t: "Spinach, daal, dried apricots" },
      { e: "🍊", t: "Oranges and citrus only" },
      { e: "🌾", t: "Plain white rice only" }
    ],
    ans: 1,
    exp: "Iron deficiency anaemia is treated with non-haem iron foods: spinach (palak), lentils (daal), and dried apricots (khubani) are affordable and iron-rich.",
    ref: "Ch. 10 — Minerals; Ch. 13 — Nutrition Disorders"
  },
  {
    id: 4, cat: "food", diff: "easy", emoji: "🦷",
    q: "A 3-year-old has decaying teeth and the paediatrician says her bones are weaker than normal. Best daily food to add?",
    opts: [
      { e: "🍊", t: "Citrus juice every morning" },
      { e: "🌾", t: "More roti and white rice" },
      { e: "🥛", t: "Dahi, milk, and paneer" },
      { e: "🥩", t: "Chicken or mutton curry" }
    ],
    ans: 2,
    exp: "Calcium is the primary mineral for bones and teeth. Dairy foods — dahi, milk, paneer — are the most bioavailable calcium sources in a South Asian diet.",
    ref: "Ch. 10 — Major and Trace Minerals"
  },
  {
    id: 5, cat: "food", diff: "medium", emoji: "⬆️",
    q: "A vegetarian woman takes iron tablets but absorption is still poor. Which food pairing best ENHANCES iron absorption?",
    opts: [
      { e: "🍵", t: "Green tea poured on daal" },
      { e: "🧈", t: "Ghee and butter added" },
      { e: "🍋", t: "Lemon juice squeezed on food" },
      { e: "🥛", t: "Milk alongside iron foods" }
    ],
    ans: 2,
    exp: "Vitamin C in lemon juice converts non-haem iron from ferric to ferrous form, dramatically improving absorption. Tea, coffee, and milk INHIBIT iron absorption.",
    ref: "Ch. 10 — Minerals"
  },
  {
    id: 6, cat: "food", diff: "medium", emoji: "❤️",
    q: "A cardiac patient needs omega-3 fatty acids to reduce triglycerides. Which is the best food source?",
    opts: [
      { e: "🥩", t: "Beef, lamb, and mutton" },
      { e: "🐟", t: "Mackerel, sardines, flaxseed" },
      { e: "🌾", t: "White bread and pasta" },
      { e: "🧈", t: "Butter and dairy fat" }
    ],
    ans: 1,
    exp: "Omega-3 fatty acids (EPA, DHA) from fatty fish reduce triglycerides and inflammation. Flaxseed (alsi) provides plant-based ALA omega-3. These protect cardiovascular health.",
    ref: "Ch. 5 — Fats; Ch. 29 — Cardiovascular Diseases"
  },
  {
    id: 7, cat: "food", diff: "medium", emoji: "🤰",
    q: "A first-trimester woman needs folate urgently to prevent neural tube defects. Which food group has the most?",
    opts: [
      { e: "🥩", t: "Fried chicken and red meat" },
      { e: "🧀", t: "Cheese and cream cheese" },
      { e: "🥦", t: "Dark greens, daal, fortified flour" },
      { e: "🥛", t: "Milk and plain yoghurt" }
    ],
    ans: 2,
    exp: "Folate is highest in dark leafy vegetables, lentils, chickpeas, and fortified flour. It is critical in the first 28 days for neural tube closure.",
    ref: "Ch. 9 — Water-Soluble Vitamins"
  },
  {
    id: 8, cat: "food", diff: "medium", emoji: "💪",
    q: "An athlete needs rapid post-exercise muscle recovery. Which food provides the most complete protein?",
    opts: [
      { e: "🌾", t: "Plain wheat bread only" },
      { e: "🥚", t: "Eggs or grilled chicken" },
      { e: "🥦", t: "Raw salad and greens" },
      { e: "🍊", t: "Fruit juice and sugar" }
    ],
    ans: 1,
    exp: "Eggs and chicken provide complete proteins with all 9 essential amino acids — critical for muscle protein synthesis post-exercise. They have a high biological value.",
    ref: "Ch. 6 — Proteins; Ch. 12 — Sports Nutrition"
  },
  {
    id: 9, cat: "food", diff: "hard", emoji: "🫘",
    q: "A CKD patient has serum potassium of 5.8 mEq/L. Which snack is SAFEST for them?",
    opts: [
      { e: "🍌", t: "Banana or orange juice" },
      { e: "🥔", t: "Baked or boiled potato" },
      { e: "🍎", t: "Apple slices or grapes" },
      { e: "🥬", t: "Spinach and tomato salad" }
    ],
    ans: 2,
    exp: "Apples and grapes are low-potassium fruits (safe for CKD). Bananas, oranges, potatoes, tomatoes, and spinach are HIGH in potassium — dangerous with hyperkalaemia.",
    ref: "Ch. 30 — Kidney Diseases"
  },
  {
    id: 10, cat: "food", diff: "hard", emoji: "🚫",
    q: "Which food or drink MOST severely blocks non-haem iron absorption when consumed together?",
    opts: [
      { e: "🍋", t: "Lemon juice with spinach" },
      { e: "🍵", t: "Tea or coffee with daal" },
      { e: "🥕", t: "Carrot with iron-rich food" },
      { e: "🫘", t: "Rice combined with lentils" }
    ],
    ans: 1,
    exp: "Tannins in tea and coffee form insoluble iron complexes, reducing iron absorption by up to 60%. Avoid tea or coffee within 1 hour of iron-rich meals.",
    ref: "Ch. 10 — Minerals"
  },
  {
    id: 11, cat: "food", diff: "hard", emoji: "🦋",
    q: "A patient has hypothyroidism. Which foods should be REDUCED if eaten raw and in large amounts?",
    opts: [
      { e: "🥕", t: "Carrots and sweet potato" },
      { e: "🥦", t: "Cabbage, broccoli, cauliflower" },
      { e: "🥩", t: "Red meat and boiled eggs" },
      { e: "🌾", t: "Whole grains and oats" }
    ],
    ans: 1,
    exp: "Raw cruciferous vegetables contain goitrogens that interfere with thyroid iodine uptake. Cooking destroys most goitrogens, making cooked cruciferous vegetables safe.",
    ref: "Ch. 10 — Minerals; Ch. 13 — Disorders"
  },
  {
    id: 12, cat: "food", diff: "hard", emoji: "⚠️",
    q: "A patient with phenylketonuria (PKU) must strictly avoid which food category?",
    opts: [
      { e: "🥕", t: "All vegetables and fruits" },
      { e: "🌾", t: "All complex carbohydrates" },
      { e: "🥩", t: "High-protein: meat, dairy, eggs" },
      { e: "🫚", t: "All dietary fats and oils" }
    ],
    ans: 2,
    exp: "PKU patients lack the enzyme to metabolise phenylalanine, found in ALL high-protein foods. A special low-phenylalanine medical formula substitutes regular protein intake.",
    ref: "Ch. 33 — Metabolic Disorders"
  },

  // ─── CLINICAL ROUNDS ─────────────────────────────────────────────
  {
    id: 13, cat: "clinical", diff: "easy", emoji: "🩺",
    q: "A Type 2 diabetic patient asks: 'What is the best breakfast for my blood sugar?' Which do you recommend?",
    opts: [
      { e: "🍞", t: "White toast with jam" },
      { e: "🥣", t: "Oat porridge with nuts" },
      { e: "🧁", t: "Paratha with ghee" },
      { e: "🥤", t: "Sweet fresh fruit juice" }
    ],
    ans: 1,
    exp: "Oats have a low glycaemic index and high soluble fibre (beta-glucan) that slows glucose release — ideal for glycaemic control in Type 2 DM.",
    ref: "Ch. 28 — Diabetes Mellitus"
  },
  {
    id: 14, cat: "clinical", diff: "easy", emoji: "❤️",
    q: "A hypertensive patient with high LDL asks which cooking fat is best. Your recommendation?",
    opts: [
      { e: "🫚", t: "Desi ghee or lard" },
      { e: "🧈", t: "Hydrogenated vanaspati" },
      { e: "🫒", t: "Olive or canola oil" },
      { e: "🥥", t: "Pure coconut oil" }
    ],
    ans: 2,
    exp: "Olive and canola oils are rich in monounsaturated fats which lower LDL cholesterol. Ghee, vanaspati, and coconut oil are high in saturated/trans fats.",
    ref: "Ch. 29 — Cardiovascular Diseases"
  },
  {
    id: 15, cat: "clinical", diff: "easy", emoji: "🌱",
    q: "An elderly patient has severe constipation and haemorrhoids. Which dietary changes help most?",
    opts: [
      { e: "🥩", t: "More red meat daily" },
      { e: "🥛", t: "Extra milk and cheese" },
      { e: "🌾", t: "Whole grains, fruits, water" },
      { e: "🧂", t: "More salt in cooking" }
    ],
    ans: 2,
    exp: "Insoluble fibre from whole grains, fruits, and vegetables bulks and softens stool. Adequate fluid intake (8+ glasses) is equally critical for bowel regularity.",
    ref: "Ch. 26 — GI Diseases"
  },
  {
    id: 16, cat: "clinical", diff: "easy", emoji: "🤧",
    q: "A patient has fever and a severe infection. Which nutrients are MOST urgently increased?",
    opts: [
      { e: "🥛", t: "Extra dairy and calcium" },
      { e: "🌾", t: "Additional starch and grains" },
      { e: "💪", t: "Protein, fluids, and energy" },
      { e: "🫚", t: "High-fat meals daily" }
    ],
    ans: 2,
    exp: "Infection raises metabolic rate (fever), increases protein breakdown, and causes fluid loss through sweat. Adequate protein, energy, and fluids support immune response and tissue repair.",
    ref: "Ch. 25 — Nutrition in Infections and Fever"
  },
  {
    id: 17, cat: "clinical", diff: "medium", emoji: "🧪",
    q: "A liver cirrhosis patient is confused with hand tremors (hepatic encephalopathy). Safest protein source?",
    opts: [
      { e: "🥩", t: "Large red meat portions" },
      { e: "🐟", t: "High-protein fish daily" },
      { e: "🥦", t: "Vegetable and dairy proteins" },
      { e: "🍳", t: "Eight to ten eggs daily" }
    ],
    ans: 2,
    exp: "The failing liver cannot detoxify ammonia from protein catabolism. Vegetable and dairy proteins generate less ammonia than meat proteins during digestion.",
    ref: "Ch. 27 — Liver Diseases"
  },
  {
    id: 18, cat: "clinical", diff: "medium", emoji: "🦴",
    q: "A CKD patient has serum phosphorus of 5.5 mg/dL. Which foods to RESTRICT most urgently?",
    opts: [
      { e: "🍎", t: "Apples and fresh pears" },
      { e: "🥦", t: "Plain boiled vegetables" },
      { e: "🧀", t: "Dairy, nuts, and cola drinks" },
      { e: "🌾", t: "Plain white rice" }
    ],
    ans: 2,
    exp: "Dairy products, nuts, seeds, whole grains, and cola drinks are high in phosphorus. In CKD, phosphorus excess causes renal osteodystrophy and vascular calcification.",
    ref: "Ch. 30 — Kidney Diseases"
  },
  {
    id: 19, cat: "clinical", diff: "medium", emoji: "🍽️",
    q: "An anaemic, vegetarian pregnant woman needs iron AND calcium. Which meal combination is most complete?",
    opts: [
      { e: "🥛", t: "Milk tea with plain biscuits" },
      { e: "🌾", t: "Plain rice and plain dahi" },
      { e: "🫘", t: "Spinach daal with lemon and dahi" },
      { e: "🥩", t: "Meat curry only" }
    ],
    ans: 2,
    exp: "Spinach + daal = non-haem iron; lemon juice (Vitamin C) enhances iron absorption; dahi = calcium. This addresses all three: iron, calcium, and protein for pregnancy.",
    ref: "Ch. 10 — Minerals; Ch. 17 — Pregnancy"
  },
  {
    id: 20, cat: "clinical", diff: "medium", emoji: "🏥",
    q: "A cancer patient on chemotherapy has severe mouth sores (mucositis). Which meal is best tolerated?",
    opts: [
      { e: "🌶️", t: "Hot spicy chicken karahi" },
      { e: "🍛", t: "Steaming hot biryani" },
      { e: "🥣", t: "Cold, smooth yoghurt lassi" },
      { e: "🥜", t: "Dry crunchy roasted nuts" }
    ],
    ans: 2,
    exp: "Cold or room-temperature smooth foods reduce irritation on mucositis ulcers. Hot, spicy, acidic, and crunchy foods significantly worsen mouth sore pain.",
    ref: "Ch. 31 — Nutrition in Cancer"
  },
  {
    id: 21, cat: "clinical", diff: "hard", emoji: "💔",
    q: "A post-heart attack patient is home. Which food is MOST harmful to reintroduce?",
    opts: [
      { e: "🐟", t: "Baked fish with herbs" },
      { e: "🫘", t: "Lentil soup and salad" },
      { e: "🧈", t: "Ghee, vanaspati, fried snacks" },
      { e: "🥦", t: "Steamed vegetables" }
    ],
    ans: 2,
    exp: "Trans fats and saturated fats (ghee, vanaspati, deep-fried foods) directly raise LDL and promote arterial plaque — the core driver of recurrent heart attack.",
    ref: "Ch. 29 — Cardiovascular Diseases"
  },
  {
    id: 22, cat: "clinical", diff: "hard", emoji: "👶",
    q: "A severely malnourished child starts treatment. Which nutritional approach is SAFEST to begin with?",
    opts: [
      { e: "🥩", t: "High-protein meat diet" },
      { e: "🧃", t: "Concentrated sugary drinks" },
      { e: "🍼", t: "Gradual therapeutic formula F-75" },
      { e: "🌾", t: "Large cereal-based meals" }
    ],
    ans: 2,
    exp: "Refeeding syndrome (fatal electrolyte shifts) can kill a severely malnourished patient given too much nutrition too fast. WHO F-75 formula starts slowly and safely.",
    ref: "Ch. 13 — Disorders of Nutrition"
  },
  {
    id: 23, cat: "clinical", diff: "hard", emoji: "🦠",
    q: "An HIV patient has CD4 count of 80 (severely immunosuppressed). Which food must be STRICTLY avoided?",
    opts: [
      { e: "🥣", t: "Cooked oatmeal and banana" },
      { e: "🥛", t: "Pasteurised milk and dahi" },
      { e: "🥗", t: "Raw sprouts and unpasteurised juice" },
      { e: "🍲", t: "Well-cooked daal and rice" }
    ],
    ans: 2,
    exp: "Raw sprouts carry Listeria and E.coli. Unpasteurised juice risks Cryptosporidium. Immunosuppressed patients cannot fight these opportunistic foodborne pathogens.",
    ref: "Ch. 32 — Nutrition in Immune Dysfunction and AIDS"
  },
  {
    id: 24, cat: "clinical", diff: "hard", emoji: "🏥",
    q: "A severely starved patient restarts nutrition. The most dangerous immediate complication to monitor is:",
    opts: [
      { e: "🥤", t: "Excess Vitamin C intake" },
      { e: "⚡", t: "Refeeding syndrome electrolytes" },
      { e: "☀️", t: "Excess Vitamin D from food" },
      { e: "🫚", t: "Too much omega-3 fat" }
    ],
    ans: 1,
    exp: "Refeeding syndrome causes life-threatening drops in phosphate, potassium, and magnesium as cells start taking up nutrients again. Electrolytes must be monitored and corrected.",
    ref: "Ch. 23 — Adaptation of Normal Diet"
  },

  // ─── NUTRIENT MATCH ───────────────────────────────────────────────
  {
    id: 25, cat: "nutrient", diff: "easy", emoji: "☀️",
    q: "The 'sunshine vitamin' that prevents rickets is mainly obtained from:",
    opts: [
      { e: "🍊", t: "Citrus fruits daily" },
      { e: "🌾", t: "Whole grain cereals" },
      { e: "☀️", t: "Sunlight and fatty fish" },
      { e: "🥛", t: "Plain milk only" }
    ],
    ans: 2,
    exp: "Vitamin D is synthesised in skin from UVB sunlight. Fatty fish (mackerel, sardines) and egg yolk are the main dietary sources — important when sun exposure is limited.",
    ref: "Ch. 8 — Fat-Soluble Vitamins"
  },
  {
    id: 26, cat: "nutrient", diff: "easy", emoji: "🦷",
    q: "Which mineral is MOST important for building and maintaining strong bones and teeth?",
    opts: [
      { e: "⚙️", t: "Sodium (Na)" },
      { e: "⚙️", t: "Iron (Fe)" },
      { e: "⚙️", t: "Calcium (Ca)" },
      { e: "⚙️", t: "Potassium (K)" }
    ],
    ans: 2,
    exp: "Calcium makes up about 99% of the mineral content of bones and teeth. Adequate calcium throughout life prevents osteoporosis and rickets.",
    ref: "Ch. 10 — Major Minerals"
  },
  {
    id: 27, cat: "nutrient", diff: "easy", emoji: "🩹",
    q: "Scurvy (bleeding gums, joint pain, bruising) is caused by deficiency of which vitamin?",
    opts: [
      { e: "💊", t: "Vitamin A" },
      { e: "💊", t: "Vitamin B12" },
      { e: "💊", t: "Vitamin C" },
      { e: "💊", t: "Vitamin D" }
    ],
    ans: 2,
    exp: "Vitamin C deficiency causes scurvy by impairing collagen synthesis — the structural protein that holds connective tissue, blood vessels, and skin together.",
    ref: "Ch. 9 — Water-Soluble Vitamins"
  },
  {
    id: 28, cat: "nutrient", diff: "easy", emoji: "💊",
    q: "Which vitamin is fat-soluble, stored in the liver, and toxic if consumed in excess?",
    opts: [
      { e: "💊", t: "Vitamin B12" },
      { e: "💊", t: "Vitamin C" },
      { e: "💊", t: "Vitamin A" },
      { e: "💊", t: "Thiamine (B1)" }
    ],
    ans: 2,
    exp: "Vitamin A is fat-soluble and accumulates in the liver. Unlike water-soluble vitamins that are excreted, excess Vitamin A causes toxicity (headache, liver damage, teratogenicity).",
    ref: "Ch. 8 — Fat-Soluble Vitamins"
  },
  {
    id: 29, cat: "nutrient", diff: "medium", emoji: "🍚",
    q: "Polished white rice (rice with bran removed) causes deficiency of which vitamin, leading to beriberi?",
    opts: [
      { e: "💊", t: "Vitamin A" },
      { e: "💊", t: "Thiamine (B1)" },
      { e: "💊", t: "Vitamin D" },
      { e: "💊", t: "Vitamin K" }
    ],
    ans: 1,
    exp: "Thiamine (B1) is concentrated in the rice bran layer removed by milling. Beriberi causes peripheral neuropathy (dry) or heart failure (wet) from thiamine deficiency.",
    ref: "Ch. 9 — Water-Soluble Vitamins"
  },
  {
    id: 30, cat: "nutrient", diff: "medium", emoji: "🌽",
    q: "Pellagra causes the '3 Ds': Dermatitis, Diarrhoea, and Dementia. It is caused by lack of:",
    opts: [
      { e: "💊", t: "Thiamine (B1)" },
      { e: "💊", t: "Riboflavin (B2)" },
      { e: "💊", t: "Niacin (B3)" },
      { e: "💊", t: "Pyridoxine (B6)" }
    ],
    ans: 2,
    exp: "Niacin (B3) deficiency causes pellagra, classically linked to maize-dependent diets where niacin is bound as unavailable niacytin. Niacin can also be synthesised from tryptophan.",
    ref: "Ch. 9 — Water-Soluble Vitamins; Ch. 13 — Disorders"
  },
  {
    id: 31, cat: "nutrient", diff: "medium", emoji: "🦴",
    q: "A patient can't absorb calcium despite adequate dairy intake. Which vitamin is likely deficient?",
    opts: [
      { e: "💊", t: "Vitamin A" },
      { e: "💊", t: "Vitamin B12" },
      { e: "💊", t: "Vitamin C" },
      { e: "💊", t: "Vitamin D" }
    ],
    ans: 3,
    exp: "Vitamin D is converted to calcitriol, which activates intestinal calcium transporter proteins. Without Vitamin D, the gut absorbs almost no calcium regardless of dietary intake.",
    ref: "Ch. 8 — Fat-Soluble Vitamins"
  },
  {
    id: 32, cat: "nutrient", diff: "medium", emoji: "🧬",
    q: "Which water-soluble vitamin is found ONLY in animal foods, making vegans at high risk of deficiency?",
    opts: [
      { e: "💊", t: "Vitamin C" },
      { e: "💊", t: "Folate (B9)" },
      { e: "💊", t: "Thiamine (B1)" },
      { e: "💊", t: "Vitamin B12" }
    ],
    ans: 3,
    exp: "Vitamin B12 exists almost exclusively in animal products. Strict vegans must supplement it. Deficiency causes megaloblastic anaemia AND irreversible neurological damage.",
    ref: "Ch. 9 — Water-Soluble Vitamins"
  },
  {
    id: 33, cat: "nutrient", diff: "hard", emoji: "🌾",
    q: "The 'limiting amino acid' in wheat and rice (making them incomplete proteins) is:",
    opts: [
      { e: "🔬", t: "Methionine" },
      { e: "🔬", t: "Tryptophan" },
      { e: "🔬", t: "Lysine" },
      { e: "🔬", t: "Leucine" }
    ],
    ans: 2,
    exp: "Lysine is deficient in cereal grains (wheat, rice, corn). Legumes (daal, beans) are rich in lysine but low in methionine — combining cereals + legumes creates a complete protein.",
    ref: "Ch. 6 — Proteins and Amino Acids"
  },
  {
    id: 34, cat: "nutrient", diff: "hard", emoji: "🐟",
    q: "Which class of fatty acids reduces triglycerides and has proven anti-inflammatory effects?",
    opts: [
      { e: "🔬", t: "Omega-6 fatty acids" },
      { e: "🔬", t: "Trans fatty acids" },
      { e: "🔬", t: "Omega-3 fatty acids" },
      { e: "🔬", t: "Saturated fatty acids" }
    ],
    ans: 2,
    exp: "Omega-3 fatty acids (EPA and DHA from fish; ALA from flaxseed) reduce pro-inflammatory eicosanoids, lower triglycerides, and are protective against cardiovascular disease.",
    ref: "Ch. 5 — Fats; Ch. 12 — Sports Nutrition"
  },
  {
    id: 35, cat: "nutrient", diff: "hard", emoji: "🔬",
    q: "Intrinsic factor — needed for Vitamin B12 absorption — is produced by which cells?",
    opts: [
      { e: "🔬", t: "Small intestinal lining" },
      { e: "🔬", t: "Pancreatic beta cells" },
      { e: "🔬", t: "Stomach parietal cells" },
      { e: "🔬", t: "Liver hepatocytes" }
    ],
    ans: 2,
    exp: "Intrinsic factor is a glycoprotein from gastric parietal cells. It binds B12 for absorption in the terminal ileum. Autoimmune parietal cell destruction causes pernicious anaemia.",
    ref: "Ch. 2 — Digestion and Absorption"
  },
  {
    id: 36, cat: "nutrient", diff: "hard", emoji: "⚡",
    q: "Glycogen — the body's stored carbohydrate fuel — is kept in which organs?",
    opts: [
      { e: "🔬", t: "Brain and nerve cells" },
      { e: "🔬", t: "Adipose and fat tissue" },
      { e: "🔬", t: "Liver and muscle cells" },
      { e: "🔬", t: "Kidneys and lungs" }
    ],
    ans: 2,
    exp: "Liver glycogen regulates blood glucose between meals. Muscle glycogen fuels local exercise. Both stores deplete within 12–18 hours of fasting or during intense training.",
    ref: "Ch. 4 — Carbohydrates; Ch. 7 — Energy Metabolism"
  },

  // ─── FOOD SAFETY ─────────────────────────────────────────────────
  {
    id: 37, cat: "safety", diff: "easy", emoji: "❄️",
    q: "Which is the SAFEST method to defrost frozen chicken before cooking?",
    opts: [
      { e: "🌡️", t: "On the kitchen counter" },
      { e: "🪣", t: "In a bucket of hot water" },
      { e: "❄️", t: "In the refrigerator overnight" },
      { e: "☀️", t: "In direct sunlight" }
    ],
    ans: 2,
    exp: "Refrigerator defrosting keeps chicken below 5°C, preventing bacterial growth. Counter, hot water, and sunlight place meat in the 'danger zone' (5–63°C) for hours.",
    ref: "Ch. 22 — Food Sanitation"
  },
  {
    id: 38, cat: "safety", diff: "easy", emoji: "🌡️",
    q: "The food temperature 'danger zone' — where bacteria multiply fastest — is between:",
    opts: [
      { e: "🌡️", t: "0°C to 5°C (freezer range)" },
      { e: "🌡️", t: "5°C to 63°C (danger zone)" },
      { e: "🌡️", t: "63°C to 100°C (cooking range)" },
      { e: "🌡️", t: "100°C to 150°C (frying range)" }
    ],
    ans: 1,
    exp: "Between 5°C and 63°C, bacteria like Salmonella can double every 20 minutes. Keep food hot (above 63°C) or cold (below 5°C) to prevent dangerous bacterial multiplication.",
    ref: "Ch. 22 — Food Sanitation"
  },
  {
    id: 39, cat: "safety", diff: "easy", emoji: "🐔",
    q: "A cook uses the same knife for raw chicken and then slices salad with it. This causes:",
    opts: [
      { e: "🔬", t: "Cross-contamination of pathogens" },
      { e: "🌡️", t: "Dangerous temperature changes" },
      { e: "💧", t: "Excess moisture transfer" },
      { e: "🧪", t: "Protein structure changes" }
    ],
    ans: 0,
    exp: "Cross-contamination transfers Salmonella or Campylobacter from raw poultry to ready-to-eat vegetables that won't be cooked again — bypassing the heat kill-step.",
    ref: "Ch. 22 — Food Sanitation"
  },
  {
    id: 40, cat: "safety", diff: "medium", emoji: "🌽",
    q: "Aflatoxin — a potent liver carcinogen from mould — is MOST likely to contaminate:",
    opts: [
      { e: "🍚", t: "Properly stored white rice" },
      { e: "🧂", t: "Table salt and dry spices" },
      { e: "🫘", t: "Damp groundnuts and maize" },
      { e: "🥛", t: "Pasteurised fresh milk" }
    ],
    ans: 2,
    exp: "Aspergillus flavus mould produces aflatoxin in groundnuts, maize, and other grains stored in warm, humid conditions. A key concern in Pakistani and South Asian storage practices.",
    ref: "Ch. 22 — Food Sanitation"
  },
  {
    id: 41, cat: "safety", diff: "medium", emoji: "🏥",
    q: "A food handler has just been diagnosed with Hepatitis A. The correct action is to:",
    opts: [
      { e: "🧤", t: "Wear double gloves only" },
      { e: "💊", t: "Take medicine and continue" },
      { e: "🚫", t: "Stop all food handling immediately" },
      { e: "🧼", t: "Wash hands every 10 minutes" }
    ],
    ans: 2,
    exp: "Hepatitis A spreads via the faecal-oral route. Infected food handlers must be excluded until confirmed non-infectious. Gloves and handwashing alone are insufficient.",
    ref: "Ch. 22 — Food Sanitation"
  },
  {
    id: 42, cat: "safety", diff: "medium", emoji: "🥫",
    q: "Clostridium botulinum produces its deadly toxin in which type of food environment?",
    opts: [
      { e: "🥗", t: "Open acidic fresh salads" },
      { e: "🥫", t: "Improperly sealed canned foods" },
      { e: "🥛", t: "Refrigerated fresh milk" },
      { e: "🍳", t: "Well-cooked scrambled eggs" }
    ],
    ans: 1,
    exp: "C. botulinum is anaerobic — it thrives in sealed, low-oxygen, low-acid environments like improperly processed home-canned foods. It produces the most potent biological toxin known.",
    ref: "Ch. 22 — Food Sanitation"
  },
  {
    id: 43, cat: "safety", diff: "hard", emoji: "⚠️",
    q: "In HACCP, what is the 'Critical Control Point' during chicken cooking?",
    opts: [
      { e: "🥬", t: "Washing the vegetables" },
      { e: "🌡️", t: "Reaching 75°C internal temperature" },
      { e: "🧂", t: "Adding seasoning and salt" },
      { e: "🥘", t: "Plating and final presentation" }
    ],
    ans: 1,
    exp: "A CCP is a step where control can eliminate a food safety hazard. Reaching a 75°C core temperature destroys Salmonella and Campylobacter in poultry — a measurable kill step.",
    ref: "Ch. 22 — Food Sanitation"
  },
  {
    id: 44, cat: "safety", diff: "hard", emoji: "🦷",
    q: "A bone fragment found in packaged mince is which type of food safety hazard?",
    opts: [
      { e: "🦠", t: "Biological hazard" },
      { e: "🧪", t: "Chemical hazard" },
      { e: "🦷", t: "Physical hazard" },
      { e: "☣️", t: "Allergenic hazard" }
    ],
    ans: 2,
    exp: "Physical hazards are foreign objects (bone, glass, metal, plastic) that can injure. Biological = pathogens; Chemical = pesticides, cleaning agents; Allergenic = peanuts, gluten.",
    ref: "Ch. 22 — Food Sanitation"
  },
  {
    id: 45, cat: "safety", diff: "hard", emoji: "🔬",
    q: "Which organism specifically causes food poisoning from reheated starchy foods like rice?",
    opts: [
      { e: "🦠", t: "Salmonella typhi" },
      { e: "🦠", t: "Bacillus cereus" },
      { e: "🦠", t: "Clostridium perfringens" },
      { e: "🦠", t: "Listeria monocytogenes" }
    ],
    ans: 1,
    exp: "Bacillus cereus spores survive cooking and germinate in cooked rice left at room temperature. The emetic toxin is heat-stable — reheating CANNOT destroy it.",
    ref: "Ch. 22 — Food Sanitation"
  }
];

// Category metadata
const CAT_META = {
  food: {
    name: "Food Detective",
    emoji: "🔍",
    color: "#FF6B35",
    desc: "Identify the right food for each condition"
  },
  clinical: {
    name: "Clinical Rounds",
    emoji: "🏥",
    color: "#20BF6B",
    desc: "Patient cases — make the dietary call"
  },
  nutrient: {
    name: "Nutrient Match",
    emoji: "💊",
    color: "#45AAF2",
    desc: "Link nutrients to functions and deficiencies"
  },
  safety: {
    name: "Food Safety",
    emoji: "🛡️",
    color: "#F7B731",
    desc: "Food hygiene, hazards, and HACCP"
  }
};

// Difficulty metadata
const DIFF_META = {
  easy:   { label: "Easy",   emoji: "🌱", color: "#20BF6B", time: 25, points: 100 },
  medium: { label: "Medium", emoji: "🌿", color: "#F7B731", time: 20, points: 200 },
  hard:   { label: "Hard",   emoji: "🔥", color: "#FC5C65", time: 15, points: 350 }
};

// Level system
const LEVELS = [
  { name: "Nutrition Student",  xp: 0,    emoji: "📚" },
  { name: "Diet Trainee",       xp: 40,   emoji: "🥗" },
  { name: "Nutrition Intern",   xp: 120,  emoji: "🩺" },
  { name: "Junior Dietitian",   xp: 280,  emoji: "🏥" },
  { name: "Clinical Dietitian", xp: 550,  emoji: "💊" },
  { name: "Senior Dietitian",   xp: 950,  emoji: "🎓" },
  { name: "Chief Dietitian",    xp: 1500, emoji: "🏆" }
];
