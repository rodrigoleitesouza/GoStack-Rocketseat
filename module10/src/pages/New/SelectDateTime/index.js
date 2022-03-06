import React, { useState, useMemo } from 'react';
import Background from '../../../components/Background';
import DateInput from '../../../components/DateInput';

import { Container } from './styles';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());

  console.tron.warn(date);
  console.tron.warn(setDate);


  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
}
