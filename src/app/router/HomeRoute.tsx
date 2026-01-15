import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/shared/components/Layout';
import { lazy } from 'react';
import { infoLoader } from '@/features/infoPokemon/service/infoLoader';

const Home = lazy(() => import('../../features/pokemon/components/Home'));
const PokeInfo = lazy(() => import('../../features/infoPokemon/components/PokeInfo'));

/**
 * Configuración principal del enrutador de la aplicación.
 *
 * Utiliza `createBrowserRouter` de React Router para definir las rutas.
 * Implementa carga diferida (lazy loading) para las vistas `Home` y `PokeInfo`
 * para mejorar el tiempo de carga inicial.
 *
 * Rutas:
 * - `/`: Muestra la página de inicio (`Home`).
 * - `/:pokemon`: Muestra la página de detalles de un Pokémon (`PokeInfo`), utilizando un `loader`
 *   para cargar los datos del Pokémon antes de la renderización. También define un `ErrorBoundary`
 *   para manejar casos donde el Pokémon no se encuentra.
 */
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/BuscadorPokemon',
        element: <Home />,
      },
      {
        path: '/BuscadorPokemon/:pokemon',
        element: <PokeInfo />,
        loader: infoLoader,
        HydrateFallback: () => <h1>Cargando...</h1>,
        ErrorBoundary: () => (
          <div className="flex justify-center items-center h-svh">
            <h1 className="text-center font-bold">
              No se a encontrado tu pokemon porfavor introduzca el nombre
              correcto
            </h1>
          </div>
        ),
      },
    ],
  },
]);

