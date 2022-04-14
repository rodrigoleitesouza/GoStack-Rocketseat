# Testando a aplicação

Possibilita modificar as configurações do Jest, Babel e webpack.

```
yarn add react-app-rewired -D
```

Alterar as configurações em package.json

De:

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

Para:

```json
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
```

Após isto é necessário adicionar o arquivo config-overrides.js na pasta raiz.

Dentro de src criar a pasta __tests__ e configurar o package.json

```json
"jest": {
  "testMatch": ["**/__tests_/**/*.test.js"],
  "setupFilesAfterEnv": [
    "@testing-library/react/cleanup-after-each", // Limpa a Dom depois de cada teste
    "@testing-library/jest-dom/extend-expect"
  ],
  "moduleNameMapper": {
    "^~/(.*)": "<rootDir>/src/$1" // Utilizando root path
  }
}
```

## Primeiro exemplo

```javascript
test('Example', () => {
  expect(1+1).toBe(2);
});
```

```
yarn test
```

## Adicionar as dependências

```
yarn add @testing-library/jest-dom @testing-library/react -D
```

## Adicionar suporte ao intellisense do jest

```
yarn add @types/jest -D  
```
