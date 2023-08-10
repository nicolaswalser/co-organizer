import "./Form.css";
import FieldText from "../FieldText/FieldText";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Button from "../Button/Button";
import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [position, setPostition] = useState("");
  const [photo, setPhoto] = useState("");
  const [team, setTeam] = useState("");
  const handleSend = (e) => {
    e.preventDefault();
    const sendData = {
      name,
      position,
      photo,
      team,
    };
    // console.log(sendData);
  };
  return (
    <section className="form">
      <form onSubmit={handleSend}>
        <h2>Fill out the form to create a collaborator</h2>
        <FieldText
          title="Name"
          placeholder="Enter name"
          required
          value={name}
          setValue={setName}
        />
        <FieldText
          title="Position"
          placeholder="Enter position"
          required
          value={position}
          setValue={setPostition}
        />
        <FieldText
          title="Photo"
          placeholder="Enter link to photo"
          required
          value={photo}
          setValue={setPhoto}
        />
        <ListaOpciones
          title="Team"
          placeholder="Select team..."
          value={team}
          setTeam={setTeam}
          teams={props.teams}
        />
        <Button text="Create" />
      </form>
    </section>
  );
};

export default Form;
