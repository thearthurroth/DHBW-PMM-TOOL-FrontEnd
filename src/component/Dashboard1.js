import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

function Dashboard1(props) {
  let { userId } = useParams()
  const navigate = useNavigate()
  return (
    <Container>
      <Rect>
        <Image1Row>
          <Image1 src={require("../grid-globe-png.png")}></Image1>
          <Welcome>Welcome, {userId} !</Welcome>
          <Button onClick={() =>{
            let link= '/';
            navigate(link)}}>
            <ButtonOverlay>
              <Logout>Logout</Logout>
            </ButtonOverlay>
          </Button>
        </Image1Row>
      </Rect>
      <Rect2Row>
        <Rect2>
          <RecentProjects>Recent projects</RecentProjects>
          <Rect16></Rect16>
          <Rect9Row>
              <CreateProject>
                <button>Create project</button>
              </CreateProject>

              <ManageProjects>
                <button onClick={() =>{
            let link= '/dashboard/projects/'+ userId;
            navigate(link)}}>Manage projects</button>
              </ManageProjects>
          </Rect9Row>
        </Rect2>
        <Rect6>
          <Rect17Row>
            <Rect17></Rect17>
            <Rect12Column>
                <CreateEmployee>
                    <button onClick={() =>{
            let link= '/dashboard/mitarbeiter/erstellen/'+ userId;
            navigate(link)}}>Create employee</button>
                </CreateEmployee>

                <ManageEmployees>
                  <button onClick={() =>{
            let link= '/dashboard/mitarbeiter/'+ userId;
            navigate(link)}}>Manage employees</button>
                </ManageEmployees>
            </Rect12Column>
          </Rect17Row>
        </Rect6>
      </Rect2Row>
      <Rect7Row>
        <Rect7>
          <Rect18Row>
          <Rect18></Rect18>
            <Rect14Column>
                <CreateTeam>
                  <button onClick={() =>{
            let link= '/dashboard/teams/erstellen/'+ userId;
            navigate(link)}}>Create Team</button>
                </CreateTeam>

                <ManageTeams>
                  <button onClick={() =>{
            let link= '/dashboard/teams/'+ userId;
            navigate(link)}}>Manage Teams</button>
                </ManageTeams>
            </Rect14Column>
          </Rect18Row>
        </Rect7>
        <Rect8>
            <CreateWorkPackage>
              <button>Create work package</button>
            </CreateWorkPackage>
        </Rect8>
      </Rect7Row>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(38,38,38,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Rect = styled.div`
  width: 1920px;
  height: 98px;
  background-color: rgba(1,210,142,1);
  flex-direction: row;
  display: flex;
  align-self: center;
`;

const Image1 = styled.img`
  width: 100%;
  height: 94px;
  transform: rotate(-38.00deg);
  opacity: 0.68;
  object-fit: contain;
`;

const Welcome = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 17px;
  width: 128px;
  text-align: center;
  font-size: 25px;
  margin-left: 11px;
  margin-top: 34px;
`;

const Button = styled.div`
  width: 207px;
  height: 70px;
  background-color: rgba(255,254,254,0.42);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
  margin-left: 1469px;
  margin-top: 12px;
  border: none;
`;

const Logout = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 37px;
  width: 197px;
  font-size: 30px;
  text-align: center;
  margin-top: 17px;
  margin-left: 5px;
  transform: rotate(-90.00deg);
`;

const Image1Row = styled.div`
  height: 94px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 18px;
  margin-left: 22px;
  margin-top: 4px;
`;

const Rect2 = styled.div`
  width: 623px;
  height: 340px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
`;

const RecentProjects = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 30px;
  text-align: center;
  margin-top: 23px;
  margin-left: 0px;
`;

const Rect16 = styled.div`
  width: 410px;
  height: 129px;
  background-color: rgba(38,38,38,1);
  border-radius: 14px;
  margin-top: 22px;
  margin-left: 62px;
`;

const Rect9 = styled.div`
  width: 222px;
  height: 90px;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
`;

const CreateProject = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 37px;
  width: 197px;
  font-size: 30px;
  margin-top: 24px;
  margin-left: 5px;
`;

const Rect10 = styled.div`
  width: 222px;
  height: 90px;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
  margin-left: 54px;
`;

const ManageProjects = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 28px;
  width: 197px;
  font-size: 30px;
  text-align: center;
  margin-top: 24px;
  margin-left: 15px;
`;

const Rect9Row = styled.div`
  height: 90px;
  flex-direction: row;
  display: flex;
  margin-top: 12px;
  margin-left: 62px;
  margin-right: 63px;
`;

const Rect6 = styled.div`
  width: 623px;
  height: 340px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
  margin-left: 197px;
`;

const Rect17 = styled.div`
  width: 323px;
  height: 222px;
  background-color: rgba(38,38,38,1);
  border-radius: 14px;
`;

const Rect12 = styled.div`
  width: 222px;
  height: 90px;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
`;

const CreateEmployee = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 37px;
  width: 197px;
  font-size: 30px;
  text-align: center;
  margin-top: 0px;
  margin-left: 12px;
`;

const Rect11 = styled.div`
  width: 222px;
  height: 90px;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
  margin-top: 42px;
`;

const ManageEmployees = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 37px;
  width: 190px;
  font-size: 30px;
  text-align: center;
  margin-top: 115px;
  margin-left: 12px;
`;

const Rect12Column = styled.div`
  width: 222px;
  flex-direction: column;
  display: flex;
  margin-left: 16px;
`;

const Rect17Row = styled.div`
  height: 222px;
  flex-direction: row;
  display: flex;
  margin-top: 58px;
  margin-left: 34px;
  margin-right: 28px;
`;

const Rect2Row = styled.div`
  height: 340px;
  flex-direction: row;
  display: flex;
  margin-top: 112px;
  margin-left: 239px;
  margin-right: 238px;
`;

const Rect7 = styled.div`
  width: 623px;
  height: 340px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
`;

const Rect18 = styled.div`
  width: 323px;
  height: 222px;
  background-color: rgba(38,38,38,1);
  border-radius: 14px;
`;

const Rect14 = styled.div`
  width: 222px;
  height: 90px;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
`;

const CreateTeam = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 37px;
  width: 197px;
  font-size: 30px;
  text-align: center;
  margin-top: 0px;
  margin-left: 12px;
`;

const Rect13 = styled.div`
  width: 222px;
  height: 90px;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
  margin-top: 42px;
`;

const ManageTeams = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 37px;
  width: 197px;
  font-size: 30px;
  text-align: center;
  margin-top: 135px;
  margin-left: 12px;
`;

const Rect14Column = styled.div`
  width: 222px;
  flex-direction: column;
  display: flex;
  margin-left: 18px;
`;

const Rect18Row = styled.div`
  height: 222px;
  flex-direction: row;
  display: flex;
  margin-top: 59px;
  margin-left: 28px;
  margin-right: 32px;
`;

const Rect8 = styled.div`
  width: 623px;
  height: 340px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
  margin-left: 197px;
`;

const Rect15 = styled.div`
  width: 222px;
  height: 90px;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
  margin-top: 47px;
  margin-left: 61px;
`;

const CreateWorkPackage = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 37px;
  width: 197px;
  font-size: 30px;
  text-align: center;
  margin-top: 50px;
  margin-left: 50px;
`;

const Rect7Row = styled.div`
  height: 340px;
  flex-direction: row;
  display: flex;
  margin-top: 66px;
  margin-left: 239px;
  margin-right: 238px;
`;

export default Dashboard1;