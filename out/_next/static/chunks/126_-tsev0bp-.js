(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var a in n)Object.defineProperty(i,a,{enumerable:!0,get:n[a]});let r=e.r(90809)._(e.r(98183)),o=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:i}=e,n=e.protocol||"",a=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:i&&(c=t+(~i.indexOf(":")?`[${i}]`:i),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(r.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||o.test(n))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),a=a.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${n}${c}${a}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"useMergedRef",{enumerable:!0,get:function(){return a}});let n=e.r(71645);function a(e,t){let i=(0,n.useRef)(null),a=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=i.current;e&&(i.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(i.current=r(e,n)),t&&(a.current=r(t,n))},[e,t])}function r(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let i=e(t);return"function"==typeof i?i:()=>e(null)}}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},73668,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"isLocalURL",{enumerable:!0,get:function(){return r}});let n=e.r(18967),a=e.r(52817);function r(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),i=new URL(e,t);return i.origin===t&&(0,a.hasBasePath)(i.pathname)}catch(e){return!1}}},84508,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={default:function(){return b},useLinkStatus:function(){return v}};for(var a in n)Object.defineProperty(i,a,{enumerable:!0,get:n[a]});let r=e.r(90809),o=e.r(43476),s=r._(e.r(71645)),l=e.r(95057),c=e.r(8372),d=e.r(18581),u=e.r(18967),m=e.r(5550);e.r(33525);let p=e.r(88540),g=e.r(91949),h=e.r(73668),f=e.r(9396);function b(t){var i,n;let a,r,b,[v,x]=(0,s.useOptimistic)(g.IDLE_LINK_STATUS),T=(0,s.useRef)(null),{href:k,as:w,children:S,prefetch:A=null,passHref:M,replace:P,shallow:C,scroll:z,onClick:j,onMouseEnter:I,onTouchStart:N,legacyBehavior:O=!1,onNavigate:R,transitionTypes:E,ref:F,unstable_dynamicOnHover:D,...L}=t;a=S,O&&("string"==typeof a||"number"==typeof a)&&(a=(0,o.jsx)("a",{children:a}));let U=s.default.useContext(c.AppRouterContext),B=!1!==A,H=!1!==A?null===(n=A)||"auto"===n?f.FetchStrategy.PPR:f.FetchStrategy.Full:f.FetchStrategy.PPR,q="string"==typeof(i=w||k)?i:(0,l.formatUrl)(i);if(O){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});r=s.default.Children.only(a)}let K=O?r&&"object"==typeof r&&r.ref:F,_=s.default.useCallback(e=>(null!==U&&(T.current=(0,g.mountLinkInstance)(e,q,U,H,B,x)),()=>{T.current&&((0,g.unmountLinkForCurrentNavigation)(T.current),T.current=null),(0,g.unmountPrefetchableInstance)(e)}),[B,q,U,H,x]),G={ref:(0,d.useMergedRef)(_,K),onClick(t){O||"function"!=typeof j||j(t),O&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(t),!U||t.defaultPrevented||function(t,i,n,a,r,o,l){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(i)){a&&(t.preventDefault(),location.replace(i));return}if(t.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);s.default.startTransition(()=>{u(i,a?"replace":"push",!1===r?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,n.current,l)})}}(t,q,T,P,z,R,E)},onMouseEnter(e){O||"function"!=typeof I||I(e),O&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),U&&B&&(0,g.onNavigationIntent)(e.currentTarget,!0===D)},onTouchStart:function(e){O||"function"!=typeof N||N(e),O&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),U&&B&&(0,g.onNavigationIntent)(e.currentTarget,!0===D)}};return(0,u.isAbsoluteUrl)(q)?G.href=q:O&&!M&&("a"!==r.type||"href"in r.props)||(G.href=(0,m.addBasePath)(q)),b=O?s.default.cloneElement(r,G):(0,o.jsx)("a",{...L,...G,children:a}),(0,o.jsx)(y.Provider,{value:v,children:b})}e.r(84508);let y=(0,s.createContext)(g.IDLE_LINK_STATUS),v=()=>(0,s.useContext)(y);("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},89621,e=>{"use strict";e.s(["events",0,[{slug:"agnipariksha",name:"AGNIPARIKSHA",eventName:"Stress Interview — Know Yourself Challenge",teamLabel:"SOLO",category:"tech",icon:"/icons/stress.png",image:"/stres.webp",color:"#4FC3F7",tagline:"Face the heat. Emerge unbroken.",description:"A unique event designed to test confidence, communication skills, self-awareness, and ability to perform under pressure. The event begins with a 3-minute talent showcase — singing, dancing, mimicry, drawing, coding, public speaking, magic, or any skill. Judges then conduct a stress interview with unexpected, challenging, and situational questions. Before scores are revealed, the participant self-evaluates out of 10. The contestant whose self-score exactly matches (or is closest to) the judges' average wins.",rounds:[{name:"Stress Interview — Know Yourself",description:"The event begins with a 3-minute talent showcase (singing, dancing, mimicry, coding, public speaking, magic, or any skill). Judges then conduct a 5–7 minute stress interview with unexpected, challenging, and situational questions. Before scores are revealed, the participant self-evaluates out of 10. The contestant whose self-score exactly matches (or is closest to) the judges' average wins.",duration:"8–10 minutes per participant"}],judgingCriteria:["Confidence","Communication","Presence of Mind","Self-Awareness"],prizes:["100% of total registration collections distributed among winner(s)"],teamSize:"Individual",duration:"8–10 minutes per participant",venue:"Stage"},{slug:"chakravyuha",name:"CHAKRAVYUHA",eventName:"Debugging Challenge — Code Rescue",teamLabel:"DUO",category:"tech",icon:"/icons/debug.png",image:"/debuggp1.webp",color:"#4FC3F7",tagline:"Enter the maze. Find the bug. Escape with glory.",description:"A competitive programming event that tests debugging skills, logical thinking, teamwork, coding ability, and problem-solving under time constraints. Teams must work together to identify bugs, understand program logic, and solve coding challenges within the given time — simulating real-world software development where collaboration and efficient debugging are essential.",rounds:[{name:"Round 1 — Bug Hunt",description:"Teams receive multiple programs containing syntax errors, logical errors, runtime errors, and output errors. Identify and fix as many bugs as possible. Top scores qualify for the next round.",duration:"45 minutes",qualification:"Top teams qualify"},{name:"Round 2 — Wire the Logic",description:"Qualified teams receive shuffled code snippets, algorithms, or program execution steps. Arrange them in the correct logical order so the program executes successfully. Evaluates logical thinking, teamwork, and understanding of programming concepts.",duration:"30 minutes",qualification:"Top teams qualify"},{name:"Round 3 — Code Sprint Finale",description:"Finalist teams receive 10 programming challenges — debugging tasks and coding problems. Some require fixing existing code; others require writing complete programs from scratch. Each problem carries different marks based on difficulty. In case of a tie, the team with shortest completion time ranks higher.",duration:"30 minutes"}],rules:["Team of 2 members","One Computer/Laptop per Team","Programming IDE or Code Editor required","No internet access during rounds","Tiebreaker: shortest completion time"],judgingCriteria:["Accuracy of Solutions","Debugging Skills","Logical Thinking","Teamwork","Code Efficiency","Completion Time (Tiebreaker)"],prizes:["🥇 1st Prize: ₹2,000","🥈 2nd Prize: ₹1,000","🥉 3rd Prize: ₹500"],teamSize:"2 Members",duration:"~105 minutes total"},{slug:"sarvajna",name:"SARVAJNA",eventName:"IT Quiz — Tech Titans",teamLabel:"TRIO",category:"tech",icon:"/icons/quiz.png",image:"/quiz.webp",color:"#4FC3F7",tagline:"The all-knowing triumphs. Are you Sarvajna?",description:"A dynamic knowledge-based competition testing technical knowledge, logical thinking, teamwork, and quick decision-making across IT domains. Combines written questions, rapid-fire challenges, and an interactive stage finale. Questions cover programming, databases, networking, cybersecurity, AI, OS, hardware, software, and latest tech trends.",rounds:[{name:"Round 1 — Tech Challenge (Written + Visual)",description:"Teams face a written quiz covering MCQs, Output Prediction, Identify the Programming Language, Guess the Tech Logo, Find the Error, Match the Following, True or False, Identify Hardware/Software, and Current Tech Trends.",duration:"30 minutes",qualification:"Top 8 Teams"},{name:"Round 2 — Rapid Fire & Buzzer",description:"Each qualified team gets a 60-second Rapid Fire Round on Programming, AI, Cybersecurity, Networking, DBMS, OS, Tech Companies, and General IT. Followed by a Buzzer Round — +10 for correct, −5 for incorrect answers.",duration:"Per team + buzzer",qualification:"Top 4 Teams"},{name:"Final Round — Tech Treasure Box",description:"15–20 numbered Treasure Boxes on stage, each containing a unique technical challenge at varying difficulty: 🟢 Easy (10pts) · 🟡 Medium (20pts) · 🔴 Hard (30pts). Challenge types: Code Output, Binary Decode, Morse Code, Logo Guess, Bug Find, SQL Query, Debug, Networking, AI Questions, Programming Puzzles. Wrong answers can be stolen by other teams for 50% of points."}],judgingCriteria:["Accuracy","Speed","Breadth of Technical Knowledge"],prizes:["🥇 1st Prize: ₹2,000","🥈 2nd Prize: ₹1,000","🥉 3rd Prize: ₹500"],teamSize:"3 Members",duration:"Multi-round"},{slug:"lakshya",name:"LAKSHYA",eventName:"Startup Pitch",teamLabel:"TRIO",category:"tech",icon:"/icons/startup.png",image:"/startUP.webp",color:"#4FC3F7",tagline:"Dream big. Pitch bold. Win the future.",description:"An entrepreneurship competition providing aspiring innovators a platform to present startup ideas before a panel of judges. Participants identify real-world problems, develop innovative business solutions, and demonstrate market viability in a 10-minute slot. The event evaluates innovation, business strategy, market potential, feasibility, presentation skills, and ability to defend ideas under pressure.",rounds:[{name:"Startup Pitch",description:"7-minute presentation + 3-minute Judge Q&A. Must cover: Startup Name, Problem Statement, Proposed Solution, Target Customers, Business Model, Revenue Model, Market Opportunity, Competitor Analysis, Technology Used, Marketing Strategy, Scalability, and Future Scope.",duration:"10 minutes per team"}],judgingCriteria:["Innovation & Originality — 20 Marks","Problem & Solution — 15 Marks","Business Model — 15 Marks","Market Potential — 15 Marks","Feasibility & Scalability — 15 Marks","Presentation & Confidence — 10 Marks","Judge Q&A — 10 Marks"],prizes:["🥇 1st Prize: ₹3,000","🥈 2nd Prize: ₹2,000","🥉 3rd Prize: ₹1,000"],teamSize:"3 Members",duration:"10 minutes per team"},{slug:"dyutha-sabha",name:"DYUTHA SABHA",eventName:"Debate-IT — Spin & Switch",teamLabel:"DUO",category:"tech",icon:"/icons/debate.png",image:"/debate.webp",color:"#4FC3F7",tagline:"Words are weapons. Wield them wisely.",description:"A unique technical debate where participants not only defend their assigned viewpoint but also instantly switch sides and argue the opposite without any preparation. Tests critical thinking, adaptability, confidence, and ability to present balanced arguments on trending technology topics like AI, Gaming, Cybersecurity, Startups, Social Media, Online Education, Cryptocurrency, and Privacy vs Security.",rounds:[{name:"Round 1 — Spin the Topic",description:"Teams compete head-to-head by spinning the Topic Wheel. One team argues FOR, the other AGAINST. Format: 2-min prep → 3 minutes per team. Top 6 teams qualify.",duration:"~10 minutes per pair",qualification:"Top 6 Teams"},{name:"Grand Finale — Switch Sides",description:"Finalists spin the Topic Wheel again. Phase 1: 2-min prep → 3 minutes per team. Then the moderator announces 'SWITCH!' — without any prep, teams immediately flip sides. Phase 2: 2-min reverse argument + 1-min rebuttal per team. Tests adaptability and presence of mind like nothing else."}],judgingCriteria:["Knowledge of the Topic — 25 Marks","Logical Thinking — 25 Marks","Communication Skills — 20 Marks","Presence of Mind — 20 Marks","Rebuttal Skills — 10 Marks"],prizes:["🥇 1st Prize: ₹2,000","🥈 2nd Prize: ₹1,000","🥉 3rd Prize: ₹500"],teamSize:"2 Members",duration:"~15 minutes per round"},{slug:"vishwakarma",name:"VISHWAKARMA",eventName:"10-Hour National Hackathon",teamLabel:"TEAM (2–4)",category:"tech",icon:"/icons/hackathon-icon-transparent.png",color:"#4FC3F7",tagline:"Build the impossible. In 10 hours.",description:"The flagship event of AIKYAM 2K26 — the 10-Hour National Hackathon. Participants develop innovative software or hardware solutions that address real-world problems using modern technologies. The event provides a platform for students to transform ideas into functional prototypes, demonstrating technical, presentation, and teamwork skills.",rounds:[{name:"Round 1 — Idea Pitch",description:"Each team presents their proposed solution before judges. 5-minute pitch + 3-minute Q&A. Cover: Problem Statement, Proposed Solution, Target Users, Technology Stack, Innovation, Expected Impact, Feasibility, and Future Scope.",duration:"5 min pitch + 3 min Q&A",qualification:"Top 10 Teams shortlisted"},{name:"Round 2 — 10-Hour Build Challenge",description:"Shortlisted teams build for 10 straight hours. Teams develop a working prototype, design UI, implement core features, prepare a presentation, test and refine.",duration:"10 Hours"}],judgingCriteria:["Innovation & Creativity — 20 Marks","Technical Implementation — 20 Marks","Working Prototype — 20 Marks","UI/UX Design — 10 Marks","Features & Functionality — 10 Marks","Real-World Impact — 10 Marks","Presentation & Demonstration — 10 Marks"],rules:["Teams of 2–4 members","Projects must be developed during the hackathon period","Open-source libraries and APIs permitted","Previously developed projects not allowed","Submit source code and presentation before deadline","Final presentation conducted via Google Meet (screen sharing)"],prizes:["Prize Pool: ₹20,000"],teamSize:"2–4 Members",duration:"10 Hours"},{slug:"chitrasutra",name:"CHITRASUTRA",eventName:"POSTER MAKING — DESIGN FOR IMPACT",image:"/poster.webp",teamLabel:"DUO",category:"creative",icon:"/icons/poster.png",color:"#CE93D8",tagline:"Paint the message. Move the world.",description:"A creative design competition challenging participants to transform innovative ideas into visually compelling posters. Tests creativity, design skills, originality, visual communication, and the ability to convey a powerful message through design. Theme is announced on the spot — teams must create an impactful, informative poster using digital tools or traditional hand-drawn methods.",rounds:[{name:"Theme Reveal",description:"Teams receive a technical theme on the spot and design a poster within 90 minutes. Sample themes: Artificial Intelligence · Cyber Security · Digital India · Smart Cities · Green Technology · Future of Computing · Robotics · Space Technology · Sustainable Innovation · Women in Technology. Teams are free to use their creativity while ensuring the poster effectively communicates the assigned theme.",duration:"90 minutes"}],judgingCriteria:["Creativity & Originality — 30 Marks","Relevance to Theme — 20 Marks","Visual Appeal — 20 Marks","Design Composition — 15 Marks","Innovation — 10 Marks","Overall Presentation — 5 Marks"],prizes:["🥇 1st Prize: ₹1,500","🥈 2nd Prize: ₹1,000","🥉 3rd Prize: ₹500"],teamSize:"2 Members",duration:"90 minutes"},{slug:"drishyakala",name:"DRISHYAKALA",eventName:"PHOTOGRAPHY — PIXEL VISION",image:"/photo.webp",teamLabel:"SOLO",category:"creative",icon:"/icons/photo.png",color:"#CE93D8",tagline:"One frame. A thousand words.",description:"A creative photography competition testing creativity, observation, storytelling, and technical photography skills. Participants capture original photographs based on five themes announced at 10:00 AM — exploring the campus to create impactful images that represent each theme. Max 2 photos per theme (10 total). Submit before 2:00 PM.",rounds:[{name:"Challenge",description:"At 10:00 AM, five photography themes are revealed. Capture photographs for all five themes — max 2 per theme (10 total). Photography session: 10:00 AM → 2:00 PM. Example themes: Innovation · Technology Around Us · Campus Life · Motion · Reflections. Basic editing (brightness, contrast, cropping, color correction) permitted. AI-generated images and heavy manipulation strictly prohibited.",duration:"10:00 AM → 2:00 PM"}],rules:["All five themes are compulsory","Maximum 2 photographs per theme","All photos must be captured between 10 AM and 2 PM","Only original photographs taken during the competition","Basic editing allowed — no AI or stock images","All entries must be submitted before 2:00 PM"],judgingCriteria:["Creativity & Originality — 30 Marks","Relevance to the Theme — 25 Marks","Composition & Framing — 20 Marks","Technical Quality — 15 Marks","Visual Storytelling & Impact — 10 Marks"],prizes:["🥇 1st Prize: ₹1,500","🥈 2nd Prize: ₹1,000","🥉 3rd Prize: ₹500"],teamSize:"Individual",duration:"10:00 AM – 2:00 PM"},{slug:"drishyakavya",name:"DRISHYAKAVYA",eventName:"VIDEOGRAPHY — CINEMATIC VISION",image:"/video.webp",teamLabel:"DUO",category:"creative",icon:"/icons/video.png",color:"#CE93D8",tagline:"One reel. Infinite stories.",description:"A creative filmmaking competition testing storytelling, cinematography, editing, creativity, and technical skills. Teams conceptualize, shoot, edit, and produce an original 2–5 minute short film based on one of three themes announced at 10:00 AM on Day 1. Teams have a full 24-hour window to plan, shoot, edit, add music/subtitles/effects, and finalize their production.",rounds:[{name:"Challenge",description:"At 10:00 AM Day 1, three themes are announced. Teams choose one and produce a 2–5 minute original short film. Full 24-hour window: 10 AM Day 1 → 10 AM Day 2 to develop concept, write script, shoot, edit, add BGM/subtitles/transitions/color grading, and export. Sample themes: Innovation · Technology for Good · Campus Life · The Future · Human Emotions · Digital World · Teamwork · Beyond Reality.",duration:"24 hours (submit by 10 AM Day 2)"}],rules:["Concept and production must begin only after themes are announced","All footage must be captured during the competition period","Smartphones, DSLRs, mirrorless cameras, drones (if permitted) allowed","BGM, subtitles, VFX, color grading, and transitions permitted","AI-generated videos and copyrighted content strictly prohibited","Final video must be 2–5 minutes in duration"],judgingCriteria:["Storytelling — 30 Marks","Creativity & Originality — 25 Marks","Cinematography — 20 Marks","Editing & Technical Quality — 15 Marks","Overall Impact — 10 Marks"],prizes:["🥇 1st Prize: ₹2,000","🥈 2nd Prize: ₹1,000","🥉 3rd Prize: ₹500"],teamSize:"2–4 Members",duration:"24-hour window"},{slug:"shikari",name:"SHIKARI",eventName:"Treasure Hunt — Tech Quest",image:"/shikari.webp",teamLabel:"QUAD",category:"adventure",icon:"/icons/hunt.png",color:"#A5D6A7",tagline:"The campus is your map. Are you the hunter?",description:"An adventure-based technical event combining problem-solving, teamwork, observation, and logical thinking. Teams solve a series of technical and non-technical clues to navigate through different campus locations in search of the final treasure. Each clue leads to the next checkpoint where participants face new challenges, puzzles, riddles, or tasks before advancing.",rounds:[{name:"Campus Trail",description:"Each team receives the first clue at the starting point. Solving each clue reveals the next checkpoint location. At every checkpoint, teams complete a challenge before receiving the next clue. Challenge types: Technical Riddles · QR Code Scanning · Binary Code Decoding · Cipher Puzzles · Logic Questions · Memory Challenges · Mini Coding Questions · Observation Tasks · Hidden Object Search · Team Coordination Activities. First team to clear all checkpoints and reach the final destination wins.",duration:"~2–3 Hours"}],rules:["All team members must remain together throughout","Teams must follow designated campus boundaries","Mobile phones only for QR code scanning if instructed","Damaging clues or interfering with other teams is prohibited","Organizers' and judges' decisions are final"],judgingCriteria:["Completion of All Checkpoints","Accuracy of Challenge Solutions","Time Taken","Team Coordination","Rule Compliance"],prizes:["🥇 1st Prize: ₹3,000","🥈 2nd Prize: ₹2,000","🥉 3rd Prize: ₹1,000"],teamSize:"4 Members",duration:"~2–3 Hours"},{slug:"kurukshetra",name:"KURUKSHETRA",eventName:"BGMI",teamLabel:"SQUAD",category:"gaming",icon:"/icons/bgmi.png",color:"#E5A93C",tagline:"The battlefield awaits. Only legends survive.",description:"Squad up and conquer the digital Kurukshetra in BGMI. Squad-based elimination tournament under standard BGMI tournament rules. Bring your best strategy, coordination, and firepower. Only the last squad standing will have their names written in the annals of AIKYAM.",rules:["Team of 4 (Squad mode)","Tournament format — Elimination rounds","Bring your own device (BYOD) — mobile only","No emulators allowed","Registration required before event day","Fair play — hacks/cheats = instant ban"],judgingCriteria:["Placement Points + Kill Points combined"],prizes:["🥇 1st Prize: ₹3,000","🥈 2nd Prize: ₹2,000"],teamSize:"4 Members (Squad)",duration:"Full day event"},{slug:"vyuha",name:"VYUHA",eventName:"Valorant",teamLabel:"QUINT",category:"gaming",icon:"/icons/valorent.png",color:"#FF4655",tagline:"Tactical minds. Precise shots. One winner.",description:"A 5v5 tactical shooter tournament where strategy meets sharpshooting. Teams compete through bracket stages to claim the VYUHA championship. Standard competitive Valorant ruleset, double elimination bracket, map pool and agent bans decided by organisers.",rules:["Team of 5","Double elimination bracket","Standard Valorant competitive rules apply","Agent bans: 2 per team","Map pool: Bind, Haven, Split, Lotus","PC gaming — tournament PC provided"],judgingCriteria:["Match wins","Round differential as tiebreaker"],prizes:["🥇 1st Prize: ₹3,000","🥈 2nd Prize: ₹2,000"],teamSize:"5 Members",duration:"Full day event"},{slug:"ranabhoomi",name:"RANABHOOMI",eventName:"Free Fire",teamLabel:"SQUAD",category:"gaming",icon:"/icons/freefire.png",color:"#FF9800",tagline:"Drop in. Survive. Dominate.",description:"The RANABHOOMI survival tournament in Free Fire MAX. Squad-based battle royale with multiple matches — points-based ranking decides the champions of the arena. Custom room hosted by organisers. Lag or disconnect does not guarantee a restart.",rules:["Team of 4 (Squad mode)","Mobile devices only — no emulators","3 matches — points aggregate","Kill points + placement points scoring","Custom room hosted by organisers","Lag/disconnect — no restart policy"],judgingCriteria:["Placement Points + Kill Points combined"],prizes:["🥇 1st Prize: ₹3,000","🥈 2nd Prize: ₹2,000"],teamSize:"4 Members (Squad)",duration:"Half-day event"}],"getCategoryColor",0,e=>({tech:"#4FC3F7",creative:"#CE93D8",adventure:"#A5D6A7",gaming:"#FF6B35"})[e]])},41142,e=>{"use strict";var t=e.i(43476),i=e.i(71645),n=e.i(22016),a=e.i(89621);e.s(["default",0,function(){let[e,r]=(0,i.useState)(!0),o=a.events.find(e=>"kurukshetra"===e.slug);return((0,i.useEffect)(()=>{let e=setTimeout(()=>r(!1),1200);return()=>clearTimeout(e)},[]),o)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Teko:wght@400;600;700&family=Open+Sans:wght@400;600;700&display=swap');

        :root {
          --bgmi-yellow: #F2A900;
          --bgmi-black: #000000;
          --bgmi-gray: #1a1a1a;
          --bgmi-text: #ffffff;
        }

        .official-site {
          background-color: var(--bgmi-black);
          color: var(--bgmi-text);
          font-family: 'Open Sans', sans-serif;
          min-height: 100vh;
        }

        /* Loading Screen */
        .site-loader {
          position: fixed;
          inset: 0;
          background: #000;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.5s ease;
        }
        .site-loader.hidden {
          opacity: 0;
          pointer-events: none;
        }
        .loader-logo {
          font-family: 'Teko', sans-serif;
          font-size: 5rem;
          color: #fff;
          font-weight: 700;
          letter-spacing: 2px;
          position: relative;
        }
        .loader-logo::after {
          content: 'INDIA';
          position: absolute;
          bottom: -15px;
          right: 0;
          font-size: 2rem;
          color: var(--bgmi-yellow);
        }

        /* Navbar */
        .bgmi-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: rgba(0,0,0,0.9);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5%;
          z-index: 1000;
          border-bottom: 2px solid #222;
        }
        .nav-logo {
          font-family: 'Teko', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1;
          color: #fff;
          text-decoration: none;
          display: flex;
          flex-direction: column;
        }
        .nav-logo span {
          font-size: 1rem;
          color: var(--bgmi-yellow);
          letter-spacing: 4px;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          color: #ccc;
          text-decoration: none;
          font-family: 'Teko', sans-serif;
          font-size: 1.5rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: var(--bgmi-yellow);
        }

        .download-btn {
          background: var(--bgmi-yellow);
          color: #000;
          font-family: 'Teko', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          padding: 5px 30px;
          text-decoration: none;
          text-transform: uppercase;
          clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
          transition: transform 0.2s;
        }
        .download-btn:hover {
          transform: scale(1.05);
        }

        /* Hero Section */
        .hero-banner {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url('/bg/bgmi.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.8) 100%),
                      linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 30%);
        }
        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 1000px;
          padding-top: 80px;
        }
        .hero-subtitle {
          font-family: 'Teko', sans-serif;
          font-size: 2.5rem;
          color: var(--bgmi-yellow);
          margin-bottom: -15px;
          letter-spacing: 5px;
        }
        .hero-title {
          font-family: 'Teko', sans-serif;
          font-size: clamp(5rem, 12vw, 10rem);
          line-height: 0.9;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          text-shadow: 0 10px 30px rgba(0,0,0,0.8);
          margin: 0;
        }
        
        /* Yellow Banner */
        .yellow-banner {
          background: var(--bgmi-yellow);
          padding: 15px 0;
          text-align: center;
          overflow: hidden;
          position: relative;
        }
        .yellow-banner-text {
          font-family: 'Teko', sans-serif;
          font-size: 2.2rem;
          color: #000;
          font-weight: 700;
          letter-spacing: 3px;
          margin: 0;
          text-transform: uppercase;
        }

        /* News / Info Section */
        .info-section {
          padding: 80px 5%;
          background: var(--bgmi-black);
        }
        .section-title {
          font-family: 'Teko', sans-serif;
          font-size: 4rem;
          color: #fff;
          margin-bottom: 40px;
          text-transform: uppercase;
          text-align: center;
          position: relative;
        }
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: var(--bgmi-yellow);
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .bgmi-card {
          background: var(--bgmi-gray);
          overflow: hidden;
          transition: transform 0.3s;
          border-bottom: 4px solid transparent;
        }
        .bgmi-card:hover {
          transform: translateY(-10px);
          border-bottom: 4px solid var(--bgmi-yellow);
        }
        .card-image-placeholder {
          height: 200px;
          background: #2a2a2a;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .card-image-placeholder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.5;
          transition: opacity 0.3s;
        }
        .bgmi-card:hover .card-image-placeholder img {
          opacity: 0.8;
        }
        .card-tag {
          position: absolute;
          top: 15px;
          left: 15px;
          background: var(--bgmi-yellow);
          color: #000;
          font-family: 'Teko', sans-serif;
          font-size: 1.2rem;
          padding: 2px 15px;
          font-weight: 700;
        }
        .card-content {
          padding: 25px;
        }
        .card-title {
          font-family: 'Teko', sans-serif;
          font-size: 2rem;
          line-height: 1.1;
          margin: 0 0 15px 0;
          color: #fff;
          text-transform: uppercase;
        }
        .card-text {
          font-size: 0.95rem;
          color: #aaa;
          line-height: 1.6;
        }

        /* Rules List in Card */
        .rules-ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .rules-ul li {
          font-size: 0.9rem;
          color: #ccc;
          margin-bottom: 8px;
          padding-left: 15px;
          position: relative;
        }
        .rules-ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 5px;
          height: 5px;
          background: var(--bgmi-yellow);
        }
      `}),(0,t.jsx)("div",{className:`site-loader ${!e?"hidden":""}`,children:(0,t.jsx)("div",{className:"loader-logo",children:"BATTLEGROUNDS"})}),(0,t.jsxs)("div",{className:"official-site",children:[(0,t.jsxs)("nav",{className:"bgmi-navbar",children:[(0,t.jsxs)(n.default,{href:"/",className:"nav-logo",children:["BATTLEGROUNDS",(0,t.jsx)("span",{children:"MOBILE INDIA"})]}),(0,t.jsxs)("div",{className:"nav-links",children:[(0,t.jsx)(n.default,{href:"/",children:"Home"}),(0,t.jsx)(n.default,{href:"/events",children:"Events"})]}),(0,t.jsx)(n.default,{href:"#",className:"download-btn",children:"REGISTER NOW"})]}),(0,t.jsxs)("header",{className:"hero-banner",children:[(0,t.jsx)("div",{className:"hero-overlay"}),(0,t.jsxs)("div",{className:"hero-content",children:[(0,t.jsx)("div",{className:"hero-subtitle",children:"INDIA KA BATTLEGROUNDS"}),(0,t.jsx)("h1",{className:"hero-title",children:o.name}),(0,t.jsx)("p",{style:{fontSize:"1.2rem",color:"#ddd",marginTop:"20px",maxWidth:"800px",margin:"20px auto 0"},children:o.description})]})]}),(0,t.jsx)("div",{className:"yellow-banner",children:(0,t.jsx)("p",{className:"yellow-banner-text",children:"⚠️ SQUAD UP. DROP IN. SURVIVE. - THE ULTIMATE KURUKSHETRA TOURNAMENT ⚠️"})}),(0,t.jsxs)("section",{className:"info-section",children:[(0,t.jsx)("h2",{className:"section-title",children:"LATEST INTEL"}),(0,t.jsxs)("div",{className:"cards-grid",children:[(0,t.jsxs)("div",{className:"bgmi-card",children:[(0,t.jsxs)("div",{className:"card-image-placeholder",children:[(0,t.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(45deg, #111, #333)"}}),(0,t.jsx)("span",{className:"card-tag",children:"FORMAT"}),(0,t.jsx)("div",{style:{position:"relative",zIndex:1,fontFamily:"Teko",fontSize:"6rem",color:"rgba(255,255,255,0.05)"},children:"SQUAD"})]}),(0,t.jsxs)("div",{className:"card-content",children:[(0,t.jsx)("h3",{className:"card-title",children:"TOURNAMENT FORMAT"}),(0,t.jsx)("p",{className:"card-text",children:"Squad up with 4 players. Survive the intense battle royale elimination rounds. The ultimate test of teamwork and strategy."}),(0,t.jsxs)("div",{style:{marginTop:"15px",color:"#F2A900",fontFamily:"Teko",fontSize:"1.5rem",letterSpacing:"1px"},children:["TEAM SIZE: ",o.teamSize]})]})]}),(0,t.jsxs)("div",{className:"bgmi-card",children:[(0,t.jsxs)("div",{className:"card-image-placeholder",children:[(0,t.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(45deg, #332200, #111)"}}),(0,t.jsx)("span",{className:"card-tag",children:"REWARDS"}),(0,t.jsx)("div",{style:{position:"relative",zIndex:1,fontFamily:"Teko",fontSize:"6rem",color:"rgba(242,169,0,0.08)"},children:"PRIZE"})]}),(0,t.jsxs)("div",{className:"card-content",children:[(0,t.jsx)("h3",{className:"card-title",children:"MASSIVE PRIZE POOL"}),(0,t.jsx)("p",{className:"card-text",children:"Dominate the battleground and claim the top spot. Only the best squads walk away with the rewards."}),(0,t.jsx)("div",{style:{marginTop:"15px",display:"flex",flexDirection:"column"},children:o.prizes?.map((e,i)=>(0,t.jsx)("span",{style:{color:0===i?"#F2A900":"#ccc",fontFamily:"Teko",fontSize:"1.5rem",letterSpacing:"1px"},children:e},i))})]})]}),(0,t.jsxs)("div",{className:"bgmi-card",children:[(0,t.jsxs)("div",{className:"card-image-placeholder",children:[(0,t.jsx)("div",{style:{position:"absolute",inset:0,background:"linear-gradient(45deg, #111, #222)"}}),(0,t.jsx)("span",{className:"card-tag",children:"RULES"}),(0,t.jsx)("div",{style:{position:"relative",zIndex:1,fontFamily:"Teko",fontSize:"6rem",color:"rgba(255,255,255,0.05)"},children:"INFO"})]}),(0,t.jsxs)("div",{className:"card-content",children:[(0,t.jsx)("h3",{className:"card-title",children:"RULES OF ENGAGEMENT"}),(0,t.jsx)("ul",{className:"rules-ul",children:o.rules?.map((e,i)=>(0,t.jsx)("li",{children:e},i))})]})]})]})]}),(0,t.jsxs)("footer",{style:{background:"#0a0a0a",padding:"40px 5%",textAlign:"center",borderTop:"1px solid #222"},children:[(0,t.jsxs)("div",{style:{fontFamily:"Teko",fontSize:"2.5rem",color:"#555",lineHeight:1},children:["BATTLEGROUNDS",(0,t.jsx)("span",{style:{display:"block",fontSize:"1rem",letterSpacing:"2px"},children:"MOBILE INDIA"})]}),(0,t.jsxs)("p",{style:{color:"#555",fontSize:"0.8rem",marginTop:"20px",maxWidth:"600px",margin:"20px auto 0"},children:["© 2026 KRAFTON, Inc. All rights reserved. ",(0,t.jsx)("br",{}),"This is a promotional page for the AIKYAM Tech Event. Not affiliated with Krafton."]})]})]})]}):(0,t.jsx)("div",{children:"Event not found"})}])}]);