import Reactotron, { asyncStorage } from 'reactotron-react-native';
import { reactotronRedux } from "reactotron-redux";
import reactotronSaga from "reactotron-redux-saga";
//import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from "react-native";

if (__DEV__) {
  const tron = Reactotron
    //.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: '192.168.21.144' })
    .useReactNative()
    .use(asyncStorage())
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();


  tron.clear();

  console.tron = tron;
}
