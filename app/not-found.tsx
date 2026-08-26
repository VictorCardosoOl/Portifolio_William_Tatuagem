import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-paper-light dark:bg-paper-dark px-4 font-sans text-ink-black dark:text-gray-200">
      <div className="text-center max-w-2xl flex flex-col items-center">
        <h1 className="font-cormorant text-8xl md:text-9xl font-bold mb-4">
          404
        </h1>
        <h2 className="font-sans text-2xl md:text-3xl font-medium mb-6 uppercase tracking-wider">
          Página não encontrada
        </h2>
        <p className="font-sans font-light text-gray-800 dark:text-gray-300 text-sm md:text-base leading-relaxed tracking-wide mb-10 max-w-md mx-auto">
          A página que você está procurando não existe, foi movida ou está temporariamente indisponível.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-ink-black dark:bg-white text-paper-light dark:text-ink-black px-8 py-4 font-sans text-xs uppercase tracking-widest font-bold hover:opacity-80 transition-opacity"
          >
            Voltar para o início
          </Link>
          <a
            href="https://wa.me/5511977797131?text=Ol%C3%A1%2C%20encontrei%20um%20link%20quebrado%20no%20seu%20site."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-ink-black dark:border-white text-ink-black dark:text-white px-8 py-4 font-sans text-xs uppercase tracking-widest font-bold hover:bg-ink-black hover:text-paper-light dark:hover:bg-white dark:hover:text-ink-black transition-colors"
          >
            Reportar Erro (WhatsApp)
          </a>
        </div>
      </div>
    </div>
  );
}
