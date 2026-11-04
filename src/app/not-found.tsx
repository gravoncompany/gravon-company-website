import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <p className="font-display text-sm uppercase tracking-[0.3em] text-gold-400">Erro 404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Esta página saiu de órbita.</h1>
      <p className="mt-4 max-w-md text-mist-400">O endereço acessado não existe ou foi movido.</p>
      <Link href="/" className="mt-8 rounded-full bg-gold-400 px-6 py-3 font-medium text-ink-950 transition hover:bg-gold-300">
        Voltar ao início
      </Link>
    </section>
  );
}
