/**
 * Representa una habilidad que posee un Pokémon.
 */
interface PokeApiTypeAbility {
  /** Indica si esta es una habilidad oculta */
  is_hidden: boolean;
  /** La posición de la habilidad en la lista de habilidades del Pokémon */
  slot: number;
  /** Los detalles de la habilidad */
  ability: {
    /** Nombre de la habilidad */
    name: string;
    /** URL de la habilidad en la PokeAPI */
    url: string;
  };
}

/**
 * Representa las habilidades que tenía un Pokémon en generaciones pasadas.
 */
interface PokeApiTypeAbilityPast {
  /** La generación en la que el Pokémon tenía estas habilidades */
  generation: {
    /** Nombre de la generación */
    name: string;
    /** URL de la generación en la PokeAPI */
    url: string;
  };
  /** Lista de habilidades que tenía en esa generación */
  abilities: PokeApiTypeAbility[];
}

/**
 * Representa una forma de un Pokémon.
 */
interface PokeApiTypeForm {
  /** Nombre de la forma */
  name: string;
  /** URL de la forma en la PokeAPI */
  url: string;
}

/**
 * Representa el índice de juego de un Pokémon para una versión específica.
 */
interface PokeApiTypeGameIndex {
  /** El índice del Pokémon en ese juego */
  game_index: number;
  /** Información de la versión del juego */
  version: {
    /** Nombre de la versión del juego */
    name: string;
    /** URL de la versión en la PokeAPI */
    url: string;
  };
}

/**
 * Representa los gritos/sonidos de un Pokémon.
 */
interface PokeApiTypeCries {
  /** URL del grito más reciente del Pokémon */
  latest: string;
  /** URL del grito heredado/anterior del Pokémon */
  legacy: string;
}

/**
 * Representa los detalles de aprendizaje de un movimiento en una versión específica.
 */
interface PokeApiTypeMoveVersion {
  /** Método por el cual se aprende el movimiento */
  move_learn_method: {
    /** Nombre del método (level-up, machine, tutor, etc) */
    name: string;
    /** URL del método en la PokeAPI */
    url: string;
  };
  /** Grupo de versión en el que se aprende el movimiento */
  version_group: {
    /** Nombre del grupo de versión */
    name: string;
    /** URL del grupo de versión en la PokeAPI */
    url: string;
  };
  /** Nivel requerido para aprender el movimiento (0 si no es por nivel) */
  level_learned_at: number;
  /** Orden de aprendizaje del movimiento */
  order: number | null;
}

/**
 * Representa un movimiento que puede aprender un Pokémon.
 */
interface PokeApiTypeMove {
  /** Información del movimiento */
  move: {
    /** Nombre del movimiento */
    name: string;
    /** URL del movimiento en la PokeAPI */
    url: string;
  };
  /** Detalles del aprendizaje en diferentes versiones y grupos de versión */
  version_group_details: PokeApiTypeMoveVersion[];
}

/**
 * Representa una estadística base de un Pokémon.
 */
interface PokeApiTypeStat {
  /** Valor base de la estadística */
  base_stat: number;
  /** Puntos de esfuerzo (EV) que otorga esta estadística */
  effort: number;
  /** Información de la estadística */
  stat: {
    /** Nombre de la estadística (hp, attack, defense, etc) */
    name: string;
    /** URL de la estadística en la PokeAPI */
    url: string;
  };
}

/**
 * Representa un tipo de Pokémon.
 */
interface PokeApiTypeType {
  /** Posición en la que aparece el tipo */
  slot: number;
  /** Información del tipo */
  type: {
    /** Nombre del tipo */
    name: string;
    /** URL del tipo en la PokeAPI */
    url: string;
  };
}

/**
 * Representa los tipos que tenía un Pokémon en generaciones pasadas.
 */
interface PokeApiTypeTypePast {
  /** La generación en la que el Pokémon tenía estos tipos */
  generation: {
    /** Nombre de la generación */
    name: string;
    /** URL de la generación en la PokeAPI */
    url: string;
  };
  /** Lista de tipos que tenía en esa generación */
  types: PokeApiTypeType[];
}

