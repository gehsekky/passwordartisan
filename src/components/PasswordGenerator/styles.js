import styled from 'styled-components';

export const PasswordGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .form-group {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }

  #txtPassword {
    padding: 5px;
    width: 60%;
    font-size: 16px;
    line-height: 16px;
    border-radius: 7px;
    font-family: 'Roboto Mono', monospace;
  }

  #btnGenerate {
    padding: 5px;
    font-size: 16px;
    line-height: 16px;
    border-radius: 3px;
  }

  #txtPasswordLength {
    width: 50px;
    text-align: center;
  }

  label:not(:last-of-type) {
    margin-left: 2px;
    margin-right: 15px;
  }
`;

export const DropDownCheckListContainer = styled.div`
  display: inline-block;
  position: relative;

  &.visible .symbolsPlaceholder {
    color: #0094ff;
  }

  &.visible .items {
    display: block;
  }

  .symbolsPlaceholder {
    display: inline-block;
    postition: relative;
    cursor: pointer;
  }

  .symbolsPlaceholder:after {
    position: absolute;
    content: '';
    border-left: 2px solid black;
    border-top: 2px solid black;
    padding: 5px;
    -moz-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }

  &.visible .symbolsPlaceholder:after {
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .symbolsPlaceholder:active:after {
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  ul.items {
    position: absolute;
    width: 40px;
    padding: 2px;
    display: none;
    margin: 0;
    border: 1px solid #ccc;
    border-top: none;
  }

  ul.items li {
    list-style: none;
  }
`;
