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
];
