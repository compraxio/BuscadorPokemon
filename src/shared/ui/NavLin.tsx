import { NavLink } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Componente `NavLin`
 *
 * Un componente contenedor (wrapper) sobre `NavLink` de `react-router-dom` para estandarizar
 * los enlaces de navegación en la aplicación.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} props.to - La ruta de destino del enlace.
 * @param {React.ReactNode} [props.children] - Contenido a renderizar dentro del enlace.
 * @param {string} [props.className] - Clases CSS para estilizar el enlace.
 * @returns {JSX.Element} Un componente NavLink configurado.
 */
export function NavLin({ to, children, className }: Readonly<NavLinkProps>) {
  return (
    <NavLink to={to} className={className}>
      {children}
    </NavLink>
  );
}
