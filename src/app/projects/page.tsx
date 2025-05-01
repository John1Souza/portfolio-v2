import ProjectsClient from "../components/ProjectsClient";

export interface Repo {
  id: number;
  name: string;
  has_pages: boolean;
  deployments_url: string;
  html_url: string;
  description: string;
}

export default async function Projects() {

  const projectsList = [
    "projeto_login_riot",
    "propertiesecommerce",
    "projeto-web-site",
    "landing-page",
    "website-v1",
    "super-formulario",
    'contabilita'
  ];
  const response = await fetch('https://api.github.com/users/John1Souza/repos?page=1&per_page=100', {
    headers: {
      Authorization: `token ${process.env.PRIVATE_GITHUB_ACCESS_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
    },
    // Opcional, mas útil para não usar cache
    cache: 'no-store'
  });
  const data = await response.json();
  const pageRepos = data.filter((repo: Repo) => {
    return repo.has_pages && projectsList.includes(repo.name);
  });
  return <ProjectsClient pageRepos={pageRepos} />;
}
