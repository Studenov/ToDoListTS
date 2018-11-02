import styled from 'styled-components';

export const Block = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 500px;
  border: 1px solid #000;
  border-radius: 10px;
`;
export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const Label = styled.label`
  position: absolute;
  top: 15px;
  padding: 0 0 0 10px;
  transition: all 200ms;
  opacity: 0.5;
`;
export const Input = styled.input`
  width: 300px;
  height: 40px;
  &:focus + ${Label} {
    transform: translate3d(0, -200%, 0) scale(0.7);
    opacity: 1;
  }
`;