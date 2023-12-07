import React from "react";
import Login_bg from "../Images/login_bg.jpg";
import styled from "styled-components";
const Background = () => {
  return (
    <Container>
      <img src={Login_bg} alt="bg_img" />
    </Container>
  );
};
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;

export default Background;
