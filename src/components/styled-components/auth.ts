import React from 'react';
import styled from 'styled-components';

type LabelValue = {
  value: string
}

export const Block = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BlockAuth = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.6);
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ErrorBlock = styled.div`
  
`;
export const ErrorValue = styled.p`

`;
export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px;
  height: 50px;
  margin: 10px 0 0 0;
  justify-content: flex-end;
  align-items: center;
`;
export const Label = styled.label`
  width: 100px;
  height: 20px;
  font-size: 16px;
  position: absolute;
  top: 24px;
  left: 0;
  transition: all 200ms;
  opacity: ${(props: LabelValue) => props.value ? '1' : '0.4'};
  transform: ${(props: LabelValue) => props.value ? 'translate3d(-15px, -25px, 0) scale(0.7)' : 'none'};
`;
export const Input = styled.input`
  width: 300px;
  height: 30px;
  outline: none;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #808080;
  transition: all 200ms;
  &:focus {
    border-bottom: 2px solid #4169E1;
  }
`;
export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 50px;
  margin: 10px 0 0 0;
  justify-content: flex-end;
  align-items: center;
`;
export const Button = styled.button`
  width: 180px;
  height: 40px;
  border-radius: 6px;
  border: none;
  outline: none;
  background: rgba(33, 150, 243, 1);
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.5);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 200ms;
  &:hover {
    background: rgba(13, 130, 223, 1);
  }
  &:active {
    box-shadow: 0px 8px 30px 0px rgba(0,0,0,0.4);
  }
`;