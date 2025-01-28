import React, { useState } from "react";
import Card from "./Card";

const App = () => {
  const [search, setSearch] = useState("");
  const USERS = [
    {
      image: "https://via.placeholder.com/150",
      pseudo: "JohnDoe",
      email: "john@example.com",
      description: "A software developer.",
      sexe: "homme",
    },
    {
      image: "https://via.placeholder.com/150",
      pseudo: "JaneDoe",
      email: "jane@example.com",
      description: "A graphic designer.",
      sexe: "femme",
    },
    {
      image: "https://via.placeholder.com/150",
      pseudo: "Alex",
      email: "alex@example.com",
      description: "A project manager.",
      sexe: "non-binaire",
    },
  ];

  const USERS_LIST = USERS.filter((user) =>
    user.pseudo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Rechercher un pseudo"
        onChange={(e) => setSearch(e.target.value)}
      />
      {USERS_LIST.length > 0 ? (
        <h1>Liste des Utilisateurs</h1>
      ) : (
        <h1>Aucun utilisateur d’inscrit</h1>
      )}
      {USERS_LIST.length > 0 && (
        <p>Il y a {USERS_LIST.length} utilisateurs inscrits !</p>
      )}
      {USERS_LIST.map((user, index) => (
        <Card key={index} {...user} />
      ))}
    </>
  );
};

export default App;
