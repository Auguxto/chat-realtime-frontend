import React from "react";
import AuthContextProvider from "./contexts/AuthContext";
import SocketProvider from "./contexts/SocketContext";
import Navigation from "./Navigation";

function App() {
  return (
    <AuthContextProvider>
      <SocketProvider>
        <Navigation />
      </SocketProvider>
    </AuthContextProvider>
  );
}

export default App;
