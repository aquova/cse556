// You can't use SQL without a server, and it would be a hassle to have to save constantly with a .csv, so this is an experiment of just having it as a table in memory.
// This way we skip the extra step of having to read/write to a file, and we're allowed to 'fake it' anyway, so whatever

var classesDB = [
//   Department, Course #, Start time, End time, Weekdays, Professor,     Name
    ["CSE",      131,      1130,       1300,     "TR",     "Cytron",      "Computer Science I"],
    ["CSE",      132,      1130,       1300,     "MW",     "Siever",      "Computer Science II"],
    ["CSE",      204,      830,        1000,     "TR",     "Hufstedler",  "Web Development"],
    ["CSE",      217,      1600,       1730,     "R",      "Neumann",     "Intro to Data Science"],
    ["CSE",      231,      1000,       1130,     "TR",     "Cosgrove",    "Intro to Parallel and Concurrent Programming"],
    ["CSE",      240,      830,        1000,     "MW",     "Sproull",     "Logic and Discrete Math"],
    ["CSE",      247,      1430,       1600,     "T",      "Cole",        "Data Structures and Algorithms"],
    ["CSE",      260,      1300,       1430,     "MW",     "Richard",     "Intro to Digital Logic"],
    ["CSE",      330,      1000,       1130,     "MW",     "Sproull",     "Rapid Prototype Development"],
    ["CSE",      332,      1000,       1130,     "MW",     "Shidal",      "Object-Oriented Software Development"],
]
