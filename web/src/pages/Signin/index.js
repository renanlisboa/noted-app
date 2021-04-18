import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import Container from '../../components/Container';
import {
  Header,
  FormContainer,
  CallToAction,
  Form,
  FieldGroup,
  MailField,
  PasswordField,
  SignUp,
} from './styles';

import * as authActions from '../../store/modules/auth/actions';

function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignInSubmit = e => {
    e.preventDefault();

    dispatch(authActions.signInRequest(email, password));
  };

  return (
    <Container>
      <Header>
        <Link to="/">
          <FiArrowLeft />
          Back
        </Link>
      </Header>
      <FormContainer>
        <CallToAction>
          <img src={logo} alt="logo" />
          <h2>
            Log in to start creating
            <br />
            your notes
          </h2>
          <p>
            Take your productivity to the next level and learn more
            <br />
            in less time.
          </p>
        </CallToAction>
        <Form onSubmit={handleSignInSubmit}>
          <FieldGroup>
            <MailField>
              <FiMail />
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="E-mail"
                onChange={e => setEmail(e.target.value)}
              />
            </MailField>
            <PasswordField>
              <FiLock />
              <input
                type="password"
                name="password"
                autoComplete="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
              />
            </PasswordField>
            <Link to="/reset">Forgot Password</Link>
          </FieldGroup>
          <button type="submit">{loading ? 'Entrando...' : 'Entrar'}</button>
          <SignUp>
            <span>Don&apos;t have an account yet?</span>
            <Link to="/signup">Register</Link>
          </SignUp>
        </Form>
      </FormContainer>
    </Container>
  );
}

export default SignIn;
