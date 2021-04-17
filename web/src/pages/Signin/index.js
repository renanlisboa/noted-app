import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock } from 'react-icons/fi';

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

import logo from '../../assets/logo.svg';

export default class Signin extends Component {
  state = {};

  render() {
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
          <Form>
            <FieldGroup>
              <MailField>
                <FiMail />
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="E-mail"
                />
              </MailField>
              <PasswordField>
                <FiLock />
                <input
                  type="password"
                  name="password"
                  autoComplete="password"
                  placeholder="Password"
                />
              </PasswordField>
              <Link to="/reset">Forgot Password</Link>
            </FieldGroup>
            <button type="submit">LOG IN</button>
            <SignUp>
              <span>Don&apos;t have an account yet?</span>
              <Link to="/signup">Register</Link>
            </SignUp>
          </Form>
        </FormContainer>
      </Container>
    );
  }
}
