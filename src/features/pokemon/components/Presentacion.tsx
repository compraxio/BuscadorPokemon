interface PresentacionType {
  children: React.ReactNode;
}

/**
 * Componente de presentación para la página de inicio.
 * Muestra el título principal y un párrafo descriptivo que se pasa como `children`.
 *
 * @param {PresentacionType} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - El texto descriptivo a mostrar debajo del título.
 * @returns {JSX.Element} Un fragmento con el `h1` y el `p` de la presentación.
 */
export function Presentacion({ children }: Readonly<PresentacionType>) {
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 tracking-tight dark:text-white">
        Atrápalos a todos, uno <br className="hidden md:block" />{' '}
        <span className="text-pokemon-blue underline decoration-primayy decoration-8 underline-offset-4">
          buscar
        </span>
        {' a la vez.'}
      </h1>

      <p className="text-lg text-[#6b6b3e] dark:text-[#a5a58d] max-w-2xl mx-auto mb-12">
        {children}
      </p>
    </>
  );
}
