import React from 'react';
import {Button, Text, TextInput, View} from "react-native";
import axios from "axios";
import {loginActionSetLoginState} from "../store/actions/loginActions";
import {useDispatch} from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const login = async () => {
    try{
      const res = await axios.get("https://example.com");
      dispatch(loginActionSetLoginState(true));
      console.log(res.data);
    }
    catch (e){
      logout();
    }
  }

  const logout = () => {
    dispatch(loginActionSetLoginState(false));
  }

  return (
    <View>
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
        <Button title="Login" onPress={login}/>
      </View>
    </View>
  );
};

export default Login;
