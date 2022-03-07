import React, { Component } from "react";
import styled, { css } from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

function AllEmployees(props) {
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
      <Rect3>
        <EmployeesRow>
          <Employees>Employees:</Employees>
          <Search placeholder="    Search"></Search>
        </EmployeesRow>
        <Rect2>
          <Rect4Stack>
            <Rect4></Rect4>
            <FirstName>First Name</FirstName>
            <EmployeeId>Employee ID</EmployeeId>
            <LastName>Last Name</LastName>
            <TeamId>Team ID</TeamId>
            <Role>Role</Role>
            <WorkTimeWeek>Work time / week</WorkTimeWeek>
          </Rect4Stack>
        </Rect2>
      </Rect3>
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

const Rect3 = styled.div`
  width: 1768px;
  height: 845px;
  background-color: rgba(74,74,74,1);
  border-radius: 21px;
  flex-direction: column;
  display: flex;
  margin-top: 81px;
  margin-left: 74px;
`;

const Employees = styled.span`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 50px;
  text-align: center;
`;

const Search = styled.input`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 70px;
  width: 371px;
  background-color: rgba(230, 230, 230,0.32);
  border-radius: 24px;
  font-size: 25px;
  margin-left: 1006px;
  border: none;
  background: transparent;
`;

const EmployeesRow = styled.div`
  height: 70px;
  flex-direction: row;
  display: flex;
  margin-top: 43px;
  margin-left: 75px;
  margin-right: 57px;
`;

const Rect2 = styled.div`
  width: 1649px;
  height: 664px;
  background-color: rgba(38,38,38,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
  margin-top: 18px;
  margin-left: 62px;
`;

const Rect4 = styled.div`
  top: 0px;
  left: 0px;
  width: 1649px;
  height: 54px;
  position: absolute;
  background-color: rgba(1,210,142,1);
  border-radius: 14px;
  opacity: 0.74;
`;

const FirstName = styled.span`
  font-family: Ubuntu;
  top: 16px;
  left: 279px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 94px;
  font-size: 17px;
`;

const EmployeeId = styled.span`
  font-family: Ubuntu;
  top: 16px;
  left: 48px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 118px;
  font-size: 17px;
`;

const LastName = styled.span`
  font-family: Ubuntu;
  top: 16px;
  left: 523px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 94px;
  font-size: 17px;
`;

const TeamId = styled.span`
  font-family: Ubuntu;
  top: 16px;
  left: 800px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 94px;
  font-size: 17px;
`;

const Role = styled.span`
  font-family: Ubuntu;
  top: 16px;
  left: 1097px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 94px;
  font-size: 17px;
`;

const WorkTimeWeek = styled.span`
  font-family: Ubuntu;
  top: 16px;
  left: 1326px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  height: 57px;
  width: 137px;
  font-size: 17px;
`;

const Rect4Stack = styled.div`
  width: 1649px;
  height: 73px;
  position: relative;
`;

export default AllEmployees;