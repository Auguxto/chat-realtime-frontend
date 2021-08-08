import React, { useContext } from "react";
import { useHistory } from "react-router";

import { FiLogIn } from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthContext";

import { Container, Input, InputButton, InputGroup, Wrapper } from "./styles";
import { useEffect } from "react";
import { useState } from "react";

const Username = () => {
  let history = useHistory();

  const [username, setUsername] = useState<string>();

  const { user, handleUser, isMobileDevice } = useContext(AuthContext);

  function randomColor() {
    function randomRGB() {
      return (Math.floor(Math.random() * 255) + 1).toString(16);
    }

    let r = randomRGB();
    let g = randomRGB();
    let b = randomRGB();

    return `#${r}${g}${b}`;
  }

  function handleSubmit(event?: React.MouseEvent) {
    if (username) {
      let color = randomColor();
      let userName = username;

      handleUser({ username: userName, color });
    }

    event?.preventDefault();
  }

  useEffect(() => {
    if (user.username) {
      history.push("/chat");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Container>
      <Wrapper isMobile={isMobileDevice}>
        <InputGroup isMobile={isMobileDevice}>
          <Input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
            autoFocus={true}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSubmit();
              }
            }}
          />
          <InputButton onClick={handleSubmit}>
            <FiLogIn size={30} color="#20252B" />
          </InputButton>
        </InputGroup>
      </Wrapper>
    </Container>
  );
};

export default Username;
