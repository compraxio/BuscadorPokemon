const VERSION_COLOR: Record<string, string> = {
  red: 'bg-red-600 text-white',
  blue: 'bg-blue-600 text-white',
  yellow: 'bg-yellow-400 text-black',

  gold: 'bg-gray-500 text-white',
  silver: 'bg-yellow-600 text-white',
  crystal: 'bg-blue-300 text-blue-900',

  ruby: 'bg-red-700 text-white',
  sapphire: 'bg-blue-800 text-white',
  emerald: 'bg-green-700 text-white',

  firered: 'bg-red-400 text-white',
  leafgreen: 'bg-green-400 text-white',

  diamond: 'bg-blue-100 text-blue-800',
  pearl: 'bg-pink-100 text-pink-800',
  platinum: 'bg-gray-600 text-white',

  heartgold: 'bg-yellow-300 text-black',
  soulsilver: 'bg-gray-400 text-black',

  black: 'bg-black text-white',
  white: 'bg-white text-black border border-black',

  'black-2': 'bg-black text-white',
  'white-2': 'bg-white text-black border border-black',

  x: 'bg-blue-500 text-white',
  y: 'bg-red-500 text-white',

  omegaruby: 'bg-red-800 text-white',
  alphasapphire: 'bg-blue-900 text-white',

  sun: 'bg-orange-400 text-white',
  moon: 'bg-indigo-700 text-white',

  ultrasun: 'bg-orange-600 text-white',
  ultramoon: 'bg-purple-800 text-white',

  letsgopikachu: 'bg-yellow-400 text-black',
  letsgoeevee: 'bg-orange-500 text-white',

  brilliantdiamond: 'bg-blue-200 text-blue-900',
  shiningpearl: 'bg-pink-200 text-pink-900',

  legendsarceus: 'bg-amber-700 text-white',

  sword: 'bg-primary text-pokemon-blue',
  shield: 'bg-lab-red text-white',

  scarlet: 'bg-orange-600 text-white',
  violet: 'bg-purple-700 text-white',
};

interface JuegoType {
  nombre_juego: string;
}

/**
 * Componente que muestra una etiqueta (badge) coloreada para una versión de juego de Pokémon.
 * El color de la etiqueta se determina por el nombre del juego a través del mapa `VERSION_COLOR`.
 *
 * @param {JuegoType} props - Propiedades del componente.
 * @param {string} props.nombre_juego - El nombre de la versión del juego (ej. 'red', 'blue', 'sword').
 * @returns {JSX.Element} Un span estilizado que representa la etiqueta del juego.
 */
export function Juego({ nombre_juego }: Readonly<JuegoType>) {
  const color = VERSION_COLOR[nombre_juego];

  return (
    <span
      className={`px-3 py-1 ${color} text-[10px] font-black rounded uppercase tracking-tighter`}
    >
      {nombre_juego}
    </span>
  );
}
