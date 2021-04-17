import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  background-color: var(--primary);
  margin-top: 90px;
  bottom: 0;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  max-width: 960px;
  margin: 0 auto;
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 36px 0;

  img {
    width: 90px;
  }

  span {
    font-size: 14px;
    line-height: 21px;
    color: var(--light-text);
    margin-bottom: 24px;
  }

  p {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 8px;
  }

  a {
    text-decoration: none;
    color: var(--text);
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 8px;
    transition: 200ms;

    &:hover {
      color: var(--standard-link);
    }
  }
`;

export const CompanyLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin: 36px 0 36px 72px;

  p {
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    margin-bottom: 24px;
  }

  a {
    text-decoration: none;
    color: var(--text);
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 8px;
    transition: 200ms;

    &:hover {
      color: var(--standard-link);
    }
  }
`;
