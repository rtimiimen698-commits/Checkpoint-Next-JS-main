import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
