import styled from "styled-components";

const StyledAlert = styled.div`
  margin: auto;
  color: white;
  width: 550px;
  height: 40px;
  font-size: 22px;
  border-style: solid;
  border-radius: 10px;
  border-color: ${(props) => props.color};
  background-color: ${(props) => props.color};
  padding: 5px;
  font-weight: 550;
  text-align: center;
  line-height: 2;
`;

export default StyledAlert;
