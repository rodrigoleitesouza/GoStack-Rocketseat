import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Name, Info, Time } from './styles';

export default function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar source={{ uri: 'https://i.ibb.co/fnZY4Nc/244412150-4339573332789091-124622265567051095-n-Copia.jpg' }}/>

        <Info>
          <Name>Rodrigo Souza</Name>
          <Time>em 3 horas</Time>
        </Info>
      </Left>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#F64C75" />
      </TouchableOpacity>

    </Container>
  );
}
