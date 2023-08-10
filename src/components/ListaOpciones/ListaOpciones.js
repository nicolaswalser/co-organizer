import "./ListaOpciones.css";
const ListaOpciones = (props) => {
  const handleChange = (e) => {
    props.setTeam(e.target.value);
  };
  return (
    <div className="lista-opciones">
      <label>{props.title}</label>
      <select onChange={handleChange}>
        <option value={props.placeholder} hidden disabled selected>
          {props.placeholder}
        </option>
        {props.teams.map((team, index) => (
          <option key={index}>{team}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
