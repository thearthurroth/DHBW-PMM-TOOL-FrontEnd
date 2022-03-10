import React, { Component } from "react";
import styled, { css } from "styled-components";
import { useState } from "react";
import ReactDOM from 'react-dom';

function CreateEmployees(props) {
  // Variablen um die eingegebenen Werte in UseStates zu speichern
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [EmployeeID, setEmployeeID] = useState("");
  const [Responsibility, setResponsibility] = useState("");
  const [WorkingHours, setWorkingHours] = useState("");
  const [Teams, setTeams] = useState("");

  // Funktion zum Weiterverarbeiten der Daten, wenn "Submit" gedrückt wird
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The values entered are: ${FirstName} ${LastName} ${EmployeeID} ${Responsibility} ${WorkingHours} ${Teams} `);
  }
  
  return (
    // JSX Code zum Erstellen der Seite
    <Container>
      <GreyArea>
        <Title>Create employee</Title>
        {/* Erstellen der für die Eingabe benötigter Textboxen */}
        <form onSubmit={handleSubmit}>
            <Row1>
            <input type="text" value={FirstName} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
            <input type="text" value={LastName} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
            </Row1>

            <Row2>
            <input type="text" value={EmployeeID} placeholder="Employee ID" onChange={(e) => setEmployeeID(e.target.value)}/>
            <input type="text" value={Responsibility} placeholder="Responsibility in the Team(s)" onChange={(e) => setResponsibility(e.target.value)}/>
            </Row2>

            <Row3>
            <input type="text" value={WorkingHours} placeholder="Working hours/week" onChange={(e) => setWorkingHours(e.target.value)}/>
            <input type="text" value={Teams} placeholder="Team(s)" onChange={(e) => setTeams(e.target.value)}/>
            </Row3>
          <input type="submit" />
      </form>
      </GreyArea>

    </Container>
  );
}

// Styles der benutzten JSX Komponenten
const Container = styled.div`
  display: flex;
  background-color: rgba(38,38,38,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;


const GreyArea = styled.div`
  width: 1108px;
  height: 628px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
  margin-top: 261px;
  margin-left: 406px;
`;

const Title = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 61px;
  width: 508px;
  font-size: 50px;
  text-align: center;
  margin-top: 38px;
  margin-left: 300px;
`;

const Row1 = styled.div`
  height: 54px;
  flex-direction: row;
  display: flex;
  margin-top: 65px;
  margin-left: 54px;
  margin-right: 88px;
`;

const Row2 = styled.div`
  height: 54px;
  flex-direction: row;
  display: flex;
  margin-top: 61px;
  margin-left: 54px;
  margin-right: 88px;
`;


const Row3 = styled.div`
  height: 54px;
  flex-direction: row;
  display: flex;
  margin-top: 55px;
  margin-left: 54px;
  margin-right: 88px;
`;

export default CreateEmployees;