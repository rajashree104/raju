import React from 'react'
import Title from "../components/Title"
import styled from 'styled-components'
import { MainLayout } from '../style/Layouts';
import ImageSection from '../components/ImageSection';
import ReviewsSection from "../components/ReviewsSetion"
import ServicesSection from '../components/ServiceSection'
function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={'About Me'} span={'About Me'}/>
        <ImageSection />
        <ServicesSection />
        <ReviewsSection />
      </AboutStyled>
    </MainLayout>

  );
}

const AboutStyled = styled.section`


`;
export default AboutPage