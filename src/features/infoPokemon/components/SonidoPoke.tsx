import { useRef } from 'react';

interface SonidoPokeType {
  pokemon: string;
  tipoAudio: string;
  audio: string;
}

/**
 * Componente que proporciona un botón para reproducir el grito de un Pokémon.
 * Utiliza `useRef` para controlar un elemento de audio HTML.
 *
 * @param {SonidoPokeType} props - Propiedades del componente.
 * @param {string} props.pokemon - El nombre del Pokémon, usado en el texto descriptivo.
 * @param {string} props.tipoAudio - El tipo de grito (ej. 'latest', 'legacy').
 * @param {string} props.audio - La URL del archivo de audio del grito.
 * @returns {JSX.Element} Un contenedor con información del audio y un botón de reproducción.
 */
export function SonidoPoke({
  pokemon,
  tipoAudio,
  audio,
}: Readonly<SonidoPokeType>) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playCry = () => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <div className="bg-primayy/20 p-4 rounded-2xl border border-primayy/40 flex items-center gap-4 dark:bg-black/20">
      <div className="text-right">
        <p className="text-[10px] font-black uppercase text-lab-text-muted">
          sonido de {pokemon}
        </p>
        <p className="text-sm font-bold">{tipoAudio}</p>
      </div>
      <audio ref={audioRef} src={audio} className="hidden">
        <track kind="captions" label="audio pokemon" />
      </audio>
      <button
        onClick={playCry}
        className="size-12 bg-primayy text-pokemon-blue rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          className="size-6"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327z"
          />
        </svg>
      </button>
    </div>
  );
}
