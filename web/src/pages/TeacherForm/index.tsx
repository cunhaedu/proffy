import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { api } from '../../services/api';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import {
  Container,
  Form,
  Fieldset,
  ScheduleItem,
  Footer
} from './styles';

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [schedulesItem, setSchedulesItem] = useState([
    { week_day: 0, from: '', to: '' }
  ])

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedSchedulesItem = schedulesItem.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem
    })

    setSchedulesItem(updatedSchedulesItem);
  }

  function addNewScheduleItem() {
    setSchedulesItem([
      ...schedulesItem,
      {
        week_day: 0,
        from: '',
        to: ''
      }
    ])
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: schedulesItem
    }).then(() => {
      alert('Cadastro realizado com sucesso')
      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro')
    })
  }

  return(
    <Container className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="o Primeiro passo é preencher esse formulário de inscrição"
      />

      <Form onSubmit={handleCreateClass} >
        <Fieldset>
          <legend>Seus dados</legend>
          <Input
            name="name"
            label="Nome completo"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            name="avatar"
            label="Avatar"
            value={avatar}
            onChange={e => setAvatar(e.target.value)}
          />
          <Input
            name="whatsapp"
            label="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <TextArea
            name="bio"
            label="biografia"
            value={bio}
            onChange={e => setBio(e.target.value)}
          />
        </Fieldset>

        <Fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Sociologia', label: 'Sociologia' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Química', label: 'Química' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Educação física', label: 'Educação física' },
            ]}
            />

          <Input
            name="cost"
            label="custo da sua hora por aula"
            value={cost}
            onChange={e => setCost(e.target.value)}
          />
        </Fieldset>

        <Fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem} >
              + Novo horário
            </button>
          </legend>

          {schedulesItem.map((scheduleItem, index) => (
            <ScheduleItem key={scheduleItem.week_day} >
            <Select
              name="subject"
              label="Matéria"
              value={scheduleItem.week_day}
              onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
              options={[
                { value: '0', label: 'Domingo' },
                { value: '1', label: 'Segunda-feira' },
                { value: '2', label: 'Terça-feira' },
                { value: '3', label: 'Quarta-feira' },
                { value: '4', label: 'Quinta-feira' },
                { value: '5', label: 'Sexta-feira' },
                { value: '6', label: 'Sábado' },
              ]}
            />

            <Input
              name="from"
              label="Das"
              type="time"
              value={scheduleItem.from}
              onChange={e => setScheduleItemValue(index, 'from', e.target.value)}

           />
            <Input
              name="to"
              label="Até"
              type="time"
              value={scheduleItem.to}
              onChange={e => setScheduleItemValue(index, 'to', e.target.value)}

           />
          </ScheduleItem>
          ))}
        </Fieldset>

        <Footer>
          <p>
            <img src={warningIcon} alt="aviso importante"/>
            Importante! <br />
            Preencha todos os dados
          </p>
          <button  type="submit">Salvar cadastro</button>
        </Footer>

      </Form>
    </Container>
  );
}

export default TeacherForm;
