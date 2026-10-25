// Built-in lesson packs. Work fully offline.
// Each lesson: { id, title, body: [paragraphs], takeaway, quiz: { q, options, answer (index), why } }
// Add a topic by adding an entry here; ids must be unique and stable (progress is keyed by them).
window.PACKS = [
  {
    id: "space",
    name: "Space",
    emoji: "🪐",
    lessons: [
      {
        id: "space-1",
        title: "Why the sky is dark at night",
        body: [
          "If the universe were infinite, unchanging and full of stars, every line of sight would end on a star and the night sky would blaze. This puzzle is called Olbers' paradox.",
          "The fix: the universe has a finite age (about 13.8 billion years), so light from very distant stars hasn't reached us yet. Expansion also stretches far-off light into wavelengths our eyes can't see.",
        ],
        takeaway: "A dark night sky is evidence that the universe had a beginning.",
        quiz: {
          q: "What mainly explains why the night sky isn't bright everywhere?",
          options: ["Dust blocks most starlight", "The universe has a finite age", "Stars are too far apart"],
          answer: 1,
          why: "Dust would heat up and glow. A finite age limits how much starlight has had time to arrive.",
        },
      },
      {
        id: "space-2",
        title: "A day on Venus is longer than its year",
        body: [
          "Venus takes about 225 Earth days to orbit the Sun, but about 243 Earth days to spin once on its axis.",
          "It also spins backwards compared to most planets, so on Venus the Sun rises in the west.",
        ],
        takeaway: "Venus: one rotation (243 days) takes longer than one orbit (225 days).",
        quiz: {
          q: "On Venus, where does the Sun rise?",
          options: ["In the east", "In the west", "It never rises"],
          answer: 1,
          why: "Venus rotates retrograde (backwards), so the Sun appears to rise in the west.",
        },
      },
      {
        id: "space-3",
        title: "Sunlight is about 8 minutes old",
        body: [
          "Light travels about 300,000 km per second. The Sun is about 150 million km away, so its light takes roughly 8 minutes 20 seconds to reach you.",
          "If the Sun vanished, you'd still see it, and Earth would keep orbiting it, for those 8 minutes. Gravity's changes also travel at the speed of light.",
        ],
        takeaway: "Looking at anything in space means looking into the past.",
        quiz: {
          q: "About how long does sunlight take to reach Earth?",
          options: ["8 seconds", "8 minutes", "8 hours"],
          answer: 1,
          why: "150 million km ÷ 300,000 km/s ≈ 500 seconds, a bit over 8 minutes.",
        },
      },
      {
        id: "space-4",
        title: "Why astronauts float",
        body: [
          "At the International Space Station's height (~400 km), gravity is still about 90% as strong as on the ground.",
          "Astronauts float because the station and everything in it are falling around Earth together. They move sideways so fast (~28,000 km/h) that they keep missing the ground.",
        ],
        takeaway: "Orbit isn't the absence of gravity; it's continuous free fall.",
        quiz: {
          q: "How strong is gravity at the ISS compared with Earth's surface?",
          options: ["About 0%", "About 50%", "About 90%"],
          answer: 2,
          why: "400 km is small compared with Earth's 6,371 km radius, so gravity barely drops.",
        },
      },
    ],
  },
  {
    id: "body",
    name: "Human Body",
    emoji: "🫀",
    lessons: [
      {
        id: "body-1",
        title: "Your stomach replaces its lining",
        body: [
          "Stomach acid is strong enough to dissolve many metals, with a pH around 1.5–3.5.",
          "A layer of mucus protects the stomach wall, and the cells of the inner lining are replaced every few days.",
        ],
        takeaway: "The stomach survives its own acid with mucus and constant cell turnover.",
        quiz: {
          q: "What mainly protects the stomach wall from acid?",
          options: ["A mucus layer", "Bone", "Fat"],
          answer: 0,
          why: "A bicarbonate-rich mucus layer neutralizes acid right at the wall.",
        },
      },
      {
        id: "body-2",
        title: "Why sleep clears your head",
        body: [
          "During deep sleep, the brain's glymphatic system increases the flow of fluid that washes out waste products, including proteins linked to Alzheimer's disease.",
          "Sleep is also when the brain consolidates memories, moving the day's learning into longer-term storage.",
        ],
        takeaway: "Sleep is active maintenance: cleaning and filing.",
        quiz: {
          q: "Which system flushes waste from the brain, mostly during sleep?",
          options: ["Lymphatic", "Glymphatic", "Endocrine"],
          answer: 1,
          why: "The glymphatic system is named for its glial cells and its lymph-like role.",
        },
      },
      {
        id: "body-3",
        title: "Spaced repetition beats cramming",
        body: [
          "Memories fade along a forgetting curve. Each time you recall something just as it starts to fade, the curve flattens.",
          "Reviewing at growing intervals (1 day, 3 days, a week…) keeps knowledge for far less total study time than cramming.",
        ],
        takeaway: "Short, spaced sessions, like this one, are how memory likes to learn.",
        quiz: {
          q: "When is reviewing most effective?",
          options: ["Right after learning, many times in a row", "Just as you're starting to forget", "Never; once is enough"],
          answer: 1,
          why: "Effortful recall at the edge of forgetting strengthens the memory most.",
        },
      },
      {
        id: "body-4",
        title: "Microsleeps",
        body: [
          "A microsleep is a lapse of a fraction of a second up to about 30 seconds, and you often don't notice it happening.",
          "At 65 mph you cover about 95 feet per second, so a 4-second microsleep is more than a football field driven blind. Caffeine and open windows delay it; only sleep fixes it.",
        ],
        takeaway: "Drowsy is dangerous long before you actually fall asleep.",
        quiz: {
          q: "Roughly how far does a vehicle at 65 mph travel in 4 seconds?",
          options: ["About 40 feet", "About 380 feet", "About 1,000 feet"],
          answer: 1,
          why: "65 mph ≈ 95 ft/s, and 95 × 4 ≈ 380 ft.",
        },
      },
    ],
  },
  {
    id: "history",
    name: "History",
    emoji: "🏛️",
    lessons: [
      {
        id: "history-1",
        title: "Time zones came from railroads",
        body: [
          "Before 1883, US towns kept their own local solar time, so noon in Chicago and noon in St. Louis were minutes apart. Railroads juggled dozens of local times.",
          "On November 18, 1883, US and Canadian railroads switched to standard time zones. Congress didn't make them law until the Standard Time Act of 1918.",
        ],
        takeaway: "Trains, not governments, put America on standard time.",
        quiz: {
          q: "Who first adopted standard time zones in the US?",
          options: ["Congress", "The railroads", "The Post Office"],
          answer: 1,
          why: "The railroads did it in 1883; federal law followed in 1918.",
        },
      },
      {
        id: "history-2",
        title: "The Interstate Highway System",
        body: [
          "The Federal-Aid Highway Act of 1956, signed by President Eisenhower, funded what became the Interstate system.",
          "Eisenhower had crossed the country in a 1919 Army convoy that took 62 days, and later saw Germany's autobahns. Both shaped his push for fast, divided highways.",
        ],
        takeaway: "A slow 1919 road trip helped create the modern Interstate.",
        quiz: {
          q: "About how long did the 1919 Army convoy take to cross the US?",
          options: ["6 days", "62 days", "6 months"],
          answer: 1,
          why: "Bad roads and broken bridges stretched the trip to 62 days.",
        },
      },
      {
        id: "history-3",
        title: "Cleopatra and the pyramids",
        body: [
          "The Great Pyramid of Giza was finished around 2560 BC. Cleopatra died in 30 BC.",
          "That means Cleopatra lived closer in time to the Moon landing (1969) than to the building of the Great Pyramid.",
        ],
        takeaway: "Ancient Egypt lasted so long that it had its own ancient history.",
        quiz: {
          q: "Cleopatra lived closer in time to…",
          options: ["The building of the Great Pyramid", "The Moon landing"],
          answer: 1,
          why: "About 2,530 years separate her from the pyramid, and about 2,000 from 1969.",
        },
      },
      {
        id: "history-4",
        title: "The shortest war",
        body: [
          "The Anglo-Zanzibar War on August 27, 1896, lasted roughly 38 to 45 minutes.",
          "It began when a sultan Britain didn't approve of took power. After a short bombardment of the palace, a ceasefire followed.",
        ],
        takeaway: "The shortest recorded war lasted under an hour.",
        quiz: {
          q: "About how long did the Anglo-Zanzibar War last?",
          options: ["Under an hour", "A week", "A year"],
          answer: 0,
          why: "Estimates run from about 38 to 45 minutes.",
        },
      },
    ],
  },
  {
    id: "money",
    name: "Money",
    emoji: "💵",
    lessons: [
      {
        id: "money-1",
        title: "The rule of 72",
        body: [
          "To estimate how long money takes to double, divide 72 by the yearly growth rate.",
          "At 6% a year, money doubles in about 12 years. At 9%, about 8 years. It works for inflation too: at 3% inflation, prices double in about 24 years.",
        ],
        takeaway: "Doubling time ≈ 72 ÷ rate.",
        quiz: {
          q: "At 8% a year, about how long until money doubles?",
          options: ["6 years", "9 years", "16 years"],
          answer: 1,
          why: "72 ÷ 8 = 9.",
        },
      },
      {
        id: "money-2",
        title: "Paying yourself first",
        body: [
          "Saving whatever's left at the end of the month usually means saving nothing. Paying yourself first means moving savings out automatically the day you get paid.",
          "Because the money never sits in checking, you adapt your spending to what's left instead.",
        ],
        takeaway: "Automate saving so it happens before spending.",
        quiz: {
          q: "When does 'pay yourself first' move money to savings?",
          options: ["End of the month", "Right when you're paid", "Once a year"],
          answer: 1,
          why: "Timing it to payday removes the temptation to spend it first.",
        },
      },
      {
        id: "money-3",
        title: "APR vs APY",
        body: [
          "APR is the simple yearly rate. APY includes compounding, meaning interest earning interest.",
          "A 12% APR compounded monthly is an APY of about 12.68%. Lenders like to quote APR; savings accounts like to quote APY. Both choose whichever number looks better to you.",
        ],
        takeaway: "Compare loans and savings using APY to compare like with like.",
        quiz: {
          q: "Which number includes the effect of compounding?",
          options: ["APR", "APY"],
          answer: 1,
          why: "The Y stands for yield: what you actually earn or owe after compounding.",
        },
      },
      {
        id: "money-4",
        title: "Fees compound too",
        body: [
          "A 1% yearly fund fee sounds small, but it comes out every year and compounds.",
          "Over 30 years at 7% growth, a 1% fee can eat about a quarter of your final balance compared with a 0.05% index fund.",
        ],
        takeaway: "Small percentage fees make a big difference over decades.",
        quiz: {
          q: "Over 30 years, roughly how much can a 1% annual fee cost you?",
          options: ["About 1%", "About 10%", "About 25%"],
          answer: 2,
          why: "(1.06/1.0695)^30 ≈ 0.76, so you end with about a quarter less.",
        },
      },
    ],
  },
  {
    id: "words",
    name: "Word Origins",
    emoji: "📜",
    lessons: [
      {
        id: "words-1",
        title: "Salary and salt",
        body: [
          "'Salary' comes from Latin 'salarium', which is related to 'sal', meaning salt.",
          "The popular story that Roman soldiers were paid in salt isn't well supported. The link to salt is real, but the exact reason for it is debated.",
        ],
        takeaway: "Salary is linked to salt, though probably not as a salt paycheck.",
        quiz: {
          q: "The Latin root 'sal' means…",
          options: ["Silver", "Salt", "Soldier"],
          answer: 1,
          why: "Same root as 'saline' and 'salad', which was originally salted greens.",
        },
      },
      {
        id: "words-2",
        title: "Clue comes from a ball of thread",
        body: [
          "A 'clew' was a ball of thread. In the Greek myth, Theseus unwound one to find his way out of the Minotaur's labyrinth.",
          "From that, a 'clue' came to mean anything that guides you through a puzzle.",
        ],
        takeaway: "Every clue is a thread back out of the maze.",
        quiz: {
          q: "What was a 'clew' originally?",
          options: ["A footprint", "A ball of thread", "A riddle"],
          answer: 1,
          why: "The thread Theseus used became our word for a guiding hint.",
        },
      },
      {
        id: "words-3",
        title: "Disaster means bad star",
        body: [
          "'Disaster' comes from Italian 'disastro': 'dis-' (bad) plus 'astro' (star).",
          "It reflects the old astrological belief that misfortune came from an unlucky alignment of the stars.",
        ],
        takeaway: "Disaster literally means ill-starred.",
        quiz: {
          q: "The 'aster' in disaster refers to…",
          options: ["A flower", "A star", "A storm"],
          answer: 1,
          why: "Same root as 'astronomy' and 'asterisk', the little star.",
        },
      },
      {
        id: "words-4",
        title: "Hooligan was probably a surname",
        body: [
          "'Hooligan' showed up in London newspapers in 1898. It is most likely from an Irish surname, Houlihan, used in a comic music-hall song about a rowdy family.",
          "Many words began as people's names: 'boycott' comes from Captain Charles Boycott, a land agent who was shunned by his community in 1880.",
        ],
        takeaway: "People's names often turn into everyday words.",
        quiz: {
          q: "Which word comes from a real person's name?",
          options: ["Boycott", "Bandit", "Banter"],
          answer: 0,
          why: "Captain Boycott was famously shunned by tenants and neighbors in Ireland.",
        },
      },
    ],
  },
  {
    id: "mind",
    name: "Psychology",
    emoji: "🧠",
    lessons: [
      {
        id: "mind-1",
        title: "The spotlight effect",
        body: [
          "People overestimate how much others notice them. In one study, students wearing an embarrassing T-shirt guessed half the room noticed it; about a quarter actually did.",
          "Everyone else is mostly busy worrying about their own spotlight.",
        ],
        takeaway: "You're noticed far less than it feels like.",
        quiz: {
          q: "What did the T-shirt study find?",
          options: ["People noticed more than expected", "People noticed less than expected", "Nobody noticed at all"],
          answer: 1,
          why: "Wearers guessed about 50% noticed; the real figure was about 25%.",
        },
      },
      {
        id: "mind-2",
        title: "Implementation intentions",
        body: [
          "'I'll exercise more' rarely works. 'When I park at the truck stop, I'll walk two laps of the lot' works far better.",
          "These if-then plans tie the habit to a specific cue, so the decision is already made when the moment comes.",
        ],
        takeaway: "Use 'When X, I'll do Y' to make habits stick.",
        quiz: {
          q: "Which of these is an implementation intention?",
          options: ["I want to read more", "When I finish dinner, I'll read 5 pages", "Reading is important"],
          answer: 1,
          why: "It names a specific cue (finishing dinner) and an action (5 pages).",
        },
      },
      {
        id: "mind-3",
        title: "The peak-end rule",
        body: [
          "We judge an experience mostly by its most intense moment and by how it ended, not by its average or its length.",
          "So end a hard day, a trip or a conversation on a good note. It changes how the whole thing is remembered.",
        ],
        takeaway: "Peaks and endings shape memories.",
        quiz: {
          q: "According to the peak-end rule, what shapes memory of an experience most?",
          options: ["Its total length", "Its peak and its ending", "Its first five minutes"],
          answer: 1,
          why: "Studies found length barely mattered ('duration neglect').",
        },
      },
      {
        id: "mind-4",
        title: "Decision fatigue",
        body: [
          "Making many choices in a row tends to wear down how carefully we decide, and we drift toward defaults or impulse.",
          "Some of the research is debated, but the practical advice holds up: make important decisions early, and turn routine ones into fixed defaults.",
        ],
        takeaway: "Save your best thinking for the choices that matter.",
        quiz: {
          q: "A practical response to decision fatigue is to…",
          options: ["Make big decisions late at night", "Turn routine choices into defaults", "Decide everything at once"],
          answer: 1,
          why: "Defaults remove small choices, leaving more attention for the big ones.",
        },
      },
    ],
  },
  {
    id: "howthings",
    name: "How Things Work",
    emoji: "⚙️",
    lessons: [
      {
        id: "howthings-1",
        title: "How air brakes fail safe",
        body: [
          "On big trucks, powerful spring brakes are held off by air pressure. Your service brakes add air to stop the truck.",
          "If air pressure is lost, the springs apply the brakes on their own. A leak makes the truck stop instead of losing its brakes.",
        ],
        takeaway: "Air brakes use air to release the brakes, not to apply them.",
        quiz: {
          q: "What happens to spring brakes when air pressure drops too low?",
          options: ["They release", "They apply", "Nothing"],
          answer: 1,
          why: "The springs are only held back by air; without it, they clamp down.",
        },
      },
      {
        id: "howthings-2",
        title: "Why diesels don't need spark plugs",
        body: [
          "Squeezing air heats it up. A diesel compresses air about 15–20 times, enough to heat it past 500 °C.",
          "Fuel injected into air that hot ignites on its own. That's compression ignition, and it's why diesels need glow plugs on cold starts instead of spark plugs.",
        ],
        takeaway: "Diesels light their fuel with heat from compression.",
        quiz: {
          q: "What ignites the fuel in a diesel engine?",
          options: ["A spark plug", "Hot compressed air", "A glow plug at all times"],
          answer: 1,
          why: "Glow plugs only help warm the cylinder when starting cold.",
        },
      },
      {
        id: "howthings-3",
        title: "How solar panels make power",
        body: [
          "A solar cell is a sandwich of two kinds of silicon. Light knocks electrons loose, and the boundary between the layers pushes them in one direction, which makes a current.",
          "Panels produce less power when they're hot. Each degree above 25 °C costs roughly 0.3–0.5% of their output, which is why cool, bright days are the best for solar.",
        ],
        takeaway: "Solar loves light but hates heat.",
        quiz: {
          q: "Hot weather makes a solar panel's output…",
          options: ["Higher", "Lower", "Unchanged"],
          answer: 1,
          why: "Higher temperature lowers cell voltage, and with it, power.",
        },
      },
      {
        id: "howthings-4",
        title: "Why a fridge is a heat pump",
        body: [
          "A fridge doesn't make cold; it moves heat. Refrigerant evaporates inside the box, absorbing heat, then gets compressed and releases that heat through the coils on the back.",
          "A heat pump for a house works the same way, just pointed at the outdoors, and it can be reversed for heating.",
        ],
        takeaway: "Cooling is just moving heat from one place to another.",
        quiz: {
          q: "Where does the heat from inside a fridge go?",
          options: ["It's destroyed", "Out through the coils into the room", "Into the freezer"],
          answer: 1,
          why: "That's why the back or bottom of a fridge feels warm.",
        },
      },
    ],
  },
  {
    id: "rig",
    name: "Truck & Rig Mechanics",
    emoji: "🛻",
    lessons: [
      {
        id: "rig-1",
        title: "What DEF actually does",
        body: [
          "Diesel Exhaust Fluid is 32.5% urea mixed with deionized water. It's sprayed into the exhaust ahead of the SCR (selective catalytic reduction) catalyst.",
          "In the catalyst, the urea breaks down into ammonia, which turns smog-forming nitrogen oxides (NOx) into plain nitrogen and water vapor.",
          "DEF freezes at about 12 °F (−11 °C). That's expected: the tank and lines have heaters, and thawed DEF works fine.",
        ],
        takeaway: "DEF turns NOx in the exhaust into nitrogen and water.",
        quiz: {
          q: "What does DEF mainly reduce in diesel exhaust?",
          options: ["Soot", "Nitrogen oxides (NOx)", "Carbon dioxide"],
          answer: 1,
          why: "Soot is caught by the particulate filter (DPF). DEF and the SCR catalyst handle NOx.",
        },
      },
      {
        id: "rig-2",
        title: "Why diesel gels in the cold",
        body: [
          "Diesel naturally contains paraffin wax. As it gets cold, the wax starts forming crystals. The temperature where the fuel turns hazy is called the cloud point.",
          "Colder still, the crystals clump, clog the fuel filter and starve the engine. Winter blends mix in #1 diesel, which has less wax, to push that point lower.",
          "Anti-gel additives only work if they're in the tank before the wax crystallizes. They don't fix fuel that has already gelled.",
        ],
        takeaway: "Treat the fuel before the cold arrives, not after.",
        quiz: {
          q: "When should you add anti-gel additive?",
          options: ["After the engine stalls", "Before temperatures drop", "Only in summer"],
          answer: 1,
          why: "Anti-gel stops wax crystals from forming. It can't dissolve gel that's already there.",
        },
      },
      {
        id: "rig-3",
        title: "How a turbo makes power",
        body: [
          "A turbocharger uses exhaust gas to spin a turbine. On the same shaft, a compressor packs extra air into the intake.",
          "More air means the engine can burn more fuel per stroke, so it makes more power from the same displacement. That's also why turbo engines lose less power at altitude.",
          "After a hard pull, idling for a minute before shutting down lets the very hot turbo bearings cool with oil still flowing.",
        ],
        takeaway: "A turbo uses wasted exhaust energy to force in more air.",
        quiz: {
          q: "What spins a turbocharger?",
          options: ["A belt from the crankshaft", "Exhaust gas", "An electric motor"],
          answer: 1,
          why: "A belt-driven compressor is a supercharger. A turbo runs on exhaust flow.",
        },
      },
      {
        id: "rig-4",
        title: "Reading a tire's birth date",
        body: [
          "Look for 'DOT' on the sidewall. The last four digits of that code are the week and year the tire was made: 2321 means week 23 of 2021.",
          "Rubber ages even when a tire sits still. RV tires often age out before the tread wears out, and many tire makers recommend replacing them around 6–10 years old no matter how the tread looks.",
          "Watch for sidewall cracking, especially on tires that spend long periods parked in the sun.",
        ],
        takeaway: "Check the DOT date code, not just the tread depth.",
        quiz: {
          q: "A tire's date code reads 0819. When was it made?",
          options: ["August 2019", "Week 8 of 2019", "Week 19 of 2008"],
          answer: 1,
          why: "The first two digits are the week and the last two are the year.",
        },
      },
      {
        id: "rig-5",
        title: "How an engine brake works",
        body: [
          "A compression-release brake, often called a Jake brake after the Jacobs company, opens the exhaust valves near the top of the compression stroke.",
          "The air the piston just squeezed escapes instead of pushing the piston back down. That means the engine absorbs energy on every stroke, which slows the vehicle.",
          "That's the source of the loud 'brap'. It's also why some towns post 'no engine brake' signs.",
        ],
        takeaway: "An engine brake turns the engine into an air compressor that throws its work away.",
        quiz: {
          q: "What does a compression-release brake let out of the cylinder?",
          options: ["Fuel", "Compressed air", "Coolant"],
          answer: 1,
          why: "Releasing the compressed air means the energy spent compressing it is never returned.",
        },
      },
      {
        id: "rig-6",
        title: "Surviving a long downgrade",
        body: [
          "Brakes stop you by turning motion into heat. On a long descent, enough heat builds up that the brakes lose grip. This is called brake fade.",
          "The rule of thumb: pick a low gear before the top of the grade, often the same gear you'd use to climb it. Then use the brakes in firm, short applications rather than riding them the whole way down.",
          "If you have to downshift halfway down, it's often too late. Pick the gear at the top.",
        ],
        takeaway: "Choose your gear before the hill, not on it.",
        quiz: {
          q: "What causes brake fade?",
          options: ["Too much heat in the brakes", "Low tire pressure", "Cold brake fluid"],
          answer: 0,
          why: "Overheated brake surfaces lose friction, so the same pedal press slows you less.",
        },
      },
    ],
  },
  {
    id: "power",
    name: "12V & Off-Grid Power",
    emoji: "🔋",
    lessons: [
      {
        id: "power-1",
        title: "Amp-hours vs watt-hours",
        body: [
          "Watts = volts × amps. A battery's amp-hour (Ah) rating only means something once you know its voltage.",
          "A 100 Ah battery at 12 V stores about 1,200 watt-hours (Wh). The same 100 Ah at 24 V stores 2,400 Wh.",
          "To compare batteries, or to figure out how long a 60 W fridge will run, convert everything to watt-hours.",
        ],
        takeaway: "Watt-hours are the real measure of stored energy.",
        quiz: {
          q: "Roughly how much energy does a 200 Ah, 12 V battery store?",
          options: ["200 Wh", "1,200 Wh", "2,400 Wh"],
          answer: 2,
          why: "200 Ah × 12 V = 2,400 Wh.",
        },
      },
      {
        id: "power-2",
        title: "Lithium vs lead-acid usable capacity",
        body: [
          "Lead-acid batteries (flooded and AGM) last much longer if you rarely take them below about 50% charge. So a 100 Ah AGM gives you about 50 Ah you can really use.",
          "Lithium iron phosphate (LiFePO4) can use around 80–100% of its rating and lasts thousands of cycles. It also holds its voltage steadier as it drains.",
          "That's why one lithium battery can often replace two lead-acid batteries of the same rating, at about half the weight.",
        ],
        takeaway: "Compare batteries by usable capacity, not by the label.",
        quiz: {
          q: "About how much of a lead-acid battery's rated capacity should you plan to use regularly?",
          options: ["About 50%", "About 90%", "100%"],
          answer: 0,
          why: "Deep discharges sharply shorten lead-acid life.",
        },
      },
      {
        id: "power-3",
        title: "Why 12V needs thick wire",
        body: [
          "For the same power, lower voltage means more current. 1,200 W is 100 A at 12 V, but only 10 A at 120 V.",
          "Current flowing through wire loses voltage as heat. The loss grows with current and with wire length, so doubling a run's length doubles the voltage drop.",
          "That's why 12V systems use short, thick cables, and why bigger systems move to 24 or 48 V.",
        ],
        takeaway: "Low voltage means high current, and high current needs short, thick wire.",
        quiz: {
          q: "If you double the length of a wire run, the voltage drop…",
          options: ["Stays the same", "Doubles", "Halves"],
          answer: 1,
          why: "Resistance, and with it the drop, scales with the length of the wire.",
        },
      },
      {
        id: "power-4",
        title: "The hidden drain of an idle inverter",
        body: [
          "An inverter uses power just being switched on, even with nothing plugged in. Bigger inverters often idle at 10–50 W.",
          "30 W doesn't sound like much, but over 24 hours it's 720 Wh. That's more than half of a 100 Ah lithium battery, gone for nothing.",
          "Turn the inverter off when you aren't using AC power, or use one with a power-saving 'search' mode.",
        ],
        takeaway: "Switch the inverter off when nothing needs AC power.",
        quiz: {
          q: "An inverter idles at 25 W. How much energy does it use in a day?",
          options: ["25 Wh", "250 Wh", "600 Wh"],
          answer: 2,
          why: "25 W × 24 h = 600 Wh.",
        },
      },
      {
        id: "power-5",
        title: "Why panels make less than their rating",
        body: [
          "Solar panel ratings are measured in lab conditions: full-strength sunlight hitting the panel straight on, with the cells at 25 °C.",
          "On a real roof, heat, dust, sun angle and wiring losses usually bring output down to around 70–85% of the rating, even at midday.",
          "Panels mounted flat on a roof lose even more in winter, when the sun stays low in the sky.",
        ],
        takeaway: "Plan for roughly 75% of rated solar output, and less in winter.",
        quiz: {
          q: "Why do flat-mounted panels make less power in winter?",
          options: ["The sun is lower, so light hits at a shallow angle", "Cold temperatures reduce output", "Days are hotter"],
          answer: 0,
          why: "Cold actually helps panels. The low sun angle and shorter days are what hurt.",
        },
      },
      {
        id: "power-6",
        title: "Fuses protect the wire",
        body: [
          "A fuse's main job is protecting the wire, not the device. You size the fuse to what the wire can safely carry.",
          "If a wire shorts, a battery can push hundreds of amps through it. Without a fuse, the wire heats up and can start a fire.",
          "Put the fuse as close to the battery's positive terminal as you can, so the whole length of the wire is protected.",
        ],
        takeaway: "Size fuses to the wire, and put them near the battery.",
        quiz: {
          q: "A fuse should be sized mainly to…",
          options: ["The device's power draw", "The wire's safe current rating", "The battery's capacity"],
          answer: 1,
          why: "Its job is to blow before the wire overheats.",
        },
      },
    ],
  },
  {
    id: "weather",
    name: "Weather & Sky Reading",
    emoji: "🌦️",
    lessons: [
      {
        id: "weather-1",
        title: "Why bridges freeze first",
        body: [
          "A road on solid ground is warmed slightly from below by the earth, which holds heat.",
          "A bridge has cold air above it and below it, so it loses heat from both sides. It can ice over while the road leading up to it is still just wet.",
          "When temperatures are near freezing, treat every bridge and overpass as possibly icy.",
        ],
        takeaway: "Bridges lose heat from both sides, so they ice first.",
        quiz: {
          q: "Why does a bridge deck freeze before the road around it?",
          options: ["It's higher up", "Cold air touches it above and below", "It's made of metal"],
          answer: 1,
          why: "There's no ground underneath to keep it warm.",
        },
      },
      {
        id: "weather-2",
        title: "Spotting a thunderstorm cloud",
        body: [
          "A cumulonimbus is a towering cloud, often with a flat, spreading top shaped like an anvil.",
          "The anvil forms when the rising air hits the top of the lowest layer of the atmosphere and spreads out sideways. Winds high up often stretch it in the direction the storm is heading.",
          "If you can see an anvil, the storm is mature and can bring lightning, hail and strong gusts.",
        ],
        takeaway: "An anvil top means a full-grown thunderstorm.",
        quiz: {
          q: "What does a flat anvil top on a tall cloud usually mean?",
          options: ["Clearing skies", "A mature thunderstorm", "Fog by morning"],
          answer: 1,
          why: "The anvil forms when a storm's updraft reaches the top of the lower atmosphere.",
        },
      },
      {
        id: "weather-3",
        title: "Wind and tall vehicles",
        body: [
          "Wind force on the side of a vehicle grows with the square of the wind speed. Double the wind and you get about four times the push.",
          "Tall, flat-sided, lightly loaded vehicles are the most at risk, because there's a big side for the wind to catch and less weight holding them down.",
          "Gusts are more dangerous than steady wind. Watch for open stretches, gaps between hills and the end of overpasses.",
        ],
        takeaway: "Twice the wind is about four times the force.",
        quiz: {
          q: "If wind speed doubles, the sideways force on a vehicle becomes about…",
          options: ["2× as strong", "4× as strong", "The same"],
          answer: 1,
          why: "Wind force scales with speed squared: 2² = 4.",
        },
      },
      {
        id: "weather-4",
        title: "Reading weather radar colors",
        body: [
          "Radar colors show how strongly the beam bounces back off rain or hail.",
          "Greens mean light rain, yellows and oranges mean moderate to heavy rain, and reds or purples mean very heavy rain and often hail.",
          "A hook shape curling off the back of a strong storm can mean rotation, and possibly a tornado.",
        ],
        takeaway: "Green is light, red is heavy, and a hook shape means rotation.",
        quiz: {
          q: "On radar, purple or deep red usually means…",
          options: ["Light drizzle", "Very heavy rain or hail", "Clear air"],
          answer: 1,
          why: "Those colors are the strongest returns, usually from heavy rain or large ice.",
        },
      },
      {
        id: "weather-5",
        title: "How far away is the lightning?",
        body: [
          "Sound travels about 1 mile every 5 seconds. Count the seconds from flash to thunder and divide by 5.",
          "Under 30 seconds (about 6 miles) means you're within striking range and should get to shelter. Wait 30 minutes after the last thunder before going back outside.",
          "A hard-topped vehicle is good shelter. The metal shell carries the current around you. The rubber tires have nothing to do with it.",
        ],
        takeaway: "Seconds ÷ 5 = miles away. Under 30 seconds, take shelter.",
        quiz: {
          q: "Why is a hard-topped car fairly safe in lightning?",
          options: ["The rubber tires insulate it", "The metal body carries the current around you", "Lightning can't hit moving objects"],
          answer: 1,
          why: "Lightning that has traveled miles through the air isn't stopped by an inch of rubber.",
        },
      },
      {
        id: "weather-6",
        title: "Predicting fog with the dew point",
        body: [
          "The dew point is the temperature at which air becomes saturated and moisture condenses.",
          "When the air temperature drops close to the dew point, fog and dew form. If they're only a few degrees apart in the evening on a clear, calm night, expect fog by morning.",
          "Most weather apps list the dew point. Compare it with the overnight low.",
        ],
        takeaway: "When the temperature nears the dew point, expect fog.",
        quiz: {
          q: "Evening: 48 °F with a dew point of 46 °F, on a clear, calm night. What's likely by morning?",
          options: ["Fog", "Thunderstorms", "Very dry air"],
          answer: 0,
          why: "A small spread plus overnight cooling brings the air to saturation.",
        },
      },
    ],
  },
  {
    id: "stoic",
    name: "Stoicism",
    emoji: "📖",
    lessons: [
      {
        id: "stoic-1",
        title: "What's up to you",
        body: [
          "Epictetus's handbook, the Enchiridion, opens with one idea: some things are up to us, and some are not.",
          "Your judgments, choices and effort are up to you. Traffic, weather, other people and how things turn out are not.",
          "The Stoic move is to put your energy into the first group and meet the second calmly. Worry about traffic doesn't make it move.",
        ],
        takeaway: "Put your effort into what you control and accept the rest.",
        quiz: {
          q: "According to Epictetus, which of these is up to you?",
          options: ["Your reputation", "Your judgments and choices", "The weather"],
          answer: 1,
          why: "He counted reputation among the things not fully in our control.",
        },
      },
      {
        id: "stoic-2",
        title: "A journal never meant to be read",
        body: [
          "Marcus Aurelius was Roman emperor from 161 to 180 AD. He wrote the Meditations as private notes to himself, partly while on military campaigns.",
          "He wrote in Greek, not Latin, and never intended anyone else to read it. The book is mostly him reminding himself to be patient, fair and unbothered by small things.",
          "That's part of its appeal: it's the most powerful man in the world talking himself through ordinary frustrations.",
        ],
        takeaway: "Meditations was an emperor's private pep talk to himself.",
        quiz: {
          q: "What language did Marcus Aurelius write the Meditations in?",
          options: ["Latin", "Greek", "Aramaic"],
          answer: 1,
          why: "Greek was the language of philosophy for educated Romans.",
        },
      },
      {
        id: "stoic-3",
        title: "Rehearsing setbacks",
        body: [
          "Seneca recommended imagining in advance what could go wrong, a practice later called premeditatio malorum ('pre-meditation of evils').",
          "The point isn't gloom. A setback you've already pictured hits softer, and you've often already thought through what you'd do.",
          "Try it before a long haul: what if the load is late, the weather turns, or a tire goes? Then decide how you'd handle each one.",
        ],
        takeaway: "Picture the setback before it happens, so it doesn't knock you flat when it does.",
        quiz: {
          q: "What's the purpose of premeditatio malorum?",
          options: ["To expect the worst and give up", "To prepare mentally so setbacks hit softer", "To predict the future"],
          answer: 1,
          why: "It's about preparation and calm, not pessimism.",
        },
      },
      {
        id: "stoic-4",
        title: "The obstacle becomes the way",
        body: [
          "Marcus Aurelius wrote: 'The impediment to action advances action. What stands in the way becomes the way.'",
          "A blocked road forces a new route. A difficult person gives you a chance to practice patience. Every obstacle is also a chance to practice a virtue.",
          "The phrase inspired Ryan Holiday's book The Obstacle Is the Way.",
        ],
        takeaway: "Every obstacle is a chance to practice something.",
        quiz: {
          q: "In this Stoic view, an obstacle is…",
          options: ["A reason to quit", "Material for practicing virtue", "Always someone else's fault"],
          answer: 1,
          why: "The obstacle itself becomes the occasion for patience, courage or creativity.",
        },
      },
      {
        id: "stoic-5",
        title: "Amor fati isn't Stoic, exactly",
        body: [
          "'Amor fati', Latin for love of fate, is often called a Stoic motto. The phrase actually comes from Nietzsche, in the 1880s.",
          "The idea is older, though. Epictetus advised wishing for things to happen exactly as they do happen, rather than as you'd like them to.",
          "So the motto is Nietzsche's, but the attitude behind it is Stoic.",
        ],
        takeaway: "The phrase is Nietzsche's; the idea is Epictetus's.",
        quiz: {
          q: "Who coined the phrase 'amor fati'?",
          options: ["Marcus Aurelius", "Nietzsche", "Seneca"],
          answer: 1,
          why: "Nietzsche used it in the 1880s. The Stoics expressed the idea in other words.",
        },
      },
      {
        id: "stoic-6",
        title: "Epictetus, the former slave",
        body: [
          "Epictetus was born into slavery around 50 AD and had a disabled leg. He studied philosophy while still enslaved and was later freed.",
          "When the emperor Domitian banished philosophers from Rome, he moved to Nicopolis in Greece and opened a school there.",
          "He never wrote anything down. His student Arrian recorded his lectures, which is how we have the Discourses and the Enchiridion.",
        ],
        takeaway: "One of the most influential Stoics started life enslaved and never wrote a word himself.",
        quiz: {
          q: "How do we know what Epictetus taught?",
          options: ["He wrote several books", "His student Arrian wrote down his lectures", "His teachings were carved on stone"],
          answer: 1,
          why: "Like Socrates, he taught by speaking, and a student preserved his words.",
        },
      },
    ],
  },
  {
    id: "geo",
    name: "Geography & Geology",
    emoji: "🏔️",
    lessons: [
      {
        id: "geo-1",
        title: "Young canyon, ancient rock",
        body: [
          "The Colorado River carved most of the Grand Canyon in roughly the last 5–6 million years, which is recent by geological standards.",
          "The rock at the bottom is far older: about 1.7–1.8 billion years old, roughly 40% of Earth's age.",
          "Driving down the canyon wall is like scrolling back through almost two billion years of Earth's history.",
        ],
        takeaway: "The canyon is young. The rock it cuts through is ancient.",
        quiz: {
          q: "About how old is the rock at the bottom of the Grand Canyon?",
          options: ["About 6 million years", "About 250 million years", "About 1.7 billion years"],
          answer: 2,
          why: "The canyon itself is young, but it cuts down into some of the oldest exposed rock in North America.",
        },
      },
      {
        id: "geo-2",
        title: "Lakes left by glaciers",
        body: [
          "During the last Ice Age, ice sheets more than a mile thick scraped deep basins into the land. As they melted, meltwater filled them.",
          "The result was the Great Lakes, which together hold about a fifth of all the fresh surface water on Earth.",
          "Land in the region is still slowly rising, rebounding from the weight of ice that melted more than 10,000 years ago.",
        ],
        takeaway: "Ice Age glaciers dug the Great Lakes.",
        quiz: {
          q: "Roughly how much of Earth's fresh surface water is in the Great Lakes?",
          options: ["About 2%", "About 20%", "About 60%"],
          answer: 1,
          why: "About 21% by most estimates.",
        },
      },
      {
        id: "geo-3",
        title: "The Continental Divide",
        body: [
          "The Continental Divide is the line along the Rockies where rain on one side flows to the Pacific, and rain on the other flows to the Atlantic or the Gulf.",
          "On I-70 in Colorado, the Eisenhower–Johnson Memorial Tunnel goes under the Divide at about 11,158 feet. That's the highest point on the entire Interstate system.",
          "Long climbs to the Divide are hard on engines and brakes, especially on the way back down.",
        ],
        takeaway: "The Divide decides which ocean a raindrop reaches.",
        quiz: {
          q: "Where is the highest point on the US Interstate system?",
          options: ["Donner Pass on I-80", "The Eisenhower Tunnel on I-70", "Vail Pass on I-70"],
          answer: 1,
          why: "The tunnel sits at about 11,158 ft. Vail Pass is about 10,600 ft.",
        },
      },
      {
        id: "geo-4",
        title: "Old mountains vs young mountains",
        body: [
          "The Appalachians formed roughly 480–300 million years ago, when continents collided. At their peak they may have been as tall as the Rockies are today.",
          "Hundreds of millions of years of erosion have worn them down into rounded, forested ridges.",
          "The Rockies rose much later, mostly 80–55 million years ago, which is why they're still tall, sharp and rocky.",
        ],
        takeaway: "Rounded mountains are usually old; jagged ones are usually young.",
        quiz: {
          q: "Which mountain range is older?",
          options: ["The Rockies", "The Appalachians"],
          answer: 1,
          why: "The Appalachians are hundreds of millions of years older, and erosion shows it.",
        },
      },
      {
        id: "geo-5",
        title: "Yellowstone's moving hotspot",
        body: [
          "Yellowstone sits over a hotspot, a plume of hot rock rising from deep in the Earth. It has had three huge eruptions, about 2.1 million, 1.3 million and 640,000 years ago.",
          "The hotspot stays put while North America slides southwest over it. That's left a trail of old volcanic centers across the Snake River Plain in Idaho.",
          "Its geysers and hot springs are powered by the same heat.",
        ],
        takeaway: "The continent is moving over Yellowstone's hotspot, not the other way around.",
        quiz: {
          q: "What does the Snake River Plain in Idaho record?",
          options: ["An ancient sea", "The hotspot's track as the continent moved", "A giant meteor impact"],
          answer: 1,
          why: "Older volcanic centers lie to the southwest, along the path the plate has moved.",
        },
      },
      {
        id: "geo-6",
        title: "Why the Great Salt Lake is salty",
        body: [
          "The Great Salt Lake is what's left of Lake Bonneville, an Ice Age lake about the size of Lake Michigan.",
          "It has no outlet. Rivers bring in water and dissolved minerals, but water leaves only by evaporating, so the salt stays and builds up.",
          "The Bonneville Salt Flats, west of the lake, are part of the old lakebed.",
        ],
        takeaway: "No outlet plus evaporation makes a salt lake.",
        quiz: {
          q: "Why is the Great Salt Lake salty?",
          options: ["It's connected to the ocean", "Water leaves only by evaporating, so minerals build up", "Salt is mined into it"],
          answer: 1,
          why: "Lakes with no outlet concentrate minerals over thousands of years.",
        },
      },
    ],
  },
];
