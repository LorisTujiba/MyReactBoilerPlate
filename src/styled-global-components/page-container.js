import { css } from 'styled-components';

const PageContainer = css`
  display: flex;
  flex-direction: row;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 80px;
  padding-bottom: 150px;
  @media (max-width: 993px) {
     flex-direction: column;
     padding-bottom: 0;
  }
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

export default PageContainer;
