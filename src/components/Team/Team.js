import "./Team.css";
import Collaborator from "../Collaborator/Collaborator";

const Team = (props) => {
  const { primaryColor, secondaryColor, title } = props.data;
  return (
    <section className="team" style={{ backgroundColor: secondaryColor }}>
      {" "}
      <h3 style={{ borderColor: primaryColor }}>{title}</h3>{" "}
      <div className="collaborators">
        <Collaborator />
        <Collaborator />
      </div>
    </section>
  );
};

export default Team;
