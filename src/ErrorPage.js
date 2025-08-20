import React from 'react';
import { Button } from './styles/Button';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
      <Wrapper>
          <div className='container'>
              <div>
                  <h2>404</h2>
                  <h3>Uh oh! You're Lost!</h3>
                  <p>The page you are looking for is not available. How you got here is a mystery!</p>
                  <NavLink to = "/">
                  <Button>Go back to home page!</Button>
                  </NavLink>
              </div>
          </div>

      </Wrapper>
  )
}
const Wrapper = styled.section`
.container {
  padding: 9rem 0;
  text-align: center;

  h2 {
    font-size: 10rem;
  }

  h3 {
    font-size: 4.2rem;
  }

  p {
    margin: 2rem 0;
  }
}`;

export default ErrorPage;