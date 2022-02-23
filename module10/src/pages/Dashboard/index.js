import React from 'react';

import Background from '../../components/Background';
import Appointment from '../../components/Appointment';

import { Container, List } from './styles';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
  return (
  <Background>
    <Container>
      <List
        data={data}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Appointment data={item} />}
      />
    </Container>
  </Background>);
}
