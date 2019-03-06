import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavContainer = styled.ul`
  all: unset;
  box-sizing: border-box;
  height: 65px;
  display: flex;
  padding: 15px;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  .nav-content {
    width: 100%;
    max-width: 1024px;
  }

  a {
    line-height: 1.65;
    font-weight: 400;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: #757575;
    font-size: 16px;

    transition: color 0.2s ease;

    &:hover {
      color: #111;
    }
  }

  a + a {
    margin-left: 30px;
  }
`;

const Nav = () => (
  <NavContainer>
    <div className="nav-content">
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/login">
        <a>Log In</a>
      </Link>
    </div>
  </NavContainer>
);

export default Nav;
