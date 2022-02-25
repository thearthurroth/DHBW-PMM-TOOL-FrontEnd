import React, { Component } from "react";
import styled, { css } from "styled-components";

function Projektansicht(props) {
  return (
    <Container>
      <Image1StackStack>
        <Image1Stack>
          <Rect1>
            <Image2Row>
              <Button1>
                <ButtonOverlay>
                  <Logout1>Logout</Logout1>
                </ButtonOverlay>
              </Button1>
            </Image2Row>
          </Rect1>
        </Image1Stack>
      </Image1StackStack>
      <ProjectNameColumnRow>
        <ProjectNameColumn>
          <ProjectName>Project name</ProjectName>
          <LoremIpsum>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </LoremIpsum>
          <Rect2>
            <ProjectMembers2>Project members</ProjectMembers2>
            <Rect3></Rect3>
          </Rect2>
        </ProjectNameColumn>
        <Rect4>
          <ProjectMembers1>Project members</ProjectMembers1>
          <ScrollAreaStack>
            <ScrollArea>
              <Rect6>
                <Rect5ColumnRow>
                  <Rect5Column>
                    <Rect5>
                      <WorkPackage1>Work package 1</WorkPackage1>
                    </Rect5>
                    <Start>
                      Start Date:
                      <br />
                      <br />
                      End Date:
                    </Start>
                  </Rect5Column>
                  <LoremIpsum2>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. 
                  </LoremIpsum2>
                </Rect5ColumnRow>
              </Rect6>
              <Rect7>
                <WorkPackage2StackColumnRow>
                  <WorkPackage2StackColumn>
                    <WorkPackage2Stack>
                      <WorkPackage2>Work package 1</WorkPackage2>
                      <Rect8></Rect8>
                      <WorkPackage22>Work package 2</WorkPackage22>
                    </WorkPackage2Stack>
                    <Start1>
                      Start Date:
                      <br />
                      <br />
                      End Date:
                    </Start1>
                  </WorkPackage2StackColumn>
                  <LoremIpsum3>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. 
                  </LoremIpsum3>
                </WorkPackage2StackColumnRow>
              </Rect7>
              <WorkPackage23Stack>
                <WorkPackage23>Work package 2</WorkPackage23>
                <Rect9></Rect9>
                <Rect10>
                  <Rect11StackColumnRow>
                    <Rect11StackColumn>
                      <Rect11Stack>
                        <Rect11></Rect11>
                        <WorkPackage3>Work package 3</WorkPackage3>
                      </Rect11Stack>
                      <Start2>
                        Start Date: 
                        <br />
                        <br />
                        End Date:
                      </Start2>
                    </Rect11StackColumn>
                    <LoremIpsum4>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua.
                    </LoremIpsum4>
                  </Rect11StackColumnRow>
                </Rect10>
              </WorkPackage23Stack>
            </ScrollArea>
            <Vertical></Vertical>
          </ScrollAreaStack>
        </Rect4>
      </ProjectNameColumnRow>
      <GanttStack>
        <Gantt></Gantt>
        <GanttChart>GANTT Chart</GanttChart>
      </GanttStack>
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
const Image1 = styled.img`
  left: 22px;
  width: 65px;
  height: 94px;
  position: absolute;
  transform: rotate(-38.00deg);
  opacity: 0.68;
  top: 4px;
  object-fit: contain;
`;

const Rect1 = styled.div`
  top: 0px;
  height: 98px;
  position: absolute;
  background-color: rgba(1,210,142,1);
  left: 0px;
  right: 0px;
  flex-direction: row;
  display: flex;
`;

const Image2 = styled.img`
  width: 100%;
  height: 94px;
  transform: rotate(-38.00deg);
  opacity: 0.68;
  object-fit: contain;
`;

const Welcome2 = styled.span`
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

const Button1 = styled.div`
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

const Image2Row = styled.div`
  height: 94px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 18px;
  margin-left: 22px;
  margin-top: 4px;
`;

const Image1Stack = styled.div`
  top: 0px;
  left: 0px;
  height: 98px;
  position: absolute;
  right: 0px;
`;

const Welcome1 = styled.span`
  font-family: Ubuntu;
  top: 38px;
  left: 98px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 17px;
  width: 128px;
  text-align: center;
  font-size: 25px;
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

const LoremIpsum = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 174px;
  width: 723px;
  font-size: 20px;
  margin-top: 24px;
`;

const Rect2 = styled.div`
  width: 623px;
  height: 340px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
  margin-top: 30px;
`;

const ProjectMembers2 = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 30px;
  text-align: center;
  margin-top: 23px;
  margin-left: 205px;
`;

const Rect3 = styled.div`
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

const Rect4 = styled.div`
  width: 820px;
  height: 621px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
  margin-left: 139px;
`;

const ProjectMembers1 = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 30px;
  text-align: center;
  margin-top: 19px;
  margin-left: 293px;
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

const Rect6 = styled.div`
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

const Rect5 = styled.div`
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

const Start = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 223px;
  margin-top: 43px;
  margin-left: 17px;
`;

const Rect5Column = styled.div`
  width: 256px;
  flex-direction: column;
  display: flex;
  margin-bottom: 14px;
`;

const LoremIpsum2 = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 216px;
  width: 291px;
  margin-left: 24px;
`;

const Rect5ColumnRow = styled.div`
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

const WorkPackage22 = styled.span`
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

const Start1 = styled.span`
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

const LoremIpsum3 = styled.span`
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

const WorkPackage23 = styled.span`
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

const Rect11Stack = styled.div`
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

const LoremIpsum4 = styled.span`
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

const WorkPackage23Stack = styled.div`
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

const Gantt = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 46px;
  width: 767px;
`;

const GanttChart = styled.span`
  font-family: Ubuntu;
  top: 0px;
  left: 54px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 53px;
  width: 285px;
  font-size: 40px;
`;

const GanttStack = styled.div`
  width: 767px;
  height: 53px;
  margin-top: 45px;
  margin-left: 55px;
  position: relative;
`;

export default Projektansicht;