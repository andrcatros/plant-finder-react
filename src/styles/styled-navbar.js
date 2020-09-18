import styled from "styled-components";

const StyledNavBar = styled.div`
  background-color: white;
  top: 0;
  position: fixed;
  border-bottom: 2px solid #d0d0d0;
  width: 100%;
  height: 60px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }

  img {
    height: 60px;
  }

  ul {
    display: inline-block;
    margin-block-start: 0;
    margin-block-end: 0;
    vertical-align: top;
    padding-top: 16px;
    padding-inline-start: 20px;
  }

  li {
    display: inline-block;
    margin-block-start: 0;
    margin-block-end: 0;
    vertical-align: top;
    margin-left: 20px;
  }

  a {
    display: inline-block;
    float: right;
  }

  .my-facebook-button-class {
    float: right;
    vertical-align: top;
    width: 100px;
    height: 100%;
    font-size: 15px;
    color: white;
    background: #4c69ba;
    boder-style: none;
    display: inline-block;
    border: calc(0.06887vw + 0.67769px) solid #4c69ba;
  }

  /*mobile view*/
  @media screen and (max-width: 600px) {
    img {
      display: none;
    }

    .my-facebook-button-class {
      display: none;
    }

    ul {
      margin: auto;
      float: left;
      font-size: 5vw;
    }

    a {
      text-decoration: none;
    }

    a:selected {
      color: white;
    }
  }

  /*browser view*/
  @media screen and (min-width: 601px) {
  }
`;

export default StyledNavBar;
