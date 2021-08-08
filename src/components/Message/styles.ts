import styled from "styled-components";

export const Container = styled.div`
  display: block;

  margin-bottom: 5px;
`;

export const Username = styled.span<{ color: string }>`
  font-weight: 500;
  color: ${(props) => (props.color ? props.color : "#FFFFFF")};
`;

export const MessageText = styled.span`
  margin-left: 5px;

  word-wrap: break-word;
`;
