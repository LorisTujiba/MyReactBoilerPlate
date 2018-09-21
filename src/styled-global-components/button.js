import { css } from 'styled-components';

const Button = css`
  padding: 7px 25px;
  display: inline-block;
  letter-spacing: 1.5px;
  font-size: 0.675em;
  line-height: 1.625em;
  text-transform: uppercase;
  border-radius: 2px;
  background: #efefef;
  outline: none;
  border: none;
  font-family: 'Montserrat', sans-serif;
  color: #222;
  font-weight: normal;
  cursor: pointer;
  transition: .2s;
  :hover{
    background-color: #ffa687;
  }
`;

export default Button;