/**
 * Representa las imágenes/sprites de un Pokémon.
 */
interface PokeApiTypeSprites {
  /** Imagen predeterminada de la parte trasera del Pokémon */
  back_default: string | null;
  /** Imagen femenina de la parte trasera del Pokémon */
  back_female: string | null;
  /** Imagen brillante de la parte trasera del Pokémon */
  back_shiny: string | null;
  /** Imagen femenina brillante de la parte trasera del Pokémon */
  back_shiny_female: string | null;
  /** Imagen predeterminada de la parte frontal del Pokémon */
  front_default: string | null;
  /** Imagen femenina de la parte frontal del Pokémon */
  front_female: string | null;
  /** Imagen brillante de la parte frontal del Pokémon */
  front_shiny: string | null;
  /** Imagen femenina brillante de la parte frontal del Pokémon */
  front_shiny_female: string | null;
  /** Otras representaciones visuales (dream-world, official-artwork, home, showdown) */
  other?: Record<string, any>;
  /** Versiones históricas de sprites según generaciones */
  versions?: Record<string, any>;
}

/**
 * Representa los detalles de versión de un objeto que puede sostener un Pokémon.
 */
interface PokeApiTypeHeldItemVersion {
  /** Información de la versión del juego */
  version: {
    /** Nombre de la versión */
    name: string;
    /** URL de la versión en la PokeAPI */
    url: string;
  };
  /** Frecuencia con la que aparece el objeto (0-100) */
  rarity: number;
}

/**
 * Representa un objeto que puede sostener un Pokémon.
 */
interface PokeApiTypeHeldItem {
  /** Información del objeto */
  item: {
    /** Nombre del objeto */
    name: string;
    /** URL del objeto en la PokeAPI */
    url: string;
  };
  /** Detalles de los objetos en diferentes versiones del juego */
  version_details: PokeApiTypeHeldItemVersion[];
}

/**
 * Representa un Pokémon completo de la PokeAPI v2.
 * Contiene toda la información asociada al Pokémon incluyendo estadísticas,
 * movimientos, habilidades, sprites y más.
 *
 * @see https://pokeapi.co/docs/v2#pokemon
 */
export interface PokeApiType {
  /** Identificador único del Pokémon */
  id: number;
  /** Nombre del Pokémon */
  name: string;
  /** Experiencia base que se obtiene al derrotar este Pokémon */
  base_experience: number;
  /** Altura del Pokémon en decímetros */
  height: number;
  /** Indica si este es la forma predeterminada del Pokémon */
  is_default: boolean;
  /** Orden para clasificar (casi orden nacional, excepto que las familias están agrupadas) */
  order: number;
  /** Peso del Pokémon en hectogramos */
  weight: number;
  /** Lista de habilidades que puede tener este Pokémon */
  abilities: PokeApiTypeAbility[];
  /** Lista de formas que puede adoptar este Pokémon */
  forms: PokeApiTypeForm[];
  /** Índices de juego relevantes para este Pokémon por generación */
  game_indices: PokeApiTypeGameIndex[];
  /** Gritos/sonidos del Pokémon */
  cries: PokeApiTypeCries;
  /** Objetos que este Pokémon puede sostener cuando se encuentra */
  held_items: PokeApiTypeHeldItem[];
  /** Enlace a la lista de encuentros por área de localización */
  location_area_encounters: string;
  /** Movimientos que este Pokémon puede aprender */
  moves: PokeApiTypeMove[];
  /** Habilidades que tenía en generaciones pasadas */
  past_abilities: PokeApiTypeAbilityPast[];
  /** Tipos que tenía en generaciones pasadas */
  past_types: PokeApiTypeTypePast[];
  /** La especie a la que pertenece este Pokémon */
  species: {
    /** Nombre de la especie */
    name: string;
    /** URL de la especie en la PokeAPI */
    url: string;
  };
  /** Imágenes/sprites del Pokémon */
  sprites: PokeApiTypeSprites;
  /** Estadísticas base del Pokémon */
  stats: PokeApiTypeStat[];
  /** Tipos del Pokémon */
  types: PokeApiTypeType[];
}
