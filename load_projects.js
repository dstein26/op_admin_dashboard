// Custom HTML Element for project cards
customElements.define("project-card",   
    class extends HTMLElement{
        constructor()
        {
            super();

            const card_template = document.getElementById("card-template");
            const card_content = card_template.content;
            const shadowRoot = this.attachShadow({mode:"open"}).appendChild(card_content.cloneNode(true));
            // this.appendChild(card_content.cloneNode(true));
        }
});

// Class to store project information
class Project 
{
	title;		// String
	details;	// Array of Strings
	issues;		// Array of strings
	ghLink;		// String
	
	constructor(t="", d=[], i=[], l="")
	{
		this.title = t;
		this.details = d;
		this.issues = i;
		this.ghLink = l;
	}
}

// Array of project to generate cards for the dashboard
projects = 
[
	new Project("Admin Dashboard",
		["This Project", "For the ODIN Project", "An admin dashboard for an admin to track multiple projects"],
		["Add More Projects","Add icons to projects", "Credit where icons came from", "Choose a better font",
		"Sidebar animation is poor", "Sidebar header does not look good when sidebar compressed", "No header"],
		"https://github.com/dstein26/op_admin_dashboard"
	),
	new Project("Sign Up Form",
		["For the ODIN Project", "A sign-up form for a fake service. Practice using forms"],
		["Icons sometimes display large"],
		"https://github.com/dstein26/op_sign_up_form"),
	new Project("Calculator",
		["For the ODIN Project", "A reverse-polish notation calculator"],
		[
			"Make into a mobile app",
			"Numbers can overflow the display area",
			"Add additional math functions (log, acos, asin, atan2)",
			"Make look better"
		],
		"https://github.com/dstein26/op_rpn_calculator"
	),
	new Project("Etch-A-Sketch",
		["For the ODIN Project", "A site where users can create pixel art"],
		[
			"Allow users to save images",
			"Make the resolution changes smoother",
			"Improve appearance on mobile"
		],
		"https://github.com/dstein26/op_etch_a_sketch"),
	new Project("<em>Credits</em>",
		["Icons from: <a href='https://pictogrammers.com/'>Pictogrammers</a>", "Color themes from: <a href='https://uicolors.app/create'>Tailwind</a>"])
];

// Wait until DOM is loaded
addEventListener("load", loadProjects);

// Generate content
function loadProjects()
{
	console.log("Loading")

	const displayArea = document.getElementById("project-area");
	const projectCard = document.createElement("project-card");

	const img = document.createElement("img");
	img.setAttribute("src", "Assets/github-mark-white.svg");
	img.setAttribute("style", "height:90%;"); // margin: 5% 5px 5% 0;");

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