import type { LoaderFunctionArgs } from 'react-router-dom';

/**
 * Loader de React Router para obtener los datos de un Pokémon desde PokeAPI.
 *
 * Esta función se ejecuta antes de que se renderice la ruta asociada (`/:pokemon`).
 * Extrae el nombre del Pokémon de los parámetros de la URL, realiza una solicitud
 * a la API y devuelve los datos en formato JSON.
 *
 * @param {LoaderFunctionArgs} args - Argumentos proporcionados por React Router, incluyendo los `params` de la URL.
 * @throws {Response} Lanza una respuesta con estado 404 si el Pokémon no se encuentra.
 * @returns {Promise<any>} Una promesa que se resuelve con los datos del Pokémon.
 */
export const infoLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/${params.pokemon}`
  );
  if (!response.ok) {
    throw new Response('pokemon no encontrado', { status: 404 });
  }
  return response.json();
};
