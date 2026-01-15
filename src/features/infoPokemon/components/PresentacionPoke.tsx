interface PresentacionPokeType {
  id: number;
  name: string;
  children: React.ReactNode;
}

/**
 * Componente de presentación para la página de detalles de un Pokémon.
 * Muestra el número de la Pokédex, el nombre del Pokémon en un formato grande y
 * renderiza los tipos del Pokémon que se le pasan como `children`.
 *
 * @param {PresentacionPokeType} props - Propiedades del componente.
 * @param {number} props.id - El número del Pokémon en la Pokédex.
 * @param {string} props.name - El nombre del Pokémon.
 * @param {React.ReactNode} props.children - Componentes a renderizar en la sección de tipos (normalmente `SelecTipo`).
 * @returns {JSX.Element} La sección de cabecera de la página de detalles.
 */
export function PresentacionPoke({
  children,
  id,
  name,
}: Readonly<PresentacionPokeType>) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xl font-bold text-lab-text-muted tracking-[0.2em]">
          pokedex: #{id}
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">
          {name}
        </h1>
        <div className="flex gap-3 mt-2">{children}</div>
      </div>
    </div>
  );
}
