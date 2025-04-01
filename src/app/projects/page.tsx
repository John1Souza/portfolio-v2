'use client'

import { useState, useEffect } from "react";

export default function Projects(){
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('api/github')
        if(!response.ok) {
          throw new Error('Failed to fetch repos');
        }
        const data = await response.json();
        setRepos(data);
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
                {repos && repos.map((repo: any) => (
                  repo.has_pages ?
                    <div key={repo.id} className="w-[30%] h-[400px] flex flex-col items-center justify-center gap-2 bg-slate-800 p-4 rounded-lg shadow-md">
                        <p>{repo.name}</p>
                        <button className="btn btn-primary">
                          <a href={repo.deployments_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
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
