import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, SignUpScreen, SplashScreen} from '../screens';
import {Screens} from '../util/enum';
import {RootState} from '../components/redux/store/store';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.HOME}
      screenOptions={screenOptions}>
      <Stack.Screen name={Screens.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
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
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector((state: RootState) => state.token.value);

  if (isLoading) {
    return <SplashScreen setLoading={setIsLoading} />;
  }

  return (
    <NavigationContainer>
      {token === null ? <AuthNavigation /> : <AppNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
