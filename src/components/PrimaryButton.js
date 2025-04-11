import React from 'react'
import styled from 'styled-components'

function PrimaryButton({ title }) {
  return (
    <PrimeButtonStyled>
      {title}
    </PrimeButtonStyled>
  )
}
const PrimeButtonStyled = styled.a`
background-color: var(--primary-color);
padding: 1rem 2.5rem;
color: #fff;
cursor: pointer;
display: inline-block;
font-size: inherit;
text-transform: uppercase;
position: relative;
transition: all .4s ease-in-out;
&::after{
  content: "";
    position: absolute;
    width: 0;
    height: .4rem;
    transition: all .4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: .7;
}
&:hover::after{
    width: 100%;
    background-color: var(--white-color);
  
}
`;
export default PrimaryButton