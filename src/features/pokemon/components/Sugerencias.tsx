import type { UseFormSetValue } from 'react-hook-form';
import type { Inputs } from '@/features/pokemon/components/Home';
import { elemento } from '@/shared/lib/selecTipo';

interface SugerenciaType {
  tipo:
    | 'normal'
    | 'fire'
    | 'water'
    | 'electric'
    | 'grass'
    | 'ice'
    | 'fighting'
    | 'poison'
    | 'ground'
    | 'flying'
    | 'psychic'
    | 'bug'
    | 'rock'
    | 'ghost'
    | 'dragon'
    | 'dark'
    | 'steel'
    | 'fairy';
  nombrePokemon?: string;
  setValue: UseFormSetValue<Inputs>;
}

/**
 * Componente de botón para sugerencias de búsqueda.
 * Al hacer clic, actualiza el valor del campo de búsqueda principal utilizando
 * la función `setValue` de `react-hook-form`.
 *
 * @param {SugerenciaType} props - Propiedades del componente.
 * @param {string} props.tipo - El tipo de Pokémon para mostrar el ícono correspondiente.
 * @param {string} [props.nombrePokemon] - El nombre del Pokémon a establecer en la búsqueda.
 * @param {UseFormSetValue<Inputs>} props.setValue - La función de `react-hook-form` para actualizar el valor del input.
 * @returns {JSX.Element} Un botón de sugerencia estilizado.
 */
export function Sugerencia({
  tipo,
  nombrePokemon,
  setValue,
}: Readonly<SugerenciaType>) {
  const handleClick = () => {
    setValue('pokemon', nombrePokemon || '', {
      shouldValidate: true,
    });
  };

  return (
    <button
      onClick={() => handleClick()}
      className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-black/20 px-4 border border-lab-border dark:border-[#3a391a] cursor-pointer hover:border-primayy transition-colors"
    >
      {elemento(tipo)}
      <p className="text-sm font-bold">{nombrePokemon}</p>
    </button>
  );
}
