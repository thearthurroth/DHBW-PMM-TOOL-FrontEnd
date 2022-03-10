import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

function AllProjects(props) {
  let { userId } = useParams()
  const navigate = useNavigate()
  return (
    // JSX Code zum Erstellen der Seite
    <Container>
      <LightGreyArea>

        <ProjectsRow>
          <Projects>Projects of {userId}: </Projects>
        </ProjectsRow>

        <DarkGreyArea>
          <ReactanglesStack>
            {/* Grünes Rechteck, das Spaltennamen beinhaltet */}
          <GreenRectangle>
          <ProjectIdRow>
              <ProjectId>Project ID</ProjectId>
              <Title>Title</Title>
              <Progress>Progress</Progress>
              <Team>Team</Team>
              <WorkPackages>Amount of work packages</WorkPackages>
            </ProjectIdRow>
          </GreenRectangle>
          </ReactanglesStack>
        </DarkGreyArea>

      </LightGreyArea>
    </Container>
  );
}

//Styles der jeweiligen Komponenten
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

const LightGreyArea = styled.div`
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
  font-size: 30px;
  text-align: center;
`;

const ProjectsRow = styled.div`
  height: 63px;
  flex-direction: row;
  display: flex;
  margin-top: 43px;
  margin-left: 75px;
  margin-right: 79px;
`;

const ReactanglesStack = styled.div`
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

const WorkPackages = styled.span`
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

const GreenRectangle = styled.div`
  top: 0px;
  left: 0px;
  width: 1634px;
  height: 54px;
  position: absolute;
  background-color: rgba(1,210,142,1);
  border-radius: 14px;
  opacity: 0.74;
`;

const DarkGreyArea = styled.div`
  width: 1634px;
  height: 664px;
  margin-top: 25px;
  margin-left: 59px;
  position: relative;
`;

export default AllProjects;