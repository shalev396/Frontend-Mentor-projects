const projects = [
  {
    id: 1,
    name: "Stats Preview Card Component",
    description:
      "This challenge is to build out this card component and get it looking as close to the design as possible.",
    difficulty: "1",
    level: "NEWBIE",
    tags: ["HTML", "CSS"],
    image:
      "/Frontend-Mentor-projects/stats-preview-card-component-main/design/desktop-preview.jpg",
    link: "/Frontend-Mentor-projects/stats-preview-card-component-main/index.html",
    badge: "Done",
  },
  {
    id: 2,
    name: "Recipe Page",
    description:
      "This challenge is build out this recipe page and get it looking as close to the design as possible.",
    difficulty: "1",
    level: "NEWBIE",
    tags: ["HTML", "CSS"],
    image: "/Frontend-Mentor-projects/recipe-page-main/preview.jpg",
    link: "/Frontend-Mentor-projects/recipe-page-main/index.html",
    badge: "Done",
  },
  {
    id: 3,
    name: "Rest Countries Api With Color Theme Switcher",
    description: `This challenge is to integrate with the "REST Countries API" and to pull country data and display it like in the designs.`,
    difficulty: "4",
    level: "ADVANCED",
    tags: ["HTML", "CSS", "JS", "API"],
    image:
      "/Frontend-Mentor-projects/rest-countries-api-with-color-theme-switcher-master/design/desktop-preview.jpg",
    link: "/Frontend-Mentor-projects/rest-countries-api-with-color-theme-switcher-master/index.html",
    badge: "Done",
  },
  {
    id: 4,
    name: "testimonials grid section",
    description: `This challenge is to build out this testimonials grid section and get it looking as close to the design as possible.`,
    difficulty: "2",
    level: "JUNIOR",
    tags: ["HTML", "CSS"],
    image:
      "/Frontend-Mentor-projects/testimonials-grid-section-main/design/desktop-preview.jpg",
    link: "/Frontend-Mentor-projects/testimonials-grid-section-main/index.html",
    badge: "Done",
  },
  {
    id: 5,
    name: "interactive rating component",
    description: `This challenge is to build out this interactive rating component and get it looking as close to the design as possible.`,
    difficulty: "1",
    level: "NEWBIE",
    tags: ["HTML", "CSS", "JS"],
    image:
      "/Frontend-Mentor-projects/interactive-rating-component-main/design/desktop-preview.jpg",
    link: "/Frontend-Mentor-projects/interactive-rating-component-main/index.html",
    badge: "Done",
  },
];
const level1Color = "rgb(106, 190, 205)";
const level2Color = "rgb(170, 215, 66)";
const level3Color = "rgb(241, 182, 4)";
const level4Color = "rgb(244, 137, 37)";
const level5Color = "rgb(237, 44, 73)";
function renderProjects() {
  const projectList = document.getElementById("project-list");

  projects.forEach((project) => {
    const li = document.createElement("li");
    li.className = "project-card";

    // Add image
    const image = document.createElement("img");
    image.className = "project-image";
    image.src = project.image;
    image.alt = project.name;

    // Project details
    const details = document.createElement("div");
    details.className = "project-details";

    // Title and link
    const title = document.createElement("a");
    title.className = "project-title";
    title.textContent = project.name;
    title.href = project.link;
    title.target = "_blank";

    // Description
    const description = document.createElement("p");
    description.className = "project-description";
    description.textContent = project.description;

    // Difficulty and level
    const difficulty = document.createElement("div");
    difficulty.className = "project-difficulty";
    difficulty.innerHTML = `<span class="badge">${project.difficulty}</span> ${project.level}`;
    switch (project.difficulty) {
      case "1":
        difficulty.firstChild.style.backgroundColor = level1Color;
        difficulty.style.color = level1Color;
        difficulty.style.borderColor = level1Color;
        break;
      case "2":
        difficulty.firstChild.style.backgroundColor = level2Color;
        difficulty.style.color = level2Color;
        difficulty.style.borderColor = level2Color;
        break;
      case "3":
        difficulty.firstChild.style.backgroundColor = level3Color;
        difficulty.style.color = level3Color;
        difficulty.style.borderColor = level3Color;
        break;
      case "4":
        difficulty.firstChild.style.backgroundColor = level4Color;
        difficulty.style.color = level4Color;
        difficulty.style.borderColor = level4Color;
        break;
      case "5":
        difficulty.firstChild.style.backgroundColor = level5Color;
        difficulty.style.color = level5Color;
        difficulty.style.borderColor = level5Color;
        break;

      default:
        break;
    }
    difficulty.style.fontWeight = "600";
    difficulty.style.border = "1px solid";
    difficulty.style.borderRadius = "5px";

    difficulty.style.paddingRight = "0.5rem";
    difficulty.style.width = "fit-content";

    // Tags
    const tags = document.createElement("div");
    tags.className = "project-tags";
    project.tags.forEach((tag) => {
      const tagElement = document.createElement("span");
      tagElement.className = "project-tag";
      tagElement.textContent = tag;
      tags.appendChild(tagElement);
    });

    // Badge
    const badge = document.createElement("div");
    badge.className = "project-badge";
    badge.textContent = project.badge;
    console.log("here");

    // Append everything to the card
    details.appendChild(title);
    details.appendChild(description);
    details.appendChild(difficulty);
    details.appendChild(tags);
    li.appendChild(image);
    li.appendChild(details);
    li.appendChild(badge);
    projectList.appendChild(li);
  });
}

renderProjects();
