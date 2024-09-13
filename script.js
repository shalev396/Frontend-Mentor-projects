const projects = [
  {
    id: 1,
    name: "stats-preview-card-component",
    description: "using HTML, CSS.",
    link: "/Frontend-Mentor-projects/stats-preview-card-component-main/index.html",
  },
  {
    id: 2,
    name: "recipe-page",
    description: "using HTML, CSS.",
    link: "/Frontend-Mentor-projects/recipe-page-main/index.html",
  },
];

function renderProjects() {
  const projectList = document.getElementById("project-list");

  projects.forEach((project) => {
    const li = document.createElement("li");

    const title = document.createElement("div");
    title.className = "project-title";
    title.textContent = project.name;

    const description = document.createElement("div");
    description.className = "project-description";
    description.textContent = project.description;

    const button = document.createElement("a");
    button.className = "project-btn";
    button.textContent = "View Project";
    button.href = project.link;

    li.appendChild(title);
    li.appendChild(description);
    li.appendChild(button);
    projectList.appendChild(li);
  });
}

renderProjects();
