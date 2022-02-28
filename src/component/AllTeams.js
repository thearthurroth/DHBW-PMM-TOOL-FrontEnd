import React, { Component } from "react";
import styled, { css } from "styled-components";

function AllTeams(props) {
  return (
    <Container>
      <Rect2Stack>
        <Rect2></Rect2>
        <Rect3>
          <TeamsRow>
            <Teams>Teams:</Teams>
            <Search placeholder="    Search"></Search>
          </TeamsRow>
          <Rect4Stack>
            <Rect4></Rect4>
            <TeamName>Team name</TeamName>
            <TeamId2>Team ID</TeamId2>
            <WorkPackages>Work packages</WorkPackages>
            <WorkTimeWeek>Work time / week</WorkTimeWeek>
            <Employees>Employees</Employees>
            <Projects>Projects</Projects>
          </Rect4Stack>
        </Rect3>
      </Rect2Stack>
      <Rect1>
        <Button1>
          <ButtonOverlay>
            <Logout1>Logout</Logout1>
          </ButtonOverlay>
        </Button1>
      </Rect1>
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
const Rect2 = styled.div`
  top: 131px;
  left: 62px;
  width: 1649px;
  height: 664px;
  position: absolute;
  background-color: rgba(38,38,38,1);
  border-radius: 14px;
`;

const Rect3 = styled.div`
  top: 0px;
  left: 0px;
  width: 1768px;
  height: 845px;
  position: absolute;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
`;

const Teams = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 50px;
  text-align: center;
`;

const Search = styled.input`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 70px;
  width: 371px;
  background-color: rgba(230, 230, 230,0.32);
  border-radius: 24px;
  font-size: 25px;
  margin-left: 1108px;
  border: none;
  background: transparent;
`;

const TeamsRow = styled.div`
  height: 70px;
  flex-direction: row;
  display: flex;
  margin-top: 43px;
  margin-left: 75px;
  margin-right: 57px;
`;

const Rect4 = styled.div`
  top: 0px;
  left: 0px;
  width: 1649px;
  height: 54px;
  position: absolute;
  background-color: rgba(1,210,142,1);
  border-radius: 14px;
  opacity: 0.74;
`;

const TeamName = styled.span`
  font-family: Ubuntu;
  top: 16px;
  left: 282px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 94px;
  font-size: 17px;
`;

const TeamId2 = styled.span`
  font-family: Ubuntu;
  top: 16px;
  left: 51px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 118px;
  font-size: 17px;
`;

const WorkPackages = styled.span`
  font-family: Ubuntu;
  top: 16px;
  left: 526px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 131px;
  font-size: 17px;
`;

const WorkTimeWeek = styled.span`
  font-family: Ubuntu;
  top: 16px;
  left: 1329px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 221px;
  font-size: 17px;
`;

const Employees = styled.span`
  font-family: Ubuntu;
  top: 16px;
  left: 803px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 94px;
  font-size: 17px;
`;

const Projects = styled.span`
  font-family: Ubuntu;
  top: 16px;
  left: 1100px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 94px;
  font-size: 17px;
`;

const Rect4Stack = styled.div`
  width: 1649px;
  height: 73px;
  margin-top: 18px;
  margin-left: 59px;
  position: relative;
`;

const Rect2Stack = styled.div`
  width: 1768px;
  height: 845px;
  margin-top: 179px;
  margin-left: 74px;
  position: relative;
`;

const Rect1 = styled.div`
  height: 98px;
  background-color: rgba(1,210,142,1);
  flex-direction: column;
  display: flex;
  margin-top: -1024px;
`;

const Button1 = styled.div`
  width: 207px;
  height: 70px;
  background-color: rgba(255,254,254,0.42);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
  margin-top: 16px;
  margin-left: 1695px;
  border: none;
`;

const Logout1 = styled.span`
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
`;

export default AllTeams;