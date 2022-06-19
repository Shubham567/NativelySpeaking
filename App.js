import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Modal, ActivityIndicator } from 'react-native';
import {useEffect, useState} from "react";
import * as Network from "expo-network";
import {Provider, useDispatch, useSelector} from "react-redux";
import store from "./src/store/store";
import {loginActionSetLoginState} from "./src/store/actions/loginActions";
import axios from "axios";
import Login from "./src/components/Login";


export default function App() {

  const [isConnectedToInternet,setIsConnectedToInternet] = useState(null);

  const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);

  const getNetworkState = async () => {
    const networkData = await Network.getNetworkStateAsync();
    setIsConnectedToInternet(networkData.isConnected)
  }
  useEffect(async() => {
    await getNetworkState();
  }, []);


  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text  style={{fontSize: 20}}>Native Demo App</Text>
        <Text  style={{fontSize: 14}}>This app is built to establish the use of React Native</Text>

        {
          isLoggedIn ?
          <Login/>
            // check Login component for axios call and reducer
            : "User already logged in"
        }

        <StatusBar style="auto" />
        <Modal animationType="slide"
               transparent={false}
               visible={!isConnectedToInternet}
               onRequestClose={() => setIsConnectedToInternet(false)}
        >
          <View style={{height: "100%", paddingTop: 300, paddingLeft: 30}}>
            {
              isConnectedToInternet === null &&
              <ActivityIndicator />
            }
            <Text style={{fontSize: 18}}>{
              isConnectedToInternet === false || isConnectedToInternet === null ? "Not Connected to internet" : "Connected to Internet"
            }</Text>
          </View>
        </Modal>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
  }
});
