export default function Apropos() {
  return (
    <section className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-indigo-400 border-b border-slate-800 pb-2">
        À propos de moi
      </h1>
      <p className="text-slate-300 leading-relaxed">
        Passionné par les nouvelles technologies et le développement
        d'interfaces modernes, j'utilise l'écosystème JavaScript/React/Next.js
        pour créer des solutions robustes.
      </p>
      <h2 className="text-2xl font-semibold text-white mt-6">Compétences</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
        {[
          "JavaScript",
          "React.js",
          "Next.js",
          "Tailwind CSS",
          "Node.js",
          "Git / GitHub",
        ].map((item) => (
          <div
            key={item}
            className="bg-slate-900 border border-slate-800 p-3 rounded-lg text-center font-medium text-indigo-300"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
