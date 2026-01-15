interface ImagenesType {
  imagen?: string;
  alt?: string;
  children: React.ReactNode;
}

/**
 * Componente para mostrar un único sprite de un Pokémon con su descripción.
 *
 * @param {ImagenesType} props - Propiedades del componente.
 * @param {string} [props.imagen] - La URL del sprite del Pokémon.
 * @param {string} [props.alt] - El texto alternativo para la imagen.
 * @param {React.ReactNode} props.children - El texto descriptivo que se muestra debajo de la imagen (ej. "Normal (Frente)").
 * @returns {JSX.Element} Un div que contiene la imagen y su descripción.
 */
export function Imagenes({ imagen, children, alt }: Readonly<ImagenesType>) {
  return (
    <div className="bg-background-light dark:bg-black/20 rounded-2xl p-4 flex flex-col items-center border border-lab-border/40">
      <img src={imagen} alt={alt} className="size-24 object-contain" />
      <span className="text-[9px] font-bold uppercase mt-2 text-lab-text-muted">
        {children}
      </span>
    </div>
  );
}
