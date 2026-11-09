import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
      <div className="font-bold text-xl text-indigo-400">
        <Link href="/">MonPortfolio</Link>
      </div>
      <div className="space-x-6">
        <Link href="/" className="hover:text-indigo-400 transition">Accueil</Link>
        <Link href="/apropos" className="hover:text-indigo-400 transition">À propos</Link>
        <Link href="/projets" className="hover:text-indigo-400 transition">Projets</Link>
        <Link href="/contact" className="hover:text-indigo-400 transition">Contact</Link>
      </div>
    </nav>
  );
}