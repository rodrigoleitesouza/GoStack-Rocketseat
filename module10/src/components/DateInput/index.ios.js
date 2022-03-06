import React, { useState, useMemo } from 'react';
import { DatePickerIOS } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText, Picker } from './styles';

export default function DateInput({ date, onChange }) {
  const [opened, setOpened] = useState(false);

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  );

  console.warn.tron(date);
  console.warn.tron(dateFormatted);
  return (

    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="#FFF" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {opened && (
        <Picker>
          <DateTimePicker
            value={date}
            onChange={onChange}
            dateFormat="dd 'de' MMMM 'de' yyyy"
            minimumDate={new Date()}
            minuteInterval={60}
            locale='pt'
            mode='date'
          />
        </Picker>
      )}

    </Container>
  );
}
