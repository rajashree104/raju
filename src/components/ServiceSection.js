// import React from 'react'
// import { InnerLayout } from '../style/Layouts'
// import styled from 'styled-components';
// import Title from './Title';
// import ServiceCard from './ServiceCard';
// import design from "../img/design.png"
// import intelligence from "../img/intelligence.png"
// import gamedev from "../img/gamede.png"

// function ServiceSection() {
//   return (
// <InnerLayout>
// <ServiceSectionStyled>
// <Title title={'Services'} span={'services'} />
// <div className='services'>
//     <ServiceCard image={design} title={'Web Developer'} paragraph={Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.}/>
//     <ServiceCard image={intelligence} title={'Artificial  Intelligence'} paragraph={Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.}/>
//     <ServiceCard image={gamedev} title={'Game Developer'} paragraph={Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.}/>

// </div>
// </ServiceSectionStyled>
// </InnerLayout>
//   )
// }
// const ServiceSectionStyled = styled.section`


// `;
// export default ServiceSection;
import React from 'react'
import { InnerLayout } from '../style/Layouts'
import styled from 'styled-components'
import Title from './Title'
import ServiceCard from './ServiceCard'
import designs from '../img/designs.png'
import ai from '../img/ai.png'
import gamedev from '../img/game-dev.png' 

function ServiceSection() {
    return (
        <InnerLayout>
            <ServiceSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard
                        image={designs}
                        title={'Web Developer'}
                        paragraph={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.'
                        }
                    />
                  <div className='mid-card'>
                  <ServiceCard
                        image={ai}
                        title={'Artificial Intelligence'}
                        paragraph={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.'
                        }
                    />
                  </div>
                    <ServiceCard
                        image={gamedev}
                        title={'Game Developer'}
                        paragraph={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.'
                        }
                    />
                </div>
            </ServiceSectionStyled>
        </InnerLayout>
    )
}

const ServiceSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
grid-template-columns:repeat(3, 1fr);
grid-gap: 2rem;

@media screen and (max-width:1200px) {
      flex-direction:column;
}
@media screen and (max-width:900px) {
    grid-template-columns:repeat(2, 1fr);
}
@media screen and (max-width:800px) {
    grid-template-columns:repeat(1, 1fr);
}
  }
`;

export default ServiceSection
