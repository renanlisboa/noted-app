import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 24px 0;

  a {
    text-decoration: none;
    color: var(--text);
    font-size: 16px;
    transition: 200ms;

    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }

    &:hover {
      color: var(--standard-link);
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 64px auto;
`;

export const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  height: 460px;
  margin: 0 36px;

  img {
    width: 170px;
    margin-bottom: 24px;
  }

  h2 {
    font-size: 36px;
    font-weight: 700;
    line-height: 54px;
    margin-bottom: 36px;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 36px;
  width: 440px;
  height: 460px;
  border-radius: 5px;
  background-color: var(--secondary);

  span {
    text-align: center;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 20px;

    a {
      text-decoration: none;
      color: var(--standard-link);
      font-size: 14px;
      font-weight: 600;
      margin-left: 3px;
    }
  }

  button {
    width: 352px;
    height: 50px;
    background: var(--terceary);
    border-radius: 2px;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    transition: 200ms;

    &:hover {
      background: var(--button-hover);
    }
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;

  input[name='name'] {
    background-color: var(--input-field);
    width: 352px;
    height: 50px;
    border-radius: 5px;
    padding-left: 46px;
    margin-bottom: 32px;
  }

  input[name='email'] {
    background-color: var(--input-field);
    width: 352px;
    height: 50px;
    border-radius: 5px;
    padding-left: 46px;
    margin-bottom: 32px;
  }

  input[name='password'] {
    background-color: var(--input-field);
    width: 352px;
    height: 50px;
    border-radius: 5px;
    padding-left: 46px;
    margin-bottom: 40px;
  }
`;

export const UsernameField = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  svg {
    position: absolute;
    left: 16px;
    top: 31%;
    transform: translateY(-50%);
    color: var(--input-placeholder);
    font-size: 14px;
  }
`;

export const MailField = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  svg {
    position: absolute;
    left: 16px;
    top: 30%;
    transform: translateY(-50%);
    color: var(--input-placeholder);
    font-size: 14px;
  }
`;

export const PasswordField = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  svg {
    position: absolute;
    left: 16px;
    top: 27.3%;
    transform: translateY(-50%);
    color: var(--input-placeholder);
    font-size: 14px;
  }
`;
