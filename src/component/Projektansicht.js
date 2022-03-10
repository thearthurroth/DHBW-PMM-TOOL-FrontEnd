import React from "react";
import styled from "styled-components";

function Projektansicht(props) {
  // Variablen, die für die Inhalte der Seite verantwortlich sind
  // Bei Verknüpftem Backend werden die Inhalte durch API Aufrufe gegeben
  const titleText = "Project title";
  const bodyText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duo doloreset ea rebum. Stet clita kasd gubergren, no sea takimata sanctus estLorem ipsum dolor sit amet.";

  const Workpackage1name = "Documentation";
  const Workpackage1start = "09.03.2022";
  const Workpackage1end = "09.05.2022";
  const Workpackage1description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magnaaliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, nosea takimata sanctus est Lorem ipsum dolor sit amet.";

  const Workpackage2name = "Implementation";
  const Workpackage2start = "15.04.2022";
  const Workpackage2end = "03.07.2022";
  const Workpackage2description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magnaaliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd guberg.";

  const Workpackage3name = "Verifikation";
  const Workpackage3start = "08.07.2022";
  const Workpackage3end = "05.10.2022";
  const Workpackage3description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, guberg.";

  return (
    <Container>
      <Image1StackStack>
      </Image1StackStack>
      <ProjectNameColumnRow>

        {/* Block Titel und Projektbeschreibung */}
        <ProjectNameColumn>
          <ProjectName>{titleText}</ProjectName>
          <ProjectDescription>{bodyText}</ProjectDescription>

          {/* Tabelle für Projektmitglieder */}
          <ProjectmembersArea>
            <ProjectMembers>Project members</ProjectMembers>
            <ProjectMembersTable></ProjectMembersTable>
          </ProjectmembersArea>
        </ProjectNameColumn>

        {/* Scrollable View über die Arbeitspakete */}
        <WorkPackagesArea>
          <WorkPackages>Workpackages</WorkPackages>
          <ScrollAreaStack>
            <ScrollArea>
              
              <Scrollelement1Area>
                <Scrollelement1Left>
                  <Scrollelement1Right>
                    <Scrollelement1TitleArea>
                      {/* Beschreibung eines Arbeitspaketes (äquivalent bei den anderen) */}
                      <Scrollelement1Title>{Workpackage1name}</Scrollelement1Title>
                    </Scrollelement1TitleArea>
                    <Scrollelement1Date>
                      {/* Start und Enddaten des Arbeispaketes */}
                      Start Date: 
                      {Workpackage1start}
                      <br />
                      <br />
                      End Date: 
                      {Workpackage1end}
                    </Scrollelement1Date>
                  </Scrollelement1Right>
                  <Scrollelement1Description>
                  {Workpackage1description}
                  </Scrollelement1Description>
                </Scrollelement1Left>
              </Scrollelement1Area>
                
                {/* Beschreibung eines Arbeitspaketes (äquivalent bei den anderen) */}
              <Scrollelement2Area>
                <Scrollelement2Left>
                  <Scrollelement2Right>
                    <Scrollelement2TitleArea>
                      <Scrollelement2TitleRectangle></Scrollelement2TitleRectangle>
                      <Scrollelement2Title>{Workpackage2name}</Scrollelement2Title>
                    </Scrollelement2TitleArea>
                    <Scrollelement2Date>
                      {/* Start und Enddaten des Arbeispaketes */}
                      Start Date:
                      {Workpackage2start}
                      <br />
                      <br />
                      End Date:
                      {Workpackage2end}
                    </Scrollelement2Date>
                  </Scrollelement2Right>
                  <Scrollelement2Description>
                    {Workpackage2description}
                  </Scrollelement2Description>
                </Scrollelement2Left>
              </Scrollelement2Area>
              
              {/* Beschreibung eines Arbeitspaketes (äquivalent bei den anderen) */} 
              <Scrollelement3Area>             
                <Scrollableelement3Rectangle>
                  <Scrollableelement3Left>
                    <Scrollableelement3Right>
                      <Scrollableelement3TitleArea>
                        <Scrollableelement3TitleRectangle></Scrollableelement3TitleRectangle>
                        <Scrollableelement3Title>{Workpackage3name}</Scrollableelement3Title>
                      </Scrollableelement3TitleArea>
                      <Scrollableelement3Date>
                        {/* Start und Enddaten des Arbeispaketes */}
                        Start Date:
                        {Workpackage3start}
                        <br />
                        <br />
                        End Date:
                        {Workpackage3end}
                      </Scrollableelement3Date>
                    </Scrollableelement3Right>
                    <Scrollableelement3Description>
                    {Workpackage3description}
                    </Scrollableelement3Description>
                  </Scrollableelement3Left>
                </Scrollableelement3Rectangle>
              
              </Scrollelement3Area>
            </ScrollArea>
            <Vertical></Vertical>
          </ScrollAreaStack>
        </WorkPackagesArea>
      </ProjectNameColumnRow>
    </Container>
  );
}

// Ab hier folgen die Styles der jeweiligen Komponenten
const Container = styled.div`
  display: flex;
  background-color: rgba(38,38,38,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Image1StackStack = styled.div`
  height: 98px;
  position: relative;
