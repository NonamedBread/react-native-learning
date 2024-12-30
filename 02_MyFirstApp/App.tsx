import React from 'react';
import { SafeAreaView } from 'react-native';
import HelloWorldScreen from './src/presentation/screens/HelloWorldScreen';

export const App = () => {
  return (
    <SafeAreaView >
      <HelloWorldScreen />
    </SafeAreaView>
  );
};
