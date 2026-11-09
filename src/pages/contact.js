export default function Contact() {
  return (
    <section className="max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-indigo-400 border-b border-slate-800 pb-2">
        Me Contacter
      </h1>
      <form className="space-y-4">
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-1">
            Nom
          </label>
          <input
            type="text"
            className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            rows="4"
            className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold p-3 rounded-lg transition"
        >
          Envoyer le message
        </button>
      </form>
    </section>
  );
}
