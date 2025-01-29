import { useState } from 'react';
import './ToDo.css';

function ToDo({ todo, date, checked, category, heureRestante, onToggle, onDelete, onUpdateHours }) {
  const [heures, setHeures] = useState(heureRestante);

  const handleClickPlus = () => {
    const newHours = heures + 1;
    setHeures(newHours);
    onUpdateHours(newHours);
  };

  const handleClickMinus = () => {
    if (heures > 0) {
      const newHours = heures - 1;
      setHeures(newHours);
      onUpdateHours(newHours);
    }
  };

  return (
    <li className={checked ? 'task green' : 'task orange'}>
      <div className="task-content">
        <input type="checkbox" checked={checked} onChange={onToggle} />
        <span>{todo}</span>
        <span className="category">[{category}]</span>
        <span className="date">({date})</span>
      </div>
      
      {/* Section du compteur d'heures */}
      <div className="task-controls">
        <button onClick={handleClickMinus}>-</button>
        <span>{heures} heures restantes</span>
        <button onClick={handleClickPlus}>+</button>
      </div>
      
      <button onClick={onDelete} className="delete-btn">Supprimer</button>
    </li>
  );
}

export default ToDo;
