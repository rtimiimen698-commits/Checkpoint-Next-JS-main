import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-12 gap-8">
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
          Bonjour, je suis{" "}
          <span className="text-indigo-500">Développeur Full Stack</span>
        </h1>
        <p className="text-slate-400 text-lg">
          Bienvenue sur mon portfolio. Je conçois des applications web modernes,
          performantes et élégantes.
        </p>
        <div className="pt-4">
          <Link
            href="/projets"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            Voir mes projets
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500 shadow-2xl">
          {/* Placez une image profile.jpg dans public/images/ */}
          <Image
            src="/images/profile.jpg"
            alt="Photo de profil"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
