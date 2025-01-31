function ProfilPokemon({ pokemon }) {
    if (!pokemon.name) return null; // Ne rien afficher si aucun Pokémon n'est sélectionné
  
    return (
      <article style={{ border: "2px solid white", padding: "10px", marginTop: "20px", textAlign: "center" }}>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.image} alt={pokemon.name} width="150" />
  
        <h3>Types :</h3>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {pokemon.apiTypes?.map((type) => (
            <div key={type.name}>
              <img src={type.image} alt={type.name} width="50" />
              <p>{type.name}</p>
            </div>
          ))}
        </div>
  
        <h3>Stats :</h3>
        <p>❤️ HP : {pokemon.stats?.HP}</p>
        <p>⚔️ Attaque : {pokemon.stats?.attack}</p>
        <p>🛡️ Défense : {pokemon.stats?.defense}</p>
        <p>⚡ Vitesse : {pokemon.stats?.speed}</p>
      </article>
    );
  }
  
  export default ProfilPokemon;
  