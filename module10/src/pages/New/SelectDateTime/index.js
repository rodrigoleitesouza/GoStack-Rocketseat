import React, { useState, useMemo } from 'react';
import Background from '../../../components/Background';
import DateInput from '../../../components/DateInput';

import { Container } from './styles';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());

  console.tron.warn(typeof date);
  console.tron.warn(date);
  console.tron.warn(typeof setDate);
  console.tron.warn(setDate);

  return (
    <Background>
      <Container>
        <DateInput date={new Date()} onChange={setDate} />
      </Container>
    </Background>
  );
}


