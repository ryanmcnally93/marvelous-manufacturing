document.addEventListener("DOMContentLoaded", function () {
    var currentUrl = new URL(window.location);
    person = currentUrl.search.substring(5);
    if (person == 'sara') {
        document.title = "MM | Sara Penrose";
        document.getElementById('name').innerText = 'Sara Penrose';
        document.getElementById('about').innerHTML = `
            <img id="image" class="successful-image" alt="Sara Penrose" src="./assets/images/sara-penrose.jpeg">
            <p>"I said to my careers teacher that I liked science, maths and art. The response I received was do you fancy being a nurse or doing a business course at college.</p>
            <p>Hardly inspiring!</p>
            <p>Education and learning have always been important in my family, we come from fairly humble stock so you have to make your own opportunities. At this point I have to pay tribute to my dear Mother, who was not overly impressed with the advice of the careers department, so we marched off to the careers library at Tresham College in Kettering to find out more about where my interests could take me.</p>
            <p>To put some more context my Dad is king of the tinklers, forever repairing or adjusting something, so I used to sneak into his workshop and ask ‘why does that do that? or ‘How does that work?’ I was fascinated when he took something apart and put it back together again. He was also a keen artist so it just made sense that I could like maths, science and art.</p>
            <p>Back to the careers library. My Mum helped me find a career that fitted my interest and so my journey with Chemical Engineering began. It was very exciting, but I had a lot to learn. I picked the appropriate A levels and applied for several courses. It came down to Bath or Loughborough for a degree in Chemical Engineering. At the same time I wrote to a local company in Corby. ABR Foods, a starch producer and part of ABF. My letter expressed my passion for science and that I wanted to develop my career. I asked if I could complete some work experience in the second year of A levels. I was blessed by the chance to work in the drawing office, which I enjoyed so much I went back in the summer. Just before I went away to University ABR offered to sponsor me through the degree course.</p>
            <p>When I told most of my friends about my career path they often used to say ‘oh, that’s nice.’ not really understanding what it was. I think you sometimes have to be single minded to follow your passions. In the end I chose Loughborough University, which was superb, but hard work! The course was intense, challenging but ultimately rewarding. The female/male ratio was heavily skewed to towards the boys, but they were all a great bunch. There was no difference, we were all chem engers and many have stayed good friends long after I graduated. Part of my course was a year out in industry, which I completed at ABR. That was a must and I learnt so much in my time there. Combining the practical and theoretical, which was very valuable and I made some good life long relationships.</p>
            <p>Upon graduation in 1999 I joined ABR full time, by which time it had become Roquette UK. I worked as a Project Engineer, the first female to do so at the plant. My number one focus was to be a good engineer. I wanted to be recognised for skill and aptitude, this meant getting stuck in and digging deep down into the functioning of the plant. I was welcomed as one of their own and despite some challenging situations was very much accepted and supported by the production team. I did have to be a little bit sneaky in that when I first started I was given jobs, which although perfectly valuable, were not really part of my role. For example It was assumed I take all the meeting notes and type them up. So mysteriously I developed a really keen knack of typing really really slowly. Unsurprisingly this task was removed from me, so I could actually get on with some engineering! It is true to say I had to fight for the work, just sitting back and I would probably have been ignored.</p>
            <p>I was disappointed to find a bit of a glass ceiling at Roquette. It was acceptable for females to be engineers (although there were only a few), but not to rise to more senior managerial or directorship positions. So I left Roquette for Scott Bader in 2007 as firstly Senior Project Engineer then Plant Manager looking after 2 plants and a team of 40 . This combined engineering and operations in one area and allowed me to learn how to run a plant and motivate an industrial team. In 2011 I changed tack and decided to spend time developing my other interest art. I became a full time artist and developed that into a business providing luxury experience days and holidays in France. That again was a whirlwind and lots to learn.</p>
            <p class="mb-0">In 2008 I formed Sara Penrose Ltd with my business partner and husband John Henderson. We saw a need for developing fundamental human skills in manufacturing and logistics. Better thinking, better creating and better solving. We optimise plant, systems and supply chains, so why could we not optimise people through skill development? This is where I combine my interest in maths, science and art as we use a skilled creative task as a problem to solve in a process driven training workshop. Talk about full circle and then some. But I have not lost my passion for hands on engineering as I still undertake project work, recently in automotive chemicals and nuclear."</p>`;
    }
    else if (person == 'mark') {
        document.title = "MM | Mark Haywood";
        document.getElementById('name').innerText = 'Mark Haywood';
        document.getElementById('about').innerHTML = `
            <img id="image" class="successful-image" alt="Mark Haywood" src="./assets/images/mark-large.jpg">
            <p>"I was fortunate that from a young age I had strong influences around me with engineering backgrounds. At school I found it quite easy to directly my learning to the main areas of interest, maths, science, and technology.</p>
            <p>I also knew I wanted to go the route of an apprenticeship as I wanted to be paid while learning.</p>
            <p>I started at Slack and Parr in Kegworth straight after leaving school. The idea of getting hands on in a training centre was a huge draw to me. The GNVQ side of training was centred around tasks and training while creating engineered parts. This gave me experience in manufacturing within the areas of the company.</p>
            <p>The apprenticeship was supported by day release at college doing BTEC and HNC, with options to take the academic path further.</p>
            <p>The first year was in the training centre, to ensure we learned all the required safe practices. Years 2-4 were based around the factory, learning the products and new skills.</p>
            <p>As I moved around the factory, I knew I wanted to focus on the design side of engineering, as I enjoyed creating from scratch. This path made me realise that all the supporting training and lessons learnt thro my progression to design ensured I understood how to design something that can be manufactured.</p>
            <p>Moving onto another company in a design role exposed me to new methods of manufacture, and ways to design. With a focus on Workholding, meant a greater requirement to understand methods of manufacture, as this was driven by the customers’ requirements.</p>
            <p>My next role came after a few years of managing myself and another designer, I was requested to manage a team of designers, with focus on the engineering solution and final engineering decisions. I couldn’t have done this role without the progress and years behind me. The role itself progressed to the point of costing, quoting, and producing initial schemes at the earliest stages of a project.</p>
            <p class="mb-0">The last set of skills directed me more into a sales role. Within our sector, customers expect a high level of technical capability when discussing projects at a very early stage. Generally, I’m looking at a blank page with minimal specifications, and the customer expects solutions."</p>`;
    }
    else if (person == 'james') {
        document.title = "MM | James Blythe";
        document.getElementById('name').innerText = 'James Blythe';
        document.getElementById('about').innerHTML = `
            <img id="image" class="successful-image" alt="James Blythe" src="./assets/images/james-blythe.jpeg">
            <p>"Apparently, I was not your “typical” apprentice – achieving 3 A*, 4 A’s and 2 B’s at GCSE.</p>
            <p>However, my passion was for science and technology, and the application of it.  I was lucky that the comprehensive school I attended had strong industry ties and as such work experience provided me some excellent opportunities to work for the likes of British Steel etc. However, the path even then was seen as an academic one – and that apprenticeships where a “lower grade”.</p>
            <p>I was lucky though that several family friends where in “Engineering industries” including someone who I respected greatly who was a CEO of a very large plastics manufacturer (who was by “trade” an engineer) they all said said the apprenticeship as the way to go.</p>
            <p>So, I started my apprenticeship at 16, it was a brilliant experience where I learnt a diverse set of skills across the business, experienced industry (the site was sold 3 times, redundancies and so on).  I found my niche in Power electronics, specifically in a group specialising in applications and testing, I was exposed to customers, I was involved in projects including for the likes of CERN as well as across many industries from automotive to defence.</p>
            <p>As I completed my apprenticeship, due to the situation of the company, I looked for another position, I ended up working for the R&D (Research and Development) arm of a large Japanese scientific company, leaving home, and relocating to Manchester. Where I was involved in mass spectrometry and low energy electron microscopes as part of the Electronics function, working on Power supplies, Testing and integration.</p>
            <p>My next steps took me through several companies, around the country, with time working on Power Systems, and energy storage in rail, marine and other industries and finally working for Airbus in Bristol, this took me all over Europe, and broadened my experience in managing projects, budgets, and diverse cultures!</p>
            <p>Airbus really opened my eyes, and so I moved into engineering consultancy, working from Bristol for a wide range of clients, taking me around Europe, USA, Canada, South America, and many others working in Aerospace and Defence. This gave me the opportunity to worked with and for nearly all the top 20 Aerospace and Defence (Land, Air and Sea) companies and even to work on high performance battery systems, including those used and derived from such things as F1 (This was 10 years ago + - it was new! very new!).</p>
            <p>I have continued to work, as a consultant, specialising in “Systems”, especially focused on Power, Motors, Batteries especially in specialist industries/ applications, and in 2020 formed a new business – that survived COVID thus far!</p>
            <p>So, as I come up to 24 years in the engineering industry… I have had the opportunity to travel, I have seen, built, designed, and tested things that most people never get the chance to see/ get that close to. I have had the opportunity to managed projects, teams, and budgets. for me best of all I have had the opportunity to design, build test and deliver some things that make me feel proud to do what I do.  I have learnt a lot and continue to do so.  I have pride, and passion for what I do… and this is the very thing that keeps me motivated.</p>
            <p>Do you need a degree to enter engineering? No definitely not, do you need a desire to learn, a passion for “making” things? Yes - definitely... One of the best things about “engineering”, is that the opportunities are vast, encompassing in some way nearly every aspect of the world of work... so training to be an engineer, by what ever route you choose, is all about working hard, learning hard, and seeking opportunities that arise and finding the aspect of engineering that suits you... </p>
            <p class="mb-0">One last thing I do want to say is, I have generally found engineering to be one of the most inclusive environments possible, where respect is earnt, skills and commitment demonstrated. It is diverse in many areas and that diversity is its strength. I have worked with many people form many backgrounds, of many nationalities of many..... all that has mattered is "getting the job done"... So please do not think this is a "mans" industry or "one for the boys"... I have seen many (who had the ability and aptitude in my view) turned off considering engineering as a career because it wasn't a "suitable"... I hope those days are gone!"</p>`;
    }
    else if (person == 'bob') {
        document.title = "MM | Bob Watmore";
        document.getElementById('name').innerText = 'Bob Watmore';
        document.getElementById('about').innerHTML = `
            <img id="image" class="successful-image" alt="Bob Watmore" src="./assets/images/bob-large.jpg">
            <p>"I was born and lived until 18 on the south coast of England but had a desire for engineering from my physics and mathematics A levels, so I applied for positions mainly in the midlands.</p>
            <p>I was very fortunate to be offered a position, and I started my engineering career on what would now be called a degree apprenticeship, as a Sponsored Student at Jaguar Rover attending Coventry Polytechnic on a Mechanical Engineering degree from 1980 to 1984.</p>
            <p>During those 4 years I had multiple placements across the business, including the production lines, machine shops supply of small and large components to the engine build lines, heat treatment, metrology and measuring inspection, marketing, and finance. This rounded my experience and prepared me for my early career.</p>
            <p>My first placement job was on Rover car chassis subframe designs and testing, where I completed both manual drawing board and eventually CAD designs for components, and lots of vehicle driving on secure test tracks.</p>
            <p>Over the next 8 years I completed a Masters degree, that would now be called an apprenticeship at Warwick University, and was promoted through to a Manager of a small team of engineers on Rover cars for engine mounts and front engine carrying subframes. This utilised all of my learnt knowledge and skills from the engineering qualifications, such as mathematics, strengths of materials, stress and bending loads, and lifetime estimations of designs.</p>
            <p>I increasingly took an interest in statistics and its use in quality management and took further qualifications in this area. This led me to work on Problem Solving activities and the work on continuous quality improvement in automotive vehicles driven by both manufacturing and customer feedback problems. I put these skills into practice at Land Rover for 7 years, travelling to North America, South Africa and across Europe to work on problem solving and quality improvement, as well as becoming an internal staff Trainer on the subjects.</p>
            <p>I then left the automotive industry in 2002 and took qualifications to become a vocational qualification Assessor, Trainer, and Quality Internal Verifier. I then worked for colleges and independent providers in the midlands on training and assessing qualifications for all staff and apprentices in engineering, manufacturing and leadership and management for 10 years.</p>
            <p>I then used this experience to successfully move to North Yorkshire to work for an apprenticeship provider as a Trainer and Assessor, and to complete this role I became experienced in delivering all aspects of the OFSTED accreditation requirements. I then recently worked for City of York Council for 3 years engaging and advising employers in all employment sectors on recruiting and employing apprenticeships.</p>
            <p class="mb-0">I am now working towards the end of my employed career in a part time role for NYBEP to promote the engagement of employers in directly supporting careers advice and guidance for all secondary and FE educational settings across York and North Yorkshire, in which I can indulge my passion for promoting jobs in STEM, the environment and the green economy."</p>`;
    }
    else if (person == 'helen') {
        document.title = "MM | Helen Phillips";
        document.getElementById('name').innerText = 'Helen Phillips';
        document.getElementById('about').innerHTML = `
            <img id="image" class="successful-image" alt="Helen Phillips" src="./assets/images/helen-phillips.jpeg">
            <p>"I was always fascinated by how things worked, and enjoyed maths and sciences at school.</p>
            <p>I chose to do an electrical and electronics engineering degree because I thought it was more suitable for a girl.</p>
            <p>Looking back, that horrifies me, but it was the early 1980s and girls rarely went into engineering.</p>
            <p>I was encouraged to find sponsorship and do a year in industry before going to University at Imperial College London.</p>
            <p>Initially I applied to electronics and aerospace companies but I was unsuccessful, and the working environment seemed sterile.</p>
            <p>I didn't want to apply to go into the steel industry, but during a a rigorous selection process, they took me everywhere - it was hot, noisy, dirty, and simply the most exciting thing I'd ever seen.</p>
            <p>I was the first female engineering student taken on by Allied Steel & Wire Ltd, and the first female engineer in the steel industry in Wales</p>
            <p>The CEO felt that you could train engineers to understand business, more easily than you could train accountants to understand engineering, so our training in our pre-university year, and in our post-graduate year, was all geared around giving us as broad an experience as possible - I had secondments in every department of the business, including spells at Head Office working alongside management consultants on strategic projects.</p>
            <p class="mb-0">My career path continued as follows:</p>
            <p class="mb-0">1987 - 1989 - Shift production manager - wire mill</p>
            <p class="mb-0">1989 - 1991 - Project Manager - helped to set up a new business - responsible for designing the business processes, selecting computer systems, and involved in recruiting the early team members</p>
            <p class="mb-0">1991 - 1993 - Production Manager, steel fabrication business</p>
            <p class="mb-0">1993 - 2000 - IT Project Manager - looking at business processes, making them more effective, then either designing or selecting suitable software and project managing the implementation</p>
            <p class="mb-0">2000 - 2005 - Business Systems Manager - construction products company</p>
            <p class="mb-0">2005 - 2006 - Customer Services Manager - as above</p>
            <p class="mb-0">2006 - 2010 - Supply Chain Manager</p>
            <p class="mb-0">2010 - 2012 - Quality Systems Manager</p>
            <p class="mb-0">2013 - 2016 - Operations Director - door manufacturing company</p>
            <p class="mb-0">2016 - present - self-employment business adviser, helping business owners with growth and exit planning"</p>`;
    }
    else if (person == 'simon') {
        document.title = "MM | Simon Davey";
        document.getElementById('name').innerText = 'Simon Davey';
        document.getElementById('about').innerHTML = `
            <img id="image" class="successful-image" alt="Simon Davey" src="./assets/images/simon-large.jpg">
            <p>"At 16 years old we are faced with one of the toughest decisions of our young lives.</p>
            <p>We reach a crossroads and have to make a major decision to where we go next. Do we continue down the learning path and follow further education, or do we choose to take a path into a career.</p>
            <p>I chose the latter; the difficulty I had was to know what type of careers there are out there.</p>
            <p>However, what I do now was never an option to me at school because the career advisor that I had, had never heard of Continuous Improvement as a job. Ironic that they were in the practice of continuously improving pupils through education.</p>
            <p>At 16 my opinion changed weekly, I wanted to be a printer, a policeman, an engineer, a teacher the list was endless. I liked aspects of those jobs but not all of the job. What I do now has some roots in all of those jobs.</p>
            <p>Today I use those skills to support businesses to help them improve. I look at how they perform and make recommendations for change to improve their performance whilst reducing costs and empowering their teams through education.</p>
            <p>But how did I get here? Through a blend of natural ability, training, and learning. Plus lots of hard work.</p>
            <h3>Natural skills</h3>
            <p class="mb-0">Observation – Being able to see the bigger picture both, physically and with data</p>
            <p class="mb-0">Awareness – Understanding interactions between people, people and machine, machine, and machine</p>
            <p class="mb-0">Adaptability – Understanding that all challenges are different and delivering the right solution to the right challenge</p>
            <p class="mb-0">Effective Communication – Being able to talk to different people at all levels with empathy creating relationships to deliver both personal and business change</p>
            <p class="mb-0">Creative Thinking – Being able to look at challenges without preconceived constraint, identifying deliverable solutions</p>
            <p>Problem Solving – Looking at challenges and creating and implementing a solution</p>
            <h3>Trained Skills</h3>
            <p class="mb-0">Engineering – Completed an Engineering Apprenticeship</p>
            <p class="mb-0">Data Analysis – Qualified Six Sigma Black Belt a highly desired global improvement qualification</p>
            <p class="mb-0">Project Management – Qualified in Prince2 Project Management</p>
            <p class="mb-0">Business and Finance – Completed a Three-year BTEC/NVQ</p>
            <p>Numerous on the Job trainings – Varying from Machine Operation, Legislative and industry specific, Health & Safety and HR.</p>
            <p>These natural and learned skills have enabled me to have spent 26 years working in various industries delivering continuous improvement projects. With today’s focus on reducing costs and improving business performance my skill set is in demand.</p>
            <p class="mb-0">Looking back to when I was 16 I would tell myself. Focus on what skills you have and enjoy using, research what jobs utilise those skills and then create a flexible career path. Most career trajectories are not straight, there are a lot of sideways moves. These are all great learning opportunities, take them, you’ll thank me in the long run."</p>`;
    }
    else {
        document.title = "MM | 404 Error";
        document.getElementById('name').innerText = '404 Error';
        document.getElementById('about').innerText = 'Failed to find the person entered into the URL.';
    }
});