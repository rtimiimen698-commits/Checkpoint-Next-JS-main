interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

async function getGithubRepos() {
  const res = await fetch('https://api.github.com/users/VOTRE_PSEUDO/repos', {
    next: { revalidate: 3600 } // Regénération toutes les heures (ISR)
  });
  return res.json();
}

export default async function ProjectsPage() {
  const repos: Repo[] = await getGithubRepos();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Mes Projets GitHub</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repos.map((repo) => (
          <div key={repo.id} className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-semibold">{repo.name}</h3>
            <p className="text-gray-600 my-2">{repo.description || "Pas de description disponible."}</p>
            <a href={repo.html_url} target="_blank" className="text-blue-500 font-medium hover:underline">
              Voir sur GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}