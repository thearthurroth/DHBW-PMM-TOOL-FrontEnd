import React, { Component } from "react";
import styled, { css } from "styled-components";

function EditProject(props) {
  return (
    <Container>
      <Rect2Row>
        <Rect2>
          <ProjectName>Project name</ProjectName>
          <Rect4>
            <ScrollArea2>
              <LoremIpsum7>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </LoremIpsum7>
            </ScrollArea2>
          </Rect4>
        </Rect2>
        <Rect12Column>
          <Rect12>
            <WorkPackages>Work packages</WorkPackages>
            <ScrollArea3>
              <Rect5>
                <Rect6ColumnRow>
                  <Rect6Column>
                    <Rect6>
                      <WorkPackage1>Work package 1</WorkPackage1>
                    </Rect6>
                    <Start1>
                      Start Date:
                      <br/>
                      <br/>
                      End Date:
                    </Start1>
                  </Rect6Column>
                  <LoremIpsum8>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo
                  </LoremIpsum8>
                </Rect6ColumnRow>
              </Rect5>
              <Rect7>
                <WorkPackage2StackColumnRow>
                  <WorkPackage2StackColumn>
                    <WorkPackage2Stack>
                      <WorkPackage2>Work package 1</WorkPackage2>
                      <Rect8></Rect8>
                      <WorkPackage3>Work package 2</WorkPackage3>
                    </WorkPackage2Stack>
                    <Start2>
                      Start Date:
                      <br/>
                      <br/>
                      End Date:
                    </Start2>
                  </WorkPackage2StackColumn>
                  <LoremIpsum9>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  </LoremIpsum9>
                </WorkPackage2StackColumnRow>
              </Rect7>
              <WorkPackage4Stack>
                <WorkPackage4>Work package 2</WorkPackage4>
                <Rect9></Rect9>
                <Rect10>
                  <Rect11StackColumnRow>
                    <Rect11StackColumn>
                      <Rect11Stack>
                        <Rect11></Rect11>
                        <WorkPackage5>Work package 3</WorkPackage5>
                      </Rect11Stack>
                      <Start3>
                        Start Date:
                        <br/>
                        <br/>
                        End Date:
                      </Start3>
                    </Rect11StackColumn>
                    <LoremIpsum10>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    </LoremIpsum10>
                  </Rect11StackColumnRow>
                </Rect10>
              </WorkPackage4Stack>
            </ScrollArea3>
          </Rect12>
          <Rect13>
            <AssignedTeamRow>
              <AssignedTeam>Assigned Team</AssignedTeam>
              <Search1 placeholder="    Team ID"></Search1>
            </AssignedTeamRow>
          </Rect13>
          <Save>
            <button>Save</button>
        </Save> 
        </Rect12Column>
      </Rect2Row>
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

const Rect4 = styled.div`
  width: 646px;
  height: 664px;
  background-color: rgba(38,38,38,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
  margin-top: 30px;
  margin-left: 62px;
`;

const ScrollArea2 = styled.div`
  overflow-y: scroll;
  width: 586px;
  height: 642px;
  background-color: rgba(38,38,38,1);
  flex-direction: column;
  display: flex;
  margin-top: 7px;
  margin-left: 27px;
`;

const LoremIpsum7 = styled.span`
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

const Rect12 = styled.div`
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

const ScrollArea3 = styled.div`
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

const Rect5 = styled.div`
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

const Rect6 = styled.div`
  width: 256px;
  height: 102px;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
`;

const WorkPackage1 = styled.span`
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

const Start1 = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 223px;
  margin-top: 43px;
  margin-left: 17px;
`;

const Rect6Column = styled.div`
  width: 256px;
  flex-direction: column;
  display: flex;
  margin-bottom: 14px;
`;

const LoremIpsum8 = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 216px;
  width: 291px;
  margin-left: 24px;
`;

const Rect6ColumnRow = styled.div`
  height: 216px;
  flex-direction: row;
  display: flex;
  margin-top: 28px;
  margin-left: 31px;
  margin-right: 21px;
`;

const Rect7 = styled.div`
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

const WorkPackage2 = styled.span`
  font-family: Ubuntu;
  top: 36px;
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

const Rect8 = styled.div`
  top: 0px;
  left: 0px;
  width: 256px;
  height: 102px;
  position: absolute;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
`;

const WorkPackage3 = styled.span`
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

const WorkPackage2Stack = styled.div`
  width: 256px;
  height: 103px;
  position: relative;
`;

const Start2 = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 223px;
  margin-top: 42px;
  margin-left: 17px;
`;

const WorkPackage2StackColumn = styled.div`
  width: 256px;
  flex-direction: column;
  display: flex;
  margin-bottom: 14px;
`;

const LoremIpsum9 = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 216px;
  width: 291px;
  margin-left: 24px;
`;

const WorkPackage2StackColumnRow = styled.div`
  height: 216px;
  flex-direction: row;
  display: flex;
  margin-top: 28px;
  margin-left: 31px;
  margin-right: 21px;
`;

const WorkPackage4 = styled.span`
  font-family: Ubuntu;
  top: 65px;
  left: 48px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 66px;
  width: 223px;
  font-size: 25px;
  text-align: center;
`;

const Rect9 = styled.div`
  top: 28px;
  left: 31px;
  width: 256px;
  height: 102px;
  position: absolute;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
`;

const Rect10 = styled.div`
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

const Rect11 = styled.div`
  top: 0px;
  left: 0px;
  width: 256px;
  height: 102px;
  position: absolute;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
`;

const WorkPackage5 = styled.span`
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

const Rect11Stack = styled.div`
  width: 256px;
  height: 103px;
  position: relative;
`;

const Start3 = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 223px;
  margin-top: 37px;
  margin-left: 17px;
`;

const Rect11StackColumn = styled.div`
  width: 256px;
  flex-direction: column;
  display: flex;
  margin-top: 5px;
  margin-bottom: 14px;
`;

const LoremIpsum10 = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 216px;
  width: 291px;
  margin-left: 24px;
`;

const Rect11StackColumnRow = styled.div`
  height: 216px;
  flex-direction: row;
  display: flex;
  margin-top: 28px;
  margin-left: 31px;
  margin-right: 21px;
`;

const WorkPackage4Stack = styled.div`
  width: 623px;
  height: 260px;
  margin-top: 48px;
  margin-left: 71px;
  flex: 0 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Rect13 = styled.div`
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

const Search1 = styled.input`
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

const Button2 = styled.div`
  width: 175px;
  height: 84px;
  background-color: #E6E6E6;
  margin-top: 26px;
  margin-left: 645px;
  border: none;
`;

const Rect12Column = styled.div`
  width: 820px;
  flex-direction: column;
  display: flex;
  margin-left: 121px;
`;

const Rect2Row = styled.div`
  height: 857px;
  flex-direction: row;
  display: flex;
  margin-top: 167px;
  margin-left: 74px;
  margin-right: 140px;
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