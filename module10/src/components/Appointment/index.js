import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from "date-fns/locale/pt";
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Name, Info, Time } from './styles';

export default function Appointment({ data, onCancel }) {
  const dateParsed = useMemo(
    () => {
      return formatRelative(parseISO(data.date), new Date(), {
        locale: pt,
        addSuffix: true,
      })
    },
    [data.date],
  );

  return (
    <Container past={data.past}>
      <Left>
        <Avatar source={{
          uri:
            data.provider.avatar ? data.provider.avatar.url : 'https://i.ibb.co/fnZY4Nc/244412150-4339573332789091-124622265567051095-n-Copia.jpg'
        }} />

        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>

      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#F64C75" />
        </TouchableOpacity>
      )}

    </Container>
  );
}
