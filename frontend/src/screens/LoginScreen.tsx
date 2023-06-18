import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import LogoComponent from '../components/LogoComponent';
import {userLogin} from '../services/AuthService';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const LoginToggler = () => {
    userLogin(username, password).then(res => {
      console.log(res.data);
    });
  };

  const togglerForgetPass = () => {};

  const togglerRegister = () => {
    console.log('asdasdsad');
  };

  const disabled = username === '' || password === '';

  return (
    <>
      <View style={styles.signin}>
        <LogoComponent />
        <View style={styles.signin_form}>
          <View>
            <TextInput
              placeholder="username"
              style={styles.input}
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              placeholder="password"
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
            <Button
              title="Login"
              disabled={disabled}
              onPress={() => LoginToggler()}
            />
            <Button title="forget pass" onPress={togglerForgetPass} />
            <Button title="register" onPress={togglerRegister} />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  signin: {
    margin: '5%',
  },
  input: {
    backgroundColor: 'gray',
    marginBottom: '5%',
    textAlign: 'center',
  },
  signin_form: {
    margin: '10%',
  },
});
export default SignIn;
