import React, { Component } from "react";
import styled, { css } from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

function AllProjects(props) {
  let { userId } = useParams()
  const navigate = useNavigate()
  return (
    <Container>
      <Rect1>
        <Button1 onClick={() =>{
            let link= '/';
            navigate(link)}}>
          <ButtonOverlay>
            <Logout1>Logout</Logout1>
          </ButtonOverlay>
        </Button1>
      </Rect1>
      <Rect2>
        <ProjectsRow>
          <Projects>Projects of + {userId}</Projects>
          <Search1 placeholder="    Search"></Search1>
        </ProjectsRow>
        <Rect4Stack>
          <Rect4>
            <ProjectIdRow>
              <ProjectId>Project ID</ProjectId>
              <Title>Title</Title>
              <Progress>Progress</Progress>
              <Team>Team</Team>
              <Password>Amount of work packages</Password>
            </ProjectIdRow>
          </Rect4>
          <Rect5></Rect5>
        </Rect4Stack>
      </Rect2>
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
const Rect1 = styled.div`
  height: 98px;
  background-color: rgba(1,210,142,1);
  flex-direction: column;
  display: flex;
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

const Rect2 = styled.div`
  width: 1765px;
  height: 845px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
  margin-top: 81px;
  margin-left: 74px;
`;

const Projects = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 50px;
  text-align: center;
`;

const Search1 = styled.input`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 63px;
  width: 305px;
  background-color: rgba(230, 230, 230,0.32);
  border-radius: 24px;
  font-size: 25px;
  margin-left: 1121px;
  border: none;
  background: transparent;
`;

const ProjectsRow = styled.div`
  height: 63px;
  flex-direction: row;
  display: flex;
  margin-top: 43px;
  margin-left: 75px;
  margin-right: 79px;
`;

const Rect4 = styled.div`
  top: 0px;
  left: 3px;
  width: 1631px;
  height: 664px;
  position: absolute;
  background-color: rgba(38,38,38,1);
  border-radius: 14px;
  flex-direction: row;
  display: flex;
`;

const ProjectId = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 137px;
  font-size: 17px;
`;

const Title = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 137px;
  font-size: 17px;
  margin-left: 181px;
`;

const Progress = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 137px;
  font-size: 17px;
  margin-left: 179px;
`;

const Team = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 137px;
  font-size: 17px;
  margin-left: 247px;
`;

const Password = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 214px;
  font-size: 17px;
  margin-left: 236px;
`;

const ProjectIdRow = styled.div`
  height: 57px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 6px;
  margin-left: 20px;
  margin-top: 14px;
`;

const Rect5 = styled.div`
  top: 0px;
  left: 0px;
  width: 1634px;
  height: 54px;
  position: absolute;
  background-color: rgba(1,210,142,1);
  border-radius: 14px;
  opacity: 0.74;
`;

const Rect4Stack = styled.div`
  width: 1634px;
  height: 664px;
  margin-top: 25px;
  margin-left: 59px;
  position: relative;
`;

export default AllProjects;