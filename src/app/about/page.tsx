import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center">
      <Image 
        src="/profile.png" 
        alt="Photo de profil" 
        width={150} 
        height={150} 
        className="rounded-full shadow-lg"
        priority
      />
      <h2 className="text-2xl font-bold mt-4">Développeur Front-End & IA</h2>
      <p className="mt-2 text-center max-w-lg text-gray-600">
        Bienvenue sur mon portfolio. Je conçois et développe des applications web modernes et interactives.
      </p>
    </section>
  );
}