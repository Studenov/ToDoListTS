import styled from 'styled-components';

type LabelValue = {
  value: string
}
type ShowValue = {
  show: boolean
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
  margin: 20px 0 0 0;
  width: 100%;
  height: ${(props: ShowValue) => props.show ? '40px' : '10px'};
  background: rgba(255, 0, 0, 0.1);
  display: flex;
  opacity: ${(props: ShowValue) => props.show ? '1' : '0'};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 300ms ease-in-out;
`;
export const ErrorValue = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  color: #ff5a4c;
  font-weight: 700;
  width: 300px;
  height: 30px;
  text-align: left;
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
  &:focus {
    border-bottom: 2px solid #4169E1;
  }
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
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.5);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  margin: 10px 0 0 0;
  transition: all 200ms;
  &:hover {
    background: rgba(13, 130, 223, 1);
  }
  &:active {
    box-shadow: 0px 8px 30px 0px rgba(0,0,0,0.4);
  }
`;
export const BackgroundSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.5);
`;
export const SpinnerBlock = styled.div`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 10px;
`;
export const Spinner = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
  &:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  &:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  &:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  &:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;