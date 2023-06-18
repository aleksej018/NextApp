import {View, TextInput, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import LogoComponent from '../components/LogoComponent';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  function onRegister() {
    console.log(
      `On register ${username}, ${email}, ${password}, ${passwordConfirmation}`,
    );
    setUsername('');
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
  }

  const disabled =
    username === '' ||
    email === '' ||
    password === '' ||
    passwordConfirmation === '';

  return (
    <View style={styles.root}>
      <LogoComponent />
      <View style={styles.form}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          placeholder="Password Confirmation"
          style={styles.input}
          value={passwordConfirmation}
          onChangeText={setPasswordConfirmation}
        />
      </View>

      <Button
        disabled={disabled}
        title="Register"
        onPress={() => onRegister()}
      />
      <Button title="Login" onPress={() => console.log('login screen')} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },

  form: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '5%',
  },

  input: {
    borderBottomWidth: 1,
    borderColor: 'black',
  },
});
