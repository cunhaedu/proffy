import React from 'react';

import { api } from '../../services/api';

import whatsapp from '../../assets/images/icons/whatsapp.svg';

import {
  Container,
  Header,
  Footer,
  Button
} from './styles';

export interface Teacher {
  id: number,
  subject: string,
  cost: number,
  name: string,
  avatar: string,
  whatsapp: string,
  bio: string
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function handleCreateNewConnection() {
    api.post('connections', {
      user_id: teacher.id
    })
  }

  return (
    <Container>
      <Header>
        <img
          src={teacher.avatar}
          alt="Eduardo"
        />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </Header>
      <p>
        {teacher.bio}
      </p>

      <Footer>
        <p>Preço/Hora <strong>R$ {teacher.cost}</strong></p>
        <Button
          target="_blank"
          onClick={handleCreateNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsapp} alt="whatsapp"/>
          Entrar em contato
        </Button>
      </Footer>
    </Container>
  );
}

export default TeacherItem;
