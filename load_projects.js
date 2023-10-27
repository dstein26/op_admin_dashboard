class Project 
{
	title;
	description;
	issues;
	ghLink;
	
	constructor(t, d, i, l)
	{
		this.title = t;
		this.description = d;
		this.issues = i;
		this.ghLink = l;
	}
}


projects = 
[
	new Project("OP_Calculator",
		"A reverse-polish notation calculator",
		[
			"Make into a mobile app",
			"Numbers can overflow the display area",
			"Add additional math functions (log, acos, asin, atan2)",
			"Make look better"
		],
		""
	),
	new Project("Etch-A-Sketch",
		"A site where users can create pixel art",
		[
			"Allow users to save images",
			"Make the resolution changes smoother",
			"Improve appearance on mobile"
		],
		"")
];

addEventListener("load", loadProjects);

function loadProjects()
{
	console.log("Loading")
}