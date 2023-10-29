class Project 
{
	title;
	details;
	issues;
	ghLink;
	
	constructor(t="", d=[], i=[], l="")
	{
		this.title = t;
		this.details = d;
		this.issues = i;
		this.ghLink = l;
	}
}


projects = 
[
	new Project("Admin Dashboard",
		["This Project", "For the ODIN Project", "An admin dashboard for an admin to track multiple projects"],
		["Add More Projects","Add icons to projects", "Credit where icons came from", "Choose a better font",
		"Sidebar animation is poor", "Sidebar header does not look good when sidebar compressed", "No header"],
		""
	),
	new Project("Calculator",
		["For the ODIN Project", "A reverse-polish notation calculator"],
		[
			"Make into a mobile app",
			"Numbers can overflow the display area",
			"Add additional math functions (log, acos, asin, atan2)",
			"Make look better"
		],
		""
	),
	new Project("Etch-A-Sketch",
		["For the ODIN Project", "A site where users can create pixel art"],
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

	const displayArea = document.getElementById("display-area");
	const projectCard = document.createElement("project-card");

	const img = document.createElement("img");
	img.setAttribute("src", "Assets/github-mark-white.svg");
	img.setAttribute("style", "height:90%; margin: 5% 5px 5% 0;");

	const ghLink = document.createElement("a");
	ghLink.appendChild(img);
	ghLink.setAttribute("slot", "gh-link");
	

	const title = document.createElement("h1");
	title.setAttribute("slot", "project-name");

	const details = document.createElement("p");
	details.setAttribute("slot", "project-details");

	const issues = document.createElement("p");
	issues.setAttribute("slot", "project-issues");

	projects.forEach((project) =>
	{
		const tempCard = projectCard.cloneNode(true);
		let tempNode = tempCard.appendChild(title.cloneNode(true));
		tempNode.innerHTML = project.title;

		project.details.forEach((detail) =>
		{
			tempNode = tempCard.appendChild(details.cloneNode(true));
			tempNode.innerHTML = detail;
		});

		project.issues.forEach((issue) =>
		{
			tempNode = tempCard.appendChild(issues.cloneNode(true));
			tempNode.innerHTML = issue;
		});

		tempNode = tempCard.appendChild(ghLink.cloneNode(true));
		tempNode.setAttribute("href", project.ghLink);

		displayArea.appendChild(tempCard);
	});
}