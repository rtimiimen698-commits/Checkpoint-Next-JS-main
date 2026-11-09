import Image from "next/image";

export default function Projets({ projects }) {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-indigo-400 border-b border-slate-800 pb-2">
        Mes Projets
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:border-indigo-500/50 transition"
          >
            <div className="relative h-48 w-full bg-slate-800">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 space-y-2">
              <h2 className="text-xl font-bold text-white">{proj.title}</h2>
              <p className="text-slate-400 text-sm">{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Exemple de rendu côté serveur (SSR)
export async function getServerSideProps() {
  // Simulation de récupération de données depuis une API ou base de données
  const projects = [
    {
      id: 1,
      title: "Plateforme E-commerce",
      description:
        "Boutique en ligne complète construite avec React et Next.js.",
      image: "/images/project1.png",
    },
    {
      id: 2,
      title: "Application Web Audio",
      description:
        "Lecteur audio interactif avec animations CSS et gestion d’état.",
      image: "/images/project2.png",
    },
  ];

  return {
    props: { projects },
  };
}
