function Form({ onSubmit }) {
  const handleChange = (event) => {
    console.log(event.target.value); // Affiche la valeur tapée dans la console
  };

  return (
    <form onSubmit={onSubmit} className="task-form">
      <input
        type="text"
        placeholder="Ajouter une tâche..."
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        placeholder="Catégorie (Travail, Personnel...)"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default Form;
