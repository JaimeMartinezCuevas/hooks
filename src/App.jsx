import React from 'react';
import useCustomHook from './hooks/useFecthCharacters.js';

const App = () => {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const { data: pokemonData, loading: pokemonLoading, error: pokemonError } = useCustomHook(urlPokemon);
  const { data: rickData, loading: rickLoading, error: rickError } = useCustomHook(urlRick);

  return (
    <div>
      <h2>Personaje Pokemon</h2>
      {pokemonLoading && <p>Loading...</p>}
      {pokemonError && <p>Error: {pokemonError.message}</p>}
      {pokemonData && (
        <div>
          <p>{pokemonData.name}</p>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>
      )}

      <h2>Personaje Rick and Morty</h2>
      {rickLoading && <p>Loading...</p>}
      {rickError && <p>Error: {rickError.message}</p>}
      {rickData && (
        <div>
          <p>{rickData.name}</p>
          <img src={rickData.image} alt={rickData.name} />
        </div>
      )}
    </div>
  );
};

export default App;
