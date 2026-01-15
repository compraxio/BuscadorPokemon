interface AbilidadType {
  especial: boolean;
  NombreAbilidad: string;
}

interface AbilidadBaseProps {
  NombreAbilidad: string;
}

function AbilidadNormal({
  NombreAbilidad: nombre,
}: Readonly<AbilidadBaseProps>) {
  return (
    <div className="p-3 bg-background-light dark:bg-black/20 rounded-xl border border-lab-border/40">
      <div className="flex justify-between items-center mb-1">
        <span className="font-extrabold">{nombre}</span>
        <span className="text-[9px] font-black uppercase text-lab-text-muted">
          Primaria
        </span>
      </div>
    </div>
  );
}

function AbilidadEspecial({ NombreAbilidad }: Readonly<AbilidadBaseProps>) {
  return (
    <div className="p-3 bg-primayy/5 rounded-xl border border-primayy/20 dark:bg-black/20">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-1.5">
          <span className="font-extrabold text-pokemon-blue">
            {NombreAbilidad}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="size-6"
            color="#f4e600"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.56.56 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.56.56 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.56.56 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.56.56 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.56.56 0 0 0 .475-.345z"
            />
          </svg>
        </div>
        <span className="text-[9px] font-black uppercase text-pokemon-blue">
          Oculta
        </span>
      </div>
    </div>
  );
}

/**
 * Componente condicional que renderiza la habilidad de un Pokémon.
 * Muestra un estilo diferente si la habilidad es 'oculta' (especial).
 *
 * @param {AbilidadType} props - Propiedades del componente.
 * @param {boolean} props.especial - Indica si la habilidad es oculta. Por defecto es `false`.
 * @param {string} props.NombreAbilidad - El nombre de la habilidad.
 * @returns {JSX.Element} El componente de la habilidad, `AbilidadEspecial` o `AbilidadNormal`.
 */
export function Abilidad({
  especial = false,
  NombreAbilidad,
}: Readonly<AbilidadType>) {
  return especial ? (
    <AbilidadEspecial NombreAbilidad={NombreAbilidad} />
  ) : (
    <AbilidadNormal NombreAbilidad={NombreAbilidad} />
  );
}
