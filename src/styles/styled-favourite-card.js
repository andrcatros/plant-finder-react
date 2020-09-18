import styled from "styled-components";

const StyledFavouriteCard = styled.div`
  border-style: solid;
  border-width: thin;
  border-color: #c0c0c0;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 20px;
  width: 90%;
  height: 40px;
  line-height: 40px;
  background-color: white;

  .delete-button {
    margin: auto;
    float: right;
    color: white;
    background-color: red;
    width: 100px;
    height: 40px;
    padding-top: 8px;
    border-style: none;
    font-size: 14px;
    padding: 5px;
    font-weight: 550;
    text-align: center;
    line-height: 2;
  }
`;

export default StyledFavouriteCard;
