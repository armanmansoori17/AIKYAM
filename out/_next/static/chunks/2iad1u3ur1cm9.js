(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var a in n)Object.defineProperty(i,a,{enumerable:!0,get:n[a]});let r=e.r(90809)._(e.r(98183)),o=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:i}=e,n=e.protocol||"",a=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:i&&(c=t+(~i.indexOf(":")?`[${i}]`:i),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(r.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||o.test(n))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),a=a.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${n}${c}${a}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"useMergedRef",{enumerable:!0,get:function(){return a}});let n=e.r(71645);function a(e,t){let i=(0,n.useRef)(null),a=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=i.current;e&&(i.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(i.current=r(e,n)),t&&(a.current=r(t,n))},[e,t])}function r(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let i=e(t);return"function"==typeof i?i:()=>e(null)}}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},73668,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"isLocalURL",{enumerable:!0,get:function(){return r}});let n=e.r(18967),a=e.r(52817);function r(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),i=new URL(e,t);return i.origin===t&&(0,a.hasBasePath)(i.pathname)}catch(e){return!1}}},84508,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={default:function(){return b},useLinkStatus:function(){return y}};for(var a in n)Object.defineProperty(i,a,{enumerable:!0,get:n[a]});let r=e.r(90809),o=e.r(43476),s=r._(e.r(71645)),l=e.r(95057),c=e.r(8372),d=e.r(18581),u=e.r(18967),m=e.r(5550);e.r(33525);let p=e.r(88540),g=e.r(91949),h=e.r(73668),f=e.r(9396);function b(t){var i,n;let a,r,b,[y,x]=(0,s.useOptimistic)(g.IDLE_LINK_STATUS),k=(0,s.useRef)(null),{href:w,as:T,children:S,prefetch:A=null,passHref:M,replace:C,shallow:j,scroll:P,onClick:z,onMouseEnter:O,onTouchStart:N,legacyBehavior:I=!1,onNavigate:R,transitionTypes:F,ref:E,unstable_dynamicOnHover:B,...D}=t;a=S,I&&("string"==typeof a||"number"==typeof a)&&(a=(0,o.jsx)("a",{children:a}));let L=s.default.useContext(c.AppRouterContext),U=!1!==A,H=!1!==A?null===(n=A)||"auto"===n?f.FetchStrategy.PPR:f.FetchStrategy.Full:f.FetchStrategy.PPR,q="string"==typeof(i=T||w)?i:(0,l.formatUrl)(i);if(I){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});r=s.default.Children.only(a)}let K=I?r&&"object"==typeof r&&r.ref:E,_=s.default.useCallback(e=>(null!==L&&(k.current=(0,g.mountLinkInstance)(e,q,L,H,U,x)),()=>{k.current&&((0,g.unmountLinkForCurrentNavigation)(k.current),k.current=null),(0,g.unmountPrefetchableInstance)(e)}),[U,q,L,H,x]),Y={ref:(0,d.useMergedRef)(_,K),onClick(t){I||"function"!=typeof z||z(t),I&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(t),!L||t.defaultPrevented||function(t,i,n,a,r,o,l){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(i)){a&&(t.preventDefault(),location.replace(i));return}if(t.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);s.default.startTransition(()=>{u(i,a?"replace":"push",!1===r?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,n.current,l)})}}(t,q,k,C,P,R,F)},onMouseEnter(e){I||"function"!=typeof O||O(e),I&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),L&&U&&(0,g.onNavigationIntent)(e.currentTarget,!0===B)},onTouchStart:function(e){I||"function"!=typeof N||N(e),I&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),L&&U&&(0,g.onNavigationIntent)(e.currentTarget,!0===B)}};return(0,u.isAbsoluteUrl)(q)?Y.href=q:I&&!M&&("a"!==r.type||"href"in r.props)||(Y.href=(0,m.addBasePath)(q)),b=I?s.default.cloneElement(r,Y):(0,o.jsx)("a",{...D,...Y,children:a}),(0,o.jsx)(v.Provider,{value:y,children:b})}e.r(84508);let v=(0,s.createContext)(g.IDLE_LINK_STATUS),y=()=>(0,s.useContext)(v);("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},89621,e=>{"use strict";e.s(["events",0,[{slug:"agnipariksha",name:"AGNIPARIKSHA",eventName:"Stress Interview — Know Yourself Challenge",teamLabel:"SOLO",category:"tech",icon:"/icons/stress.png",image:"/stres.webp",color:"#4FC3F7",tagline:"Face the heat. Emerge unbroken.",description:"A unique event designed to test confidence, communication skills, self-awareness, and ability to perform under pressure. The event begins with a 3-minute talent showcase — singing, dancing, mimicry, drawing, coding, public speaking, magic, or any skill. Judges then conduct a stress interview with unexpected, challenging, and situational questions. Before scores are revealed, the participant self-evaluates out of 10. The contestant whose self-score exactly matches (or is closest to) the judges' average wins.",rounds:[{name:"Stress Interview — Know Yourself",description:"The event begins with a 3-minute talent showcase (singing, dancing, mimicry, coding, public speaking, magic, or any skill). Judges then conduct a 5–7 minute stress interview with unexpected, challenging, and situational questions. Before scores are revealed, the participant self-evaluates out of 10. The contestant whose self-score exactly matches (or is closest to) the judges' average wins.",duration:"8–10 minutes per participant"}],judgingCriteria:["Confidence","Communication","Presence of Mind","Self-Awareness"],prizes:["100% of total registration collections distributed among winner(s)"],teamSize:"Individual",duration:"8–10 minutes per participant",venue:"Stage"},{slug:"chakravyuha",name:"CHAKRAVYUHA",eventName:"Debugging Challenge — Code Rescue",teamLabel:"DUO",category:"tech",icon:"/icons/debug.png",image:"/debuggp1.webp",color:"#4FC3F7",tagline:"Enter the maze. Find the bug. Escape with glory.",description:"A competitive programming event that tests debugging skills, logical thinking, teamwork, coding ability, and problem-solving under time constraints. Teams must work together to identify bugs, understand program logic, and solve coding challenges within the given time — simulating real-world software development where collaboration and efficient debugging are essential.",rounds:[{name:"Round 1 — Bug Hunt",description:"Teams receive multiple programs containing syntax errors, logical errors, runtime errors, and output errors. Identify and fix as many bugs as possible. Top scores qualify for the next round.",duration:"45 minutes",qualification:"Top teams qualify"},{name:"Round 2 — Wire the Logic",description:"Qualified teams receive shuffled code snippets, algorithms, or program execution steps. Arrange them in the correct logical order so the program executes successfully. Evaluates logical thinking, teamwork, and understanding of programming concepts.",duration:"30 minutes",qualification:"Top teams qualify"},{name:"Round 3 — Code Sprint Finale",description:"Finalist teams receive 10 programming challenges — debugging tasks and coding problems. Some require fixing existing code; others require writing complete programs from scratch. Each problem carries different marks based on difficulty. In case of a tie, the team with shortest completion time ranks higher.",duration:"30 minutes"}],rules:["Team of 2 members","One Computer/Laptop per Team","Programming IDE or Code Editor required","No internet access during rounds","Tiebreaker: shortest completion time"],judgingCriteria:["Accuracy of Solutions","Debugging Skills","Logical Thinking","Teamwork","Code Efficiency","Completion Time (Tiebreaker)"],prizes:["🥇 1st Prize: ₹2,000","🥈 2nd Prize: ₹1,000","🥉 3rd Prize: ₹500"],teamSize:"2 Members",duration:"~105 minutes total"},{slug:"sarvajna",name:"SARVAJNA",eventName:"IT Quiz — Tech Titans",teamLabel:"TRIO",category:"tech",icon:"/icons/quiz.png",image:"/quiz.webp",color:"#4FC3F7",tagline:"The all-knowing triumphs. Are you Sarvajna?",description:"A dynamic knowledge-based competition testing technical knowledge, logical thinking, teamwork, and quick decision-making across IT domains. Combines written questions, rapid-fire challenges, and an interactive stage finale. Questions cover programming, databases, networking, cybersecurity, AI, OS, hardware, software, and latest tech trends.",rounds:[{name:"Round 1 — Tech Challenge (Written + Visual)",description:"Teams face a written quiz covering MCQs, Output Prediction, Identify the Programming Language, Guess the Tech Logo, Find the Error, Match the Following, True or False, Identify Hardware/Software, and Current Tech Trends.",duration:"30 minutes",qualification:"Top 8 Teams"},{name:"Round 2 — Rapid Fire & Buzzer",description:"Each qualified team gets a 60-second Rapid Fire Round on Programming, AI, Cybersecurity, Networking, DBMS, OS, Tech Companies, and General IT. Followed by a Buzzer Round — +10 for correct, −5 for incorrect answers.",duration:"Per team + buzzer",qualification:"Top 4 Teams"},{name:"Final Round — Tech Treasure Box",description:"15–20 numbered Treasure Boxes on stage, each containing a unique technical challenge at varying difficulty: 🟢 Easy (10pts) · 🟡 Medium (20pts) · 🔴 Hard (30pts). Challenge types: Code Output, Binary Decode, Morse Code, Logo Guess, Bug Find, SQL Query, Debug, Networking, AI Questions, Programming Puzzles. Wrong answers can be stolen by other teams for 50% of points."}],judgingCriteria:["Accuracy","Speed","Breadth of Technical Knowledge"],prizes:["🥇 1st Prize: ₹2,000","🥈 2nd Prize: ₹1,000","🥉 3rd Prize: ₹500"],teamSize:"3 Members",duration:"Multi-round"},{slug:"lakshya",name:"LAKSHYA",eventName:"Startup Pitch",teamLabel:"TRIO",category:"tech",icon:"/icons/startup.png",image:"/startUP.webp",color:"#4FC3F7",tagline:"Dream big. Pitch bold. Win the future.",description:"An entrepreneurship competition providing aspiring innovators a platform to present startup ideas before a panel of judges. Participants identify real-world problems, develop innovative business solutions, and demonstrate market viability in a 10-minute slot. The event evaluates innovation, business strategy, market potential, feasibility, presentation skills, and ability to defend ideas under pressure.",rounds:[{name:"Startup Pitch",description:"7-minute presentation + 3-minute Judge Q&A. Must cover: Startup Name, Problem Statement, Proposed Solution, Target Customers, Business Model, Revenue Model, Market Opportunity, Competitor Analysis, Technology Used, Marketing Strategy, Scalability, and Future Scope.",duration:"10 minutes per team"}],judgingCriteria:["Innovation & Originality — 20 Marks","Problem & Solution — 15 Marks","Business Model — 15 Marks","Market Potential — 15 Marks","Feasibility & Scalability — 15 Marks","Presentation & Confidence — 10 Marks","Judge Q&A — 10 Marks"],prizes:["🥇 1st Prize: ₹3,000","🥈 2nd Prize: ₹2,000","🥉 3rd Prize: ₹1,000"],teamSize:"3 Members",duration:"10 minutes per team"},{slug:"dyutha-sabha",name:"DYUTHA SABHA",eventName:"Debate-IT — Spin & Switch",teamLabel:"DUO",category:"tech",icon:"/icons/debate.png",image:"/debate.webp",color:"#4FC3F7",tagline:"Words are weapons. Wield them wisely.",description:"A unique technical debate where participants not only defend their assigned viewpoint but also instantly switch sides and argue the opposite without any preparation. Tests critical thinking, adaptability, confidence, and ability to present balanced arguments on trending technology topics like AI, Gaming, Cybersecurity, Startups, Social Media, Online Education, Cryptocurrency, and Privacy vs Security.",rounds:[{name:"Round 1 — Spin the Topic",description:"Teams compete head-to-head by spinning the Topic Wheel. One team argues FOR, the other AGAINST. Format: 2-min prep → 3 minutes per team. Top 6 teams qualify.",duration:"~10 minutes per pair",qualification:"Top 6 Teams"},{name:"Grand Finale — Switch Sides",description:"Finalists spin the Topic Wheel again. Phase 1: 2-min prep → 3 minutes per team. Then the moderator announces 'SWITCH!' — without any prep, teams immediately flip sides. Phase 2: 2-min reverse argument + 1-min rebuttal per team. Tests adaptability and presence of mind like nothing else."}],judgingCriteria:["Knowledge of the Topic — 25 Marks","Logical Thinking — 25 Marks","Communication Skills — 20 Marks","Presence of Mind — 20 Marks","Rebuttal Skills — 10 Marks"],prizes:["🥇 1st Prize: ₹2,000","🥈 2nd Prize: ₹1,000","🥉 3rd Prize: ₹500"],teamSize:"2 Members",duration:"~15 minutes per round"},{slug:"vishwakarma",name:"VISHWAKARMA",eventName:"10-Hour National Hackathon",teamLabel:"TEAM (2–4)",category:"tech",icon:"/icons/hackathon-icon-transparent.png",color:"#4FC3F7",tagline:"Build the impossible. In 10 hours.",description:"The flagship event of AIKYAM 2K26 — the 10-Hour National Hackathon. Participants develop innovative software or hardware solutions that address real-world problems using modern technologies. The event provides a platform for students to transform ideas into functional prototypes, demonstrating technical, presentation, and teamwork skills.",rounds:[{name:"Round 1 — Idea Pitch",description:"Each team presents their proposed solution before judges. 5-minute pitch + 3-minute Q&A. Cover: Problem Statement, Proposed Solution, Target Users, Technology Stack, Innovation, Expected Impact, Feasibility, and Future Scope.",duration:"5 min pitch + 3 min Q&A",qualification:"Top 10 Teams shortlisted"},{name:"Round 2 — 10-Hour Build Challenge",description:"Shortlisted teams build for 10 straight hours. Teams develop a working prototype, design UI, implement core features, prepare a presentation, test and refine.",duration:"10 Hours"}],judgingCriteria:["Innovation & Creativity — 20 Marks","Technical Implementation — 20 Marks","Working Prototype — 20 Marks","UI/UX Design — 10 Marks","Features & Functionality — 10 Marks","Real-World Impact — 10 Marks","Presentation & Demonstration — 10 Marks"],rules:["Teams of 2–4 members","Projects must be developed during the hackathon period","Open-source libraries and APIs permitted","Previously developed projects not allowed","Submit source code and presentation before deadline","Final presentation conducted via Google Meet (screen sharing)"],prizes:["Prize Pool: ₹20,000"],teamSize:"2–4 Members",duration:"10 Hours"},{slug:"chitrasutra",name:"CHITRASUTRA",eventName:"POSTER MAKING — DESIGN FOR IMPACT",image:"/poster.webp",teamLabel:"DUO",category:"creative",icon:"/icons/poster.png",color:"#CE93D8",tagline:"Paint the message. Move the world.",description:"A creative design competition challenging participants to transform innovative ideas into visually compelling posters. Tests creativity, design skills, originality, visual communication, and the ability to convey a powerful message through design. Theme is announced on the spot — teams must create an impactful, informative poster using digital tools or traditional hand-drawn methods.",rounds:[{name:"Theme Reveal",description:"Teams receive a technical theme on the spot and design a poster within 90 minutes. Sample themes: Artificial Intelligence · Cyber Security · Digital India · Smart Cities · Green Technology · Future of Computing · Robotics · Space Technology · Sustainable Innovation · Women in Technology. Teams are free to use their creativity while ensuring the poster effectively communicates the assigned theme.",duration:"90 minutes"}],judgingCriteria:["Creativity & Originality — 30 Marks","Relevance to Theme — 20 Marks","Visual Appeal — 20 Marks","Design Composition — 15 Marks","Innovation — 10 Marks","Overall Presentation — 5 Marks"],prizes:["🥇 1st Prize: ₹1,500","🥈 2nd Prize: ₹1,000","🥉 3rd Prize: ₹500"],teamSize:"2 Members",duration:"90 minutes"},{slug:"drishyakala",name:"DRISHYAKALA",eventName:"PHOTOGRAPHY — PIXEL VISION",image:"/photo.webp",teamLabel:"SOLO",category:"creative",icon:"/icons/photo.png",color:"#CE93D8",tagline:"One frame. A thousand words.",description:"A creative photography competition testing creativity, observation, storytelling, and technical photography skills. Participants capture original photographs based on five themes announced at 10:00 AM — exploring the campus to create impactful images that represent each theme. Max 2 photos per theme (10 total). Submit before 2:00 PM.",rounds:[{name:"Challenge",description:"At 10:00 AM, five photography themes are revealed. Capture photographs for all five themes — max 2 per theme (10 total). Photography session: 10:00 AM → 2:00 PM. Example themes: Innovation · Technology Around Us · Campus Life · Motion · Reflections. Basic editing (brightness, contrast, cropping, color correction) permitted. AI-generated images and heavy manipulation strictly prohibited.",duration:"10:00 AM → 2:00 PM"}],rules:["All five themes are compulsory","Maximum 2 photographs per theme","All photos must be captured between 10 AM and 2 PM","Only original photographs taken during the competition","Basic editing allowed — no AI or stock images","All entries must be submitted before 2:00 PM"],judgingCriteria:["Creativity & Originality — 30 Marks","Relevance to the Theme — 25 Marks","Composition & Framing — 20 Marks","Technical Quality — 15 Marks","Visual Storytelling & Impact — 10 Marks"],prizes:["🥇 1st Prize: ₹1,500","🥈 2nd Prize: ₹1,000","🥉 3rd Prize: ₹500"],teamSize:"Individual",duration:"10:00 AM – 2:00 PM"},{slug:"drishyakavya",name:"DRISHYAKAVYA",eventName:"VIDEOGRAPHY — CINEMATIC VISION",image:"/video.webp",teamLabel:"DUO",category:"creative",icon:"/icons/video.png",color:"#CE93D8",tagline:"One reel. Infinite stories.",description:"A creative filmmaking competition testing storytelling, cinematography, editing, creativity, and technical skills. Teams conceptualize, shoot, edit, and produce an original 2–5 minute short film based on one of three themes announced at 10:00 AM on Day 1. Teams have a full 24-hour window to plan, shoot, edit, add music/subtitles/effects, and finalize their production.",rounds:[{name:"Challenge",description:"At 10:00 AM Day 1, three themes are announced. Teams choose one and produce a 2–5 minute original short film. Full 24-hour window: 10 AM Day 1 → 10 AM Day 2 to develop concept, write script, shoot, edit, add BGM/subtitles/transitions/color grading, and export. Sample themes: Innovation · Technology for Good · Campus Life · The Future · Human Emotions · Digital World · Teamwork · Beyond Reality.",duration:"24 hours (submit by 10 AM Day 2)"}],rules:["Concept and production must begin only after themes are announced","All footage must be captured during the competition period","Smartphones, DSLRs, mirrorless cameras, drones (if permitted) allowed","BGM, subtitles, VFX, color grading, and transitions permitted","AI-generated videos and copyrighted content strictly prohibited","Final video must be 2–5 minutes in duration"],judgingCriteria:["Storytelling — 30 Marks","Creativity & Originality — 25 Marks","Cinematography — 20 Marks","Editing & Technical Quality — 15 Marks","Overall Impact — 10 Marks"],prizes:["🥇 1st Prize: ₹2,000","🥈 2nd Prize: ₹1,000","🥉 3rd Prize: ₹500"],teamSize:"2–4 Members",duration:"24-hour window"},{slug:"shikari",name:"SHIKARI",eventName:"Treasure Hunt — Tech Quest",image:"/shikari.webp",teamLabel:"QUAD",category:"adventure",icon:"/icons/hunt.png",color:"#A5D6A7",tagline:"The campus is your map. Are you the hunter?",description:"An adventure-based technical event combining problem-solving, teamwork, observation, and logical thinking. Teams solve a series of technical and non-technical clues to navigate through different campus locations in search of the final treasure. Each clue leads to the next checkpoint where participants face new challenges, puzzles, riddles, or tasks before advancing.",rounds:[{name:"Campus Trail",description:"Each team receives the first clue at the starting point. Solving each clue reveals the next checkpoint location. At every checkpoint, teams complete a challenge before receiving the next clue. Challenge types: Technical Riddles · QR Code Scanning · Binary Code Decoding · Cipher Puzzles · Logic Questions · Memory Challenges · Mini Coding Questions · Observation Tasks · Hidden Object Search · Team Coordination Activities. First team to clear all checkpoints and reach the final destination wins.",duration:"~2–3 Hours"}],rules:["All team members must remain together throughout","Teams must follow designated campus boundaries","Mobile phones only for QR code scanning if instructed","Damaging clues or interfering with other teams is prohibited","Organizers' and judges' decisions are final"],judgingCriteria:["Completion of All Checkpoints","Accuracy of Challenge Solutions","Time Taken","Team Coordination","Rule Compliance"],prizes:["🥇 1st Prize: ₹3,000","🥈 2nd Prize: ₹2,000","🥉 3rd Prize: ₹1,000"],teamSize:"4 Members",duration:"~2–3 Hours"},{slug:"kurukshetra",name:"KURUKSHETRA",eventName:"BGMI",teamLabel:"SQUAD",category:"gaming",icon:"/icons/bgmi.png",color:"#E5A93C",tagline:"The battlefield awaits. Only legends survive.",description:"Squad up and conquer the digital Kurukshetra in BGMI. Squad-based elimination tournament under standard BGMI tournament rules. Bring your best strategy, coordination, and firepower. Only the last squad standing will have their names written in the annals of AIKYAM.",rules:["Team of 4 (Squad mode)","Tournament format — Elimination rounds","Bring your own device (BYOD) — mobile only","No emulators allowed","Registration required before event day","Fair play — hacks/cheats = instant ban"],judgingCriteria:["Placement Points + Kill Points combined"],prizes:["🥇 1st Prize: ₹3,000","🥈 2nd Prize: ₹2,000"],teamSize:"4 Members (Squad)",duration:"Full day event"},{slug:"vyuha",name:"VYUHA",eventName:"Valorant",teamLabel:"QUINT",category:"gaming",icon:"/icons/valorent.png",color:"#FF4655",tagline:"Tactical minds. Precise shots. One winner.",description:"A 5v5 tactical shooter tournament where strategy meets sharpshooting. Teams compete through bracket stages to claim the VYUHA championship. Standard competitive Valorant ruleset, double elimination bracket, map pool and agent bans decided by organisers.",rules:["Team of 5","Double elimination bracket","Standard Valorant competitive rules apply","Agent bans: 2 per team","Map pool: Bind, Haven, Split, Lotus","PC gaming — tournament PC provided"],judgingCriteria:["Match wins","Round differential as tiebreaker"],prizes:["🥇 1st Prize: ₹3,000","🥈 2nd Prize: ₹2,000"],teamSize:"5 Members",duration:"Full day event"},{slug:"ranabhoomi",name:"RANABHOOMI",eventName:"Free Fire",teamLabel:"SQUAD",category:"gaming",icon:"/icons/freefire.png",color:"#FF9800",tagline:"Drop in. Survive. Dominate.",description:"The RANABHOOMI survival tournament in Free Fire MAX. Squad-based battle royale with multiple matches — points-based ranking decides the champions of the arena. Custom room hosted by organisers. Lag or disconnect does not guarantee a restart.",rules:["Team of 4 (Squad mode)","Mobile devices only — no emulators","3 matches — points aggregate","Kill points + placement points scoring","Custom room hosted by organisers","Lag/disconnect — no restart policy"],judgingCriteria:["Placement Points + Kill Points combined"],prizes:["🥇 1st Prize: ₹3,000","🥈 2nd Prize: ₹2,000"],teamSize:"4 Members (Squad)",duration:"Half-day event"}],"getCategoryColor",0,e=>({tech:"#4FC3F7",creative:"#CE93D8",adventure:"#A5D6A7",gaming:"#FF6B35"})[e]])},38962,e=>{"use strict";var t=e.i(43476),i=e.i(71645),n=e.i(22016),a=e.i(89621);e.s(["default",0,function(){let[e,r]=(0,i.useState)(!0),[o,s]=(0,i.useState)("mission"),l=a.events.find(e=>"ranabhoomi"===e.slug);return((0,i.useEffect)(()=>{let e=setTimeout(()=>r(!1),1500);return()=>clearTimeout(e)},[]),l)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Rajdhani:wght@500;600;700&display=swap');

        :root {
          --ff-neon: #FF4500;
          --ff-gold: #FFD700;
          --ff-bg: #050505;
          --ff-hud: rgba(20, 5, 0, 0.85);
        }

        .ff-menu-world {
          background-color: var(--ff-bg);
          color: #fff;
          font-family: 'Rajdhani', sans-serif;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          position: fixed;
          inset: 0;
          display: flex;
          z-index: 999;
        }

        /* Loading Screen */
        .ff-loader {
          position: fixed;
          inset: 0;
          background: #000;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          transition: opacity 0.6s ease;
        }
        .ff-loader.hidden {
          opacity: 0;
          pointer-events: none;
        }
        .skull-icon {
          font-size: 5rem;
          animation: dropIn 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards, float 2s ease-in-out infinite alternate 0.5s;
        }
        .loader-text {
          font-family: 'Black Ops One', cursive;
          font-size: 3rem;
          color: var(--ff-neon);
          margin-top: 20px;
          letter-spacing: 5px;
          text-shadow: 0 0 20px var(--ff-neon);
        }

        @keyframes dropIn {
          0% { transform: translateY(-200px) scale(2); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes float {
          0% { transform: translateY(0); }
          100% { transform: translateY(-15px); }
        }

        /* Background & Embers */
        .ff-bg-layer {
          position: absolute;
          inset: 0;
          background-image: url('/freefire-bg.webp');
          background-size: cover;
          background-position: center;
          filter: contrast(1.2) brightness(0.4) saturate(1.5);
          z-index: 0;
        }
        .ember-container {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }
        .ember {
          position: absolute;
          bottom: -20px;
          background: var(--ff-neon);
          border-radius: 50%;
          filter: blur(2px);
          animation: flyUp 5s linear infinite;
          opacity: 0;
        }
        @keyframes flyUp {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-100vh) scale(0.2); opacity: 0; }
        }

        /* Sidebar Navigation */
        .ff-sidebar {
          position: relative;
          z-index: 10;
          width: 400px;
          background: linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 100%);
          border-right: 2px solid rgba(255, 69, 0, 0.4);
          display: flex;
          flex-direction: column;
          padding: 60px 0;
          box-shadow: 10px 0 40px rgba(0,0,0,0.9);
        }
        .sidebar-header {
          padding: 0 50px;
          margin-bottom: 80px;
        }
        .game-title {
          font-family: 'Black Ops One', cursive;
          font-size: 3.5rem;
          line-height: 1;
          color: #fff;
          text-shadow: 3px 3px 0 var(--ff-neon);
          margin: 0;
        }
        .game-subtitle {
          font-size: 1.4rem;
          color: var(--ff-gold);
          letter-spacing: 5px;
          text-transform: uppercase;
          font-weight: 700;
          margin-top: 10px;
        }

        .menu-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 0;
          margin: 0;
          list-style: none;
        }
        .menu-item {
          padding: 20px 50px;
          font-family: 'Black Ops One', cursive;
          font-size: 1.6rem;
          color: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
          text-transform: uppercase;
          letter-spacing: 3px;
          border-left: 6px solid transparent;
        }
        .menu-item:hover {
          color: #fff;
          background: rgba(255, 69, 0, 0.15);
        }
        .menu-item.active {
          color: var(--ff-gold);
          background: linear-gradient(90deg, rgba(255, 69, 0, 0.4) 0%, transparent 100%);
          border-left: 6px solid var(--ff-neon);
          text-shadow: 0 0 15px rgba(255, 215, 0, 0.6);
        }

        .home-btn {
          margin-top: auto;
          margin-left: 50px;
          margin-right: 50px;
          padding: 15px;
          background: transparent;
          border: 2px solid var(--ff-neon);
          color: var(--ff-neon);
          font-family: 'Black Ops One', cursive;
          font-size: 1.2rem;
          text-align: center;
          text-decoration: none;
          transition: all 0.3s;
        }
        .home-btn:hover {
          background: var(--ff-neon);
          color: #fff;
          box-shadow: 0 0 20px var(--ff-neon);
        }

        /* Main Content Area */
        .ff-main {
          position: relative;
          z-index: 10;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 50px;
        }

        .hud-window {
          width: 100%;
          max-width: 900px;
          height: 650px;
          background: var(--ff-hud);
          border: 2px solid var(--ff-neon);
          box-shadow: 0 0 40px rgba(255, 69, 0, 0.3), inset 0 0 80px rgba(0,0,0,0.9);
          position: relative;
          display: flex;
          flex-direction: column;
          animation: glitchIn 0.2s ease-out;
        }
        @keyframes glitchIn {
          0% { clip-path: inset(100% 0 0 0); opacity: 0; }
          50% { clip-path: inset(0 0 50% 0); opacity: 0.5; }
          100% { clip-path: inset(0 0 0 0); opacity: 1; }
        }

        .hud-header {
          padding: 25px 40px;
          border-bottom: 2px solid rgba(255, 69, 0, 0.6);
          background: rgba(0,0,0,0.6);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .hud-title {
          font-family: 'Black Ops One', cursive;
          font-size: 2.8rem;
          color: #fff;
          margin: 0;
          letter-spacing: 4px;
        }
        .hud-decorator {
          display: flex;
          gap: 8px;
        }
        .hud-decorator span {
          width: 18px; height: 18px;
          background: var(--ff-neon);
          transform: rotate(45deg);
        }

        .hud-body {
          padding: 50px;
          flex: 1;
          overflow-y: auto;
        }
        .hud-body::-webkit-scrollbar { width: 10px; }
        .hud-body::-webkit-scrollbar-track { background: rgba(0,0,0,0.6); }
        .hud-body::-webkit-scrollbar-thumb { background: var(--ff-neon); }

        .mission-text {
          font-size: 1.5rem;
          color: #ddd;
          line-height: 1.7;
          border-left: 5px solid var(--ff-gold);
          padding-left: 25px;
        }
        
        .stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-top: 50px;
        }
        .stat-box {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 25px;
        }
        .stat-label {
          font-size: 1.2rem;
          color: var(--ff-neon);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
        }
        .stat-value {
          font-size: 3rem;
          font-family: 'Black Ops One', cursive;
          color: #fff;
          margin-top: 15px;
        }

        .loot-item {
          display: flex;
          align-items: center;
          gap: 30px;
          background: rgba(255, 215, 0, 0.1);
          border: 1px solid var(--ff-gold);
          padding: 30px;
          margin-bottom: 30px;
        }
        .loot-icon {
          font-size: 4rem;
        }
        .loot-details {
          flex: 1;
        }
        
        .rules-list {
          list-style: none;
          padding: 0; margin: 0;
        }
        .rules-list li {
          font-size: 1.3rem;
          color: #eee;
          margin-bottom: 25px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          background: rgba(255,255,255,0.03);
          padding: 20px;
          border-left: 3px solid var(--ff-neon);
        }
        .rules-list li::before {
          content: '⚠';
          color: var(--ff-neon);
        }

        .register-bar {
          padding: 25px;
          background: rgba(0,0,0,0.85);
          border-top: 2px solid rgba(255, 69, 0, 0.6);
          display: flex;
          justify-content: flex-end;
        }
        .register-btn {
          background: var(--ff-neon);
          color: #fff;
          font-family: 'Black Ops One', cursive;
          font-size: 1.6rem;
          padding: 15px 50px;
          border: none;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 3px;
          transition: all 0.3s;
        }
        .register-btn:hover {
          background: #fff;
          color: var(--ff-neon);
          box-shadow: 0 0 25px #fff;
        }
      `}),(0,t.jsxs)("div",{className:`ff-loader ${!e?"hidden":""}`,children:[(0,t.jsx)("div",{className:"skull-icon",children:"💀"}),(0,t.jsx)("div",{className:"loader-text",children:"BOOYAH!"})]}),(0,t.jsxs)("div",{className:"ff-menu-world",children:[(0,t.jsx)("div",{className:"ff-bg-layer"}),(0,t.jsx)("div",{className:"ember-container",children:[...Array(40)].map((e,i)=>(0,t.jsx)("div",{className:"ember",style:{left:`${100*Math.random()}%`,width:`${8*Math.random()+3}px`,height:`${8*Math.random()+3}px`,animationDelay:`${5*Math.random()}s`,animationDuration:`${4*Math.random()+3}s`}},i))}),(0,t.jsxs)("aside",{className:"ff-sidebar",children:[(0,t.jsxs)("div",{className:"sidebar-header",children:[(0,t.jsx)("h1",{className:"game-title",children:l.name}),(0,t.jsx)("div",{className:"game-subtitle",children:"FREE FIRE MAX"})]}),(0,t.jsxs)("ul",{className:"menu-list",children:[(0,t.jsx)("li",{className:`menu-item ${"mission"===o?"active":""}`,onClick:()=>s("mission"),children:"Mission Briefing"}),(0,t.jsx)("li",{className:`menu-item ${"loot"===o?"active":""}`,onClick:()=>s("loot"),children:"The Loot (Prizes)"}),(0,t.jsx)("li",{className:`menu-item ${"rules"===o?"active":""}`,onClick:()=>s("rules"),children:"Rules of Survival"})]}),(0,t.jsx)(n.default,{href:"/events",className:"home-btn",children:"◀ ABORT MISSION"})]}),(0,t.jsxs)("main",{className:"ff-main",children:["mission"===o&&(0,t.jsxs)("div",{className:"hud-window",children:[(0,t.jsxs)("div",{className:"hud-header",children:[(0,t.jsx)("h2",{className:"hud-title",children:"MISSION BRIEFING"}),(0,t.jsxs)("div",{className:"hud-decorator",children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]})]}),(0,t.jsxs)("div",{className:"hud-body",children:[(0,t.jsx)("p",{className:"mission-text",children:l.description}),(0,t.jsxs)("div",{className:"stat-grid",children:[(0,t.jsxs)("div",{className:"stat-box",children:[(0,t.jsx)("div",{className:"stat-label",children:"Squad Format"}),(0,t.jsx)("div",{className:"stat-value",children:l.teamSize})]}),(0,t.jsxs)("div",{className:"stat-box",children:[(0,t.jsx)("div",{className:"stat-label",children:"Duration"}),(0,t.jsx)("div",{className:"stat-value",children:l.duration})]})]})]}),(0,t.jsx)("div",{className:"register-bar",children:(0,t.jsx)("button",{className:"register-btn",onClick:()=>alert("Dropping into Bermuda..."),children:"ENTER ARENA"})})]}),"loot"===o&&(0,t.jsxs)("div",{className:"hud-window",children:[(0,t.jsxs)("div",{className:"hud-header",children:[(0,t.jsx)("h2",{className:"hud-title",children:"THE LOOT (PRIZES)"}),(0,t.jsxs)("div",{className:"hud-decorator",children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]})]}),(0,t.jsxs)("div",{className:"hud-body",children:[(0,t.jsxs)("div",{className:"loot-item",children:[(0,t.jsx)("div",{className:"loot-icon",children:"🏆"}),(0,t.jsxs)("div",{className:"loot-details",children:[(0,t.jsx)("div",{style:{color:"var(--ff-gold)",fontSize:"1.4rem",fontWeight:700},children:"CHAMPIONS BOUNTY"}),(0,t.jsx)("div",{style:{fontFamily:"'Black Ops One', cursive",fontSize:"3rem"},children:l.prizes?.[0]||"₹3,000"})]})]}),(0,t.jsxs)("div",{className:"loot-item",style:{background:"rgba(255,255,255,0.05)",borderColor:"#888"},children:[(0,t.jsx)("div",{className:"loot-icon",children:"🥈"}),(0,t.jsxs)("div",{className:"loot-details",children:[(0,t.jsx)("div",{style:{color:"#ccc",fontSize:"1.4rem",fontWeight:700},children:"RUNNER UP BOUNTY"}),(0,t.jsx)("div",{style:{fontFamily:"'Black Ops One', cursive",fontSize:"3rem"},children:l.prizes?.[1]||"₹2,000"})]})]})]}),(0,t.jsx)("div",{className:"register-bar",children:(0,t.jsx)("button",{className:"register-btn",onClick:()=>alert("Dropping into Bermuda..."),children:"CLAIM REWARDS"})})]}),"rules"===o&&(0,t.jsxs)("div",{className:"hud-window",children:[(0,t.jsxs)("div",{className:"hud-header",children:[(0,t.jsx)("h2",{className:"hud-title",children:"RULES OF SURVIVAL"}),(0,t.jsxs)("div",{className:"hud-decorator",children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]})]}),(0,t.jsx)("div",{className:"hud-body",children:(0,t.jsx)("ul",{className:"rules-list",children:l.rules?.map((e,i)=>(0,t.jsx)("li",{children:e},i))})})]})]})]})]}):(0,t.jsx)("div",{children:"Event not found"})}])}]);