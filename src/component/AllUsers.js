import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

function AllUsers(props) {
  // Variablen, die für die Inhalte der Seite verantwortlich sind
  // Bei Verknüpftem Backend werden die Inhalte durch API Aufrufe gegeben
  const Message1Name = "Anmeldung";
  const Message1Email = "Hans.Meier@gmx.de";
  const Message1Date = "09.05.2022";
  const Message1Description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magnaaliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum. Stet clita kasd gubergren, nosea takimata sanctus est Lorem ipsum dolor sit amet.";

  const Message2Name = "Bug";
  const Message2Email = "Peter.Fritz@Hensoldt.de";
  const Message2Date = "09.04.2022";
  const Message2Description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magnaaliquyam erat, sed diam voluptua. At vero eos et accusam etjusto duo dolores et ea rebum.";

  const Message3Name = "Sicherheitslücke";
  const Message3Email = "Walter.Fritz@Airbus.de";
  const Message3Date = "01.04.2022";
  const Message3Description = "Lorem ipsum dolor sit amet.";
  
  // Variablen um die eingegebenen Werte in UseStates zu speichern
  const [EMailAdressCreate, setEMailAdressCreate] = useState("");
  const [PasswordCreate, setPasswordCreate] = useState("");

  
  // Funktion zum Weiterverarbeiten der Daten, wenn "Submit" gedrückt wird
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The values entered are: ${EMailAdressCreate} ${PasswordCreate}`);
  }
  
  const navigate = useNavigate()
  
  return (
    // JSX Code zur Erzeugung der Page
    <Container>
      <Rect2Row>
        {/* JSX Code zur Erstellung der Tabelle auf der linken Hälfte der Anwendung */}
        <LightGreyAreaTable>
          <UsersRow>
            <Users>Users:</Users>
          </UsersRow>
          <RectangleStack>
            <DarkGrayArea>
            <GreenRectangle>
              <Comlumns>
                <UserId>User ID</UserId>
                <EMail>E - Mail</EMail>
                <Password>Password</Password>
              </Comlumns>
              </GreenRectangle>
            </DarkGrayArea>
          </RectangleStack>
        </LightGreyAreaTable>
        
        
        <Rect6Column>
          {/* JSX Code zur Erzeugung des Eingabefeldes, mit dem ein neuer Nutzer erstellt werden kann */}
          <LightGreyAreaCreate>
          <UsersRow>
            <CreateUser>Create Employee</CreateUser>
          </UsersRow>
          {/* Form erstellt beiden benötigten Eingabefelder + Submit Button */}
          <form onSubmit={handleSubmit}>
            <Row1>
            <input type="text" value={EMailAdressCreate} placeholder="E - Mail Adress" onChange={(e) => setEMailAdressCreate(e.target.value)}/>
            </Row1>

            <Row2>
            <input type="text" value={PasswordCreate} placeholder="Password" onChange={(e) => setPasswordCreate(e.target.value)}/>
            </Row2>
          <input type="submit" />
      </form>
          </LightGreyAreaCreate>
          
          <InboxArea>
            <LightGreyAreaScroll>
              {/* Scrollable View über die Inbox */}
              <ScrollArea>
                
                <ScrollelementArea1>
                  <Scrollelement1Left>
                    <Scrollelement1Right>
                      <Scrollelement1TitleArea>
                        {/* Beschreibung einer Nachricht in der Inbox(äquivalent bei den anderen) */}
                        <Scrollelement1Title>{Message1Name}</Scrollelement1Title>
                      </Scrollelement1TitleArea>
                      <Scrollelement1Data>
                        E - Mail of sender:
                        {Message1Email}
                        <br />
                        Date:
                        {Message1Date}
                      </Scrollelement1Data>
                    </Scrollelement1Right>
                    <Scrollelement1Description>
                    {Message1Description}
                    </Scrollelement1Description>
                  </Scrollelement1Left>
                </ScrollelementArea1>
                
                <ScrollElement2Area>
                  <Scrollelement2Left>
                    <Scrollelement2Right>
                      <Scrollelement2TitleArea>
                        <Scrollelement2TitleRectangle></Scrollelement2TitleRectangle>
                        {/* Beschreibung einer Nachricht in der Inbox(äquivalent bei den anderen) */}
                        <Scrollelement2Title>{Message2Name}</Scrollelement2Title>
                      </Scrollelement2TitleArea>
                      <Scrollelement2Data>
                        E - Mail of sender:
                        {Message2Email}
                        <br />
                        Date:
                        {Message2Date}
                      </Scrollelement2Data>
                    </Scrollelement2Right>
                    <Scrollelement2Description>
                    {Message2Description}
                    </Scrollelement2Description>
                  </Scrollelement2Left>
                </ScrollElement2Area>
                
                
                <Scrollelement3Area>
                  <Scrollelement3TitleRectangle></Scrollelement3TitleRectangle>
                  <Scrollelement3TitleArea>
                    <Scrollelement3Left>
                      <Scrollelement3Right>
                        <Rect14>
                          {/* Beschreibung einer Nachricht in der Inbox(äquivalent bei den anderen) */}
                          <Scrollelement3Title>{Message3Name}</Scrollelement3Title>
                        </Rect14>
                        <Scrollelement3Data>
                          E - Mail of sender:
                          {Message3Email}
                          <br />
                          Date:
                          {Message3Date}
                        </Scrollelement3Data>
                      </Scrollelement3Right>
                      <Scrollelement3Description>{Message3Description}</Scrollelement3Description>
                    </Scrollelement3Left>
                  </Scrollelement3TitleArea>
                </Scrollelement3Area>
              
              </ScrollArea>
            </LightGreyAreaScroll>
            <Inbox>Inbox</Inbox>
          </InboxArea>
        </Rect6Column>
      </Rect2Row>
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

const LightGreyAreaTable = styled.div`
  width: 765px;
  height: 845px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
`;

const Users = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 50px;
  text-align: center;
`;

const UsersRow = styled.div`
  height: 63px;
  flex-direction: row;
  display: flex;
  margin-top: 43px;
  margin-left: 75px;
  margin-right: 46px;
`;

const DarkGrayArea = styled.div`
  top: 0px;
  left: 3px;
  width: 646px;
  height: 664px;
  position: absolute;
  background-color: rgba(38,38,38,1);
  border-radius: 14px;
  flex-direction: row;
  display: flex;
`;

const UserId = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 137px;
  font-size: 17px;
`;

const EMail = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 137px;
  font-size: 17px;
  margin-left: 62px;
`;

const Password = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 137px;
  font-size: 17px;
  margin-left: 117px;
`;

const Comlumns = styled.div`
  height: 57px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 12px;
  margin-left: 44px;
  margin-top: 13px;
`;

const GreenRectangle = styled.div`
  top: 0px;
  left: 0px;
  width: 648px;
  height: 54px;
  position: absolute;
  background-color: rgba(1,210,142,1);
  border-radius: 14px;
  opacity: 0.74;
`;

const RectangleStack = styled.div`
  width: 649px;
  height: 664px;
  margin-top: 25px;
  margin-left: 59px;
  position: relative;
`;

const LightGreyAreaCreate = styled.div`
  width: 793px;
  height: 340px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
  margin-left: 33px;
`;

const CreateUser = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 37px;
  width: 251px;
  font-size: 30px;
  text-align: center;
  margin-top: 15px;
`;

const LightGreyAreaScroll = styled.div`
  top: 0px;
  left: 33px;
  width: 793px;
  height: 464px;
  position: absolute;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
`;

const ScrollArea = styled.div`
  overflow-y: scroll;
  width: 728px;
  height: 349px;
  background-color: rgba(38,38,38,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
  margin-top: 95px;
  margin-left: 39px;
`;

const ScrollelementArea1 = styled.div`
  width: 623px;
  height: 199px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
  margin-top: 47px;
  margin-left: 52px;
  flex: 0 0 auto;
`;

const Scrollelement1TitleArea = styled.div`
  width: 256px;
  height: 78px;
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
  height: 50px;
  width: 223px;
  font-size: 25px;
  text-align: center;
  margin-top: 28px;
  margin-left: 16px;
`;

const Scrollelement1Data = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 44px;
  width: 223px;
  margin-top: 33px;
  margin-left: 16px;
`;

const Scrollelement1Right = styled.div`
  width: 256px;
  flex-direction: column;
  display: flex;
  margin-bottom: 11px;
`;

const Scrollelement1Description = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 166px;
  width: 291px;
  margin-left: 24px;
`;

const Scrollelement1Left = styled.div`
  height: 166px;
  flex-direction: row;
  display: flex;
  margin-top: 21px;
  margin-left: 32px;
  margin-right: 20px;
`;

const ScrollElement2Area = styled.div`
  width: 623px;
  height: 207px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
  margin-top: 29px;
  margin-left: 52px;
  flex: 0 0 auto;
`;

const Scrollelement2TitleRectangle = styled.div`
  top: 0px;
  left: 0px;
  width: 256px;
  height: 81px;
  position: absolute;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
`;

const Scrollelement2Title = styled.span`
  font-family: Ubuntu;
  top: 30px;
  left: 16px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 52px;
  width: 223px;
  font-size: 25px;
  text-align: center;
`;

const Scrollelement2TitleArea = styled.div`
  width: 256px;
  height: 82px;
  position: relative;
`;

const Scrollelement2Data = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 46px;
  width: 223px;
  margin-top: 30px;
  margin-left: 16px;
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
  height: 172px;
  width: 291px;
  margin-left: 24px;
`;

const Scrollelement2Left = styled.div`
  height: 172px;
  flex-direction: row;
  display: flex;
  margin-top: 22px;
  margin-left: 32px;
  margin-right: 20px;
`;

const Scrollelement3TitleRectangle = styled.div`
  top: 23px;
  left: 32px;
  width: 256px;
  height: 84px;
  position: absolute;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
`;

const Scrollelement3TitleArea = styled.div`
  top: 0px;
  left: 0px;
  width: 623px;
  height: 214px;
  position: absolute;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
`;

const Rect14 = styled.div`
  width: 256px;
  height: 84px;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
`;

const Scrollelement3Title = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 54px;
  width: 223px;
  font-size: 25px;
  text-align: center;
  margin-top: 30px;
  margin-left: 16px;
`;

const Scrollelement3Data = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 47px;
  width: 223px;
  margin-top: 30px;
  margin-left: 16px;
`;

const Scrollelement3Right = styled.div`
  width: 256px;
  flex-direction: column;
  display: flex;
  margin-top: 4px;
  margin-bottom: 12px;
`;

const Scrollelement3Description = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 177px;
  width: 291px;
  margin-left: 24px;
`;

const Scrollelement3Left = styled.div`
  height: 177px;
  flex-direction: row;
  display: flex;
  margin-top: 23px;
  margin-left: 32px;
  margin-right: 20px;
`;

const Scrollelement3Area = styled.div`
  width: 623px;
  height: 214px;
  margin-top: 27px;
  margin-left: 52px;
  flex: 0 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Inbox = styled.span`
  font-family: Ubuntu;
  top: 41px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 37px;
  width: 251px;
  font-size: 30px;
  text-align: center;
`;

const InboxArea = styled.div`
  width: 826px;
  height: 464px;
  margin-top: 41px;
  position: relative;
`;

const Rect6Column = styled.div`
  width: 826px;
  flex-direction: column;
  display: flex;
  margin-left: 121px;
`;

const Rect2Row = styled.div`
  height: 845px;
  flex-direction: row;
  display: flex;
  margin-top: 81px;
  margin-left: 74px;
  margin-right: 134px;
`;

const Row1 = styled.div`
  height: 54px;
  flex-direction: row;
  display: flex;
  margin-top: auto;
  margin-left: -275px;
  margin-right: auto;
`;

const Row2 = styled.div`
  height: 54px;
  flex-direction: row;
  display: flex;
  margin-top: auto;
  margin-left: -275px;
  margin-right: auto;
`;

export default AllUsers;