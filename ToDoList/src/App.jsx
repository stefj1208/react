import { useState } from 'react';
import ToDo from './components/ToDo';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, todo: 'Apprendre React', date: '27/01/2025', checked: true, category: 'Travail', heureRestante: 5 },
    { id: 2, todo: 'Créer une ToDo List', date: '28/01/2025', checked: false, category: 'Personnel', heureRestante: 3 },
    { id: 3, todo: 'Pratiquer avec des projets', date: '29/01/2025', checked: true, category: 'Travail', heureRestante: 7 },
  ]);

  const [newTask, setNewTask] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [filter, setFilter] = useState('');

  const handleToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (!newTask.trim() || !newCategory.trim()) return;

    const today = new Date().toLocaleDateString();
    const newTaskObj = {
      id: tasks.length + 1,
      todo: newTask.trim(),
      date: today,
      checked: false,
      category: newCategory.trim(),
      heureRestante: 5, // Valeur par défaut
    };

    setTasks((prevTasks) => [...prevTasks, newTaskObj]);
    setNewTask('');
    setNewCategory('');
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleUpdateHours = (id, newHours) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, heureRestante: newHours } : task
      )
    );
  };

  const filteredTasks = filter
    ? tasks.filter((task) => task.category === filter)
    : tasks;

  return (
    <div className="app">
      <h1>Ma Liste de Tâches</h1>
      <form onSubmit={handleAddTask} className="task-form">
        <input
          type="text"
          placeholder="Ajouter une tâche..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="text"
          placeholder="Catégorie (Travail, Personnel...)"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>

      <div className="filter-form">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">Toutes les catégories</option>
          <option value="Travail">Travail</option>
          <option value="Personnel">Personnel</option>
        </select>
      </div>

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <ToDo
            key={task.id}
            todo={task.todo}
            date={task.date}
            checked={task.checked}
            category={task.category}
            heureRestante={task.heureRestante}
            onToggle={() => handleToggle(task.id)}
            onDelete={() => handleDeleteTask(task.id)}
            onUpdateHours={(newHours) => handleUpdateHours(task.id, newHours)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
