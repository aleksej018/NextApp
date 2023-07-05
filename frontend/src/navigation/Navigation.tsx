import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, SignUpScreen, SplashScreen} from '../screens';

enum Screens {
  HOME = 'Home',
  SIGN_IN = 'SignIn',
  SIGN_UP = 'SignUp',
  SPLASH = 'Splash',
}

const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};

const AppNavigation = () => {
  return <></>;
};

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.SIGN_IN}
      screenOptions={screenOptions}>
      <Stack.Screen name={Screens.SIGN_IN} component={LoginScreen} />
      <Stack.Screen name={Screens.SIGN_UP} component={SignUpScreen} />
      {/* <Stack.Screen name={} component={} /> */}
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {token === null ? <AuthNavigation /> : <AppNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
