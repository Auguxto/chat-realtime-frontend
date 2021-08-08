import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { FiChevronDown } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthContext";

import Message from "../../components/Message";

import {
  ChatMessages,
  Container,
  EndMessages,
  Input,
  InputButton,
  InputGroup,
  SendMessage,
  Username,
  Wrapper,
} from "./styles";
import { SocketContext } from "../../contexts/SocketContext";

const Chat = () => {
  let history = useHistory();

  const messagesEndRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [message, setMessage] = useState<string>("");

  function scrollToBottomMessages() {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  }

  const { user, handleLogout, isMobileDevice } = useContext(AuthContext);
  const { loading, messages, sendChatMessage } = useContext(SocketContext);

  function handleMessage(message: string, event?: React.MouseEvent) {
    if (message.length === 0) return;
    let color = user.color ? user.color : "#FFFFFF";
    sendChatMessage({ username: user.username, color: color }, message);
    scrollToBottomMessages();
    setMessage("");
  }

  useEffect(() => {
    scrollToBottomMessages();
  }, []);

  useEffect(() => {
    scrollToBottomMessages();
  }, [messages]);

  useEffect(() => {
    if (!user.username || !user.color) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Container>
      <Wrapper isMobile={isMobileDevice}>
        <Username onClick={handleLogout} color={user.color?.toString()}>
          {user.username}{" "}
          <FiChevronDown size={20} color={user.color?.toString()} />
        </Username>
        <ChatMessages>
          {loading && <span>Loading</span>}
          {messages.map((umessage) => (
            <Message
              key={uuid()}
              user={umessage.user}
              message={umessage.message}
            />
          ))}
          <EndMessages ref={messagesEndRef} />
        </ChatMessages>
        <SendMessage isMobile={isMobileDevice}>
          <InputGroup isMobile={isMobileDevice}>
            <Input
              placeholder="Message"
              value={message}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleMessage(message);
                }
              }}
              onChange={(event) => setMessage(event.target.value)}
            />
            <InputButton onClick={() => handleMessage(message)}>
              <FiSend size={30} color="#323941" />
            </InputButton>
          </InputGroup>
        </SendMessage>
      </Wrapper>
    </Container>
  );
};

export default Chat;