`;

const ProjectName = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 53px;
  width: 285px;
  font-size: 40px;
`;

const ProjectDescription = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 174px;
  width: 723px;
  font-size: 20px;
  margin-top: 24px;
`;

const ProjectmembersArea = styled.div`
  width: 623px;
  height: 340px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
  margin-top: 30px;
`;

const ProjectMembers = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 30px;
  text-align: center;
  margin-top: 23px;
  margin-left: 0px;
`;

const ProjectMembersTable = styled.div`
  width: 499px;
  height: 212px;
  background-color: rgba(38,38,38,1);
  border-radius: 14px;
  margin-top: 23px;
  margin-left: 62px;
`;

const ProjectNameColumn = styled.div`
  width: 723px;
  flex-direction: column;
  display: flex;
`;

const WorkPackagesArea = styled.div`
  width: 820px;
  height: 621px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
  margin-left: 139px;
`;

const WorkPackages = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 30px;
  text-align: center;
  margin-top: 19px;
  margin-left: 0px;
`;

const ScrollArea = styled.div`
  overflow-y: scroll;
  top: 0px;
  left: 27px;
  width: 764px;
  height: 498px;
  position: absolute;
  background-color: rgba(38,38,38,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
`;

const Scrollelement1Area = styled.div`
  width: 623px;
  height: 260px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
  margin-top: 68px;
  margin-left: 71px;
  flex: 0 0 auto;
`;

const Scrollelement1TitleArea = styled.div`
  width: 256px;
  height: 102px;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
`;

const Scrollelement1Title = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 66px;
  width: 223px;
  font-size: 25px;
  text-align: center;
  margin-top: 36px;
  margin-left: 17px;
`;

const Scrollelement1Date = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 223px;
  margin-top: 43px;
  margin-left: 17px;
`;

const Scrollelement1Right = styled.div`
  width: 256px;
  flex-direction: column;
  display: flex;
  margin-bottom: 14px;
`;

const Scrollelement1Description = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 216px;
  width: 291px;
  margin-left: 24px;
`;

const Scrollelement1Left = styled.div`
  height: 216px;
  flex-direction: row;
  display: flex;
  margin-top: 28px;
  margin-left: 31px;
  margin-right: 21px;
`;

const Scrollelement2Area = styled.div`
  width: 623px;
  height: 260px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
  margin-top: 48px;
  margin-left: 71px;
  flex: 0 0 auto;
`;


const Scrollelement2TitleRectangle = styled.div`
  top: 0px;
  left: 0px;
  width: 256px;
  height: 102px;
  position: absolute;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
`;

const Scrollelement2Title = styled.span`
  font-family: Ubuntu;
  top: 37px;
  left: 17px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 66px;
  width: 223px;
  font-size: 25px;
  text-align: center;
`;

const Scrollelement2TitleArea = styled.div`
  width: 256px;
  height: 103px;
  position: relative;
`;

const Scrollelement2Date = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 223px;
  margin-top: 42px;
  margin-left: 17px;
`;

const Scrollelement2Right = styled.div`
  width: 256px;
  flex-direction: column;
  display: flex;
  margin-bottom: 14px;
`;

const Scrollelement2Description = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 216px;
  width: 291px;
  margin-left: 24px;
`;

const Scrollelement2Left = styled.div`
  height: 216px;
  flex-direction: row;
  display: flex;
  margin-top: 28px;
  margin-left: 31px;
  margin-right: 21px;
`;


const Scrollableelement3Rectangle = styled.div`
  top: 0px;
  left: 0px;
  width: 623px;
  height: 260px;
  position: absolute;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
`;

const Scrollableelement3TitleRectangle = styled.div`
  top: 0px;
  left: 0px;
  width: 256px;
  height: 102px;
  position: absolute;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
`;

const Scrollableelement3Title = styled.span`
  font-family: Ubuntu;
  top: 37px;
  left: 17px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 66px;
  width: 223px;
  font-size: 25px;
  text-align: center;
`;

const Scrollableelement3TitleArea = styled.div`
  width: 256px;
  height: 103px;
  position: relative;
`;

const Scrollableelement3Date = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 223px;
  margin-top: 37px;
  margin-left: 17px;
`;

const Scrollableelement3Right = styled.div`
  width: 256px;
  flex-direction: column;
  display: flex;
  margin-top: 5px;
  margin-bottom: 14px;
`;

const Scrollableelement3Description = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 216px;
  width: 291px;
  margin-left: 24px;
`;

const Scrollableelement3Left = styled.div`
  height: 216px;
  flex-direction: row;
  display: flex;
  margin-top: 28px;
  margin-left: 31px;
  margin-right: 21px;
`;

const Scrollelement3Area = styled.div`
  width: 623px;
  height: 260px;
  margin-top: 48px;
  margin-left: 71px;
  flex: 0 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Vertical = styled.span`
  font-family: Roboto;
  top: 274px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const ScrollAreaStack = styled.div`
  width: 791px;
  height: 498px;
  margin-top: 46px;
  position: relative;
`;

const ProjectNameColumnRow = styled.div`
  height: 621px;
  flex-direction: row;
  display: flex;
  margin-top: 69px;
  margin-left: 98px;
  margin-right: 140px;
`;


export default Projektansicht;