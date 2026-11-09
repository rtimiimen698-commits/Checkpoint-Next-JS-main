export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 text-center p-4 mt-12 border-t border-slate-800">
      <p>
        © {new Date().getFullYear()} Mon Portfolio Next.js. Tous droits
        réservés.
      </p>
    </footer>
  );
}
