import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
const Header = (props) => {
  const navigate = useNavigate();
  return (
    <AppHeader>
      <div className="logo">
        <img src={logo} alt="logo_img" />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign In"}
      </button>
    </AppHeader>
  );
};
const AppHeader = styled.div`
  padding: 0 4rem;
  .logo {
    img {
      height: 5rem;
    }
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;

export default Header;
