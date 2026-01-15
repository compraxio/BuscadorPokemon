import { ThemeProvider } from '@/shared/components/theme-provider';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/app/router/HomeRoute';

/**
 * Componente raíz de la aplicación.
 *
 * Configura el `ThemeProvider` para la gestión de temas (claro/oscuro) y
 * el `RouterProvider` para la gestión de rutas en toda la aplicación.
 *
 * @returns {JSX.Element} El componente principal de la aplicación con los proveedores de contexto.
 */
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
