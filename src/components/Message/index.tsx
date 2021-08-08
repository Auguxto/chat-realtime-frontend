import React from "react";
import { User } from "../../contexts/SocketContext";

import { Container, MessageText, Username } from "./styles";

interface MessageProps {
  user: User;
  message: string;
}

const Message = ({ user, message }: MessageProps) => {
  return (
    <Container>
      <Username color={user.color}>{user.username}:</Username>
      <MessageText>{message}</MessageText>
    </Container>
  );
};

export default Message;
