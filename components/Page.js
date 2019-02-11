import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
// import Header from './Header';
// import Meta from './Meta';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  height: calc(100vh - 40px);
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  }

  input {
    font-size: 16px;
  }

  select {
    -webkit-appearance: menulist !important;
    &:hover {
      cursor: pointer;
    }
  }

  fieldset {
    all: unset;
    display: block;
  }

  a {
     text-decoration: none;
  }

  .text-input {
    /* reset silly webkit styles */
    &[type='text'],
    &[type='email'],
    &[type='password'] {
      /* Remove First */
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    display: block;
    width: 100%;
    padding: 0 0.5em;
    height: 2.5em;
    border-radius: 0.25em;
    font-size: 16px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    border: 1px solid #d9d9d9;

    &[type='checkbox'],
    &[type='radio'] {
      display: inline-block;
      width: auto;
      height: auto;
      padding: 0;
    }
    &::placeholder {
      color: currentcolor;
      opacity: 0.5;
    }
    &:focus {
      border-color: #80bdff;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(54, 79, 107, 0.25);
    }
    textarea & {
      padding: 0.5em;
      height: auto;
    }
  }

  svg {
    height: 1.25rem;
    width: 1.25rem;
  }
`;

class Page extends Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <GlobalStyle />
          {/* <Meta /> */}
          {/* <Header /> */}
          <Inner data-test="inner-page">{children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
