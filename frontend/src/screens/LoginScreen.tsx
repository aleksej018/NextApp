import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import LogoComponent from '../components/LogoComponent';
import {userLogin} from '../services/AuthService';
import {Screens} from '../util/enum';
import {setToken} from '../components/redux/store/state/tokenSlice';

const SignIn = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const LoginToggler = () => {
    userLogin(username, password).then(res => {
      dispatch(setToken(res.data));
    });
  };

  const togglerForgetPass = () => {};

  const togglerRegister = () => {
    navigation.push(Screens.SIGN_UP);
  };

  const disabled = username === '' || password === '';

  return (
    <>
      <View style={styles.signIn}>
        <LogoComponent />
        <View style={styles.signIn_form}>
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
  signIn: {
    margin: '5%',
  },
  input: {
    backgroundColor: 'gray',
    marginBottom: '5%',
    textAlign: 'center',
  },
  signIn_form: {
    margin: '10%',
  },
});
export default SignIn;
