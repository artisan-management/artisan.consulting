import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import adam from '../images/adamparrish.png'
import tim from '../images/timmitrovich.png'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={4}>
      <Hero offset={0}>
        <BigTitle>Artisan Consulting</BigTitle>
        <Subtitle>Management, Development, User Experience and Strategy Consulting Services.</Subtitle>
      </Hero>
      <About offset={1}>
        <Title>Tim Mitrovich</Title>
        <AboutHero>
          <Avatar src={tim} alt="Tim Mitrovich" />
          <AboutSub>Tim Mitrovich Co-Founder and Managing Partner of Artisan Consulting has 25 years of combined experience
          in Product Development, Business Development and Software Engineering. </AboutSub>
        </AboutHero>
        <AboutDesc>More text here.</AboutDesc>
      </About>
      <About offset={2}>
        <Title>Adam Parrish</Title>
        <AboutHero>
          <Avatar src={adam} alt="Adam Parrish" />
          <AboutSub>
            Adam Parrish Co-Founder and Managing Partner of Artisan Consulting has a 15 year and growing background in
            enterprise consulting. He has provided Software Development guidance to clients such as HBO, Bloomberg,
            Morgan Stanley, the USAF, and a myriad of small startups in New York and San Francisco.
          </AboutSub>
        </AboutHero>
        <AboutDesc>More text here.</AboutDesc>
      </About>
      <Contact offset={3}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            <a href="mailto:contact@artisan.consulting">Contact Us</a><br/>&nbsp;
          </ContactText>
        </Inner>
        <Footer>&copy; 2019 by Artisan Consulting, LLC.</Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index
