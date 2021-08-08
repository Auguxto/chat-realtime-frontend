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

  flex-direction: column;

  width: ${(props) => (props.isMobile ? "100%" : "600px")};
  height: ${(props) => (props.isMobile ? "100vh" : "700px")};

  background-color: #20252a;

  border-radius: ${(props) => (props.isMobile ? "none" : "30px")};

  overflow: hidden;
`;

export const Username = styled.span<{ color?: string }>`
  font-size: 22px;

  color: ${(props) => (props.color ? props.color : "#ffffff")};

  margin: 20px;
`;

export const ChatMessages = styled.div`
  flex: 1;
  overflow-y: scroll;

  padding: 10px;

  background-color: #2f363d;

  color: #ffffff;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #2f363d;
  }

  ::-webkit-scrollbar-thumb {
    background: #20252a;
    border-radius: 20px;
  }
`;

export const SendMessage = styled.div<{ isMobile?: boolean }>`
  width: 100%;

  margin: 0 auto;
  padding-bottom: 20px;

  background-color: #2f363d;
`;
export const InputGroup = styled.div<{ isMobile?: boolean }>`
  display: flex;

  width: ${(props) => (props.isMobile ? "95%" : "560px")};
  height: 60px;

  margin: 0 auto;

  border-radius: 20px;
  overflow: hidden;
`;

export const Input = styled.input`
  flex: 1;

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
  display: flex;
  width: 60px;

  border: none;

  justify-content: center;
  align-items: center;

  background-color: #20252a;

  cursor: pointer;
`;

export const EndMessages = styled.div`
  margin-top: 20px;
`;
