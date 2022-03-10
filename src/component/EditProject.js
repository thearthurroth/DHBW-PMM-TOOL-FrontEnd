import {React, useState} from "react";
import styled from "styled-components";

function EditProject(props) {
  // Variablen, die für die Inhalte der Seite verantwortlich sind
  // Bei Verknüpftem Backend werden die Inhalte durch API Aufrufe gegeben
  const ProjectDescription = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magnaaliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, no seatakimata sanctus est Lorem ipsum dolor sit amet.";
  
  const Workpackage1name = "Documentation";
  const Workpackage1start = "09.03.2022";
  const Workpackage1end = "09.05.2022";
  const Workpackage1description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magnaaliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, nosea takimata sanctus est Lorem ipsum dolor sit amet.";

  const Workpackage2name = "Implementation";
  const Workpackage2start = "15.04.2022";
  const Workpackage2end = "03.07.2022";
  const Workpackage2description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magnaaliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd guberg.";
   
  // Variablen um die eingegebenen Werte in UseStates zu speichern
  const [AssignedTeams, setAssignedTeams] = useState("");

  // Funktion zum Weiterverarbeiten der Daten, wenn "Submit" gedrückt wird
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The values entered are: ${AssignedTeams} `);
  }

  return (
    // JSX Code zum Erstellen der Seite
    <Container>
      <Background>

        {/* Beschreibung und Titel des jeweiligen Projektes */}
        <ContainerOfProject>
          <ProjectName>Project name</ProjectName>
          <DarkGreyAreaOfProject>
            <ScrollAreaOfProject>
              <AboutofProject>
                {ProjectDescription}
              </AboutofProject>
            </ScrollAreaOfProject>
          </DarkGreyAreaOfProject>
        </ContainerOfProject>

        {/* Arbeitspakete in der Scrollarea */}
        <ContainerOfWorkPackageS>
          <BoxOfWorkPackageS>
            <WorkPackages>Work packages</WorkPackages>
            <ScrollAreaOfWorkPack>

              <ContainerOfWorkPackage>
                <PackageColumnRow>
                  <PackageColumn>
                    <TitleOfWorkPackage>
                      <WorkPackage>{Workpackage1name}</WorkPackage>
                    </TitleOfWorkPackage>
                    <DateofWorkPack>
                      Start Date:
                      {Workpackage1start}
                      <br/>
                      <br/>
                      End Date:
                      {Workpackage1end}
                    </DateofWorkPack>
                  </PackageColumn>
                  <AboutOfWorkPack>
                  {Workpackage1description}
                  </AboutOfWorkPack>
                </PackageColumnRow>
              </ContainerOfWorkPackage>

              <ContainerOfWorkPackage>
                <PackageColumnRow>
                  <PackageColumn>
                    <TitleOfWorkPackage>
                      <WorkPackage>{Workpackage2name}</WorkPackage>
                    </TitleOfWorkPackage>
                    <DateofWorkPack>
                      Start Date:
                      {Workpackage2start}
                      <br/>
                      <br/>
                      End Date:
                      {Workpackage2end}
                    </DateofWorkPack>
                  </PackageColumn>
                  <AboutOfWorkPack>
                  {Workpackage2description}
                  </AboutOfWorkPack>
                </PackageColumnRow>
              </ContainerOfWorkPackage>

            </ScrollAreaOfWorkPack>
          </BoxOfWorkPackageS>

          {/* Textbox, die die Teams, die zugeorfnet sind, festlegt */}
          <ContainerofAssignedTeam>
            <AssignedTeamRow>
              <AssignedTeam>Assigned Teams</AssignedTeam>

              <form onSubmit={handleSubmit}>
                <Row>
                <input type="text" value={AssignedTeams} placeholder="" onChange={(e) => setAssignedTeams(e.target.value)}/>
                <input type="submit" />
                </Row>
              </form>

            </AssignedTeamRow>
          </ContainerofAssignedTeam>

        </ContainerOfWorkPackageS>
      </Background>

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

const ContainerOfProject = styled.div`
  width: 765px;
  height: 750px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
`;

const ProjectName = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 50px;
  text-align: center;
  margin-top: 44px;
  margin-left: 0px;
`;

const DarkGreyAreaOfProject = styled.div`
  width: 646px;
  height: 600px;
  background-color: rgba(38,38,38,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
  margin-top: 30px;
  margin-left: 62px;
`;

const ScrollAreaOfProject = styled.div`
  overflow-y: scroll;
  width: 600px;
  height: 600px;
  background-color: rgba(38,38,38,1);
  flex-direction: column;
  display: flex;
  margin-top: 7px;
  margin-left: 27px;
`;

const AboutofProject = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 1745px;
  width: 521px;
  font-size: 35px;
  margin-top: 44px;
  margin-left: 35px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
`;

const BoxOfWorkPackageS = styled.div`
  width: 820px;
  height: 621px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
`;

const WorkPackages = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 40px;
  text-align: center;
  margin-top: 32px;
  margin-left: 0px;
`;

const ScrollAreaOfWorkPack = styled.div`
  overflow-y: scroll;
  width: 764px;
  height: 498px;
  background-color: rgba(38,38,38,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
  margin-top: 20px;
  margin-left: 27px;
`;

const ContainerOfWorkPackage = styled.div`
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

const TitleOfWorkPackage = styled.div`
  width: 256px;
  height: 102px;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
`;

const WorkPackage = styled.span`
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

const DateofWorkPack = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 223px;
  margin-top: 43px;
  margin-left: 17px;
`;

const PackageColumn = styled.div`
  width: 256px;
  flex-direction: column;
  display: flex;
  margin-bottom: 14px;
`;

const AboutOfWorkPack = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 216px;
  width: 291px;
  margin-left: 24px;
`;

const PackageColumnRow = styled.div`
  height: 216px;
  flex-direction: row;
  display: flex;
  margin-top: 28px;
  margin-left: 31px;
  margin-right: 21px;
`;

const ContainerofAssignedTeam = styled.div`
  width: 820px;
  height: 92px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: row;
  display: flex;
  margin-top: 34px;
`;

const AssignedTeam = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 25px;
  text-align: center;
  margin-left: -40px;
  margin-top: 0px;
`;

const AssignedTeamRow = styled.div`
  height: 54px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 60px;
  margin-left: 55px;
  margin-top: 18px;
`;

const ContainerOfWorkPackageS = styled.div`
  width: 820px;
  flex-direction: column;
  display: flex;
  margin-left: 121px;
`;

const Background = styled.div`
  height: 857px;
  flex-direction: row;
  display: flex;
  margin-top: 167px;
  margin-left: 74px;
  margin-right: 140px;
`;

const Row = styled.div`
  height: 90px;
  flex-direction: row;
  display: flex;
  margin-top: -21px ;
  margin-left: auto;
  margin-right: auto;
`;

export default EditProject;