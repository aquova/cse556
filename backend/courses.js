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
]

// A map of Schools to an array of its departments
var deptMap = {
    "ARCH" : [],
    "ARTSCI" : [],
    "BUS" : [],
    "DVA" : [],
    "ENG" : ["CSE"],
    "LAW" : [],
    "MED" : []
}
