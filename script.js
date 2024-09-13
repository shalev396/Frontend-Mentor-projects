// List of projects (name, description, and link)
const projects = [
  {
    id: 1,
    name: "stats-preview-card-component",
    description: "using HTML, CSS.",
    link: "/webdevportfolio/stats-preview-card-component-main/index.html",
  },
  {
    id: 2,
    name: "recipe-page",
    description: "using HTML, CSS.",
    link: "/webdevportfolio/recipe-page-main/index.html",
  },
];

// Function to render the projects on the page
function renderProjects() {
  const projectList = document.getElementById("project-list");

  projects.forEach((project) => {
    // Create a list item for each project
    const li = document.createElement("li");

    // Create the project title
    const title = document.createElement("div");
    title.className = "project-title";
    title.textContent = project.name;

    // Create the project description
    const description = document.createElement("div");
    description.className = "project-description";
    description.textContent = project.description;

    // Create the button for linking to the project page
    const button = document.createElement("a");
    button.className = "project-btn";
    button.textContent = "View Project";
    button.href = project.link;

    // Append elements to the list item
    li.appendChild(title);
    li.appendChild(description);
    li.appendChild(button);

    // Add the list item to the project list
    projectList.appendChild(li);
  });
}

// Call the function to render the projects
renderProjects();
