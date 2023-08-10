import "./MyOrg.css";
import { useState } from "react";
const MyOrg = (props) => {
  // const [variableName, functionActualizer] = useState(initialValue)
  // const [show, actualizeShow] = useState(true);
  // const handleClick = () => {
  //   actualizeShow(!show);
  // };
  return (
    <section className="orgSection">
      <h3 className="title">My organization</h3>
      <img src="/img/add.png" alt="add" onClick={props.changeShow} />
    </section>
  );
};
export default MyOrg;
