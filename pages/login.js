import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;

  .title {
    margin: 0;
    width: 100%;
    padding-top: 80px;
    line-height: 1.15;
    font-size: 48px;
    text-align: center;
  }

  .description {
    text-align: center;
  }
`;

const Login = () => (
  <Container className="hero">
    <h1 className="title">Login</h1>
    <input type="text" />
  </Container>
);

export default Login;
