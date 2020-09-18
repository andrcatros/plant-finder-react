import styled from "styled-components";

const StyledPlantCard = styled.div`
  width: 100%;
  border-style: solid;
  border-width: thin;
  border-color: #c0c0c0;
  text-align: center;
  font-size: 18px;
  line-height: 1.75;
  width: 550px;
  margin: 10px;
  background-color: white;

  .email-button {
    height: 40px;
    background-image: linear-gradient(to top right, #cbe54e, #329d9c);
    color: white;
    font-family: inherit;
    font-size: 16px;
    width: 100%;
    border-style: none;
    border-radius 16px;
  }

  .save-button {
    height: 40px;
    background-color: white;
    color: #774872;
    font-family: inherit;
    font-size: 16px;
    width: 100%;
    border-style: solid;
    border-color: #774872;
  }

  img {
    display: block;
    margin: auto;
    width: 500px;
    padding: 10px;
  }
`;

export default StyledPlantCard;
