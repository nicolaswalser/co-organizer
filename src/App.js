import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import MyOrg from "./components/MyOrg/MyOrg";
import Team from "./components/Team/Team";

function App() {
  const [showForm, actualizeShow] = useState(true);
  const changeShow = () => {
    actualizeShow(!showForm);
  };
  const teams = [
    {
      title: "Programming",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      title: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      title: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      title: "UX & Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      title: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      title: "Innovation & Gestation",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];
  return (
    <div>
      <Header />
      {showForm === true ? (
        <Form teams={teams.map((team) => team.title)} />
      ) : (
        <></>
      )}
      <MyOrg changeShow={changeShow} />
      {teams.map((team) => (
        <Team data={team} key={team.title} />
      ))}
    </div>
  );
}

export default App;
