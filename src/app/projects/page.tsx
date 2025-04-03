'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

export interface Repo {
  id: number;
  name: string;
  has_pages: boolean;
  deployments_url: string;
  html_url: string;
}

export default function Projects(){
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const projectsList = [
    "projeto_login_riot",
    "propertiesecommerce",
    "projeto-web-site",
    "landing-page",
    "website-v1",
    "super-formulario",
    'contabilita'
  ];

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('api/github')
        if(!response.ok) {
          throw new Error('Failed to fetch repos');
        }
        const data = await response.json();
        console.log(data);
        const pageRepos  = data.filter((repo: any) => {
          return repo.has_pages && projectsList.includes(repo.name);
        });
        console.log(pageRepos);

        setRepos(pageRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  if(loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
    return (
        <section className="w-full flex flex-col items-start justify-center gap-4 p-2 bg-slate-900 text-white flex-1">
            <div className="flex flex-col items-start justify-center gap-2 mb-16">
              <h3>Projects</h3>
              <p>Here are some of my projects:</p>
            </div>
            <div className="w-full flex items-center justify-center gap-4 flex-wrap">
                {repos && repos.map((repo: Repo) => (
                  repo ?
                    <div key={repo.id} className="w-[30%] h-[400px] flex flex-col items-center justify-start gap-2 bg-slate-800 p-4 rounded-lg shadow-md">
                        <Image
                          src={`/images/${repo.name}.webp` }
                          alt={repo.name}
                          width={100}
                          height={100}
                          className="w-full h-1/2 rounded-2 mb-4"
                        />
                        <h5>{repo.name.substring(0, 1).toUpperCase() + repo.name.substring(1)}</h5>
                        <button className="btn btn-primary border-none border-slate-500 bg-slate-700 hover:bg-slate-600 text-white rounded-md px-4 py-2">
                          <a href={repo.deployments_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                              View Project
                          </a>
                        </button>
                    </div> : null
                ))
              }
             </div>
        </section>
    )
}
