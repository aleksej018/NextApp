import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Lottie from 'lottie-react-native';
import {Token} from '../util/interface';
import {Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {setToken} from '../components/redux/store/state/tokenSlice';

function SplashScreen({
  setLoading,
}: {
  setLoading: Dispatch<SetStateAction<boolean>>;
}) {
  const dispatch = useDispatch();
  const getToken = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@token');

      if (jsonValue != null) {
        const token: Token = JSON.parse(jsonValue);
        dispatch(setToken(token));
      }
    } catch (e) {
      console.warn(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => getToken(), 3000);
  }, []);

  return (
    <LottieView
      source={require('../../assets/animations/splash.json')}
      autoPlay
      loop
    />
  );
}

export default SplashScreen;
