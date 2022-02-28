import React, { Component } from "react";
import styled, { css } from "styled-components";

function EditTeam(props) {
  return (
    <Container>
      <Rect16>
        <Text>Edit team</Text>
        <Search2Row>
          <Search2 placeholder="    Team name"></Search2>
          <Search4 placeholder="    Team ID"></Search4>
        </Search2Row>
        <Search5Row>
          <Search5 placeholder="    Working hours / week"></Search5>
          <Search6 placeholder="    Employees"></Search6>
        </Search5Row>
        <Search7Row>
          <Search7 placeholder="    Work packages"></Search7>
          <Search8 placeholder="    Current project"></Search8>
        </Search7Row>
        <Save>
            <button>Save</button>
        </Save> 
      </Rect16>
      <Logout1StackStack>
        <Logout1Stack>
          <Logout1>Logout</Logout1>
          <Button1>
            <ButtonOverlay></ButtonOverlay>
          </Button1>
          <Rect15>
            <Button2>
              <ButtonOverlay>
                <Logout2>Logout</Logout2>
              </ButtonOverlay>
            </Button2>
          </Rect15>
        </Logout1Stack>
      </Logout1StackStack>
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
const Rect16 = styled.div`
  width: 1108px;
  height: 628px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
  margin-top: 261px;
  margin-left: 406px;
`;

const Text = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 61px;
  width: 508px;
  font-size: 50px;
  text-align: center;
  margin-top: 38px;
  margin-left: 300px;
`;

const Search2 = styled.input`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 54px;
  width: 425px;
  background-color: rgba(230, 230, 230,0.32);
  border-radius: 24px;
  font-size: 25px;
  border: none;
  background: transparent;
`;

const Search4 = styled.input`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 54px;
  width: 425px;
  background-color: rgba(230, 230, 230,0.32);
  border-radius: 24px;
  font-size: 25px;
  margin-left: 116px;
  border: none;
  background: transparent;
`;

const Search2Row = styled.div`
  height: 54px;
  flex-direction: row;
  display: flex;
  margin-top: 65px;
  margin-left: 54px;
  margin-right: 88px;
`;

const Search5 = styled.input`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 54px;
  width: 425px;
  background-color: rgba(230, 230, 230,0.32);
  border-radius: 24px;
  font-size: 25px;
  border: none;
  background: transparent;
`;

const Search6 = styled.input`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 54px;
  width: 425px;
  background-color: rgba(230, 230, 230,0.32);
  border-radius: 24px;
  font-size: 25px;
  margin-left: 116px;
  border: none;
  background: transparent;
`;

const Search5Row = styled.div`
  height: 54px;
  flex-direction: row;
  display: flex;
  margin-top: 61px;
  margin-left: 54px;
  margin-right: 88px;
`;

const Search7 = styled.input`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 54px;
  width: 425px;
  background-color: rgba(230, 230, 230,0.32);
  border-radius: 24px;
  font-size: 25px;
  border: none;
  background: transparent;
`;

const Search8 = styled.input`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 54px;
  width: 425px;
  background-color: rgba(230, 230, 230,0.32);
  border-radius: 24px;
  font-size: 25px;
  margin-left: 116px;
  border: none;
  background: transparent;
`;

const Search7Row = styled.div`
  height: 54px;
  flex-direction: row;
  display: flex;
  margin-top: 55px;
  margin-left: 54px;
  margin-right: 88px;
`;

const Button3 = styled.div`
  width: 175px;
  height: 84px;
  background-color: #E6E6E6;
  margin-top: 70px;
  margin-left: 781px;
  border: none;
`;

const Logout1 = styled.span`
  font-family: Ubuntu;
  top: 33px;
  left: 1700px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 37px;
  width: 197px;
  font-size: 30px;
  text-align: center;
`;

const Button1 = styled.div`
  top: 16px;
  left: 1695px;
  width: 207px;
  height: 70px;
  position: absolute;
  background-color: rgba(255,254,254,1);
  border-radius: 14px;
  opacity: 0.42;
  border: none;
`;

const Rect15 = styled.div`
  top: 0px;
  height: 98px;
  position: absolute;
  background-color: rgba(1,210,142,1);
  left: 0px;
  right: 0px;
  flex-direction: column;
  display: flex;
`;

const Button2 = styled.div`
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

const Logout2 = styled.span`
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

const Logout1Stack = styled.div`
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

const Logout1StackStack = styled.div`
  height: 98px;
  margin-top: -889px;
  position: relative;
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
  margin-top: 75px;
  margin-left: 800px;
`;

export default EditTeam;