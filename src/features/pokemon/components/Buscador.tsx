import Pokeball from '@/assets/poke.svg';

interface BuscadorType {
  children: React.ReactNode;
}

/**
 * Componente contenedor estilizado para la barra de búsqueda.
 * Proporciona el diseño visual que incluye un ícono de Pokeball y un área
 * para el campo de entrada y el botón.
 *
 * @param {BuscadorType} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Los elementos internos de la barra de búsqueda (input, button).
 * @returns {JSX.Element} Un div estilizado que actúa como contenedor de la búsqueda.
 */
export function Buscador({ children }: Readonly<BuscadorType>) {
  return (
    <div className="flex items-center gap-2 bg-white dark:bg-black/20 border-2 border-pokemon-blue rounded-full p-2 shadow-[8px_8px_0px_0px_rgba(42,82,190,0.1)] focus-within:shadow-[8px_8px_0px_0px_rgba(42,82,190,0.2)] transition-all">
      <img src={Pokeball} alt="Pokeball" className="w-8 h-8" />
      {children}
    </div>
  );
}
