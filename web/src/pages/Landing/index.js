import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import { Background, Header, Section, CallToAction, ImgSample } from './styles';

import logo from '../../assets/logo.svg';
import sample from '../../assets/sample.svg';

export default class Landing extends Component {
  state = {};

  render() {
    return (
      <>
        <Background>
          <Container>
            <Header>
              <img src={logo} alt="logo" />
              <Link to="/signin">Log in</Link>
            </Header>
            <Section>
              <h1>
                Save, organize and quickly
                <br />
                search your <span>notes.</span>
              </h1>
              <CallToAction>
                <p>
                  Take your productivity to the next level and
                  <br />
                  learn more in less time.
                </p>
                <Link to="/signup">Create an account</Link>
              </CallToAction>
              <ImgSample src={sample} alt="sample" />
            </Section>
          </Container>
          <Footer />
        </Background>
      </>
    );
  }
}
