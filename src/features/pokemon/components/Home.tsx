//import { Card } from './Card';
import { Presentacion } from './Presentacion';
import { Buscador } from './Buscador';
import { Sugerencia } from './Sugerencias';

import { z } from 'zod';
import { BuscadorSchema } from '../store/BuscadorSchema';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

export type Inputs = z.infer<typeof BuscadorSchema>;

/**
 * Componente principal de la página de inicio.
 *
 * Contiene la lógica del formulario de búsqueda de Pokémon, incluyendo el manejo del estado
 * con `react-hook-form` y la validación con `zod`. Al enviar el formulario,
 * navega a la página de detalles del Pokémon correspondiente.
 * También renderiza la presentación, la barra de búsqueda y las sugerencias.
 *
 * @returns {JSX.Element} La vista completa de la página de inicio.
 */
const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Inputs>({
    resolver: zodResolver(BuscadorSchema),
    mode: 'onChange',
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const nombrePokemon = data.pokemon;

    navigate(`/${nombrePokemon}`);
  };

  return (
    <main className="flex-1 flex flex-col items-center bg-[radial-gradient(#e9e8ce_0.5px,transparent_0.5px)] bg-size-[24px_24px]">
      <section className="w-full max-w-5xl px-6 py-16 md:py-24 text-center">
        {/*<Card>vienbenidooo</Card>*/}
        <Presentacion>
          Busca tu Pokémon favorito por su nombre o número de la Pokédex
          Nacional para ver estadísticas detalladas, movimientos, habilidades,
          evoluciones y más información de interés.
        </Presentacion>

        <form
          className="relative w-full max-w-2xl mx-auto flex flex-col items-center gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Buscador>
            <input
              className="flex-1 bg-transparent border-none focus:ring-0 text-lg font-medium placeholder:text-[#9e9d47]/60 py-3 outline-0"
              placeholder="Busca por nombre o número de la Pokédex..."
              id="pokemon"
              autoComplete="off"
              {...register('pokemon')}
            />
            {errors.pokemon?.message && (
              <span className="hidden lg:block">{errors.pokemon.message}</span>
            )}
            <button
              type="submit"
              className="hidden lg:flex bg-primayy hover:bg-primayy/90 text-pokemon-blue font-black px-8 py-3 rounded-full items-center gap-2 transition-transform active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <span>BUSCAR</span>
            </button>
          </Buscador>
          {errors.pokemon?.message && (
            <span className="block lg:hidden">{errors.pokemon.message}</span>
          )}
          <button
            type="submit"
            className="flex lg:hidden bg-primayy hover:bg-primayy/90 text-pokemon-blue font-black px-8 py-3 rounded-full items-center gap-2 transition-transform active:scale-95 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <span>BUSCAR</span>
          </button>
        </form>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="text-sm font-bold text-[#9e9d47] py-2">
            Sugerencias:
          </span>

          <Sugerencia
            tipo="electric"
            nombrePokemon="Pikachu"
            setValue={setValue}
          />
          <Sugerencia
            tipo="fire"
            nombrePokemon="Charizard"
            setValue={setValue}
          />
          <Sugerencia
            tipo="water"
            nombrePokemon="Squirtle"
            setValue={setValue}
          />
          <Sugerencia tipo="ghost" nombrePokemon="Gengar" setValue={setValue} />
        </div>
      </section>
    </main>
  );
};

export default Home;
