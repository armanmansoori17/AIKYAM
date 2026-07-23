(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var r in i)Object.defineProperty(t,r,{enumerable:!0,get:i[r]});let n=e.r(90809)._(e.r(98183)),o=/https?|ftp|gopher|file/;function s(e){let{auth:a,hostname:t}=e,i=e.protocol||"",r=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;a=a?encodeURIComponent(a).replace(/%3A/i,":")+"@":"",e.host?c=a+e.host:t&&(c=a+(~t.indexOf(":")?`[${t}]`:t),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==c?(c="//"+(c||""),r&&"/"!==r[0]&&(r="/"+r)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),r=r.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${i}${c}${r}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return r}});let i=e.r(71645);function r(e,a){let t=(0,i.useRef)(null),r=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=t.current;e&&(t.current=null,e());let a=r.current;a&&(r.current=null,a())}else e&&(t.current=n(e,i)),a&&(r.current=n(a,i))},[e,a])}function n(e,a){if("function"!=typeof e)return e.current=a,()=>{e.current=null};{let t=e(a);return"function"==typeof t?t:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),a.exports=t.default)},73668,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return n}});let i=e.r(18967),r=e.r(52817);function n(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let a=(0,i.getLocationOrigin)(),t=new URL(e,a);return t.origin===a&&(0,r.hasBasePath)(t.pathname)}catch(e){return!1}}},84508,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},22016,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={default:function(){return b},useLinkStatus:function(){return v}};for(var r in i)Object.defineProperty(t,r,{enumerable:!0,get:i[r]});let n=e.r(90809),o=e.r(43476),s=n._(e.r(71645)),l=e.r(95057),c=e.r(8372),d=e.r(18581),p=e.r(18967),m=e.r(5550);e.r(33525);let u=e.r(88540),g=e.r(91949),h=e.r(73668),f=e.r(9396);function b(a){var t,i;let r,n,b,[v,y]=(0,s.useOptimistic)(g.IDLE_LINK_STATUS),w=(0,s.useRef)(null),{href:N,as:T,children:k,prefetch:j=null,passHref:S,replace:A,shallow:C,scroll:M,onClick:P,onMouseEnter:I,onTouchStart:z,legacyBehavior:O=!1,onNavigate:E,transitionTypes:R,ref:F,unstable_dynamicOnHover:L,...D}=a;r=k,O&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let B=s.default.useContext(c.AppRouterContext),U=!1!==j,H=!1!==j?null===(i=j)||"auto"===i?f.FetchStrategy.PPR:f.FetchStrategy.Full:f.FetchStrategy.PPR,q="string"==typeof(t=T||N)?t:(0,l.formatUrl)(t);if(O){if(r?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=s.default.Children.only(r)}let G=O?n&&"object"==typeof n&&n.ref:F,K=s.default.useCallback(e=>(null!==B&&(w.current=(0,g.mountLinkInstance)(e,q,B,H,U,y)),()=>{w.current&&((0,g.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,g.unmountPrefetchableInstance)(e)}),[U,q,B,H,y]),V={ref:(0,d.useMergedRef)(K,G),onClick(a){O||"function"!=typeof P||P(a),O&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(a),!B||a.defaultPrevented||function(a,t,i,r,n,o,l){if("u">typeof window){let c,{nodeName:d}=a.currentTarget;if("A"===d.toUpperCase()&&((c=a.currentTarget.getAttribute("target"))&&"_self"!==c||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.nativeEvent&&2===a.nativeEvent.which)||a.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(t)){r&&(a.preventDefault(),location.replace(t));return}if(a.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(99781);s.default.startTransition(()=>{p(t,r?"replace":"push",!1===n?u.ScrollBehavior.NoScroll:u.ScrollBehavior.Default,i.current,l)})}}(a,q,w,A,M,E,R)},onMouseEnter(e){O||"function"!=typeof I||I(e),O&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),B&&U&&(0,g.onNavigationIntent)(e.currentTarget,!0===L)},onTouchStart:function(e){O||"function"!=typeof z||z(e),O&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),B&&U&&(0,g.onNavigationIntent)(e.currentTarget,!0===L)}};return(0,p.isAbsoluteUrl)(q)?V.href=q:O&&!S&&("a"!==n.type||"href"in n.props)||(V.href=(0,m.addBasePath)(q)),b=O?s.default.cloneElement(n,V):(0,o.jsx)("a",{...D,...V,children:r}),(0,o.jsx)(x.Provider,{value:v,children:b})}e.r(84508);let x=(0,s.createContext)(g.IDLE_LINK_STATUS),v=()=>(0,s.useContext)(x);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),a.exports=t.default)},89621,e=>{"use strict";e.s(["events",0,[{slug:"agnipariksha",name:"AGNIPARIKSHA",eventName:"Stress Interview — Know Yourself Challenge",teamLabel:"SOLO",category:"tech",icon:"/icons/stress.png",image:"/stres.webp",color:"#4FC3F7",tagline:"Face the heat. Emerge unbroken.",description:"A unique event designed to test confidence, communication skills, self-awareness, and ability to perform under pressure. The event begins with a 3-minute talent showcase — singing, dancing, mimicry, drawing, coding, public speaking, magic, or any skill. Judges then conduct a stress interview with unexpected, challenging, and situational questions. Before scores are revealed, the participant self-evaluates out of 10. The contestant whose self-score exactly matches (or is closest to) the judges' average wins.",rounds:[{name:"Stress Interview — Know Yourself",description:"The event begins with a 3-minute talent showcase (singing, dancing, mimicry, coding, public speaking, magic, or any skill). Judges then conduct a 5–7 minute stress interview with unexpected, challenging, and situational questions. Before scores are revealed, the participant self-evaluates out of 10. The contestant whose self-score exactly matches (or is closest to) the judges' average wins.",duration:"8–10 minutes per participant"}],judgingCriteria:["Confidence","Communication","Presence of Mind","Self-Awareness"],prizes:["100% of total registration collections distributed among winner(s)"],teamSize:"Individual",duration:"8–10 minutes per participant",venue:"Stage"},{slug:"chakravyuha",name:"CHAKRAVYUHA",eventName:"Debugging Challenge — Code Rescue",teamLabel:"DUO",category:"tech",icon:"/icons/debug.png",image:"/debuggp1.webp",color:"#4FC3F7",tagline:"Enter the maze. Find the bug. Escape with glory.",description:"A competitive programming event that tests debugging skills, logical thinking, teamwork, coding ability, and problem-solving under time constraints. Teams must work together to identify bugs, understand program logic, and solve coding challenges within the given time — simulating real-world software development where collaboration and efficient debugging are essential.",rounds:[{name:"Round 1 — Bug Hunt",description:"Teams receive multiple programs containing syntax errors, logical errors, runtime errors, and output errors. Identify and fix as many bugs as possible. Top scores qualify for the next round.",duration:"45 minutes",qualification:"Top teams qualify"},{name:"Round 2 — Wire the Logic",description:"Qualified teams receive shuffled code snippets, algorithms, or program execution steps. Arrange them in the correct logical order so the program executes successfully. Evaluates logical thinking, teamwork, and understanding of programming concepts.",duration:"30 minutes",qualification:"Top teams qualify"},{name:"Round 3 — Code Sprint Finale",description:"Finalist teams receive 10 programming challenges — debugging tasks and coding problems. Some require fixing existing code; others require writing complete programs from scratch. Each problem carries different marks based on difficulty. In case of a tie, the team with shortest completion time ranks higher.",duration:"30 minutes"}],rules:["Team of 2 members","One Computer/Laptop per Team","Programming IDE or Code Editor required","No internet access during rounds","Tiebreaker: shortest completion time"],judgingCriteria:["Accuracy of Solutions","Debugging Skills","Logical Thinking","Teamwork","Code Efficiency","Completion Time (Tiebreaker)"],prizes:["🥇 1st Prize: ₹2,000","🥈 2nd Prize: ₹1,000","🥉 3rd Prize: ₹500"],teamSize:"2 Members",duration:"~105 minutes total"},{slug:"sarvajna",name:"SARVAJNA",eventName:"IT Quiz — Tech Titans",teamLabel:"TRIO",category:"tech",icon:"/icons/quiz.png",image:"/quiz.webp",color:"#4FC3F7",tagline:"The all-knowing triumphs. Are you Sarvajna?",description:"A dynamic knowledge-based competition testing technical knowledge, logical thinking, teamwork, and quick decision-making across IT domains. Combines written questions, rapid-fire challenges, and an interactive stage finale. Questions cover programming, databases, networking, cybersecurity, AI, OS, hardware, software, and latest tech trends.",rounds:[{name:"Round 1 — Tech Challenge (Written + Visual)",description:"Teams face a written quiz covering MCQs, Output Prediction, Identify the Programming Language, Guess the Tech Logo, Find the Error, Match the Following, True or False, Identify Hardware/Software, and Current Tech Trends.",duration:"30 minutes",qualification:"Top 8 Teams"},{name:"Round 2 — Rapid Fire & Buzzer",description:"Each qualified team gets a 60-second Rapid Fire Round on Programming, AI, Cybersecurity, Networking, DBMS, OS, Tech Companies, and General IT. Followed by a Buzzer Round — +10 for correct, −5 for incorrect answers.",duration:"Per team + buzzer",qualification:"Top 4 Teams"},{name:"Final Round — Tech Treasure Box",description:"15–20 numbered Treasure Boxes on stage, each containing a unique technical challenge at varying difficulty: 🟢 Easy (10pts) · 🟡 Medium (20pts) · 🔴 Hard (30pts). Challenge types: Code Output, Binary Decode, Morse Code, Logo Guess, Bug Find, SQL Query, Debug, Networking, AI Questions, Programming Puzzles. Wrong answers can be stolen by other teams for 50% of points."}],judgingCriteria:["Accuracy","Speed","Breadth of Technical Knowledge"],prizes:["🥇 1st Prize: ₹2,000","🥈 2nd Prize: ₹1,000","🥉 3rd Prize: ₹500"],teamSize:"3 Members",duration:"Multi-round"},{slug:"lakshya",name:"LAKSHYA",eventName:"Startup Pitch",teamLabel:"TRIO",category:"tech",icon:"/icons/startup.png",image:"/startUP.webp",color:"#4FC3F7",tagline:"Dream big. Pitch bold. Win the future.",description:"An entrepreneurship competition providing aspiring innovators a platform to present startup ideas before a panel of judges. Participants identify real-world problems, develop innovative business solutions, and demonstrate market viability in a 10-minute slot. The event evaluates innovation, business strategy, market potential, feasibility, presentation skills, and ability to defend ideas under pressure.",rounds:[{name:"Startup Pitch",description:"7-minute presentation + 3-minute Judge Q&A. Must cover: Startup Name, Problem Statement, Proposed Solution, Target Customers, Business Model, Revenue Model, Market Opportunity, Competitor Analysis, Technology Used, Marketing Strategy, Scalability, and Future Scope.",duration:"10 minutes per team"}],judgingCriteria:["Innovation & Originality — 20 Marks","Problem & Solution — 15 Marks","Business Model — 15 Marks","Market Potential — 15 Marks","Feasibility & Scalability — 15 Marks","Presentation & Confidence — 10 Marks","Judge Q&A — 10 Marks"],prizes:["🥇 1st Prize: ₹3,000","🥈 2nd Prize: ₹2,000","🥉 3rd Prize: ₹1,000"],teamSize:"3 Members",duration:"10 minutes per team"},{slug:"dyutha-sabha",name:"DYUTHA SABHA",eventName:"Debate-IT — Spin & Switch",teamLabel:"DUO",category:"tech",icon:"/icons/debate.png",image:"/debate.webp",color:"#4FC3F7",tagline:"Words are weapons. Wield them wisely.",description:"A unique technical debate where participants not only defend their assigned viewpoint but also instantly switch sides and argue the opposite without any preparation. Tests critical thinking, adaptability, confidence, and ability to present balanced arguments on trending technology topics like AI, Gaming, Cybersecurity, Startups, Social Media, Online Education, Cryptocurrency, and Privacy vs Security.",rounds:[{name:"Round 1 — Spin the Topic",description:"Teams compete head-to-head by spinning the Topic Wheel. One team argues FOR, the other AGAINST. Format: 2-min prep → 3 minutes per team. Top 6 teams qualify.",duration:"~10 minutes per pair",qualification:"Top 6 Teams"},{name:"Grand Finale — Switch Sides",description:"Finalists spin the Topic Wheel again. Phase 1: 2-min prep → 3 minutes per team. Then the moderator announces 'SWITCH!' — without any prep, teams immediately flip sides. Phase 2: 2-min reverse argument + 1-min rebuttal per team. Tests adaptability and presence of mind like nothing else."}],judgingCriteria:["Knowledge of the Topic — 25 Marks","Logical Thinking — 25 Marks","Communication Skills — 20 Marks","Presence of Mind — 20 Marks","Rebuttal Skills — 10 Marks"],prizes:["🥇 1st Prize: ₹2,000","🥈 2nd Prize: ₹1,000","🥉 3rd Prize: ₹500"],teamSize:"2 Members",duration:"~15 minutes per round"},{slug:"vishwakarma",name:"VISHWAKARMA",eventName:"10-Hour National Hackathon",teamLabel:"TEAM (2–4)",category:"tech",icon:"/icons/hackathon-icon-transparent.png",color:"#4FC3F7",tagline:"Build the impossible. In 10 hours.",description:"The flagship event of AIKYAM 2K26 — the 10-Hour National Hackathon. Participants develop innovative software or hardware solutions that address real-world problems using modern technologies. The event provides a platform for students to transform ideas into functional prototypes, demonstrating technical, presentation, and teamwork skills.",rounds:[{name:"Round 1 — Idea Pitch",description:"Each team presents their proposed solution before judges. 5-minute pitch + 3-minute Q&A. Cover: Problem Statement, Proposed Solution, Target Users, Technology Stack, Innovation, Expected Impact, Feasibility, and Future Scope.",duration:"5 min pitch + 3 min Q&A",qualification:"Top 10 Teams shortlisted"},{name:"Round 2 — 10-Hour Build Challenge",description:"Shortlisted teams build for 10 straight hours. Teams develop a working prototype, design UI, implement core features, prepare a presentation, test and refine.",duration:"10 Hours"}],judgingCriteria:["Innovation & Creativity — 20 Marks","Technical Implementation — 20 Marks","Working Prototype — 20 Marks","UI/UX Design — 10 Marks","Features & Functionality — 10 Marks","Real-World Impact — 10 Marks","Presentation & Demonstration — 10 Marks"],rules:["Teams of 2–4 members","Projects must be developed during the hackathon period","Open-source libraries and APIs permitted","Previously developed projects not allowed","Submit source code and presentation before deadline","Final presentation conducted via Google Meet (screen sharing)"],prizes:["Prize Pool: ₹20,000"],teamSize:"2–4 Members",duration:"10 Hours"},{slug:"chitrasutra",name:"CHITRASUTRA",eventName:"POSTER MAKING — DESIGN FOR IMPACT",image:"/poster.webp",teamLabel:"DUO",category:"creative",icon:"/icons/poster.png",color:"#CE93D8",tagline:"Paint the message. Move the world.",description:"A creative design competition challenging participants to transform innovative ideas into visually compelling posters. Tests creativity, design skills, originality, visual communication, and the ability to convey a powerful message through design. Theme is announced on the spot — teams must create an impactful, informative poster using digital tools or traditional hand-drawn methods.",rounds:[{name:"Theme Reveal",description:"Teams receive a technical theme on the spot and design a poster within 90 minutes. Sample themes: Artificial Intelligence · Cyber Security · Digital India · Smart Cities · Green Technology · Future of Computing · Robotics · Space Technology · Sustainable Innovation · Women in Technology. Teams are free to use their creativity while ensuring the poster effectively communicates the assigned theme.",duration:"90 minutes"}],judgingCriteria:["Creativity & Originality — 30 Marks","Relevance to Theme — 20 Marks","Visual Appeal — 20 Marks","Design Composition — 15 Marks","Innovation — 10 Marks","Overall Presentation — 5 Marks"],prizes:["🥇 1st Prize: ₹1,500","🥈 2nd Prize: ₹1,000","🥉 3rd Prize: ₹500"],teamSize:"2 Members",duration:"90 minutes"},{slug:"drishyakala",name:"DRISHYAKALA",eventName:"PHOTOGRAPHY — PIXEL VISION",image:"/photo.webp",teamLabel:"SOLO",category:"creative",icon:"/icons/photo.png",color:"#CE93D8",tagline:"One frame. A thousand words.",description:"A creative photography competition testing creativity, observation, storytelling, and technical photography skills. Participants capture original photographs based on five themes announced at 10:00 AM — exploring the campus to create impactful images that represent each theme. Max 2 photos per theme (10 total). Submit before 2:00 PM.",rounds:[{name:"Challenge",description:"At 10:00 AM, five photography themes are revealed. Capture photographs for all five themes — max 2 per theme (10 total). Photography session: 10:00 AM → 2:00 PM. Example themes: Innovation · Technology Around Us · Campus Life · Motion · Reflections. Basic editing (brightness, contrast, cropping, color correction) permitted. AI-generated images and heavy manipulation strictly prohibited.",duration:"10:00 AM → 2:00 PM"}],rules:["All five themes are compulsory","Maximum 2 photographs per theme","All photos must be captured between 10 AM and 2 PM","Only original photographs taken during the competition","Basic editing allowed — no AI or stock images","All entries must be submitted before 2:00 PM"],judgingCriteria:["Creativity & Originality — 30 Marks","Relevance to the Theme — 25 Marks","Composition & Framing — 20 Marks","Technical Quality — 15 Marks","Visual Storytelling & Impact — 10 Marks"],prizes:["🥇 1st Prize: ₹1,500","🥈 2nd Prize: ₹1,000","🥉 3rd Prize: ₹500"],teamSize:"Individual",duration:"10:00 AM – 2:00 PM"},{slug:"drishyakavya",name:"DRISHYAKAVYA",eventName:"VIDEOGRAPHY — CINEMATIC VISION",image:"/video.webp",teamLabel:"DUO",category:"creative",icon:"/icons/video.png",color:"#CE93D8",tagline:"One reel. Infinite stories.",description:"A creative filmmaking competition testing storytelling, cinematography, editing, creativity, and technical skills. Teams conceptualize, shoot, edit, and produce an original 2–5 minute short film based on one of three themes announced at 10:00 AM on Day 1. Teams have a full 24-hour window to plan, shoot, edit, add music/subtitles/effects, and finalize their production.",rounds:[{name:"Challenge",description:"At 10:00 AM Day 1, three themes are announced. Teams choose one and produce a 2–5 minute original short film. Full 24-hour window: 10 AM Day 1 → 10 AM Day 2 to develop concept, write script, shoot, edit, add BGM/subtitles/transitions/color grading, and export. Sample themes: Innovation · Technology for Good · Campus Life · The Future · Human Emotions · Digital World · Teamwork · Beyond Reality.",duration:"24 hours (submit by 10 AM Day 2)"}],rules:["Concept and production must begin only after themes are announced","All footage must be captured during the competition period","Smartphones, DSLRs, mirrorless cameras, drones (if permitted) allowed","BGM, subtitles, VFX, color grading, and transitions permitted","AI-generated videos and copyrighted content strictly prohibited","Final video must be 2–5 minutes in duration"],judgingCriteria:["Storytelling — 30 Marks","Creativity & Originality — 25 Marks","Cinematography — 20 Marks","Editing & Technical Quality — 15 Marks","Overall Impact — 10 Marks"],prizes:["🥇 1st Prize: ₹2,000","🥈 2nd Prize: ₹1,000","🥉 3rd Prize: ₹500"],teamSize:"2–4 Members",duration:"24-hour window"},{slug:"shikari",name:"SHIKARI",eventName:"Treasure Hunt — Tech Quest",image:"/shikari.webp",teamLabel:"QUAD",category:"adventure",icon:"/icons/hunt.png",color:"#A5D6A7",tagline:"The campus is your map. Are you the hunter?",description:"An adventure-based technical event combining problem-solving, teamwork, observation, and logical thinking. Teams solve a series of technical and non-technical clues to navigate through different campus locations in search of the final treasure. Each clue leads to the next checkpoint where participants face new challenges, puzzles, riddles, or tasks before advancing.",rounds:[{name:"Campus Trail",description:"Each team receives the first clue at the starting point. Solving each clue reveals the next checkpoint location. At every checkpoint, teams complete a challenge before receiving the next clue. Challenge types: Technical Riddles · QR Code Scanning · Binary Code Decoding · Cipher Puzzles · Logic Questions · Memory Challenges · Mini Coding Questions · Observation Tasks · Hidden Object Search · Team Coordination Activities. First team to clear all checkpoints and reach the final destination wins.",duration:"~2–3 Hours"}],rules:["All team members must remain together throughout","Teams must follow designated campus boundaries","Mobile phones only for QR code scanning if instructed","Damaging clues or interfering with other teams is prohibited","Organizers' and judges' decisions are final"],judgingCriteria:["Completion of All Checkpoints","Accuracy of Challenge Solutions","Time Taken","Team Coordination","Rule Compliance"],prizes:["🥇 1st Prize: ₹3,000","🥈 2nd Prize: ₹2,000","🥉 3rd Prize: ₹1,000"],teamSize:"4 Members",duration:"~2–3 Hours"},{slug:"kurukshetra",name:"KURUKSHETRA",eventName:"BGMI",teamLabel:"SQUAD",category:"gaming",icon:"/icons/bgmi.png",color:"#E5A93C",tagline:"The battlefield awaits. Only legends survive.",description:"Squad up and conquer the digital Kurukshetra in BGMI. Squad-based elimination tournament under standard BGMI tournament rules. Bring your best strategy, coordination, and firepower. Only the last squad standing will have their names written in the annals of AIKYAM.",rules:["Team of 4 (Squad mode)","Tournament format — Elimination rounds","Bring your own device (BYOD) — mobile only","No emulators allowed","Registration required before event day","Fair play — hacks/cheats = instant ban"],judgingCriteria:["Placement Points + Kill Points combined"],prizes:["🥇 1st Prize: ₹3,000","🥈 2nd Prize: ₹2,000"],teamSize:"4 Members (Squad)",duration:"Full day event"},{slug:"vyuha",name:"VYUHA",eventName:"Valorant",teamLabel:"QUINT",category:"gaming",icon:"/icons/valorent.png",color:"#FF4655",tagline:"Tactical minds. Precise shots. One winner.",description:"A 5v5 tactical shooter tournament where strategy meets sharpshooting. Teams compete through bracket stages to claim the VYUHA championship. Standard competitive Valorant ruleset, double elimination bracket, map pool and agent bans decided by organisers.",rules:["Team of 5","Double elimination bracket","Standard Valorant competitive rules apply","Agent bans: 2 per team","Map pool: Bind, Haven, Split, Lotus","PC gaming — tournament PC provided"],judgingCriteria:["Match wins","Round differential as tiebreaker"],prizes:["🥇 1st Prize: ₹3,000","🥈 2nd Prize: ₹2,000"],teamSize:"5 Members",duration:"Full day event"},{slug:"ranabhoomi",name:"RANABHOOMI",eventName:"Free Fire",teamLabel:"SQUAD",category:"gaming",icon:"/icons/freefire.png",color:"#FF9800",tagline:"Drop in. Survive. Dominate.",description:"The RANABHOOMI survival tournament in Free Fire MAX. Squad-based battle royale with multiple matches — points-based ranking decides the champions of the arena. Custom room hosted by organisers. Lag or disconnect does not guarantee a restart.",rules:["Team of 4 (Squad mode)","Mobile devices only — no emulators","3 matches — points aggregate","Kill points + placement points scoring","Custom room hosted by organisers","Lag/disconnect — no restart policy"],judgingCriteria:["Placement Points + Kill Points combined"],prizes:["🥇 1st Prize: ₹3,000","🥈 2nd Prize: ₹2,000"],teamSize:"4 Members (Squad)",duration:"Half-day event"}],"getCategoryColor",0,e=>({tech:"#4FC3F7",creative:"#CE93D8",adventure:"#A5D6A7",gaming:"#FF6B35"})[e]])},80590,e=>{"use strict";var a=e.i(43476),t=e.i(71645),i=e.i(22016),r=e.i(89621);e.s(["default",0,function(){let[e,n]=(0,t.useState)(!0),[o,s]=(0,t.useState)("lobby"),[l,c]=(0,t.useState)(!1),d=r.events.find(e=>"vyuha"===e.slug);return((0,t.useEffect)(()=>{let e=setTimeout(()=>n(!1),1600);return()=>clearTimeout(e)},[]),(0,t.useEffect)(()=>{let e=()=>{window.scrollY>80?c(!0):c(!1);let e=window.scrollY+150;for(let a of["lobby","details","format","rules","bounty"]){let t=document.getElementById(a);if(t){let i=t.offsetTop,r=t.offsetHeight;if(e>=i&&e<i+r){"details"===a?s("lobby"):s(a);break}}}};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),d)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Teko:wght@400;600;700&family=Oswald:wght@400;500;600;700&family=Share+Tech+Mono&family=Barlow+Condensed:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400;1,700&display=swap');

        html {
          scroll-behavior: smooth;
        }

        :root {
          --val-red: #FF4655;
          --val-dark: #0F1722;
          --val-black: #080C12;
          --val-cream: #ECE8E1;
          --val-gray: #1F2326;
          --val-blue: #00F0FF;
          --val-border: rgba(255, 70, 85, 0.35);
        }

        .val-world {
          background-color: var(--val-black);
          color: var(--val-cream);
          font-family: 'Barlow Condensed', sans-serif;
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
          position: relative;
        }

        /* Glitch Loader Screen */
        .val-loader {
          position: fixed;
          inset: 0;
          background: #080C12;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          transition: opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .val-loader.hidden {
          opacity: 0;
          pointer-events: none;
        }

        .loader-glitch-text {
          font-family: 'Oswald', sans-serif;
          font-size: 5rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 12px;
          text-transform: uppercase;
          position: relative;
          animation: val-glitch 1s infinite alternate;
        }
        .loader-glitch-text::before,
        .loader-glitch-text::after {
          content: 'VALORANT';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #080C12;
        }
        .loader-glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 var(--val-red);
          clip: rect(44px, 450px, 56px, 0);
          animation: val-glitch-anim 5s infinite linear alternate-reverse;
        }
        .loader-glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 var(--val-blue);
          clip: rect(85px, 450px, 140px, 0);
          animation: val-glitch-anim2 5s infinite linear alternate-reverse;
        }

        .loader-status {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.9rem;
          color: var(--val-red);
          letter-spacing: 4px;
          margin-top: 20px;
          text-transform: uppercase;
          animation: blink 0.8s infinite;
        }

        @keyframes val-glitch {
          0% { text-shadow: 1px 1px 0 var(--val-red), -1px -1px 0 var(--val-blue); }
          100% { text-shadow: -1px 1px 0 var(--val-red), 1px -1px 0 var(--val-blue); }
        }
        @keyframes val-glitch-anim {
          0% { clip: rect(15px, 9999px, 66px, 0); }
          100% { clip: rect(34px, 9999px, 55px, 0); }
        }
        @keyframes val-glitch-anim2 {
          0% { clip: rect(70px, 9999px, 105px, 0); }
          100% { clip: rect(12px, 9999px, 85px, 0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Fixed Background Image with overlays */
        .val-bg-wallpaper {
          position: fixed;
          inset: 0;
          background-image: url('/vyuha-wallpaper.jpg');
          background-size: cover;
          background-position: right center;
          z-index: 0;
          pointer-events: none;
          transition: background-position 0.3s ease;
        }
        @media (max-width: 991px) {
          .val-bg-wallpaper {
            background-position: 70% center;
          }
        }
        .lobby-left-side {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        .val-bg-overlay {
          position: fixed;
          inset: 0;
          background: 
            radial-gradient(circle at 70% 30%, rgba(15, 23, 34, 0.3) 0%, rgba(8, 12, 18, 0.95) 75%),
            linear-gradient(180deg, rgba(8, 12, 18, 0.5) 0%, rgba(8, 12, 18, 0.9) 100%);
          z-index: 1;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .val-bg-overlay.scrolled {
          opacity: 0.85;
        }

        /* Page Layout Grid */
        .val-layout {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Navbar Styling */
        .val-navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 4%;
          height: 90px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(8, 12, 18, 0.95);
          backdrop-filter: blur(12px);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }
        .val-nav-left {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .val-back-btn {
          font-family: 'Share Tech Mono', monospace;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          font-size: 0.85rem;
          letter-spacing: 2px;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s;
          text-transform: uppercase;
        }
        .val-back-btn:hover {
          color: var(--val-red);
        }

        /* Center Navigation Links */
        .val-tabs {
          display: flex;
          height: 100%;
          align-items: stretch;
        }
        .val-tab-item {
          font-family: 'Oswald', sans-serif;
          font-size: 1.15rem;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(236, 232, 225, 0.4);
          background: transparent;
          border: none;
          padding: 0 35px;
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          transition: color 0.3s;
          height: 90px;
          text-decoration: none;
        }
        .val-tab-item:hover {
          color: var(--val-cream);
        }
        .val-tab-item::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--val-red);
          transform: scaleX(0);
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          box-shadow: 0 0 10px var(--val-red);
        }
        .val-tab-item.active {
          color: #fff;
        }
        .val-tab-item.active::after {
          transform: scaleX(1);
        }

        /* Right CTA (LOCK IN) */
        .val-lockin-btn {
          background: var(--val-red);
          color: #000;
          font-family: 'Oswald', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          padding: 10px 32px;
          clip-path: polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px);
          transition: all 0.3s ease;
          display: inline-block;
          border: 1px solid transparent;
          box-shadow: 0 0 15px rgba(255, 70, 85, 0.4);
        }
        .val-lockin-btn:hover {
          background: #fff;
          color: var(--val-red);
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.7);
          transform: scale(1.03);
        }

        /* Main Container */
        .val-container {
          flex: 1;
          padding: 150px 4% 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
        }

        .val-window {
          width: 100%;
          max-width: 1200px;
          background: rgba(15, 23, 34, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-left: 4px solid var(--val-red);
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
          display: grid;
          grid-template-columns: 1fr;
          position: relative;
          overflow: hidden;
          scroll-margin-top: 110px; /* Offset for sticky nav */
        }

        /* UI Corner Accents */
        .val-corners::before,
        .val-corners::after {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          border-color: rgba(255, 255, 255, 0.3);
          border-style: solid;
          pointer-events: none;
        }
        .val-corners::before {
          top: 10px;
          right: 10px;
          border-width: 1px 1px 0 0;
        }
        .val-corners::after {
          bottom: 10px;
          right: 10px;
          border-width: 0 1px 1px 0;
        }

        /* Header in HUD */
        .hud-header {
          padding: 30px 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }
        .hud-header::after {
          content: 'PROTOCOL // VYUHA';
          position: absolute;
          right: 40px;
          bottom: 8px;
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.25);
          letter-spacing: 2px;
        }
        .hud-title-wrap {
          display: flex;
          flex-direction: column;
        }
        .hud-tag {
          font-family: 'Share Tech Mono', monospace;
          color: var(--val-red);
          font-size: 0.8rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .hud-title {
          font-family: 'Oswald', sans-serif;
          font-size: 2.8rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 2px;
          text-transform: uppercase;
          line-height: 1;
        }
        .hud-subtitle {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-top: 5px;
        }

        .hud-body {
          padding: 40px;
        }

        /* Lobby Tab Styling */
        .lobby-hero {
          width: 100%;
          max-width: 1200px;
          height: calc(100vh - 90px);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-top: 80px;
          position: relative;
          scroll-margin-top: 90px;
        }
        @media (max-width: 991px) {
          .lobby-hero {
            justify-content: center;
            padding-top: 0;
          }
        }
        .scroll-hint-container {
          position: absolute;
          bottom: 40px;
          left: 0;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: float-hint 2s ease-in-out infinite;
        }
        .scroll-hint-text {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.8rem;
          color: rgba(15, 23, 34, 0.6);
          letter-spacing: 3px;
          text-transform: uppercase;
        }
        .scroll-hint-line {
          width: 40px;
          height: 1px;
          background: var(--val-red);
          box-shadow: 0 0 8px var(--val-red);
        }
        @keyframes float-hint {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-8px); opacity: 1; }
        }
        .hero-header-floating {
          margin-bottom: 35px;
          position: relative;
        }
        @media (min-width: 992px) {
          .hero-header-floating {
            left: -140px;
            top: -40px;
          }
        }
        .hero-tag-floating {
          font-family: 'Share Tech Mono', monospace;
          color: var(--val-red);
          font-size: 0.85rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 6px;
        }
        .hero-title-floating {
          font-family: 'Oswald', sans-serif;
          font-size: clamp(3.5rem, 7vw, 5.5rem);
          font-weight: 700;
          color: #bd0b21;
          letter-spacing: 3px;
          text-transform: uppercase;
          line-height: 1;
          margin: 0;
          text-shadow: 2px 2px 8px rgba(15, 23, 34, 0.25);
        }
        .hero-subtitle-floating {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.2rem;
          color: #1F2326;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-top: 6px;
        }
        .lobby-content-floating {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 991px) {
          .lobby-content-floating {
            grid-template-columns: 1fr;
          }
        }
        .hero-desc-card {
          background: rgba(15, 23, 34, 0.55);
          border-left: 4px solid var(--val-red);
          padding: 35px 40px;
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%);
        }
        .val-tagline {
          font-family: 'Oswald', sans-serif;
          font-size: 1.65rem;
          font-weight: 500;
          color: var(--val-red);
          letter-spacing: 1px;
          line-height: 1.3;
          margin-bottom: 15px;
          text-transform: uppercase;
        }
        .val-desc {
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(236, 232, 225, 0.75);
          margin: 0;
        }
        .lobby-stats-grid-floating {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .stat-card-floating {
          background: rgba(15, 23, 34, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 20px 25px;
          backdrop-filter: blur(10px);
          border-left: 3px solid rgba(255, 255, 255, 0.15);
          transition: all 0.3s ease;
        }
        .stat-card-floating:hover {
          border-left-color: var(--val-red);
          background: rgba(255, 70, 85, 0.05);
        }
        .stat-card-label {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.35);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }
        .stat-card-val {
          font-family: 'Oswald', sans-serif;
          font-size: 1.6rem;
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Format Tab Styling (Brackets) */
        .format-timeline {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .timeline-card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 30px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 250px;
          transition: all 0.3s ease;
        }
        .timeline-card:hover {
          border-color: var(--val-red);
          background: rgba(255, 70, 85, 0.02);
        }
        .timeline-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        .timeline-num {
          font-family: 'Share Tech Mono', monospace;
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1;
          color: rgba(255, 70, 85, 0.25);
          transition: color 0.3s;
        }
        .timeline-card:hover .timeline-num {
          color: var(--val-red);
        }
        .timeline-badge {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.7rem;
          color: var(--val-blue);
          border: 1px solid var(--val-blue);
          padding: 2px 8px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .timeline-title {
          font-family: 'Oswald', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }
        .timeline-desc {
          font-size: 0.95rem;
          color: rgba(236, 232, 225, 0.6);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .timeline-footer {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.8rem;
          color: var(--val-cream);
          opacity: 0.5;
          letter-spacing: 1px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 15px;
          margin-top: auto;
        }

        /* Rules & Intel Tab Styling */
        .rules-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
        }
        .rules-column {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .rules-item {
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 20px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          transition: all 0.3s ease;
        }
        .rules-item:hover {
          background: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 255, 255, 0.1);
        }
        .rule-index {
          font-family: 'Share Tech Mono', monospace;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--val-red);
          background: rgba(255, 70, 85, 0.15);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          clip-path: polygon(6px 0%, 100% 0%, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0% 100%, 0% 6px);
        }
        .rule-text {
          font-size: 1rem;
          color: rgba(236, 232, 225, 0.75);
          line-height: 1.6;
        }

        /* Map Pool Section */
        .map-section-title {
          font-family: 'Oswald', sans-serif;
          font-size: 1.3rem;
          font-weight: 500;
          color: #fff;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .map-section-title::after {
          content: '';
          height: 1px;
          flex: 1;
          background: rgba(255, 255, 255, 0.08);
        }
        .maps-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }
        .map-card {
          height: 120px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
          background: #111;
          cursor: crosshair;
        }
        .map-card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.35;
          transition: all 0.5s ease;
        }
        .map-card:hover .map-card-bg {
          opacity: 0.65;
          transform: scale(1.08);
        }
        .map-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8, 12, 18, 0.9) 0%, transparent 80%);
          z-index: 1;
        }
        .map-info {
          position: relative;
          z-index: 2;
          padding: 15px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .map-coords {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.65rem;
          color: var(--val-blue);
          letter-spacing: 1px;
          margin-bottom: 2px;
        }
        .map-name {
          font-family: 'Oswald', sans-serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.1;
        }

        /* Bounty (Prizes) Tab Styling */
        .bounty-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .bounty-item {
          display: flex;
          align-items: center;
          gap: 30px;
          padding: 25px 40px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
        }
        .bounty-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
        }
        .bounty-gold {
          border-color: rgba(242, 169, 0, 0.2);
          background: linear-gradient(90deg, rgba(242, 169, 0, 0.03) 0%, transparent 100%);
        }
        .bounty-gold::before {
          background: #F2A900;
          box-shadow: 0 0 10px #F2A900;
        }
        .bounty-silver {
          border-color: rgba(200, 200, 200, 0.2);
          background: linear-gradient(90deg, rgba(200, 200, 200, 0.03) 0%, transparent 100%);
        }
        .bounty-silver::before {
          background: #c8c8c8;
          box-shadow: 0 0 10px #c8c8c8;
        }
        .bounty-badge {
          font-size: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.02);
          clip-path: polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .bounty-details {
          flex: 1;
        }
        .bounty-rank {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 5px;
        }
        .bounty-name {
          font-family: 'Oswald', sans-serif;
          font-size: 1.5rem;
          font-weight: 500;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .bounty-reward {
          font-family: 'Oswald', sans-serif;
          font-size: 2.8rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          letter-spacing: 1px;
        }
        .bounty-reward-val {
          color: var(--val-red);
        }
        .bounty-gold .bounty-reward-val {
          color: #F2A900;
        }
        .bounty-silver .bounty-reward-val {
          color: #c8c8c8;
        }

        /* Lock In Bottom Bar Banner */
        .bottom-cta-banner {
          width: 100%;
          max-width: 1200px;
          background: linear-gradient(135deg, rgba(255, 70, 85, 0.15) 0%, rgba(15, 23, 34, 0.95) 100%);
          border: 1px solid rgba(255, 70, 85, 0.35);
          border-left: 4px solid var(--val-red);
          padding: 40px;
          text-align: center;
          position: relative;
          backdrop-filter: blur(16px);
        }

        /* Footer Strip */
        .val-footer {
          background: rgba(8, 12, 18, 0.95);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 30px 4%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 10;
        }
        .val-footer-left {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .val-footer-logo {
          font-family: 'Oswald', sans-serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 2px;
          line-height: 1;
        }
        .val-footer-logo span {
          color: var(--val-red);
        }
        .val-footer-desc {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 0.5px;
        }
        .val-footer-credits {
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.25);
          letter-spacing: 1px;
          text-align: right;
          max-width: 450px;
          line-height: 1.5;
        }

        /* Responsiveness */
        @media (max-width: 991px) {
          .val-navbar {
            flex-direction: column;
            height: auto;
            padding: 20px 4%;
            gap: 15px;
          }
          .val-tabs {
            width: 100%;
            justify-content: center;
          }
          .val-tab-item {
            height: 50px;
            padding: 0 15px;
            font-size: 0.95rem;
          }
          .lobby-grid, .rules-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .lobby-agent-sidebar {
            border-left: none;
            padding-left: 0;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 30px;
          }
          .format-timeline {
            grid-template-columns: 1fr;
          }
          .val-footer {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .val-footer-credits {
            text-align: center;
          }
        }
      `}),(0,a.jsxs)("div",{className:`val-loader ${!e?"hidden":""}`,children:[(0,a.jsx)("div",{className:"loader-glitch-text",children:"VALORANT"}),(0,a.jsx)("div",{className:"loader-status",children:"INITIALIZING VYUHA PROTOCOL..."})]}),(0,a.jsxs)("div",{className:"val-world",children:[(0,a.jsx)("div",{className:"val-bg-wallpaper"}),(0,a.jsx)("div",{className:`val-bg-overlay ${l?"scrolled":""}`}),(0,a.jsxs)("div",{className:"val-layout",children:[(0,a.jsxs)("nav",{className:"val-navbar",children:[(0,a.jsx)("div",{className:"val-nav-left",children:(0,a.jsx)(i.default,{href:"/events",className:"val-back-btn",children:"◀ ABORT AGENT SELECT"})}),(0,a.jsxs)("div",{className:"val-tabs",children:[(0,a.jsx)(i.default,{href:"/",className:"val-tab-item",children:"Home"}),(0,a.jsx)(i.default,{href:"/events",className:"val-tab-item active",children:"Event"})]}),(0,a.jsx)("div",{className:"val-nav-right",children:(0,a.jsx)(i.default,{href:`/events/${d.slug}/register`,className:"val-lockin-btn",children:"REGISTER NOW"})})]}),(0,a.jsxs)("div",{className:"val-container",children:[(0,a.jsxs)("section",{id:"lobby",className:"lobby-hero",children:[(0,a.jsxs)("div",{className:"hero-header-floating",children:[(0,a.jsx)("span",{className:"hero-tag-floating",children:"MAP IN OPERATION"}),(0,a.jsx)("h1",{className:"hero-title-floating",children:d.name}),(0,a.jsxs)("h2",{className:"hero-subtitle-floating",children:[d.eventName," Tournament"]})]}),(0,a.jsxs)("div",{className:"scroll-hint-container",children:[(0,a.jsx)("span",{className:"scroll-hint-text",children:"SCROLL TO EXPLORE"}),(0,a.jsx)("div",{className:"scroll-hint-line"})]})]}),(0,a.jsxs)("section",{id:"details",className:"val-window val-corners",style:{scrollMarginTop:"110px"},children:[(0,a.jsx)("div",{className:"hud-header",children:(0,a.jsxs)("div",{className:"hud-title-wrap",children:[(0,a.jsx)("span",{className:"hud-tag",children:"MISSION BRIEFING"}),(0,a.jsx)("h1",{className:"hud-title",children:"EVENT OVERVIEW"}),(0,a.jsx)("h2",{className:"hud-subtitle",children:"Tactical profiles and tournament telemetry"})]})}),(0,a.jsx)("div",{className:"hud-body",children:(0,a.jsxs)("div",{className:"lobby-content-floating",style:{gridTemplateColumns:"1fr"},children:[(0,a.jsxs)("div",{className:"hero-desc-card",style:{background:"transparent",border:"none",padding:0,backdropFilter:"none",clipPath:"none",marginBottom:"35px"},children:[(0,a.jsxs)("div",{className:"val-tagline",children:["“",d.tagline,"”"]}),(0,a.jsx)("p",{className:"val-desc",style:{fontSize:"1.1rem",color:"rgba(236, 232, 225, 0.8)",lineHeight:"1.8"},children:d.description})]}),(0,a.jsxs)("div",{className:"lobby-stats-grid-floating",style:{gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))"},children:[(0,a.jsxs)("div",{className:"stat-card-floating",style:{background:"rgba(255, 255, 255, 0.02)"},children:[(0,a.jsx)("div",{className:"stat-card-label",children:"TEAM PROFILE"}),(0,a.jsx)("div",{className:"stat-card-val",children:d.teamSize})]}),(0,a.jsxs)("div",{className:"stat-card-floating",style:{background:"rgba(255, 255, 255, 0.02)"},children:[(0,a.jsx)("div",{className:"stat-card-label",children:"EVENT TIMELINE"}),(0,a.jsx)("div",{className:"stat-card-val",children:d.duration})]}),(0,a.jsxs)("div",{className:"stat-card-floating",style:{background:"rgba(255, 255, 255, 0.02)"},children:[(0,a.jsx)("div",{className:"stat-card-label",children:"VENUE LOCATION"}),(0,a.jsx)("div",{className:"stat-card-val",children:d.venue||"GRID ARENA"})]}),(0,a.jsxs)("div",{className:"stat-card-floating",style:{background:"rgba(255, 255, 255, 0.02)"},children:[(0,a.jsx)("div",{className:"stat-card-label",children:"ADMISSION"}),(0,a.jsx)("div",{className:"stat-card-val",children:"FREE ENTRY"})]})]})]})})]}),(0,a.jsxs)("section",{id:"format",className:"val-window val-corners",children:[(0,a.jsx)("div",{className:"hud-header",children:(0,a.jsxs)("div",{className:"hud-title-wrap",children:[(0,a.jsx)("span",{className:"hud-tag",children:"STAGE PROGRESSION"}),(0,a.jsx)("h1",{className:"hud-title",children:"TOURNAMENT FORMAT"}),(0,a.jsx)("h2",{className:"hud-subtitle",children:"Double Elimination Bracket"})]})}),(0,a.jsx)("div",{className:"hud-body",children:(0,a.jsxs)("div",{className:"format-timeline",children:[(0,a.jsxs)("div",{className:"timeline-card",children:[(0,a.jsxs)("div",{className:"timeline-card-header",children:[(0,a.jsx)("span",{className:"timeline-num",children:"01"}),(0,a.jsx)("span",{className:"timeline-badge",style:{color:"#FFB800",borderColor:"#FFB800"},children:"QUALIFIERS"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"timeline-title",children:"Agent Selection & Bans"}),(0,a.jsx)("p",{className:"timeline-desc",children:"Teams coordinate their bans and pick maps in a standard tournament ruleset. 2 agent bans per team."})]}),(0,a.jsx)("div",{className:"timeline-footer",children:"STAGE 1 // INITIAL DEPLOYMENT"})]}),(0,a.jsxs)("div",{className:"timeline-card",children:[(0,a.jsxs)("div",{className:"timeline-card-header",children:[(0,a.jsx)("span",{className:"timeline-num",children:"02"}),(0,a.jsx)("span",{className:"timeline-badge",children:"BRACKET STAGES"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"timeline-title",children:"Double Elimination"}),(0,a.jsx)("p",{className:"timeline-desc",children:"Lose a match, drop to the lower bracket. Win matches in lower bracket to fight your way back to the Grand Finals."})]}),(0,a.jsx)("div",{className:"timeline-footer",children:"STAGE 2 // INTENSE TACTICAL PLAY"})]}),(0,a.jsxs)("div",{className:"timeline-card",style:{borderRightWidth:"1px",borderRightColor:"rgba(255, 70, 85, 0.4)"},children:[(0,a.jsxs)("div",{className:"timeline-card-header",children:[(0,a.jsx)("span",{className:"timeline-num",children:"03"}),(0,a.jsx)("span",{className:"timeline-badge",style:{color:"var(--val-red)",borderColor:"var(--val-red)"},children:"GRAND FINALE"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"timeline-title",children:"Championship Showdown"}),(0,a.jsx)("p",{className:"timeline-desc",children:"The ultimate battle where the top team from the upper bracket faces the survivor of the lower bracket for the Vyuha Cup."})]}),(0,a.jsx)("div",{className:"timeline-footer",children:"STAGE 3 // TITANS COLLIDE"})]})]})})]}),(0,a.jsxs)("section",{id:"rules",className:"val-window val-corners",children:[(0,a.jsx)("div",{className:"hud-header",children:(0,a.jsxs)("div",{className:"hud-title-wrap",children:[(0,a.jsx)("span",{className:"hud-tag",children:"TACTICAL INTEL"}),(0,a.jsx)("h1",{className:"hud-title",children:"RULES OF ENGAGEMENT"}),(0,a.jsx)("h2",{className:"hud-subtitle",children:"Read carefully before launching operational sequence"})]})}),(0,a.jsx)("div",{className:"hud-body",children:(0,a.jsxs)("div",{className:"rules-grid",children:[(0,a.jsx)("div",{className:"rules-column",children:d.rules?.map((e,t)=>(0,a.jsxs)("div",{className:"rules-item",children:[(0,a.jsx)("span",{className:"rule-index",children:String(t+1).padStart(2,"0")}),(0,a.jsx)("div",{className:"rule-text",children:e})]},t))}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"map-section-title",children:"Competitive Map Pool"}),(0,a.jsxs)("div",{className:"maps-grid",children:[(0,a.jsxs)("div",{className:"map-card",children:[(0,a.jsx)("div",{className:"map-card-bg",style:{backgroundColor:"#2b3a4a"}}),(0,a.jsx)("div",{className:"map-card-overlay"}),(0,a.jsxs)("div",{className:"map-info",children:[(0,a.jsx)("span",{className:"map-coords",children:"SEC_01 // HAVEN"}),(0,a.jsx)("span",{className:"map-name",children:"HAVEN"})]})]}),(0,a.jsxs)("div",{className:"map-card",children:[(0,a.jsx)("div",{className:"map-card-bg",style:{backgroundColor:"#4a2b2b"}}),(0,a.jsx)("div",{className:"map-card-overlay"}),(0,a.jsxs)("div",{className:"map-info",children:[(0,a.jsx)("span",{className:"map-coords",children:"SEC_02 // BIND"}),(0,a.jsx)("span",{className:"map-name",children:"BIND"})]})]}),(0,a.jsxs)("div",{className:"map-card",children:[(0,a.jsx)("div",{className:"map-card-bg",style:{backgroundColor:"#2b4a2b"}}),(0,a.jsx)("div",{className:"map-card-overlay"}),(0,a.jsxs)("div",{className:"map-info",children:[(0,a.jsx)("span",{className:"map-coords",children:"SEC_03 // SPLIT"}),(0,a.jsx)("span",{className:"map-name",children:"SPLIT"})]})]}),(0,a.jsxs)("div",{className:"map-card",children:[(0,a.jsx)("div",{className:"map-card-bg",style:{backgroundColor:"#4a4a2b"}}),(0,a.jsx)("div",{className:"map-card-overlay"}),(0,a.jsxs)("div",{className:"map-info",children:[(0,a.jsx)("span",{className:"map-coords",children:"SEC_04 // LOTUS"}),(0,a.jsx)("span",{className:"map-name",children:"LOTUS"})]})]})]}),(0,a.jsxs)("div",{style:{marginTop:"25px",padding:"20px",background:"rgba(0, 240, 255, 0.03)",border:"1px solid rgba(0, 240, 255, 0.15)"},children:[(0,a.jsx)("h4",{style:{fontFamily:"Oswald, sans-serif",color:"var(--val-blue)",margin:"0 0 5px 0",textTransform:"uppercase",letterSpacing:"1px"},children:"MAP SELECTION PROTOCOL"}),(0,a.jsx)("p",{style:{margin:0,fontSize:"0.88rem",color:"rgba(236, 232, 225, 0.65)",lineHeight:"1.5"},children:"Teams will ban maps sequentially until 1 remains. The team with the lower seed bans first. Maps are hosted on local custom lobbies."})]})]})]})})]}),(0,a.jsxs)("section",{id:"bounty",className:"val-window val-corners",children:[(0,a.jsx)("div",{className:"hud-header",children:(0,a.jsxs)("div",{className:"hud-title-wrap",children:[(0,a.jsx)("span",{className:"hud-tag",children:"MISSION REWARDS"}),(0,a.jsx)("h1",{className:"hud-title",children:"PRIZE POOL BOUNTY"}),(0,a.jsx)("h2",{className:"hud-subtitle",children:"Bounties awarded for ultimate tactical dominance"})]})}),(0,a.jsx)("div",{className:"hud-body",children:(0,a.jsxs)("div",{className:"bounty-list",children:[(0,a.jsxs)("div",{className:"bounty-item bounty-gold",children:[(0,a.jsx)("div",{className:"bounty-badge",children:"🏆"}),(0,a.jsxs)("div",{className:"bounty-details",children:[(0,a.jsx)("span",{className:"bounty-rank",children:"1ST PLACE CHAMPIONS"}),(0,a.jsx)("h3",{className:"bounty-name",children:"VYUHA ULTIMATE VICTORY"})]}),(0,a.jsx)("div",{className:"bounty-reward",children:(0,a.jsx)("span",{className:"bounty-reward-val",children:d.prizes?.[0]?.split(":")?.[1]?.trim()||"₹3,000"})})]}),(0,a.jsxs)("div",{className:"bounty-item bounty-silver",children:[(0,a.jsx)("div",{className:"bounty-badge",children:"🥈"}),(0,a.jsxs)("div",{className:"bounty-details",children:[(0,a.jsx)("span",{className:"bounty-rank",children:"2ND PLACE RUNNER UP"}),(0,a.jsx)("h3",{className:"bounty-name",children:"VYUHA VALIANT RUNNER"})]}),(0,a.jsx)("div",{className:"bounty-reward",children:(0,a.jsx)("span",{className:"bounty-reward-val",children:d.prizes?.[1]?.split(":")?.[1]?.trim()||"₹2,000"})})]})]})})]}),(0,a.jsxs)("section",{className:"bottom-cta-banner val-corners",children:[(0,a.jsx)("h2",{style:{fontFamily:"Oswald, sans-serif",fontSize:"2.5rem",fontWeight:700,margin:"0 0 10px 0",letterSpacing:"2px",textTransform:"uppercase"},children:"READY TO LOCK IN?"}),(0,a.jsx)("p",{style:{fontSize:"1.1rem",color:"rgba(236, 232, 225, 0.65)",maxWidth:"600px",margin:"0 auto 30px"},children:"Deploy your squad, prepare map strategies, and register to claim the Vyuha championship."}),(0,a.jsx)(i.default,{href:`/events/${d.slug}/register`,className:"val-lockin-btn",style:{fontSize:"1.3rem",padding:"12px 48px"},children:"REGISTER NOW"})]})]}),(0,a.jsxs)("footer",{className:"val-footer",children:[(0,a.jsxs)("div",{className:"val-footer-left",children:[(0,a.jsxs)("div",{className:"val-footer-logo",children:["AIK",(0,a.jsx)("span",{children:"YAM"})," 2K26"]}),(0,a.jsx)("div",{className:"val-footer-desc",children:"Where Ancient Intelligence Awakens the Digital Future."})]}),(0,a.jsxs)("div",{className:"val-footer-credits",children:["This is a promotional page for the VYUHA Valorant Tournament at AIKYAM 2K26.",(0,a.jsx)("br",{}),"All game logos, wallpapers, and maps are properties of Riot Games, Inc."]})]})]})]})]}):(0,a.jsx)("div",{style:{color:"#fff",padding:"100px",textAlign:"center"},children:"Event not found"})}])}]);