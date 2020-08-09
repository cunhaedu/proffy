import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/images/logo.svg';
import BackIcon from '../../assets/images/icons/back.svg';

import {
  Header,
  TopBar,
  HeaderContent
} from './styles';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <Header>
      <TopBar>
        <Link to="/">
          <img src={BackIcon} alt="voltar para home"/>
        </Link>
        <img src={LogoImg} alt="Proffy"/>
      </TopBar>
      <HeaderContent>
        <strong>{props.title}</strong>
        { props.description && <p>{props.description}</p> }
        {props.children}
      </HeaderContent>
    </Header>
  );
}

export default PageHeader;
