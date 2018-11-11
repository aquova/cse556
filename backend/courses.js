// You can't use SQL without a server, and it would be a hassle to have to save constantly with a .csv, so this is an experiment of just having it as a table in memory.
// This way we skip the extra step of having to read/write to a file, and we're allowed to 'fake it' anyway, so whatever

var classesDB = [
//   School, Department, Course #, Start time, End time, Weekdays, Professor,     Name                                                  Prerequisite            Description
    ["ENG",  "CSE",      131,      1130,       1300,     "TR",     "Cytron",      "Computer Science I",                                 "" ,                    "An introduction to software concepts and implementation, emphasizing problem solving through abstraction and decomposition. Introduces processes and algorithms, procedural abstraction, data abstraction, encapsulation, and object-oriented programming. Recursion, iteration, and simple data structures are covered. Concepts and skills are mastered through programming projects, many of which employ graphics to enhance conceptual understanding. Java, an object-oriented programming language, is the vehicle of exploration. Active-learning sessions are conducted in a studio setting in which students interact with each other and the professor to solve problems collaboratively. Prerequisites: Comfort with algebra and geometry at the high school level is assumed. Patience, good planning, and organization will promote success. This course assumes no prior experience with programming. Three evening exams at which attendance is required will be on Mondays, February 11th and March 18th and Tuesday, April 30th from 6:30-8:30 p.m."],
    ["ENG",  "CSE",      132,      1130,       1300,     "MW",     "Siever",      "Computer Science II",                                "CSE 131",              "CSE 132 introduces students to fundamental concepts in the basic operation of computers, ranging from desktops and servers to microcontrollers and handheld devices. Subjects include digital and analog input/output, sensing the physical world, information representation, basic computer architecture and machine language, time-critical computation, machine-to-machine communication and protocol design. Students will use both desktop systems and handheld microcontrollers for laboratory experiments. Active-learning sessions are conducted in a studio setting in which students interact with each other and the professor to solve problems collaboratively."],
    ["ENG",  "CSE",      204,      830,        1000,     "TR",     "Hufstedler",  "Web Development",                                    "CSE 131",              "This course explores elementary principles for designing, creating and publishing effective websites and web application front-ends. Topics include page layout concepts, color theory, design principles, search engine optimization, HTML, CSS, Javascript, front-end frameworks like Angular and React, and other development tools. Students apply the topics by creating a series of websites, which are judged based on their design and implementation."],
    ["ENG",  "CSE",      217,      1600,       1730,     "R",      "Neumann",     "Intro to Data Science",                              "MATH 233, CSE 247",    "This course provides an introduction to Data Science and Machine Learning focusing on the practical application of models to real-world supervised and unsupervised learning problems. We will discuss methods for linear regression, classification, and clustering, and apply them to perform sentiment analysis, implement a recommendation system, and perform image classification or gesture recognition. One of the main objectives of the course is to become familiar with the data science workflow, starting from posing a problem, understanding and preparing the data, training and evaluating a model, up to presenting and interpreting its results. We will also touch upon concepts such as similarity-based learning, feature engineering, data manipulation, and visualization. The course use and introduce Python, which is currently the most popular programming language for data science."],
    ["ENG",  "CSE",      231,      1000,       1130,     "TR",     "Cosgrove",    "Intro to Parallel and Concurrent Programming",       "CSE 131",              "This course explores concepts, techniques, and design approaches for parallel and concurrent programming. We study how to write programs that make use of multiple processors for responsiveness and that share resources reliably and fairly. Parallel programming concepts include task-level, functional, and loop-level parallelism. Concurrent programming concepts include threads, synchronization, and locks. We cover how to adapt algorithms to achieve determinism and avoid data races and deadlock. Concepts and skills are acquired through the design and implementation of software projects. An evening midterm exam at which attendance is required will be on Wednesday, March 20th from 6:30-8:30 p.m."],
    ["ENG",  "CSE",      240,      830,        1000,     "MW",     "Sproull",     "Logic and Discrete Math",                            "CSE 131",              "Introduces elements of logic and discrete mathematics that allow reasoning about computational structures and processes. Generally, the areas of discrete structures, proof techniques, probability and computational models are covered. Topics typically include propositional and predicate logic; sets, relations, functions and graphs; proof by contradiction, induction and reduction; finite state machines and regular languages; and introduction to discrete probability, expected value and variance."],
    ["ENG",  "CSE",      247,      1430,       1600,     "T",      "Cole",        "Data Structures and Algorithms",                     "CSE 131",              "Study of fundamental algorithms, data structures, and their effective use in a variety of applications. Emphasizes importance of data structure choice and implementation for obtaining the most efficient algorithm for solving a given problem. A key component of this course is worst-case asymptotic analysis, which provides a quick and simple method for determining the scalability and effectiveness of an algorithm.Two evening exams at which attendance is required will be on Wednesdays, Feb. 20th and April 3rd from 6:30-8:30 p.m. "],
    ["ENG",  "CSE",      260,      1300,       1430,     "MW",     "Richard",     "Intro to Digital Logic",                             "CSE 131",              "Introduction to design methods for digital logic and fundamentals of computer architecture. Boolean algebra and logic minimization techniques; sources of delay in combinational circuits and effect on circuit performance; survey of common combinational circuit components; sequential circuit design and analysis; timing analysis of sequential circuits; use of computer-aided design tools for digital logic design (schematic capture, hardware description languages, simulation); design of simple processors and memory subsystems; program execution in simple processors; basic techniques for enhancing processor performance; configurable logic devices."],
    ["ENG",  "CSE",      330,      1000,       1130,     "MW",     "Sproull",     "Rapid Prototype Development",                        "CSE 131",              "This course uses web development as a vehicle for developing skills in rapid prototyping. Students acquire the skills to build a Linux web server in Apache, to write a web site from scratch in PHP, to run an SQL database, to perform scripting in Python, to employ the AngularJS web framework, and to develop modern web applications in client-side and server-side JavaScript. The course culminates with a creative project in which students are able to synthesize the course material into a project of their own interest. The course implements an interactive studio format: after a formal presentation of a topic, students develop a related project under the supervision of the instructor."],
    ["ENG",  "CSE",      332,      1000,       1130,     "MW",     "Shidal",      "Object-Oriented Software Development",               "CSE 247",              "Intensive focus on practical aspects of designing, implementing and debugging software, using object-oriented, procedural, and generic programming techniques. The course emphasizes familiarity and proficiency with a wide range of C++ language features through hands-on practice completing studio exercises and lab assignments, supplemented with readings and summary presentations for each session. An evening midterm exam at which attendance is required will be on Thursday, April 4th from 6:30-8:30 p.m."],
    ["ENG",  "BME",      240,      1430,       1600,     "T",      "Moran",       "Biomechanics",                                       "PHYS 117",             "Principles of static equilibrium and solid mechanics applied to the human anatomy and a variety of biological problems. Statics of rigid bodies with applications to the musculoskeletal system. Mechanics of deformable media (stress, strain; stretching, torsion, and bending) with introduction to nonlinear behavior, viscoelasticity, and growth in living tissue. Applications to cells, bone, muscle, arteries, the heart, and the cochlea."],
    ["ENG",  "BME",      301,      1300,       1430,     "TR",     "Silva",       "Quantitative Physiology II",                         "BME 140",              "A course (lecture and supervised laboratory sessions) designed to elaborate the physiological background necessary for advanced work in biomedical engineering. A quantitative model-oriented approach to physiological systems is stressed. Topics include electrocardiography; heart contractility and molecular bases; cell signaling, pulse wave propagation in arteries; renal function; imaging, and systems biology."],
    ["ENG",  "BME",      329,      1000,       1130,     "MW",     "Ledbetter",   "Biothermodynamics in Practice",                      "PHYS 117",             "This course will include hands-on, laboratory experiments in topics relevant to bioengineering thermodynamics, such as heat transfer, relationships involving temperature and pressure, equilibria, mixing, and solution chemistry. A focus of the course will be extending fundamental scientific principles to biological applications. Students will have the opportunity to design their own experiments, explore topics of special interest, and present their findings. "],
    ["ENG",  "BME",      366,      1130,       1300,     "MW",     "Shao",        "Transport Phenomena",                                "BME 240",              "Many processes of importance in biology and medicine involve the transfer of mass, heat or momentum. Through the use of the differential control volume approach, the fundamental transport equations will be derived. Systematic derivation of differential equations appropriate for different types of transport problems will be explored. Solutions of the resulting differential equations for simple chemical/biological systems will then be sought. Macroscopic descriptions of fluid flow will be applied to the design of blood pumps for the heart. Unsteady mass transfer with diffusion, advection and chemical reactions will also be applied to the transport of proteins, metabolites and therapeutics throughout the body. "],
    ["ENG",  "BME",      442,      1000,       1130,     "MW",     "Rudra",       "Biomacromolecules Design",                           "",                     "Biological macromolecules (carbohydrates, lipids, proteins, and nucleic acids), are important components of the cell and its supporting matrix that perform a wide array of functions. This course will introduce the principles and recent advances in nucleic acid/gene engineering, protein/peptide engineering, and chemical/enzymatic conjugation technologies and will also discuss the application of engineered biomacromolecules in clinical therapeutics/diagnostics, biosensing, bioimaging, and biocatalysis. Students will learn material through lecture, reading, homework, scientific publications, and molecular visualization tools. Students will work individually or in pairs/groups to develop and lead discussions on engineering biomacromolecules and molecular characterization techniques."],
    ["ENG",  "BME",      443,      1430,       1600,     "TR",     "Vahey",       "Molecular and Cellular Engineering",                 "",                     "The ability to engineer biological function at the cellular level holds tremendous potential for both basic and applied science. This course aims to provide knowledge and practical proficiency in the methods avilable for measuring and controlling the molecular organization of eukaryotic cells. Topics to be covered include genome engineering using viral- and CRISPR-Cas systems; spatial and temporal control of proteins and their interactions; methods for characterizing and engineering post-translational modifications; and the relationship between cellular organization and function in migration, immune cell target recognition, and differentiation. Examples from recent scientific literature will provide the foundation for these topics."],
    ["ENG",  "ESE",      103,      1600,       1800,     "T",      "Richter",     "Intro to Electrical Engineering",                    "",                     "A hands-on introduction to electrical engineering to put the fun into the electrical engineering fundamentals. Experiments are designed to be easy to conduct and understand. Some of the technologies explored are used in a variety of applications including Ultrasound Imaging, Computed Tomography, DC Motors, Analog to Digital Converters and Credit Card Readers. Students work in groups of two in the newly renovated Urbauer 115 laboratory. Each station is equipped with modern electronic test equipment and a computer with an integrated Data Acquisition system. Using this lab equipment, students design and build solutions to the exercises. The students also learn to program in LabVIEW to control the Data Acquisition system and process the acquired signals. "],
    ["ENG",  "ESE",      205,      1500,       1600,     "F",      "Sheehan",     "Intro to Engineering Design",                        "CSE 131, PHYS 117",    "A hands-on course where students, divided in groups of two or three, will creatively solve one problem throughout the semester using tools from electrical and systems engineering. The groups choose their own schedule and work under the supervision of an academic team consisting of faculty and higher-level students. The evaluation considers the completion of objectives set by the students with help of the academic team, as well as the orignality, innovation, and impact of the project. "],
    ["ENG",  "ESE",      230,      1300,       1430,     "TR",     "Nussinov",    "Intro to Electrical Circuits",                       "PHYS 117",             "Electrical energy, current, voltage, and circuit elements. Resistors, Ohm's Law, power and energy, magnetic fields and DC motors. Circuit analysis and Kirchhoff's voltage and current laws. Thevenin and Norton transformations and the superposition theorem. Measuring current, voltage and power using ammeters and voltmeters. Energy and maximum electrical power transfer. Computer simulations of circuits. Reactive circuits, inductors, capacitors, mutual inductance, electrical transformers, energy storage, and energy conservation. RL, RC and RLC circuit transient responses. AC circuits, complex impedance, RMS current and voltage. Electrical signal amplifiers and basic operational amplifier circuits. Inverting, non-inverting, and difference amplifiers. Voltage gain, current gain, input impedance, and output impedance. Weekly laboratory exercises related to the lectures are an essential part of the course. "],
    ["ENG",  "ESE",      318,      1130,       1300,     "MW",     "Hoven",       "Engineering Mathematics A",                          "MATH 233",             "Laplace transforms; matrix algebra; vector analysis; eigenvalues and eigenvectors; vector differential calculus and vector integral calculus in three dimensions."],
    ["ENG",  "ESE",      319,      900,        1000,     "MWF",    "Hasting",     "Engineering Mathematics B",                          "MATH 233",             "Power series and Frobenius series solutions of differential equations; Legendre's equation; Bessel's equation; Fourier series and Fourier transforms; Sturm-Liouville theory; solutions of partial differential equations; wave and heat equations. "],
    ["ENG",  "ESE",      326,      1000,       1130,     "MW",     "Zhang",       "Probability and Statistics",                         "MATH 233",             "Study of probability and statistics together with engineering applications. Probability and statistics: random variables, distribution functions, density functions, expectations, means, variances, combinatorial probability, geometric probability, normal random variables, joint distribution, independence, correlation, conditional probability, Bayes theorem, the law of large numbers, the central limit theorem. Applications: reliability, quality control, acceptance sampling, linear regression, design and analysis of experiments, estimation, hypothesis testing. Examples are taken from engineering applications. "],
    ["ARCH", "ARCH",     101,      830,        1130,     "MW",     "He",          "Drawing",                                            "",                     "An introductory course that teaches the student to recognize and manipulate fundamental elements of composition, line, form, space, modeling and color. Students will explore drawing as a diverse and multi-faceted activity. Working from both observation and imagination, emphasis will be placed on making work through a range of drawing methodologies. Students work in a variety of media. Demonstrations and illustrated lectures supplement studio sessions and outside projects. Enrollment limit will be set at zero and students will be enrolled from waitlist. College of Architecture first-year students have priority. This class counts toward the Minor in Architecture for non-Sam Fox School students."],
    ["ARCH", "ARCH",     112,      1300,       1600,     "MW",     "TBA",         "Intro to Design Processes II",                       "ARCH 1111",            "This core design studio engages the basic principles of architectural design through iterative processes of drawing and making, using a variety of tools, media and processes. The coursework includes studio work, lectures, student presentations, and local field trips."],
    ["ARCH", "ARCH",     175,      1300,       1430,     "TR",     "Lindsey",     "Designing Creativity",                               "",                     "Via a series of lectures from prominent thinkers and practitioners in the areas of medicine, neuroscience, law, engineering, architecture, human-centered design, business, stage design, and the performing arts, Designing Creativity is a course that will cover the study and practice of the creative process across many disciplines. From 'Ah-ha' epiphanies to slow-developing discoveries, the creative process is employed by innovators and artists in virtually every corner of the Globe. In this course, we explore the study of those processes by hearing from creatives in many fields with practice of those techniques via a LAB component that will allow students to explore the development of innovative ideas in collaborative teams followed by project presentations to core faculty and classmates."],
    ["ARCH", "ARCH",     183,      1100,       1200,     "F",      "Lorberbaum",  "Practices in Architecture + Art + Design",           "",                     "This course offers first-year students in the College of Architecture an introduction to the subjects, theories, and methodologies of the disciplines of art, design, architecture, landscape architecture, and urban studies. Examples drawn from a range of historical periods as well as contemporary practice highlight distinct processes of thinking and working in each discipline, as well as areas of intersection and overlap."],
    ["ARCH", "ARCH",     212,      1300,       1700,     "TR",     "TBA",         "Intro to Design Processes IV",                       "ARCH 211",             "Studio which initiates architectural and building issues such as: building analysis, structure, organizational systems, and programming."],
    ["ARCH", "ARCH",     312,      1300,       1700,     "MWF",    "TBA",         "Architectural Design II",                            "ARCH 311",             "This course is an option studio that focuses on advanced architectural design and an in-depth study of a specific topic through rigorous design development."],
    ["AS",   "BIO",     2960,      1000,       1100,     "MWF",    "Kunkel",      "Principles of Biology I",                            "CHEM 112",             "The course provides an introduction to cell biology, biochemistry, and molecular biology. An understanding of cellular structure and mechanisms, and the properties of biological macromolecules are integrated with a discussion of the flow of genetic information within cells. Examples of how these concepts can be applied to selected areas in modern biology will be discussed. Weekly labs reinforce material from lectures and explore common laboratory techniques and computer-based resources. "],
    ["AS",   "BIO",     2961,      1600,       1800,     "M",      "Hafer",       "Collaborative Phage Bioinformatics",                 "BIO 2960",             "A research-based laboratory for those enrolled in Bio 2960, this class provides an opportunity to join a research team with the goal of genomic characterization of a locally isolated phage (a virus that infects a bacterial host). Similar to Bio 192, but using a condensed format and a larger team to tackle each phage. Lab work focuses on learning computer-based tools for genome analysis, followed by careful annotation of several genes from your phage and in-depth investigation of one gene."],
    ["AS",   "BIO",      303,      1500,       1700,     "M",      "Smith",       "Human Biology",                                      "",                     "How did Elvis, Jimi Hendrix, John Lennon and Michael Jackson die? How have David Letterman and Dick Cheney survived? In this course we work towards understanding the biology behind human health, disease, and disaster. We examine cases from the news, literature and history and work like detectives to understand what happened. We also work at distinguishing honest science and medicine from junk science and scams. This course is designed for students who do not plan to major in science. Therefore, no prior science background is expected. Prerequisite: Sophomore standing or permission of instructor. A student may not receive credit for both Bio 303A and Bio 100A, 2960, 2970."],
    ["AS",   "BIO",     3041,      1430,       1600,     "TR",     "Haswell",     "Plant Biology",                                      "BIO 2960",             "Can plant technology save the world? In this problem-based course, students and instructors will work together to understand how plant genetic engineering might help us solve some of the world's biggest problems. As a class, we will select three global challenges with potential plant-based solutions (such as climate change, feeding a growing population, or finding renewable sources of energy). Over the course of the semester, small teams of students will learn and teach each other key aspects of plant biology, the cutting-edge technology currently in use, and progress made to date by academic, non-profit, and industry initiatives. Friday discussion sections will focus on critical reading of the primary literature related to the material covered in class. Assessments will include regular oral presentations, participation in class and discussion sections, and three written reports. Students can expect to leave the course appreciating what plants do for our world, understanding what genetic engineering really is, and knowing how to identify valid sources of scientific information. "],
    ["AS",   "BIO",     4183,      1430,       1600,     "MW",     "Larson",      "Molecular Evolution",                                "BIO 2860",             "A rigorous introduction to the study of evolution at the molecular level. Topics include the origin, amount, distribution and significance of molecular genetic variation within species, and use of molecular data in systematics and in testing macroevolutionary hypotheses."],
    ["AS",   "BIO",      419,      900,        1000,     "MWF",    "Myers",       "Community Ecology",                                  "BIO 2970",             "Community ecology is an interdisciplinary field that bridges concepts in biodiversity science, biogeography, evolution and conservation. This course provides an introduction to the study of pattern and process in ecological communities with an emphasis on theoretical, statistical and experimental approaches. Topics include: ecological and evolutionary processes that create and maintain patterns of biodiversity; biodiversity and ecosystem function; island biogeography, metacommunity dynamics, niche and neutral theory; species interactions (competition, predation, food webs), species coexistence and environmental change."],
    ["AS",   "BIO",      580,      1000,       1200,     "T",      "Olsen",       "Seminar in Population Biology",                      "",                     "This weekly seminar, covering different topics each semester, should be taken by graduate students in the program. Prerequisite, graduate standing or permission of instructor."],
    ["AS",   "BIO",     5651,      1300,       1600,     "W",      "Snyder",      "Neural System",                                      "",                     "The course will consist of lectures and discussions of the sensory, motor and integrative systems of the brain and spinal cord, together with a weekly lab. The lectures will present aspects of most neural systems, and will be given by faculty members who have specific expertise on each topic. The discussions will include faculty led group discussions and papers presented and discussed by students. The labs will include human brain dissections, examination of histological slides, physiological recordings, behavioral methods, computational modeling, and functional neural imaging."],
    ["ART",  "ART",      102,      1130,       1400,     "TR",     "Rogers",      "Drawing",                                            "",                     "An introductory course that teaches the student to recognize and manipulate fundamental elements of composition, line, form, space, modeling and color. Students will explore drawing as a diverse and multi-faceted activity. Working from both observation and imagination, emphasis will be placed on making work through a range of drawing methodologies. Students work in a variety of media. Demonstrations and illustrated lectures supplement studio sessions and outside projects. First-year students in the College of Art have priority."],
    ["ART",  "ART",      106,      830,        1130,     "MW",     "Spector",     "2D-Design",                                          "",                     "An introduction to basic design principles and their application on a two-dimensional surface. Investigation of the functions and properties of the formal elements and their organization through the use of relational schemes. Includes an introduction to color and basic color theory. Problems stress a systematic approach to visual communication. First-year students in the College of Art have priority."],
    ["ART",  "ART",      144,      1300,       1600,     "TR",     "Portlock",    "Digital Studio",                                     "",                     "This course provides a robust introduction to creating in a digital landscape. Students learn how to solve visual problems using a range of digital tools. Projects explore ideas of visual narrative, two dimensional relationships, and motion using relevant digital imaging and graphics software. The course contextualizes these tools and associated techniques within a historical frame and considers the broader social impact."],
    ["ART",  "ART",      218,      830,        1130,     "TR",     "Kirkwood",    "Photography Studio: Material and Culture",           "ART 106",              "This is the first course in the sequence for those pursuing a BFA in Art with a concentration in photography and is open others as space permits. It introduces photography as a dialogue between material and cultural histories, personal experience, tradition, and contemporary practice. Students gain full manual control of the digital camera apparatus, learn how to import and edit raw images, and print according to fine art professional standards. The resulting work will foster critical evaluations of form, content, and intention. In addition to studio production, this course includes lectures, readings, and discussions. Student must provide a fully manual digital camera capable of capturing RAW images. "],
    ["ART",  "ART",      338,      1800,       2100,     "MW",     "Farcett",     "Communication Design: Interaction Foundations",      "",                     "This course is a hands-on application of interaction design for digital media (primarily browser-based). Participants will learn and apply the fundamentals of HTML and CSS, explore how user-interaction adds bidirectionality to communication, examine the intricacies of seemingly-simple digital interactions, and become familiar with the attributes of digital device as 'canvas'. Students will work both independently and collaboratively to design interactive solutions for a selection of communication challenges."],
    ["ART",  "ART",      416,      1300,       1600,     "TR",     "Reed",        "Printmaking",                                        "ART 106",              "Same as F20 116, 216, 316. Seniors (only) register for F20 416. Survey of printmaking covering basic processes in intaglio, lithography, relief and monotype. Emphasis on mixed media and experimentation with a foundation in traditional, historical and philosophical aspects of printmaking. Students are encouraged to work at a level suited to their individual technical skills and conceptual interests. This class counts for the Minor in Art."],
    ["ART",  "ART",      520,      830,        1130,     "MW",     "Fondaw",      "Ceramics",                                           "ART 106",              "Same as F20 620 - 1st-year MFA students (only) register for F20 520. An introduction to the design and making of functional pottery as well as sculptural objects. Students learn basic forming processes of the wheel, coil and slab construction. While the emphasis is on high-fired stoneware, students will be introduced to Raku and soda firing. Content and advanced processes and skills are encouraged according to the individual's level.An introduction to the design and making of functional pottery as well as sculptural objects. Students learn basic forming processes of the wheel, coil and slab construction. While the emphasis is on high-fired stoneware, students will be introduced to Raku and soda firing. Content and advanced processes and skills are encouraged according to the individual's level."],
    ["ART",  "ART",      6714,     1800,       2100,     "TR",     "Powell",      "Introduction to Book Binding",                       "ART 106",              "Same as F20 5714 - 2nd-year MFAs (only) register for F20 6714. This class will serve as an introduction to the book as artifact of material culture. A variety of traditional and non-traditional book structures will be explored. Students will learn from historical approaches to constructing the codex form including the single signature pamphlet, the multi-signature case binding, the coptic, and the medieval long stitch. Students will learn Japanese binding and its many variations. Several contemporary variations will be introduced, including the tunnel, the flag book, the accordian and the carousel. Students will explore the visual book using found imagery and photocopy transfers, and will produce a variety of decorated papers to be used in their bindings."]
]

