import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text } from 'react-native';
import { Container, Form, Input, /*SubmitButton*/ } from './styles';

const Main = () => {
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
        />

      </Form>
    </Container>
  );
};

export default Main;

/*
<SubmitButton>
  <Icon name="add" size={20} color="#FFF" />
</SubmitButton>
        */
