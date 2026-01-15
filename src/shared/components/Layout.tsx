import { Outlet } from 'react-router-dom';
import { NavLin } from '../ui/NavLin';
import { ModeToggle } from '@/shared/components/mode-toggle';
import Pokeball from '@/assets/poke.svg';
import github from "@/assets/github-mark.svg"
export function Layout() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#f2f1e8]/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-lab-border dark:border-[#3a391a]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={Pokeball} alt="Pokeball" className="w-8 h-8" />
            <h2 className="text-xl font-extrabold tracking-tight text-pokemon-blue">
              BuscadorPokemon
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <NavLin
              to="/BuscadorPokemon"
              className="text-sm font-bold hover:text-pokemon-blue transition-colors"
            >
              Inicio
            </NavLin>
          </nav>
          <div className="flex flex-wrap gap-2">
            <ModeToggle />
            <a
              href="https://github.com/compraxio/BuscadorPokemon.git"
              target="_blank"
              rel="noopener noreferrer"
              title="repositorio de github"
            >
              <img
                src={github}
                alt="Logo github"
                className="w-8 h-8 dark:bg-amber-50 rounded-full"
              />
            </a>
          </div>
        </div>
      </header>
      <Outlet />
      <footer className="w-full bg-[#f2f1e8] dark:bg-background-dark py-5 border-t border-lab-border dark:border-[#3a391a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="pt-6 border-t border-lab-border/50 dark:border-lab-border/50 text-center">
            <p className="text-[10px] text-[#9e9d47] max-w-2xl mx-auto italic">
              Datos proporcionados por PokeAPI. Este sitio no está afiliado a
              Nintendo, Creatures Inc., Game Freak Inc. o The Pokémon Company.
              Sistema mantenido por Global Lab Network.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
