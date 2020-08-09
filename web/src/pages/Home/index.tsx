import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { api } from '../../services/api';

import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';

import StudyIcon from '../../assets/images/icons/study.svg';
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import {
  PageLanding,
  LandingPageContent,
  LogoContainer,
  HeroImage,
  ButtonsContainer,
  TotalConnections
} from './styles';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;
      setTotalConnections(total)
    })
  }, [])

  return (
    <PageLanding>
      <LandingPageContent>
        <LogoContainer>
          <img src={LogoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <HeroImage src={LandingImg} alt="Plataforma de estudos" className="hero-image"/>

        <ButtonsContainer>
          <Link to="study" className="study" >
            <img src={StudyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes" >
            <img src={GiveClassesIcon} alt="Dar aulas"/>
            Dar aulas
          </Link>

        </ButtonsContainer>
        <TotalConnections>
          Total de {totalConnections} conexões <img src={PurpleHeartIcon} alt="conexões"/>
        </TotalConnections>
      </LandingPageContent>
    </PageLanding>
  );
}

export default Landing;
