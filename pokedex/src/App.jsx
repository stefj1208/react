import { useState, useEffect } from "react";
import CardPokemon from "./components/CardPokemon";
import ProfilPokemon from "./components/ProfilPokemon"; // Importation du composant

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    console.log("FETCH !");
    const controller = new AbortController();

    fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/10", { signal: controller.signal })
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch annulé !");
        } else {
          console.error("Erreur lors du fetch :", error);
        }
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (pokemon && pokemon.name) {
      setTimeout(() => {
        document.title = `Pokédex - ${pokemon.name}`;
      }, 100);
    } else {
      document.title = "Pokédex";
    }
  }, [pokemon]);

  return (
    <div>
      <h1>Pokédex</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pokemonList.map((poke) => (
          <CardPokemon key={poke.id} pokemon={poke} onClick={setPokemon} />
        ))}
      </div>

      {/* Affichage du profil du Pokémon sélectionné */}
      <ProfilPokemon pokemon={pokemon} />
    </div>
  );
}

export default App;
