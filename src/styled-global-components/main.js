import { css } from 'styled-components';

const Main = css`
  flex-basis: 70%;
  box-sizing: border-box;
  border-right: 1px solid #eee;
  padding-right: 30px;
  padding-left: 0;
  @media (max-width: 993px) {
     flex-basis: 100%;
     border-right: none;
     padding: 0;
  }
`;

export default Main;
