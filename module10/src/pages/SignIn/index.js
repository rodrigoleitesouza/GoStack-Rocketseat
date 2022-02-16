import React from 'react';
import { Text } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Background from '../../components/Background';

const SignIn = () => {
  return (
    <Background>
      <Text>SignIn Page</Text>

      <Input icon='call' placeholder='Digite seu nome'/>
      <Button>Entrar</Button>
    </Background>
  )
}

export default SignIn;
