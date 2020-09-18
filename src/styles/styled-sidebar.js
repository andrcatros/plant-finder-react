import styled from "styled-components";

const StyledSideBar = styled.div`
  position: fixed;
  margin-top: 60px;
  width: 220px;
  height: 100%;
  background-color: white;
  top: 1;
  left: 0;
  overflow-x: hidden;
  border-right: 2px solid #d0d0d0;
  border-top: 2px solid #d0d0d0;

  h4 {
    padding-left: 15px;
    margin-bottom: 5px;
    font-size: 20px;
    margin-block-start: 0.5em;
  }

  ul {
    margin-block-start: 0px;
  }

  a {
    padding-left: 15px;
    color: black;
    text-decoration: none;
    line-height: 2.5;
    font-size: 18px;
    font-weight: bold;
  }

  form {
    margin-top: 5px;
    display: flex;
  }

  input {
    margin-left: 4px;
    border: 2px solid #d0d0d0;
    font-size: 18px;
    width: 80%;
  }
  button {
    background-image: linear-gradient(to top right, #cbe54e, #329d9c);
    color: white;
    padding: 6px 6px 4px 4px;
    border-style: none;
    border-radius: 16px;
  }
`;

export default StyledSideBar;
