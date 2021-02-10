import styled from 'styled-components';

export const Background = styled.div`
  background-color: var(--secondary);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    width: 118px;
    height: 40px;
    border-radius: 2px;
    background-color: var(--terceary);
    color: var(--secondary);

    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    text-decoration: none;
    transition: 200ms;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: var(--button-hover);
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 72px auto;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 64px;
    font-weight: 700;
    line-height: 70.4px;
    text-align: center;

    span {
      color: var(--terceary);
    }
  }
`;

export const CallToAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 48px;
  width: 730px;

  p {
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
    padding-right: 16px;
  }

  a {
    width: 298px;
    height: 64px;
    border-radius: 2px;
    background-color: var(--terceary);
    color: var(--secondary);

    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-decoration: none;
    transition: 200ms;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: var(--button-hover);
    }
  }
`;

export const ImgSample = styled.img`
  margin-top: 90px;
`;
