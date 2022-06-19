import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Modal, ActivityIndicator } from 'react-native';
import {useEffect, useState} from "react";
import * as Network from "expo-network";
import {Provider} from "react-redux";
import store from "./src/store/store";


export default function App() {

  const [isConnectedToInternet,setIsConnectedToInternet] = useState(null);

  useEffect(async() => {
    const networkData = await Network.getNetworkStateAsync();
    setIsConnectedToInternet(networkData.isConnected)
  }, []);

  const login = () => {

  }


  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text  style={{fontSize: 20}}>Native Demo App</Text>
        <Text  style={{fontSize: 14}}>This app is built to establish the use of React Native</Text>

        <View style={{margin: 20, marginTop: 50}}>
          <Text>
            Username:
          </Text>
          <TextInput placeholder="Enter username :"/>
        </View>
        <View style={{margin: 10}}>
          <Text>
            Password:
          </Text>
          <TextInput placeholder="Enter Password :"/>
        </View>
        <View>
          <Button title="Login"/>
        </View>
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
