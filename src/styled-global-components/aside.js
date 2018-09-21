import { css } from 'styled-components';

const Aside = css`
  flex-basis: 30%;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 0;
  @media (max-width: 993px) {
     flex-basis: 100%;
     padding: 0;
     margin-top: 50px;
  }
`;

export default Aside;
