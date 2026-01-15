import { elemento } from '@/shared/lib/selecTipo';

interface TipoType {
  tipo: string;
}

/**
 * Componente que muestra una etiqueta para un tipo de Pokémon.
 * Incluye un ícono y el nombre del tipo.
 *
 * @param {TipoType} props - Propiedades del componente.
 * @param {string} props.tipo - El nombre del tipo de Pokémon (ej. 'fire', 'water').
 * @returns {JSX.Element} Un div estilizado que representa la etiqueta del tipo.
 */
export function SelecTipo({ tipo }: Readonly<TipoType>) {
  return (
    <div className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#2d2c14] px-4 border border-lab-border dark:border-[#3a391a]">
      {elemento(tipo)}
      <p className="text-sm font-bold">{tipo}</p>
    </div>
  );
}
