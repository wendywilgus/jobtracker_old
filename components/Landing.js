import React from 'react';
import Logo from '../assets/logo.svg';
import Main from '../assets/main.svg';
import styled from 'styled-components';

const Landing = () => {
  return (
    <Wrapper>
    <div>
        <nav>
            <img src={ Logo } alt="Ready 2 work" className='logo' />
        </nav>
        <div className='container page'>
          <div className='info'>
            <h1>
              Ready <span>2</span> Work
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi. Est placerat in egestas erat imperdiet sed euismod nisi porta. Convallis a cras semper auctor. Platea dictumst vestibulum rhoncus est.

            </p>
            <button className="btn btn-hero">Login/Register</button>
          </div>
          <img src={ Main } alt="text for Job" className='img main-img'/>
        </div>
    </div>
    </Wrapper>
     
  )
}

const Wrapper = styled.main`
nav {
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;
  height: var(--nav-height);
  display: flex;
  align-items: center;
}
.page {
  min-height: calc(100vh - var(--nav-height);
  display: grid;
  align-items: center;
  margin-top: -3rem;
}
h1 {
  font-weight: 700;
  span {
    color: var(--primary-500);
  }
}
p {
  color: var(--grey-600);
}
.main-img {
  display: none;
}
@media (min-width: 992px) {
  .page {
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }
  .main-img {
    display: block;
  }
}
`

export default Landing; 