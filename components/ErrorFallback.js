import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
// import PropTypes from 'prop-types';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './Page';

const ErrorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
`;

const ErrorFallback = props => {
  console.log(props);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <ErrorContainer>An unexpected error occurred</ErrorContainer>
      </>
    </ThemeProvider>
  );
};

ErrorFallback.propTypes = {};

export default ErrorFallback;
