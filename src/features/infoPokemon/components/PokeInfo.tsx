import { useLoaderData } from 'react-router-dom';
import type { PokeApiType } from '@/shared/types/pokemon';
import { PresentacionPoke } from './PresentacionPoke';
import { SonidoPoke } from './SonidoPoke';
import { SelecTipo } from './SelecTipo';
import { ImageContent } from './ImageContent';
import { Imagenes } from './Imagenes';
import { EstadisticaPokemon } from './EstadisticaPokemon';
import { Abilidad } from './Abilidad';
import { Juego } from './Juego';

/**
 * Componente principal de la página de detalles de un Pokémon.
 *
 * Utiliza `useLoaderData` para obtener los datos del Pokémon cargados por el `infoLoader`.
 * Orquesta la renderización de varios sub-componentes para mostrar toda la información
 * detallada del Pokémon, como presentación, sonidos, imágenes, estadísticas, habilidades, etc.
 *
 * @returns {JSX.Element} La vista completa de la página de información del Pokémon.
 */
export default function PokeInfo() {
  const poke = useLoaderData<PokeApiType>();

  return (
    <main className="flex-1 bg-[radial-gradient(#e9e8ce_0.5px,transparent_0.5px)] bg-size-[24px_24px]">
      <section className="w-full border-b border-lab-border bg-white/40 dark:bg-black/20 backdrop-blur-sm py-12">
        <div className="max-w-7xl mx-auto px-6 ">
          <PresentacionPoke id={poke.id} name={poke.name}>
            {poke.types.map(({ type, slot }) => {
              return <SelecTipo tipo={type.name} key={slot} />;
            })}
          </PresentacionPoke>
          <div className="flex flex-wrap justify-end gap-3 mt-3 ">
            {poke.cries.latest && (
              <SonidoPoke
                pokemon={poke.name}
                tipoAudio="latest"
                audio={poke.cries.latest}
              />
            )}
            {poke.cries.legacy && (
              <SonidoPoke
                pokemon={poke.name}
                tipoAudio="legacy"
                audio={poke.cries.legacy}
              />
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 ">
          <div className="lg:col-span-4 flex flex-col gap-8 ">
            <ImageContent>
              <Imagenes
                imagen={`${poke.sprites.front_default}`}
                alt="Vista frontal"
              >
                Normal (Frente)
              </Imagenes>
              <Imagenes
                imagen={`${poke.sprites.back_default}`}
                alt="Vista trasera"
              >
                Normal (Espalda)
              </Imagenes>
              <Imagenes
                imagen={`${poke.sprites.front_shiny}`}
                alt="Vista frontal shiny"
              >
                Shiny (Frente)
              </Imagenes>
              <Imagenes
                imagen={`${poke.sprites.back_shiny}`}
                alt="Vista trasera shiny"
              >
                Shiny (Espalda)
              </Imagenes>
            </ImageContent>
            <div className="bg-white border dark:bg-black/20 border-lab-border dark:border-[#3a391a] rounded-3xl p-6 h-fit">
              <div className="flex justify-between items-center mb-6 ">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-lab-text-muted flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-pokemon-blue rounded-full"></span>
                  <span>Estadísticas Base</span>
                </h3>
                <div className="text-[10px] font-black bg-primayy px-2 py-1 rounded dark:text-black">
                  {/* reduce usa un parametro acumulador(Que seria el 0 final) y el elemento actual*/}
                  BST{' '}
                  {poke.stats.reduce((acc, stat) => acc + stat.base_stat, 0)}
                </div>
              </div>

              <div className="flex flex-col justify-center gap-2 h-48">
                {poke.stats.map(({ stat, base_stat }) => (
                  <EstadisticaPokemon
                    TipoDeEstadistica={stat.name}
                    estadistica={base_stat}
                    key={stat.name}
                  />
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-lab-border/40">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-lab-text-muted mb-2">
                  Puntos de Esfuerzo (EVs)
                </h4>
                {poke.stats.map(({ effort, stat }) =>
                  effort ? (
                    <p className="text-sm font-bold" key={stat.name}>
                      +{effort} {stat.name}
                    </p>
                  ) : (
                    ''
                  )
                )}
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-8 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <div className="bg-white  border border-lab-border dark:border-[#3a391a] rounded-3xl p-6 dark:bg-black/20">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-lab-text-muted mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primayy rounded-full"></span>
                  <span>Información General</span>
                </h3>
                <div className="grid grid-cols-2 gap-y-6">
                  <div>
                    <p className="text-[10px] font-black text-lab-text-muted uppercase mb-1">
                      Especie
                    </p>
                    <p className="font-extrabold">{poke.species.name}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-lab-text-muted uppercase mb-1">
                      Experiencia Base
                    </p>
                    <p className="font-extrabold">{poke.base_experience} XP</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-lab-text-muted uppercase mb-1">
                      Altura
                    </p>
                    <p className="font-extrabold">{poke.height / 10} m</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-lab-text-muted uppercase mb-1">
                      Peso
                    </p>
                    <p className="font-extrabold">{poke.weight / 10} kg</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[10px] font-black text-lab-text-muted uppercase mb-1">
                      Formas posibles
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {poke.forms.map(({ name }) => (
                        <span
                          className="px-3 py-1 bg-background-light dark:bg-black/20 rounded-full text-xs font-bold border border-lab-border/40"
                          key={name}
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white  border border-lab-border dark:border-[#3a391a] rounded-3xl p-6 dark:bg-black/20">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-lab-text-muted mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  <span>Habilidades</span>
                </h3>
                <div className="space-y-4">
                  {poke.abilities.map(({ ability, is_hidden }) => (
                    <Abilidad
                      NombreAbilidad={ability.name}
                      especial={is_hidden}
                      key={ability.name}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white border border-lab-border dark:border-[#3a391a] rounded-3xl overflow-hidden dark:bg-black/20">
              <div className="p-6 border-b border-lab-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-lab-text-muted flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-lab-red rounded-full"></span>
                  <span>Librería de movimientos</span>
                </h3>
                {/*<div className="relative flex-1 max-w-xs">
                  <input
                    className="w-full bg-background-light dark:bg-black/20 border-lab-border rounded-full pl-10 pr-4 py-1.5 text-xs focus:ring-primary focus:border-primary"
                    placeholder="Filtrar movimientos..."
                    type="text"
                  />
                </div>*/}
              </div>
              <div className="max-h-96  overflow-y-auto overflow-x-auto ">
                <table className="w-full text-left">
                  <thead className="bg-background-light/50 dark:bg-black/10">
                    <tr>
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-lab-text-muted">
                        Movimiento
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-lab-text-muted text-center">
                        Método
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-lab-text-muted text-right">
                        Nivel
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-lab-border/30">
                    {poke.moves.map(({ move, version_group_details }) => (
                      <tr
                        className="hover:bg-primary/5 transition-colors"
                        key={move.name}
                      >
                        <td className="px-6 py-4 font-bold text-sm">
                          {move.name}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black">
                            {version_group_details[0].move_learn_method.name}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-mono text-xs">
                          {version_group_details[0].level_learned_at}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white border border-lab-border dark:border-[#3a391a] rounded-3xl p-6 dark:bg-black/20">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-lab-text-muted mb-6 flex items-center gap-2">
                Juegos en los que aparece
              </h3>
              <div className="flex flex-wrap gap-2">
                {poke.game_indices.map(({ version }) => (
                  <Juego nombre_juego={version.name} key={version.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
