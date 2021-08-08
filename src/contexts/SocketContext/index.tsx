import React, { useState } from "react";
import { ReactNode } from "react";
import { createContext } from "react";
import io, { Socket } from "socket.io-client";

const socket = io("http://192.168.0.106:3333/");

export interface User {
  username: string | null | undefined;
  color: string;
}

interface Message {
  user: User;
  message: string;
}

interface SocketContextProps {
  socket: Socket;
  sendChatMessage: (user: User, message: string) => void;
  messages: Message[];
  loading: boolean;
}

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketContext = createContext({} as SocketContextProps);

const SocketProvider = ({ children }: SocketProviderProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  function sendChatMessage(user: User, message: string) {
    socket.emit("send_chat_message", { user, message });

    setMessages([...messages, { user, message }]);
  }

  socket.on("connect", () => setLoading(false));

  socket.once("chat_message_received", (message) => {
    setMessages([...messages, message]);
  });

  return (
    <SocketContext.Provider
      value={{ socket: socket, sendChatMessage, messages, loading }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
