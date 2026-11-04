import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <p className="text-xs font-semibold uppercase tracking-[.14em] text-gold-300">Erro 404</p>
      <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">Esta página saiu de órbita.</h1>
      <p className="mt-4 max-w-md text-zinc-400">O endereço acessado não existe ou foi movido.</p>
      <Link href="/" className="mt-8 rounded-xl bg-gold-400 px-6 py-3 font-semibold text-ink-950 transition hover:bg-gold-300">
        Voltar ao início
      </Link>
    </section>
  );
}
