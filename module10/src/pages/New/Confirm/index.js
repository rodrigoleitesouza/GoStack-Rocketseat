import React, { useMemo } from 'react';
import { formatRelative, parseISO } from 'date-fns';

import pt from 'date-fns/locale/pt-BR';
import api from '../../../services/api';

import Background from '~/components/Background';
import { Container, Avatar, Name, Time, SubmitButton } from './styles';

export default function Confirm({ route, navigation }) {
  const { provider } = route.params;
  const { time } = route.params;

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  );

  async function handleCreateAppointment() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: time,
    });

    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url.replace('localhost', '192.168.21.144')
              : `https://i.ibb.co/fnZY4Nc/244412150-4339573332789091-124622265567051095-n-Copia.jpg`,
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>
        <SubmitButton onPress={handleCreateAppointment}>Confirmar</SubmitButton>
      </Container>
    </Background>
  );
}
