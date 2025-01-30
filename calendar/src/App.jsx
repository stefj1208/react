import { useState } from 'react';
import './App.css';
import Day from './components/Day';
import FormCalendar from './components/FormCalendar';

// Déclaration des constantes
const MONTH = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

const DAY = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const DAY_LETTER = DAY.map(day => day[0]);

function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [events, setEvents] = useState(Array(31).fill(null)); // Tableau de 31 cases pour chaque jour

  // Fonction pour gérer le clic sur un jour
  const handleClick = (day) => {
    setSelectedDay(day);
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!selectedDay) {
      alert("Veuillez sélectionner un jour avant d'ajouter un événement !");
      return;
    }

    const newEvent = {
      name: event.target.eventName.value,
      time: event.target.eventTime.value,
      place: event.target.eventPlace.value,
    };

    // Mettre à jour l'événement pour le jour sélectionné
    const updatedEvents = [...events];
    updatedEvents[selectedDay - 1] = newEvent;
    setEvents(updatedEvents);

    event.target.reset();
  };

  // Création du tableau ROW contenant les jours du mois
  const ROW = [];
  for (let i = 1; i <= 31; i++) {
    const isSelected = selectedDay === i;
    const eventInfo = events[i - 1];

    ROW.push(
      <div key={i} className="day-container">
        <Day 
          jour={i} 
          className={isSelected ? "backgroundOrange selected" : "backgroundOrange"}
          onClick={() => handleClick(i)}
        />
        {eventInfo && (
          <p className="event-indicator">{eventInfo.name}</p>
        )}
      </div>
    );
  }

  return (
    <article className="card">
      {/* Nom du mois */}
      <Day jour={MONTH[9]} className="month" />

      {/* Ligne des jours de la semaine */}
      <section className="grid-7">
        {DAY_LETTER.map((letter, index) => (
          <Day key={index} jour={letter} className="day-letter" />
        ))}
      </section>

      {/* Affichage des jours du mois */}
      <section className="grid-7 days">
        {ROW}
      </section>

      {/* Formulaire d'ajout d'événement */}
      <FormCalendar onSubmit={handleSubmit} />

      {/* Affichage des événements */}
      <section className="events">
        <h2>Événements</h2>
        <ul>
          {events.map((ev, index) =>
            ev ? (
              <li key={index}>
                <strong>Jour {index + 1}</strong>: {ev.name} à {ev.time} ({ev.place})
              </li>
            ) : null
          )}
        </ul>
      </section>
    </article>
  );
}

export default App;
