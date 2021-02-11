import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import api from '../../services/api';

import Container from '../../components/Container';
import {
  Header,
  FormContainer,
  CallToAction,
  Form,
  FieldGroup,
  UsernameField,
  MailField,
  PasswordField,
} from './styles';

import logo from '../../assets/logo.svg';

export default class Landing extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    error: null,
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { name, email, password } = this.state;

    try {
      await api.post('users', {
        name,
        email,
        password,
      });
    } catch (err) {
      if (err) {
        this.setState({ error: true });
      }
    }
  };

  render() {
    const { name, email, password, error } = this.state;

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
              Create an account to
              <br />
              start creating your notes
            </h2>
            <p>
              Take your productivity to the next level and learn more
              <br />
              in less time.
            </p>
          </CallToAction>
          <Form onSubmit={this.handleSubmit} error={error}>
            <FieldGroup>
              <UsernameField>
                <FiUser />
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={e => {
                    this.setState({ name: e.target.value });
                  }}
                />
              </UsernameField>
              <MailField>
                <FiMail />
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="E-mail"
                  required
                  value={email}
                  onChange={e => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </MailField>
              <PasswordField>
                <FiLock />
                <input
                  type="password"
                  name="password"
                  autoComplete="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={e => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </PasswordField>
            </FieldGroup>
            <span>
              By creating an account you are accepting our
              <Link to="/signup">
                Terms of
                <br />
                Service
              </Link>{' '}
              and our
              <Link to="/signup">Privacy</Link>
            </span>
            <button type="submit">CREATE ACCOUNT</button>
            <p>Validation failed.</p>
          </Form>
        </FormContainer>
      </Container>
    );
  }
}
