// Complete AIKYAM 2K26 Event Data
// Where Ancient Intelligence Awakens the Digital Future.

export type EventCategory = "tech" | "creative" | "adventure" | "gaming";

export interface Round {
  name: string;
  description: string;
  duration?: string;
  qualification?: string;
}

export interface AikyamEvent {
  slug: string;
  name: string;           // Sanskrit name
  eventName: string;      // English / subtitle name
  teamLabel: string;      // e.g. SOLO, DUO, TRIO, SQUAD
  category: EventCategory;
  icon: string;
  image?: string;
  color: string;
  tagline: string;
  description: string;
  rounds?: Round[];
  rules?: string[];
  judgingCriteria?: string[];
  prizes?: string[];
  teamSize?: string;
  duration?: string;
  venue?: string;
}

export const events: AikyamEvent[] = [

  /* ─────────────────────── TECH ─────────────────────── */

  {
    slug: "agnipariksha",
    name: "AGNIPARIKSHA",
    eventName: "Stress Interview — Know Yourself Challenge",
    teamLabel: "SOLO",
    category: "tech",
    icon: "/icons/stress.png",
    image: "/stres.webp",
    color: "#4FC3F7",
    tagline: "Face the heat. Emerge unbroken.",
    description:
      "A unique event designed to test confidence, communication skills, self-awareness, and ability to perform under pressure. The event begins with a 3-minute talent showcase — singing, dancing, mimicry, drawing, coding, public speaking, magic, or any skill. Judges then conduct a stress interview with unexpected, challenging, and situational questions. Before scores are revealed, the participant self-evaluates out of 10. The contestant whose self-score exactly matches (or is closest to) the judges' average wins.",
    rounds: [
      {
        name: "Stress Interview — Know Yourself",
        description: "The event begins with a 3-minute talent showcase (singing, dancing, mimicry, coding, public speaking, magic, or any skill). Judges then conduct a 5–7 minute stress interview with unexpected, challenging, and situational questions. Before scores are revealed, the participant self-evaluates out of 10. The contestant whose self-score exactly matches (or is closest to) the judges' average wins.",
        duration: "8–10 minutes per participant",
      },
    ],
    judgingCriteria: ["Confidence", "Communication", "Presence of Mind", "Self-Awareness"],
    prizes: ["100% of total registration collections distributed among winner(s)"],
    teamSize: "Individual",
    duration: "8–10 minutes per participant",
    venue: "Stage",
  },

  {
    slug: "chakravyuha",
    name: "CHAKRAVYUHA",
    eventName: "Debugging Challenge — Code Rescue",
    teamLabel: "DUO",
    category: "tech",
    icon: "/icons/debug.png",
    image: "/debuggp1.webp",
    color: "#4FC3F7",
    tagline: "Enter the maze. Find the bug. Escape with glory.",
    description:
      "A competitive programming event that tests debugging skills, logical thinking, teamwork, coding ability, and problem-solving under time constraints. Teams must work together to identify bugs, understand program logic, and solve coding challenges within the given time — simulating real-world software development where collaboration and efficient debugging are essential.",
    rounds: [
      {
        name: "Round 1 — Bug Hunt",
        description: "Teams receive multiple programs containing syntax errors, logical errors, runtime errors, and output errors. Identify and fix as many bugs as possible. Top scores qualify for the next round.",
        duration: "45 minutes",
        qualification: "Top teams qualify",
      },
      {
        name: "Round 2 — Wire the Logic",
        description: "Qualified teams receive shuffled code snippets, algorithms, or program execution steps. Arrange them in the correct logical order so the program executes successfully. Evaluates logical thinking, teamwork, and understanding of programming concepts.",
        duration: "30 minutes",
        qualification: "Top teams qualify",
      },
      {
        name: "Round 3 — Code Sprint Finale",
        description: "Finalist teams receive 10 programming challenges — debugging tasks and coding problems. Some require fixing existing code; others require writing complete programs from scratch. Each problem carries different marks based on difficulty. In case of a tie, the team with shortest completion time ranks higher.",
        duration: "30 minutes",
      },
    ],
    rules: [
      "Team of 2 members",
      "One Computer/Laptop per Team",
      "Programming IDE or Code Editor required",
      "No internet access during rounds",
      "Tiebreaker: shortest completion time",
    ],
    judgingCriteria: [
      "Accuracy of Solutions",
      "Debugging Skills",
      "Logical Thinking",
      "Teamwork",
      "Code Efficiency",
      "Completion Time (Tiebreaker)",
    ],
    prizes: ["🥇 1st Prize: ₹2,000", "🥈 2nd Prize: ₹1,000", "🥉 3rd Prize: ₹500"],
    teamSize: "2 Members",
    duration: "~105 minutes total",
  },

  {
    slug: "sarvajna",
    name: "SARVAJNA",
    eventName: "IT Quiz — Tech Titans",
    teamLabel: "TRIO",
    category: "tech",
    icon: "/icons/quiz.png",
    image: "/quiz.webp",
    color: "#4FC3F7",
    tagline: "The all-knowing triumphs. Are you Sarvajna?",
    description:
      "A dynamic knowledge-based competition testing technical knowledge, logical thinking, teamwork, and quick decision-making across IT domains. Combines written questions, rapid-fire challenges, and an interactive stage finale. Questions cover programming, databases, networking, cybersecurity, AI, OS, hardware, software, and latest tech trends.",
    rounds: [
      {
        name: "Round 1 — Tech Challenge (Written + Visual)",
        description: "Teams face a written quiz covering MCQs, Output Prediction, Identify the Programming Language, Guess the Tech Logo, Find the Error, Match the Following, True or False, Identify Hardware/Software, and Current Tech Trends.",
        duration: "30 minutes",
        qualification: "Top 8 Teams",
      },
      {
        name: "Round 2 — Rapid Fire & Buzzer",
        description: "Each qualified team gets a 60-second Rapid Fire Round on Programming, AI, Cybersecurity, Networking, DBMS, OS, Tech Companies, and General IT. Followed by a Buzzer Round — +10 for correct, −5 for incorrect answers.",
        duration: "Per team + buzzer",
        qualification: "Top 4 Teams",
      },
      {
        name: "Final Round — Tech Treasure Box",
        description: "15–20 numbered Treasure Boxes on stage, each containing a unique technical challenge at varying difficulty: 🟢 Easy (10pts) · 🟡 Medium (20pts) · 🔴 Hard (30pts). Challenge types: Code Output, Binary Decode, Morse Code, Logo Guess, Bug Find, SQL Query, Debug, Networking, AI Questions, Programming Puzzles. Wrong answers can be stolen by other teams for 50% of points.",
      },
    ],
    judgingCriteria: ["Accuracy", "Speed", "Breadth of Technical Knowledge"],
    prizes: ["🥇 1st Prize: ₹2,000", "🥈 2nd Prize: ₹1,000", "🥉 3rd Prize: ₹500"],
    teamSize: "3 Members",
    duration: "Multi-round",
  },

  {
    slug: "lakshya",
    name: "LAKSHYA",
    eventName: "Startup Pitch",
    teamLabel: "TRIO",
    category: "tech",
    icon: "/icons/startup.png",
    image: "/startUP.webp",
    color: "#4FC3F7",
    tagline: "Dream big. Pitch bold. Win the future.",
    description:
      "An entrepreneurship competition providing aspiring innovators a platform to present startup ideas before a panel of judges. Participants identify real-world problems, develop innovative business solutions, and demonstrate market viability in a 10-minute slot. The event evaluates innovation, business strategy, market potential, feasibility, presentation skills, and ability to defend ideas under pressure.",
    rounds: [
      {
        name: "Startup Pitch",
        description: "7-minute presentation + 3-minute Judge Q&A. Must cover: Startup Name, Problem Statement, Proposed Solution, Target Customers, Business Model, Revenue Model, Market Opportunity, Competitor Analysis, Technology Used, Marketing Strategy, Scalability, and Future Scope.",
        duration: "10 minutes per team",
      },
    ],
    judgingCriteria: [
      "Innovation & Originality — 20 Marks",
      "Problem & Solution — 15 Marks",
      "Business Model — 15 Marks",
      "Market Potential — 15 Marks",
      "Feasibility & Scalability — 15 Marks",
      "Presentation & Confidence — 10 Marks",
      "Judge Q&A — 10 Marks",
    ],
    prizes: ["🥇 1st Prize: ₹3,000", "🥈 2nd Prize: ₹2,000", "🥉 3rd Prize: ₹1,000"],
    teamSize: "3 Members",
    duration: "10 minutes per team",
  },

  {
    slug: "dyutha-sabha",
    name: "DYUTHA SABHA",
    eventName: "Debate-IT — Spin & Switch",
    teamLabel: "DUO",
    category: "tech",
    icon: "/icons/debate.png",
    image: "/debate.webp",
    color: "#4FC3F7",
    tagline: "Words are weapons. Wield them wisely.",
    description:
      "A unique technical debate where participants not only defend their assigned viewpoint but also instantly switch sides and argue the opposite without any preparation. Tests critical thinking, adaptability, confidence, and ability to present balanced arguments on trending technology topics like AI, Gaming, Cybersecurity, Startups, Social Media, Online Education, Cryptocurrency, and Privacy vs Security.",
    rounds: [
      {
        name: "Round 1 — Spin the Topic",
        description: "Teams compete head-to-head by spinning the Topic Wheel. One team argues FOR, the other AGAINST. Format: 2-min prep → 3 minutes per team. Top 6 teams qualify.",
        duration: "~10 minutes per pair",
        qualification: "Top 6 Teams",
      },
      {
        name: "Grand Finale — Switch Sides",
        description: "Finalists spin the Topic Wheel again. Phase 1: 2-min prep → 3 minutes per team. Then the moderator announces 'SWITCH!' — without any prep, teams immediately flip sides. Phase 2: 2-min reverse argument + 1-min rebuttal per team. Tests adaptability and presence of mind like nothing else.",
      },
    ],
    judgingCriteria: [
      "Knowledge of the Topic — 25 Marks",
      "Logical Thinking — 25 Marks",
      "Communication Skills — 20 Marks",
      "Presence of Mind — 20 Marks",
      "Rebuttal Skills — 10 Marks",
    ],
    prizes: ["🥇 1st Prize: ₹2,000", "🥈 2nd Prize: ₹1,000", "🥉 3rd Prize: ₹500"],
    teamSize: "2 Members",
    duration: "~15 minutes per round",
  },

  {
    slug: "vishwakarma",
    name: "VISHWAKARMA",
    eventName: "10-Hour National Hackathon",
    teamLabel: "TEAM (2–4)",
    category: "tech",
    icon: "/icons/hackathon-icon-transparent.png",
    color: "#4FC3F7",
    tagline: "Build the impossible. In 10 hours.",
    description:
      "The flagship event of AIKYAM 2K26 — the 10-Hour National Hackathon. Participants develop innovative software or hardware solutions that address real-world problems using modern technologies. The event provides a platform for students to transform ideas into functional prototypes, demonstrating technical, presentation, and teamwork skills.",
    rounds: [
      {
        name: "Round 1 — Idea Pitch",
        description: "Each team presents their proposed solution before judges. 5-minute pitch + 3-minute Q&A. Cover: Problem Statement, Proposed Solution, Target Users, Technology Stack, Innovation, Expected Impact, Feasibility, and Future Scope.",
        duration: "5 min pitch + 3 min Q&A",
        qualification: "Top 10 Teams shortlisted",
      },
      {
        name: "Round 2 — 10-Hour Build Challenge",
        description: "Shortlisted teams build for 10 straight hours. Teams develop a working prototype, design UI, implement core features, prepare a presentation, test and refine.",
        duration: "10 Hours",
      },
    ],
    judgingCriteria: [
      "Innovation & Creativity — 20 Marks",
      "Technical Implementation — 20 Marks",
      "Working Prototype — 20 Marks",
      "UI/UX Design — 10 Marks",
      "Features & Functionality — 10 Marks",
      "Real-World Impact — 10 Marks",
      "Presentation & Demonstration — 10 Marks",
    ],
    rules: [
      "Teams of 2–4 members",
      "Projects must be developed during the hackathon period",
      "Open-source libraries and APIs permitted",
      "Previously developed projects not allowed",
      "Submit source code and presentation before deadline",
      "Final presentation conducted via Google Meet (screen sharing)",
    ],
    prizes: ["Prize Pool: ₹20,000"],
    teamSize: "2–4 Members",
    duration: "10 Hours",
  },





  /* ─────────────────────── CREATIVE ─────────────────────── */

  {
    slug: "chitrasutra",
    name: "CHITRASUTRA",
    eventName: "POSTER MAKING — DESIGN FOR IMPACT",
    image: "/poster.webp",
    teamLabel: "DUO",
    category: "creative",
    icon: "/icons/poster.png",
    color: "#CE93D8",
    tagline: "Paint the message. Move the world.",
    description:
      "A creative design competition challenging participants to transform innovative ideas into visually compelling posters. Tests creativity, design skills, originality, visual communication, and the ability to convey a powerful message through design. Theme is announced on the spot — teams must create an impactful, informative poster using digital tools or traditional hand-drawn methods.",
    rounds: [
      {
        name: "Theme Reveal",
        description: "Teams receive a technical theme on the spot and design a poster within 90 minutes. Sample themes: Artificial Intelligence · Cyber Security · Digital India · Smart Cities · Green Technology · Future of Computing · Robotics · Space Technology · Sustainable Innovation · Women in Technology. Teams are free to use their creativity while ensuring the poster effectively communicates the assigned theme.",
        duration: "90 minutes",
      },
    ],
    judgingCriteria: [
      "Creativity & Originality — 30 Marks",
      "Relevance to Theme — 20 Marks",
      "Visual Appeal — 20 Marks",
      "Design Composition — 15 Marks",
      "Innovation — 10 Marks",
      "Overall Presentation — 5 Marks",
    ],
    prizes: ["🥇 1st Prize: ₹1,500", "🥈 2nd Prize: ₹1,000", "🥉 3rd Prize: ₹500"],
    teamSize: "2 Members",
    duration: "90 minutes",
  },

  {
    slug: "drishyakala",
    name: "DRISHYAKALA",
    eventName: "PHOTOGRAPHY — PIXEL VISION",
    image: "/photo.webp",
    teamLabel: "SOLO",
    category: "creative",
    icon: "/icons/photo.png",
    color: "#CE93D8",
    tagline: "One frame. A thousand words.",
    description:
      "A creative photography competition testing creativity, observation, storytelling, and technical photography skills. Participants capture original photographs based on five themes announced at 10:00 AM — exploring the campus to create impactful images that represent each theme. Max 2 photos per theme (10 total). Submit before 2:00 PM.",
    rounds: [
      {
        name: "Challenge",
        description: "At 10:00 AM, five photography themes are revealed. Capture photographs for all five themes — max 2 per theme (10 total). Photography session: 10:00 AM → 2:00 PM. Example themes: Innovation · Technology Around Us · Campus Life · Motion · Reflections. Basic editing (brightness, contrast, cropping, color correction) permitted. AI-generated images and heavy manipulation strictly prohibited.",
        duration: "10:00 AM → 2:00 PM",
      },
    ],
    rules: [
      "All five themes are compulsory",
      "Maximum 2 photographs per theme",
      "All photos must be captured between 10 AM and 2 PM",
      "Only original photographs taken during the competition",
      "Basic editing allowed — no AI or stock images",
      "All entries must be submitted before 2:00 PM",
    ],
    judgingCriteria: [
      "Creativity & Originality — 30 Marks",
      "Relevance to the Theme — 25 Marks",
      "Composition & Framing — 20 Marks",
      "Technical Quality — 15 Marks",
      "Visual Storytelling & Impact — 10 Marks",
    ],
    prizes: ["🥇 1st Prize: ₹1,500", "🥈 2nd Prize: ₹1,000", "🥉 3rd Prize: ₹500"],
    teamSize: "Individual",
    duration: "10:00 AM – 2:00 PM",
  },

  {
    slug: "drishyakavya",
    name: "DRISHYAKAVYA",
    eventName: "VIDEOGRAPHY — CINEMATIC VISION",
    image: "/video.webp",
    teamLabel: "DUO",
    category: "creative",
    icon: "/icons/video.png",
    color: "#CE93D8",
    tagline: "One reel. Infinite stories.",
    description:
      "A creative filmmaking competition testing storytelling, cinematography, editing, creativity, and technical skills. Teams conceptualize, shoot, edit, and produce an original 2–5 minute short film based on one of three themes announced at 10:00 AM on Day 1. Teams have a full 24-hour window to plan, shoot, edit, add music/subtitles/effects, and finalize their production.",
    rounds: [
      {
        name: "Challenge",
        description: "At 10:00 AM Day 1, three themes are announced. Teams choose one and produce a 2–5 minute original short film. Full 24-hour window: 10 AM Day 1 → 10 AM Day 2 to develop concept, write script, shoot, edit, add BGM/subtitles/transitions/color grading, and export. Sample themes: Innovation · Technology for Good · Campus Life · The Future · Human Emotions · Digital World · Teamwork · Beyond Reality.",
        duration: "24 hours (submit by 10 AM Day 2)",
      },
    ],
    rules: [
      "Concept and production must begin only after themes are announced",
      "All footage must be captured during the competition period",
      "Smartphones, DSLRs, mirrorless cameras, drones (if permitted) allowed",
      "BGM, subtitles, VFX, color grading, and transitions permitted",
      "AI-generated videos and copyrighted content strictly prohibited",
      "Final video must be 2–5 minutes in duration",
    ],
    judgingCriteria: [
      "Storytelling — 30 Marks",
      "Creativity & Originality — 25 Marks",
      "Cinematography — 20 Marks",
      "Editing & Technical Quality — 15 Marks",
      "Overall Impact — 10 Marks",
    ],
    prizes: ["🥇 1st Prize: ₹2,000", "🥈 2nd Prize: ₹1,000", "🥉 3rd Prize: ₹500"],
    teamSize: "2–4 Members",
    duration: "24-hour window",
  },



  /* ─────────────────────── ADVENTURE ─────────────────────── */

  {
    slug: "shikari",
    name: "SHIKARI",
    eventName: "Treasure Hunt — Tech Quest",
    image: "/shikari.jpg",
    teamLabel: "QUAD",
    category: "adventure",
    icon: "/icons/hunt.png",
    color: "#A5D6A7",
    tagline: "The campus is your map. Are you the hunter?",
    description:
      "An adventure-based technical event combining problem-solving, teamwork, observation, and logical thinking. Teams solve a series of technical and non-technical clues to navigate through different campus locations in search of the final treasure. Each clue leads to the next checkpoint where participants face new challenges, puzzles, riddles, or tasks before advancing.",
    rounds: [
      {
        name: "Campus Trail",
        description: "Each team receives the first clue at the starting point. Solving each clue reveals the next checkpoint location. At every checkpoint, teams complete a challenge before receiving the next clue. Challenge types: Technical Riddles · QR Code Scanning · Binary Code Decoding · Cipher Puzzles · Logic Questions · Memory Challenges · Mini Coding Questions · Observation Tasks · Hidden Object Search · Team Coordination Activities. First team to clear all checkpoints and reach the final destination wins.",
        duration: "~2–3 Hours",
      },
    ],
    rules: [
      "All team members must remain together throughout",
      "Teams must follow designated campus boundaries",
      "Mobile phones only for QR code scanning if instructed",
      "Damaging clues or interfering with other teams is prohibited",
      "Organizers' and judges' decisions are final",
    ],
    judgingCriteria: [
      "Completion of All Checkpoints",
      "Accuracy of Challenge Solutions",
      "Time Taken",
      "Team Coordination",
      "Rule Compliance",
    ],
    prizes: ["🥇 1st Prize: ₹3,000", "🥈 2nd Prize: ₹2,000", "🥉 3rd Prize: ₹1,000"],
    teamSize: "4 Members",
    duration: "~2–3 Hours",
  },

  /* ─────────────────────── GAMING (RANARANGA) ─────────────────────── */

  {
    slug: "kurukshetra",
    name: "KURUKSHETRA",
    eventName: "BGMI",
    teamLabel: "SQUAD",
    category: "gaming",
    icon: "/icons/bgmi.png",
    color: "#E5A93C",
    tagline: "The battlefield awaits. Only legends survive.",
    description:
      "Squad up and conquer the digital Kurukshetra in BGMI. Squad-based elimination tournament under standard BGMI tournament rules. Bring your best strategy, coordination, and firepower. Only the last squad standing will have their names written in the annals of AIKYAM.",
    rules: [
      "Team of 4 (Squad mode)",
      "Tournament format — Elimination rounds",
      "Bring your own device (BYOD) — mobile only",
      "No emulators allowed",
      "Registration required before event day",
      "Fair play — hacks/cheats = instant ban",
    ],
    judgingCriteria: ["Placement Points + Kill Points combined"],
    prizes: ["🥇 1st Prize: ₹3,000", "🥈 2nd Prize: ₹2,000"],
    teamSize: "4 Members (Squad)",
    duration: "Full day event",
  },

  {
    slug: "vyuha",
    name: "VYUHA",
    eventName: "Valorant",
    teamLabel: "QUINT",
    category: "gaming",
    icon: "/icons/valorent.png",
    color: "#FF4655",
    tagline: "Tactical minds. Precise shots. One winner.",
    description:
      "A 5v5 tactical shooter tournament where strategy meets sharpshooting. Teams compete through bracket stages to claim the VYUHA championship. Standard competitive Valorant ruleset, double elimination bracket, map pool and agent bans decided by organisers.",
    rules: [
      "Team of 5",
      "Double elimination bracket",
      "Standard Valorant competitive rules apply",
      "Agent bans: 2 per team",
      "Map pool: Bind, Haven, Split, Lotus",
      "PC gaming — tournament PC provided",
    ],
    judgingCriteria: ["Match wins", "Round differential as tiebreaker"],
    prizes: ["🥇 1st Prize: ₹3,000", "🥈 2nd Prize: ₹2,000"],
    teamSize: "5 Members",
    duration: "Full day event",
  },

  {
    slug: "ranabhoomi",
    name: "RANABHOOMI",
    eventName: "Free Fire",
    teamLabel: "SQUAD",
    category: "gaming",
    icon: "/icons/freefire.png",
    color: "#FF9800",
    tagline: "Drop in. Survive. Dominate.",
    description:
      "The RANABHOOMI survival tournament in Free Fire MAX. Squad-based battle royale with multiple matches — points-based ranking decides the champions of the arena. Custom room hosted by organisers. Lag or disconnect does not guarantee a restart.",
    rules: [
      "Team of 4 (Squad mode)",
      "Mobile devices only — no emulators",
      "3 matches — points aggregate",
      "Kill points + placement points scoring",
      "Custom room hosted by organisers",
      "Lag/disconnect — no restart policy",
    ],
    judgingCriteria: ["Placement Points + Kill Points combined"],
    prizes: ["🥇 1st Prize: ₹3,000", "🥈 2nd Prize: ₹2,000"],
    teamSize: "4 Members (Squad)",
    duration: "Half-day event",
  },
];

/* ── Helpers ─────────────────────────────────────────── */

export const getCategoryColor = (cat: EventCategory): string => ({
  tech:      "#4FC3F7",
  creative:  "#CE93D8",
  adventure: "#A5D6A7",
  gaming:    "#FF6B35",
})[cat];

export const getCategoryLabel = (cat: EventCategory): string => ({
  tech:      "Tech",
  creative:  "Creative",
  adventure: "Adventure",
  gaming:    "Gaming",
})[cat];
