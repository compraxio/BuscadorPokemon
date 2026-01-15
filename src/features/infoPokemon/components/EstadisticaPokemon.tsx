const TIPO_ESTADISTICA: Record<string, string> = {
  hp: 'bg-lab-red',
  attack: 'bg-orange-400',
  defense: 'bg-yellow-500',
  'special-attack': 'bg-pokemon-blue',
  'special-defense': 'bg-green-500',
  speed: 'bg-pink-500',
};

interface EstadisticaPokemonType {
  TipoDeEstadistica: string;
  estadistica: number;
}

/**
 * Componente para visualizar una única estadística de un Pokémon.
 * Muestra el nombre de la estadística, su valor y una barra de progreso coloreada
 * según el tipo de estadística.
 *
 * @param {EstadisticaPokemonType} props - Propiedades del componente.
 * @param {string} props.TipoDeEstadistica - El nombre de la estadística (ej. 'hp', 'attack').
 * @param {number} props.estadistica - El valor base de la estadística.
 * @returns {JSX.Element | null} Un div que representa la barra de estadística o `null` si el tipo no es válido.
 */
export function EstadisticaPokemon({
  TipoDeEstadistica,
  estadistica,
}: Readonly<EstadisticaPokemonType>) {
  const estadisticaColor = TIPO_ESTADISTICA[TipoDeEstadistica];
  const porcentaje = (estadistica * 100) / 220;

  const className = `h-full ${estadisticaColor}`;
  if (!estadisticaColor) return null;

  return (
    <div>
      <div className="flex justify-between text-[11px] font-bold uppercase mb-1.5">
        <span>{TipoDeEstadistica}</span>
        <span>{estadistica}</span>
      </div>
      <div className="h-2 w-full bg-lab-border rounded-full overflow-hidden">
        <div className={className} style={{ width: `${porcentaje}%` }}></div>
      </div>
    </div>
  );
}
