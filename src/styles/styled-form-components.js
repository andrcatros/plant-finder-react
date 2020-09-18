import styled from "styled-components";

export const FormGroup = styled.div`
  display: block;
  width: 300px;
  margin: 50px auto;
`;

export const StyledButton = styled.button`
  appearance: none;
  -webkit-appearance: none;
  padding: 10px;
  border: none;
  background-color: #c0c0c0;
  font-weight: 600;
  font-size: 18px;
  border-radius: 5px;
  width: 100px;
  margin: 30px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 0.5em;
  display: block;
  font-family: inherit;
  font-size: inherit;
  margin: 10px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin: 10px 10px;
  border: 0;
  border-bottom: 1px solid #eee;
  border-radius: 10px;
  font-family: inherit;
  font-size: inherit;
  margin: 10px;
  width: 500px;
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  display: block;
`;

export const StyledSelect = styled.select`
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #eee;
  background-color: white;
  border-radius: 10px;
  font-family: inherit;
  font-size: 16px;
  width: auto;

  option {
    color: black;
    background: white;
    font-weight: small;
    white-space: pre;
    min-height: 18px;
    font-family: inherit;
    font-size: 16px;
  }
`;

export const StyledSmallSelect = styled.select`
  padding: 10px;
  margin: 6px;
  border: 0;
  border-bottom: 1px solid #eee;
  background-color: white;
  border-radius: 10px;
  font-family: inherit;
  font-size: 16px;
  width: 50px;

  option {
    color: black;
    background: white;
    font-weight: small;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    font-family: inherit;
    font-size: 16px;
  }
`;
