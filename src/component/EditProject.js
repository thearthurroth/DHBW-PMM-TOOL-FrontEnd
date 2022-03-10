import React from "react";
import styled from "styled-components";

function EditProject(props) {
  return (
    // JSX Code zum Erstellen der Seite
    <Container>
      <Background>

        <ContainerOfProject>
          <ProjectName>Project name</ProjectName>
          <DarkGreyAreaOfProject>
            <ScrollAreaOfProject>
              <AboutofProject>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </AboutofProject>
            </ScrollAreaOfProject>
          </DarkGreyAreaOfProject>
        </ContainerOfProject>

        <ContainerOfWorkPackageS>
          <BoxOfWorkPackageS>
            <WorkPackages>Work packages</WorkPackages>
            <ScrollAreaOfWorkPack>

              <ContainerOfWorkPackage>
                <PackageColumnRow>
                  <PackageColumn>
                    <TitleOfWorkPackage>
                      <WorkPackage>Work package 1</WorkPackage>
                    </TitleOfWorkPackage>
                    <DateofWorkPack>
                      Start Date:
                      <br/>
                      <br/>
                      End Date:
                    </DateofWorkPack>
                  </PackageColumn>
                  <AboutOfWorkPack>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo
                  </AboutOfWorkPack>
                </PackageColumnRow>
              </ContainerOfWorkPackage>

              <ContainerOfWorkPackage>
                <PackageColumnRow>
                  <PackageColumn>
                    <TitleOfWorkPackage>
                      <WorkPackage>Work package 2</WorkPackage>
                    </TitleOfWorkPackage>
                    <DateofWorkPack>
                      Start Date:
                      <br/>
                      <br/>
                      End Date:
                    </DateofWorkPack>
                  </PackageColumn>
                  <AboutOfWorkPack>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duoeirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duoeirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo.
                  </AboutOfWorkPack>
                </PackageColumnRow>
              </ContainerOfWorkPackage>

            </ScrollAreaOfWorkPack>
          </BoxOfWorkPackageS>

          <ContainerofAssignedTeam>
            <AssignedTeamRow>
              <AssignedTeam>Assigned Team</AssignedTeam>
              <Search placeholder="    Team ID"></Search>
            </AssignedTeamRow>
          </ContainerofAssignedTeam>

          <Save>
            <button>Save</button>
          </Save>

        </ContainerOfWorkPackageS>
      </Background>

      <OverLay>
        <ButtonOfLogout>
          <ButtonOverlay>
            <Logout>Logout</Logout>
          </ButtonOverlay>
        </ButtonOfLogout>
      </OverLay>

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
const ContainerOfProject = styled.div`
  width: 765px;
  height: 845px;
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
  margin-left: 75px;
`;

const DarkGreyAreaOfProject = styled.div`
  width: 646px;
  height: 664px;
  background-color: rgba(38,38,38,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
  margin-top: 30px;
  margin-left: 62px;
`;

const ScrollAreaOfProject = styled.div`
  overflow-y: scroll;
  width: 586px;
  height: 642px;
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
  margin-left: 272px;
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
  margin-top: 10px;
`;

const Search = styled.input`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 54px;
  width: 425px;
  background-color: rgba(230, 230, 230,0.32);
  border-radius: 24px;
  font-size: 25px;
  margin-left: 75px;
  border: none;
  background: transparent;
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

const OverLay = styled.div`
  height: 98px;
  background-color: rgba(1,210,142,1);
  flex-direction: column;
  display: flex;
  margin-top: -1024px;
`;

const ButtonOfLogout = styled.div`
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
`;

const Save = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 37px;
  width: 197px;
  font-size: 30px;
  text-align: center;
  margin-top: 50px;
  margin-left: 675px;
`;

export default EditProject;