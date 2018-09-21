import { css } from 'styled-components';

const Container = css`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 769px) {
    width: 750px;
  }
  @media (min-width: 992px) {
      width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export default Container;
