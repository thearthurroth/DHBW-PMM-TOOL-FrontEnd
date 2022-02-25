import React, { Component } from "react";
import styled, { css } from "styled-components";

function AllUsers(props) {
  return (
    <Container>
      <Rect1>
        <Button1>
          <ButtonOverlay>
            <Logout1>Logout</Logout1>
          </ButtonOverlay>
        </Button1>
      </Rect1>
      <Rect2Row>
        <Rect2>
          <UsersRow>
            <Users>Users</Users>
            <Search1 placeholder="    Search"></Search1>
          </UsersRow>
          <Rect4Stack>
            <Rect4>
              <UserIdRow>
                <UserId>User ID</UserId>
                <EMail>E - Mail</EMail>
                <Password>Password</Password>
              </UserIdRow>
            </Rect4>
            <Rect5></Rect5>
          </Rect4Stack>
        </Rect2>
        <Rect6Column>
          <Rect6>
            <CreateUser>Create User</CreateUser>
            <Search2 placeholder="    E - Mail"></Search2>
            <Search3Row>
              <Search3 placeholder="    Password"></Search3>
                <Create>
                <button>Create</button>
                </Create>
                
            </Search3Row>
          </Rect6>
          <Rect7Stack>
            <Rect7>
              <ScrollArea1>
                <Rect8>
                  <Rect9ColumnRow>
                    <Rect9Column>
                      <Rect9>
                        <Request1>Request 1</Request1>
                      </Rect9>
                      <Start1>
                        E - Mail of sender:
                        <br />
                        <br />
                        Date:
                      </Start1>
                    </Rect9Column>
                    <LoremIpsum1>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet
                    </LoremIpsum1>
                  </Rect9ColumnRow>
                </Rect8>
                <Rect10>
                  <WorkPackage2StackColumnRow>
                    <WorkPackage2StackColumn>
                      <WorkPackage2Stack>
                        <WorkPackage2>Work package 1</WorkPackage2>
                        <Rect11></Rect11>
                        <Request2>Request 2</Request2>
                      </WorkPackage2Stack>
                      <Start4>
                        E - Mail of sender:
                        <br />
                        <br />
                        Date:
                      </Start4>
                    </WorkPackage2StackColumn>
                    <LoremIpsum2>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et
                    </LoremIpsum2>
                  </WorkPackage2StackColumnRow>
                </Rect10>
                <WorkPackage4Stack>
                  <WorkPackage4>Work package 2</WorkPackage4>
                  <Rect12></Rect12>
                  <Rect13>
                    <Rect14ColumnRow>
                      <Rect14Column>
                        <Rect14>
                          <Request3>Request 3</Request3>
                        </Rect14>
                        <Start5>
                          E - Mail of sender:
                          <br />
                          <br />
                          Date:
                        </Start5>
                      </Rect14Column>
                      <Hello>Hello</Hello>
                    </Rect14ColumnRow>
                  </Rect13>
                </WorkPackage4Stack>
              </ScrollArea1>
            </Rect7>
            <Inbox>Inbox</Inbox>
          </Rect7Stack>
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
  margin-left: 212px;
  border: none;
  background: transparent;
`;

const UsersRow = styled.div`
  height: 63px;
  flex-direction: row;
  display: flex;
  margin-top: 43px;
  margin-left: 75px;
  margin-right: 46px;
`;

const Rect4 = styled.div`
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

const UserIdRow = styled.div`
  height: 57px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 12px;
  margin-left: 44px;
  margin-top: 13px;
`;

const Rect5 = styled.div`
  top: 0px;
  left: 0px;
  width: 648px;
  height: 54px;
  position: absolute;
  background-color: rgba(1,210,142,1);
  border-radius: 14px;
  opacity: 0.74;
`;

const Rect4Stack = styled.div`
  width: 649px;
  height: 664px;
  margin-top: 25px;
  margin-left: 59px;
  position: relative;
`;

const Rect6 = styled.div`
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
  margin-top: 43px;
`;

const Search2 = styled.input`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 63px;
  width: 388px;
  background-color: rgba(230, 230, 230,0.32);
  border-radius: 24px;
  font-size: 25px;
  margin-top: 19px;
  margin-left: 39px;
  border: none;
  background: transparent;
`;

const Search3 = styled.input`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 63px;
  width: 388px;
  background-color: rgba(230, 230, 230,0.32);
  border-radius: 24px;
  font-size: 25px;
  border: none;
  background: transparent;
`;

const Button2 = styled.div`
  width: 174px;
  height: 80px;
  background-color: #E6E6E6;
  margin-left: 100px;
  margin-top: 11px;
  border: none;
`;

const Search3Row = styled.div`
  height: 91px;
  flex-direction: row;
  display: flex;
  margin-top: 40px;
  margin-left: 39px;
  margin-right: 91px;
`;

const Rect7 = styled.div`
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

const ScrollArea1 = styled.div`
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

const Rect8 = styled.div`
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

const Rect9 = styled.div`
  width: 256px;
  height: 78px;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
`;

const Request1 = styled.span`
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

const Start1 = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 44px;
  width: 223px;
  margin-top: 33px;
  margin-left: 16px;
`;

const Rect9Column = styled.div`
  width: 256px;
  flex-direction: column;
  display: flex;
  margin-bottom: 11px;
`;

const LoremIpsum1 = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 166px;
  width: 291px;
  margin-left: 24px;
`;

const Rect9ColumnRow = styled.div`
  height: 166px;
  flex-direction: row;
  display: flex;
  margin-top: 21px;
  margin-left: 32px;
  margin-right: 20px;
`;

const Rect10 = styled.div`
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

const WorkPackage2 = styled.span`
  font-family: Ubuntu;
  top: 29px;
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

const Rect11 = styled.div`
  top: 0px;
  left: 0px;
  width: 256px;
  height: 81px;
  position: absolute;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
`;

const Request2 = styled.span`
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

const WorkPackage2Stack = styled.div`
  width: 256px;
  height: 82px;
  position: relative;
`;

const Start4 = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 46px;
  width: 223px;
  margin-top: 30px;
  margin-left: 16px;
`;

const WorkPackage2StackColumn = styled.div`
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
  height: 172px;
  width: 291px;
  margin-left: 24px;
`;

const WorkPackage2StackColumnRow = styled.div`
  height: 172px;
  flex-direction: row;
  display: flex;
  margin-top: 22px;
  margin-left: 32px;
  margin-right: 20px;
`;

const WorkPackage4 = styled.span`
  font-family: Ubuntu;
  top: 53px;
  left: 48px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 54px;
  width: 223px;
  font-size: 25px;
  text-align: center;
`;

const Rect12 = styled.div`
  top: 23px;
  left: 32px;
  width: 256px;
  height: 84px;
  position: absolute;
  background-color: rgba(124,124,124,1);
  border-radius: 14px;
`;

const Rect13 = styled.div`
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

const Request3 = styled.span`
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

const Start5 = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 47px;
  width: 223px;
  margin-top: 30px;
  margin-left: 16px;
`;

const Rect14Column = styled.div`
  width: 256px;
  flex-direction: column;
  display: flex;
  margin-top: 4px;
  margin-bottom: 12px;
`;

const Hello = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 177px;
  width: 291px;
  margin-left: 24px;
`;

const Rect14ColumnRow = styled.div`
  height: 177px;
  flex-direction: row;
  display: flex;
  margin-top: 23px;
  margin-left: 32px;
  margin-right: 20px;
`;

const WorkPackage4Stack = styled.div`
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

const Rect7Stack = styled.div`
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

const Create = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 37px;
  width: 197px;
  font-size: 30px;
  text-align: center;
  margin-top: 50px;
  margin-left: 200px;
`;

export default AllUsers;