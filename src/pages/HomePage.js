import React from 'react'
import styled from 'styled-components'
import Particles from '../components/Particles';

import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function HomePage() {
  return (
    <HomePageStyle>
      <div className='p-particles-js'>
        <Particles />
      </div>
      <div className='typography'>
        <h1>Hi I'm <span>Raju </span></h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque doloribus aliquam aspernatur dolorem deleniti velit, laudantium laboriosam exercitationem odio cum!</p>
        <div className='icons'>

          <a href='' className='icon i-facebook'>
            <FaFacebookSquare />
          </a>
          <a href='' className='icon i-github'>
            <FaGithubSquare />
          </a>
          <a href='' className='icon i-youtube'>
            < FaYoutube />
          </a>

        </div>
      </div>


    </HomePageStyle>
  )
}
const HomePageStyle = styled.header`
width: 100%;
height: 100vh;
position: relative;
.p-particles-js{
  position:absolute;
  top:0;
  left: 0;
}
.typography{
  position:absolute;
  top:50%;
  left:50%;
transform:translate(-50%, -50%);
text-align: center;
width: 80%;
.icons{
  display:flex;

  justify-content:center;
margin-top:1rem;
  .icon{
    border: 2px solid var(--border-color);
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    transition:all solid .4s ease-in-out;
    cursor:pointer;

    &:hover{
      border: 2px solid var(--primary-color);
      color: var(--primary-color);
    }
    &:not(:last-child){
      margin-right:1rem;
    }
    svg{
margin:.5rem;
    }
  }
  .i-youtube{
    &:hover{
      border: 2px solid #5F4687;

      color: #5F4687;
    }
  }
  .i-github{
    &:hover{
      border: 2px solid #5F4687;

      color: #5F4687;
    }
  }
  .i-facebook{
    &:hover{
      border: 2px solid #5F4687;

      color: #5F4687;
    }
  }
}
}
`;
export default HomePage






