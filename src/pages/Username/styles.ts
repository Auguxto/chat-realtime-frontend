import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;

  justify-content: center;
  align-items: center;

  background-color: #323941;
`;

export const Wrapper = styled.div<{ isMobile?: boolean }>`
  display: flex;
  flex: ${(props) => (props.isMobile ? 1 : "none")};

  flex-direction: row;

  justify-content: center;
  align-items: center;

  width: ${(props) => (props.isMobile ? "100%" : "600px")};
  height: 100px;

  background-color: #20252a;

  border-radius: 30px;
`;

export const InputGroup = styled.div<{ isMobile?: boolean }>`
  display: flex;

  width: ${(props) => (props.isMobile ? "90%" : "560px")};
  height: 60px;

  flex-direction: row;
`;

export const Input = styled.input`
  flex: 1;

  border-radius: 20px 0 0 20px;
  border: none;

  background-color: #3f464e;

  padding-left: 20px;

  font-size: 22px;

  color: #20252a;

  ::placeholder {
    font-size: 22px;

    color: #323941;
  }
`;

export const InputButton = styled.button`
  width: 60px;

  justify-content: center;
  align-items: center;

  border-radius: 0 20px 20px 0;
  border: none;

  background-color: #323941;

  cursor: pointer;
`;
