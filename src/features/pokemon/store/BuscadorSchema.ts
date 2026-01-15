import { z } from 'zod';

/**
 * Esquema de validación para el formulario de búsqueda de Pokémon.
 * Utiliza `zod` para definir las reglas de validación.
 *
 * @property {object} pokemon - Define las reglas para el campo 'pokemon'.
 * @property {string} pokemon.min - El campo no puede estar vacío.
 * @property {string} pokemon.max - El campo no puede exceder los 100 caracteres.
 */
export const BuscadorSchema = z.object({
  pokemon: z
    .string()
    .min(1, {
      message: 'El nombre del pokemon es obligatorio',
    })
    .max(100, {
      message: 'El nombre no puede exceder los 100 caracteres',
    }),
});
