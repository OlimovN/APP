const projects = [
  {
    title: "AkademNashr",
    githubLink: "https://github.com/OlimovN/akadem-nashr",
    vercelLink: "https://vercel.com/nurmukhammads-projects/akadem-nashr",
  },
  {
    title: "Ansormed",
    githubLink: "https://github.com/OlimovN/ansor-med",
    vercelLink: "https://vercel.com/nurmukhammads-projects/akadem-nashr",
  },
  {
    title: "My Cart",
    githubLink: "https://github.com/OlimovN/user-card",
    vercelLink: "https://user-card-delta.vercel.app/",
  },
  {
    title: "Figma",
    githubLink: "https://github.com/OlimovN/dars-ishi",
    vercelLink: "https://vercel.com/nurmukhammads-projects/imtihon-figma",
  },
  {
    title: "Uzbekistan",
    githubLink: "https://github.com/OlimovN/uzbekistan",
    vercelLink: "https://vercel.com/nurmukhammads-projects/uzbekistan",
  },
  {
    title: " vazifa",
    githubLink: "https://github.com/OlimovN/figma-11",
    vercelLink: "https://figma-11.vercel.app/",
  },
  {
    title: " vazifa 2-figma",
    githubLink: "https://github.com/OlimovN/figma3",
    vercelLink: "https://figma3-rho.vercel.app/",
  },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
