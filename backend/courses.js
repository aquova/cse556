// You can't use SQL without a server, and it would be a hassle to have to save constantly with a .csv, so this is an experiment of just having it as a table in memory.
// This way we skip the extra step of having to read/write to a file, and we're allowed to 'fake it' anyway, so whatever

var classesDB = [
//   School, Department, Course #, Start time, End time, Weekdays, Professor,     Name
    ["ENG",  "CSE",      131,      1130,       1300,     "TR",     "Cytron",      "Computer Science I"],
    ["ENG",  "CSE",      132,      1130,       1300,     "MW",     "Siever",      "Computer Science II"],
    ["ENG",  "CSE",      204,      830,        1000,     "TR",     "Hufstedler",  "Web Development"],
    ["ENG",  "CSE",      217,      1600,       1730,     "R",      "Neumann",     "Intro to Data Science"],
    ["ENG",  "CSE",      231,      1000,       1130,     "TR",     "Cosgrove",    "Intro to Parallel and Concurrent Programming"],
    ["ENG",  "CSE",      240,      830,        1000,     "MW",     "Sproull",     "Logic and Discrete Math"],
    ["ENG",  "CSE",      247,      1430,       1600,     "T",      "Cole",        "Data Structures and Algorithms"],
    ["ENG",  "CSE",      260,      1300,       1430,     "MW",     "Richard",     "Intro to Digital Logic"],
    ["ENG",  "CSE",      330,      1000,       1130,     "MW",     "Sproull",     "Rapid Prototype Development"],
    ["ENG",  "CSE",      332,      1000,       1130,     "MW",     "Shidal",      "Object-Oriented Software Development"],
    ["ENG",  "BME",      240,      1430,       1600,     "T",      "Moran",       "Biomechanics"],
    ["ENG",  "BME",      301,      1300,       1430,     "TR",     "Silva",       "Quantitative Physiology II"],
    ["ENG",  "BME",      329,      1000,       1130,     "MW",     "Ledbetter",   "Biothermodynamics in Practice"],
    ["ENG",  "BME",      366,      1130,       1300,     "MW",     "Shao",        "Transport Phenomena"],
    ["ENG",  "BME",      442,      1000,       1130,     "MW",     "Rudra",       "Biomacromolecules Design"],
    ["ENG",  "BME",      443,      1430,       1600,     "TR",     "Vahey",       "Molecular and Cellular Engineering"],
    ["ENG",  "ESE",      103,      1600,       1800,     "T",      "Richter",     "Intro to Electrical Engineering"],
    ["ENG",  "ESE",      205,      1500,       1600,     "F",      "Sheehan",     "Intro to Engineering Design"],
    ["ENG",  "ESE",      230,      1300,       1430,     "TR",     "Nussinov",    "Intro to Electrical Circuits"],
    ["ENG",  "ESE",      318,      1130,       1300,     "MW",     "Hoven",       "Engineering Mathematics A"],
    ["ENG",  "ESE",      319,      900,        1000,     "MWF",    "Hasting",     "Engineering Mathematics B"],
    ["ENG",  "ESE",      326,      1000,       1130,     "MW",     "Zhang",       "Probability and Statistics"],
    ["ARCH", "ARCH",     101,      830,        1130,     "MW",     "He",          "Drawing"],
    ["ARCH", "ARCH",     112,      1300,       1600,     "MW",     "TBA",         "Intro to Design Processes II"],
    ["ARCH", "ARCH",     175,      1300,       1430,     "TR",     "Lindsey",     "Designing Creativity"],
    ["ARCH", "ARCH",     183,      1100,       1200,     "F",      "Lorberbaum",  "Practices in Architecture + Art + Design"],
    ["ARCH", "ARCH",     212,      1300,       1700,     "TR",     "TBA",         "Intro to Design Processes IV"],
    ["ARCH", "ARCH",     312,      1300,       1700,     "MWF",    "TBA",         "Architectural Design II"],
    ["ARCH", "ARCH",     312,      1300,       1700,     "MWF",    "TBA",         "Architectural Design II"],
    ["AS",   "BIO",     2960,      1000,       1100,     "MWF",    "Kunkel",      "Principles of Biology I"],
    ["AS",   "BIO",     2961,      1600,       1800,     "M",      "Hafer",       "Collaborative Phage Bioinformatics"],
    ["AS",   "BIO",      303,      1500,       1700,     "M",      "Smith",       "Human Biology"],
    ["AS",   "BIO",     3041,      1430,       1600,     "TR",     "Haswell",     "Plant Biology"],
]

// A map of Schools to an array of its departments
var deptMap = {
    "ARCH" : ["ARCH"],
    "AS" : ["BIO"],
    "BUS" : [],
    "DVA" : [],
    "ENG" : ["CSE", "BME", "ESE"],
    "LAW" : [],
    "MED" : []
}
