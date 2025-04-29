import Image from "next/image";

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
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/github`);
  const data = await response.json();
  const pageRepos = data.filter((repo: Repo) => {
    return repo.has_pages && projectsList.includes(repo.name);
  });
  return (
    <section className="w-full max-h-full flex flex-col gap-4 bg-slate-900 text-white">
      <div className="flex flex-col items-start justify-center gap-2 mb-4 w-full flex-wrap">
        <h1>Projects</h1>
        <p>Here are some of my projects:</p>
      </div>
      <div className="max-h-full flex items-center justify-center gap-4 flex-wrap flex-1 grow overflow-y-auto">
        {pageRepos && pageRepos.map((repo: Repo) => (
          repo ?
            <div key={repo.id} className="max-w-[282px] h-[400px] flex flex-col items-center justify-start gap-2 bg-slate-800 p-4 rounded-lg shadow-md hover:scale-102 transition-transform duration-300 ease-in-out">
              <Image
                src={`/images/${repo.name}.webp`}
                alt={repo.name}
                width={1060}
                height={500}
                className="w-full h-1/2 rounded-lg mb-4"
              />
              <h6>{repo.name.substring(0, 1).toUpperCase() + repo.name.substring(1)}</h6>
              <button className="btn btn-primary border-none border-slate-500 bg-slate-700 hover:bg-slate-600 text-white rounded-md px-2 py-2">
                <a href={`https://john1souza.github.io/${repo.name}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  View Project
                </a>
              </button>
            </div> : null
        ))}
      </div>
    </section>
  )
}
