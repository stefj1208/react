import React from "react";

function FormCalendar({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <h2>Ajouter un événement</h2>
      <input type="text" placeholder="Nom de l'événement" name="eventName" required />
      <input type="time" name="eventTime" required />
      <input type="text" placeholder="Lieu" name="eventPlace" required />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default FormCalendar;
