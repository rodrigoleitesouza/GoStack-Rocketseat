import React, { useEffect, useState } from 'react';

import api from '../../../services/api';

import Background from '../../../components/Background';

import { Container, ProvidersList, Provider, Avatar, Name } from './styles';

export default function SelectProvider({ navigation }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');

      setProviders(response.data);
    }

    loadProviders();
  }, []);

  return (
    <Background>
      <Container>
        <ProvidersList
          data={providers}
          keyExtractor={provider => String(provider.id)}
          renderItem={({ item: provider }) => (
            <Provider onPress={() => navigation.navigate('SelectDateTime', { provider })}>
              <Avatar source={{
                uri:
                provider.avatar ? provider.avatar.url.replace('localhost', '192.168.21.144')
                : 'https://i.ibb.co/fnZY4Nc/244412150-4339573332789091-124622265567051095-n-Copia.jpg'
              }} />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
}
