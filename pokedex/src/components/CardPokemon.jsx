function CardPokemon({ pokemon, onClick }) {
    return (
      <article onClick={() => onClick(pokemon)} style={{ cursor: "pointer", border: "1px solid white", padding: "10px", margin: "5px", textAlign: "center" }}>
        <img src={pokemon.image} alt={pokemon.name} width="100" />
        <h3>{pokemon.name}</h3>
      </article>
    );
  }
  
  export default CardPokemon;
  