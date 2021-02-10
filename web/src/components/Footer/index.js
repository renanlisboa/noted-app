import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  Footer,
  FooterContainer,
  CompanyInfo,
  CompanyLinks,
  Links,
} from './styles';

import logo from '../../assets/logo.svg';

export default class Landing extends Component {
  state = {};

  render() {
    return (
      <Footer>
        <FooterContainer>
          <CompanyInfo>
            <img src={logo} alt="logo" />
            <span>
              Save, organize and search
              <br />
              study notes.
            </span>
            <p>&copy; 2021 Rens Education</p>
            <Link to="/">Terms & Privacy</Link>
          </CompanyInfo>
          <CompanyLinks>
            <Links>
              <p>Links</p>
              <Link to="/">Mobile App</Link>
              <Link to="/">Github</Link>
              <Link to="/login">Log in</Link>
              <Link to="/signup">Sign up</Link>
            </Links>
            <Links>
              <p>Help & Contact</p>
              <Link to="/">FAQ</Link>
              <Link to="/">Email us</Link>
            </Links>
            <Links>
              <p>Company</p>
              <Link to="/">About</Link>
            </Links>
          </CompanyLinks>
        </FooterContainer>
      </Footer>
    );
  }
}
