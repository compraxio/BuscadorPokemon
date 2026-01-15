interface CardType {
  children: React.ReactNode;
}

/**
 * Un componente de tarjeta simple y reutilizable para mostrar pequeños fragmentos de información,
 * como etiquetas o cabeceras.
 *
 * @param {CardType} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - El contenido a mostrar dentro de la tarjeta.
 * @returns {JSX.Element} Un div estilizado con apariencia de tarjeta/etiqueta.
 */
export function Card({ children }: Readonly<CardType>) {
  return (
    <div className="mb-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primayy/20 text-pokemon-blue border border-primayy/50 dark:bg-black/20">
      <span className="text-xs font-bold uppercase tracking-wider">
        {children}
      </span>
    </div>
  );
}
