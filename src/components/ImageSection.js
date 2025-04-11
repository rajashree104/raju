import React from 'react'
import styled from 'styled-components'
import resume from '../img/resume.jpeg'
import PrimeButton from './PrimaryButton'
function ImageSection() {
    return (

        <ImageSectionStyled>
            <div className='left-content'>

                <img src={resume} alt='resume img' />
            </div>
            <div className='right-content'>
                <div className='sub-title'>
                    <h4> I am <span> Rajashree sahoo</span></h4>
                </div>
                <p className='paragraphy'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer non odio nec nisl tempor cursus. Curabitur vitae ligula ut arcu fermentum blandit. Proin sit amet lorem nulla.
                </p>
                <div className='about-info'>
                    <div className='info-title'>
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Language</p>
                        <p>Location</p>
                        <p> Service</p>
                    </div>

                    <div className='info'>
                        <p>: Rajashree sahoo</p>
                        <p>: 24</p>
                        <p>: Indian</p>
                        <p>: English,Hindi,Oriya</p>
                        <p>: Cuttack, Odisha</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <PrimeButton title={"Download cv"} />
            </div>
        </ImageSectionStyled>
    )
}
const ImageSectionStyled = styled.div`
margin-top:5rem;
display: flex;
@media screen and (max-width:1000px) {
flex-direction: column;
.left-content{
    margin-bottom: 2rem;
}
}
.left-content{
  width: 100%;
  img{
    width: 95%;
    height: 70%;
    object-fit: cover;
  }
}
.right-content{
    h4{
        font-size:2rem;
        color: var(--white-color);
        span{
            font-size: 2rem;
        }
    }
    .paragraphy{
        padding: 1rem 0;
    }
  .about-info{
    display: flex;
    padding-bottom: 1.4rem;
    .info-title{
        padding-right: 3rem;
        p{
            font-weight:500;
        }
    }
    .info-title, .info{
     p{
        padding: .3rem 0;
     }
    }
  }
}

`;
export default ImageSection