// A map of Schools to an array of its departments
var deptMap = {
    "ARCH" : ["ARCH"],
    "ART" : ["ART"],
    "AS" : ["BIO"],
    "BUS" : [],
    "DVA" : [],
    "ENG" : ["CSE", "BME", "ESE"],
    "LAW" : [],
    "MED" : []
}

var users = [
    ["test", "123"]
]

var reviews = [
    //school,   dept,   course#,    reviewer,   grade_recieved, rating_val,    comment
    ["ENG",  "CSE",      131,       "Etta James",   "A", 4, "Class was extremely easy. Information is hard, but rewarding. Cytron is the best professor."],
    ["ENG",  "CSE",      132,   "Jonathan Wu", "C", 3, "Such a hard class. Not fun at all I highly suggest you avoid this class."],
    ["ENG",  "CSE",      204,   "Frank Gimmel", "A", 3, "Really enjoyed webdevelopment. Class is super easy, homeworks are manageable and fun. Highly reccommend if you have a hectic schedule"],
    ["ENG",  "CSE",      217,   "Lilly Tomlin", "B", 4, "What a fun class intro to data science is. If you want to take ML later this is the class for you. Hard homework but the work load is manageable"],
    ["ENG",  "CSE",      231, "Jade Yang", "A",  2,   "This is a tough class. I wouldn't reccommend taking it when you have a lot of other classes to take. The material is really interesting, but its a lot at one time. Cosgrove is awesome and really helps when you need it"],
    ["ENG",  "CSE",      240, "Heather Long", "B", 4, "Mandatory Course so you have to take it. Material isn't too hard, but there is a lot. They provide a lot of information for you. Could be a lot worse."],
    ["ENG",  "CSE",      247, "Frankie Todd", "B+", 4,    "Cytron makes the course as easy as it can be. Labs a kinda hard, but there is a lot of help if you need it"],
    ["ENG",  "CSE",      260, "Jenny Jones", "A", 1, "This is the worst class. Richard makes it way harder then it needs to be. I hated this class. Don't take it."],
    ["ENG",  "CSE",      330,   "Lizzie Lang", "B",   3, "This class takes forever. There is so much homework and not a lot of help. Be very cautious taking this with many other classes"],
    ["ENG",  "CSE",      332,   "Doug Franklin", "B+", 5, "C++ is a cool language. Pointers are hard, but the labs, homework, and lecture make it easy to understand. "],
    ["ENG",  "BME",      240,   "Sean Johnson",  "B"    , 3, "Lots of Homework so its a difficult course. Thank god for TAs"],
    ["ENG",  "BME",      301,   "Lizzy McGuire", "A",   2,  "Don't take this course. It's really hard. If you don't have to take it avoid this at all costs."],
    ["ENG",  "BME",      329,   "Franklin Jones",   "C",    4, "This course is the only BME course I have ever enjoyed. Don't miss this course. Homeworks are manageable and lecture is wonderful"],
    ["ENG",  "BME",      366,   "June Jones",   "A",    2,  "This course is very hard, but the professor and the TA's help a lot so you can manage a decent grade if you go to office hours."],
    ["ENG",  "BME",      442,   "Doug Dawn", "D", 1, "Hardest course I've ever had to take. There is a lot of homework and its long assignments with only short periods to do them. Exams are impossible."],
    ["ENG",  "BME",      443,   "Davie Jones", "A", 4,  "Hard material but the professor is really good in lecture. Slides, notes, and examples are all provided. Homework isn't too bad and TA's are allowed to give lots of advice"],
    ["ENG",  "ESE",      103,   "Jesse James",  "B",    3,  "Not a bad class for starting out. If you want to study EE its mandatory so there is no way around it. Best advice is to go to office hours"],
    ["ENG",  "ESE",      205,   "Frank Finnigan",   "C",    2,  "I hated this course. I wouldn't take it if you didn't have to. Make sure you pay attention in class material isn't super easy to find"],
    ["ENG",  "ESE",      230,   "Joan James",   "B", 1, "Hardest class ever. I took it sophomore year but would wait to finish all EnMath courses first if you can"],
    ["ENG",  "ESE",      318,   "Lilly Lardo", "C", 4, "This is one of the only EE classes I didn't hate. Teach makes it better than others by providing a lot of material"],
    ["ENG",  "ESE",      319,   "Vicky Abram", "A", 3, "Hard class but necessary. You can't really avoid this class. Would suggest taking it with Hoven if at all possible"],
    ["ENG",  "ESE",      326,   "Jeremy Jones", "B", 4, "Material is really interesting and lecture isn't awful. Lots of note taking so don't miss class."],
    ["ARCH",  "ARCH",      101, "Phillip Phillips", "A", 5, "I didn't hate this course. Good intro to ARCH. Make sure you attend lecture and go to TA hours."],
    ["ARCH",  "ARCH",      112, "Suzy Sands", "B", 2, "I worked really hard for a B in this course. Normally spent about 3 hours of work a day on this class"],
    ["ARCH",  "ARCH",      175, "", "C",    4,  "Really hard class but the projects are really fun. Prof is pretty cool about extensions if you need one"],
    ["ARCH",  "ARCH",      183, "", "C",    3,  "I had a really had time in this course, but I really like the information. Don't take a lot of other ARCH classes with this one because the projects are time consuming."],
    ["ARCH",  "ARCH",      212, "", "B",    2,  "Take this course with Jones if you can. Other professors don't have as much experience with the material "],
    ["ARCH",  "ARCH",      312, "", "D",    1,  "Hard course. Don't take with other upper level ARCH classes."],
    ["ENG",  "BIO",      2960,  "", "C",    3,  "Intro course but still interesting. Without BIO experience you will struggle a lot"],
    ["AS",  "BIO",      2961,   "", "A",    4,  "Not a bad course. I would say Hafer is the prof to take it with. Don't waste time with other profs."],
    ["AS",  "BIO",      303,    "", "C",    4,  " Hard but doable. Homework is a lot."],
    ["AS",  "BIO",      3041,   "", "B",    4,  "Keep your calendar free in this course. Homework takes forever."],
    ["AS",  "BIO",      4183,   "", "A",    3,  "Really boring material. Prof tries to Jazz it up, but its really dry. Homework is easy"],
    ["AS",  "BIO",      419,    "", "F",    1,  "This class has outrageous homework. There is a lot and it takes forever."],
    ["AS",  "BIO",      580,    "", "D",    4,  ""],
    ["AS",  "BIO",      5651,   "", "A",    4,  ""],
    ["ART",  "BIO",      102,   "", "B",    2,  ""],
    ["ART",  "CSE",      106,   "", "A",    4,  ""],
    ["ART",  "CSE",      144,   "", "C",    1,  ""],
    ["ART",  "CSE",      218,   "", "C",    4,  ""],
    ["ART",  "CSE",      338,   "", "C",    4,  ""],
    ["ART",  "CSE",      416,   "", "A",    3,  ""],
    ["ART",  "CSE",      520,   "", "B",    4,  ""],
    ["ART",  "ART",      6714,  "", "A",    4,  ""],
    ["ENG",  "CSE",      217,   "Lilly Tomlin", "B", 2, "What a fun class intro to data science is. If you want to take ML later this is the class for you. Hard homework but the work load is manageable"],
    ["ENG",  "CSE",      217,   "Lilly Tomlin", "B", 1, "What a fun class intro to data science is. If you want to take ML later this is the class for you. Hard homework but the work load is manageable"]

]
