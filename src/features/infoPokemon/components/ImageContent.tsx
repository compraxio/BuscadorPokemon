interface ImageContentType {
  children: React.ReactNode;
}

/**
 * Un componente contenedor para la sección de la galería de sprites.
 * Provee un título y un layout de rejilla para los componentes `Imagenes`.
 *
 * @param {ImageContentType} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Los componentes `Imagenes` a renderizar dentro de la galería.
 * @returns {JSX.Element} El contenedor de la galería de sprites.
 */
export function ImageContent({ children }: Readonly<ImageContentType>) {
  return (
    <div className="bg-white dark:bg-[#2d2c14] border border-lab-border dark:border-[#3a391a] rounded-3xl p-6 dark:bg-black/20">
      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-lab-text-muted mb-6 flex items-center gap-2 ">
        <span className="w-1.5 h-1.5 bg-lab-red rounded-full" />
        <span>Galeria de Sprites</span>
      </h3>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </div>
  );
}
