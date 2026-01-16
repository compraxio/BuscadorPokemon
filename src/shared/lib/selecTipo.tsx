const TIPO_ICONO: Record<string, string> = {
  normal: 'Normal',
  fire: 'Fuego',
  water: 'Agua',
  electric: 'Rallo',
  grass: 'Planta',
  ice: 'Hielo',
  fighting: 'Lucha',
  poison: 'Veneno',
  ground: 'Tierra',
  flying: 'Aire',
  psychic: 'Psyquico',
  bug: 'Bicho',
  rock: 'Roca',
  ghost: 'Fantasma',
  dragon: 'Dragon',
  dark: 'Oscuro',
  steel: 'Acero',
  fairy: 'Ada',
};


export const elemento = (tipo: string) => {
  const icono = TIPO_ICONO[tipo];

  if (!icono) return null;

  return (
    <svg width="25" height="25">
      <use href={`/BuscadorPokemon/TyposPokemon.svg#${icono}`} />
    </svg>
  );
};
