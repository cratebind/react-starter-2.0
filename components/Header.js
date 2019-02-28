import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import ProgressBar from './ProgressBar';

const StyledHeader = styled.header`
  .bar {
    box-shadow: inset 1px 0 0 0 #e8e8e8;

    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

const Header = () => (
  <StyledHeader>
    <ProgressBar />
    <Nav />
  </StyledHeader>
);

export default Header;
