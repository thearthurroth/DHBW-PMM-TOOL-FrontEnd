import React, { Component } from "react";
import styled, { css } from "styled-components";
import {useNavigate } from "react-router-dom";

function AllEmployees(props) {
  return (
    // JSX Code zum Erstellen der Seite
    <Container>
      <LightGreyArea>
        <EmployeesRow>
          <Employees>Employees:</Employees>
        </EmployeesRow>
        <DarkGreyArea>
          <RectangleStack>
            {/* Grünes Rechteck, das Spaltennamen beinhaltet */}
            <GreenRectangle></GreenRectangle>
            <EmployeeId>Employee ID</EmployeeId>
            <FirstName>First Name</FirstName>
            <LastName>Last Name</LastName>
            <TeamId>Team ID</TeamId>
            <Role>Role</Role>
            <WorkTimeWeek>Work time / week</WorkTimeWeek>
          </RectangleStack>
        </DarkGreyArea>
      </LightGreyArea>
    </Container>
  );
}
//  Styles der jeweiligen Komponenten
const Container = styled.div`
  display: flex;
  background-color: rgba(38,38,38,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const LightGreyArea = styled.div`
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


const EmployeesRow = styled.div`
  height: 70px;
  flex-direction: row;
  display: flex;
  margin-top: 43px;
  margin-left: 75px;
  margin-right: 57px;
`;

const DarkGreyArea = styled.div`
  width: 1649px;
  height: 664px;
  background-color: rgba(38,38,38,1);
  border-radius: 14px;
  flex-direction: column;
  display: flex;
  margin-top: 18px;
  margin-left: 62px;
`;

const GreenRectangle = styled.div`
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

const RectangleStack = styled.div`
  width: 1649px;
  height: 73px;
  position: relative;
`;

export default AllEmployees;