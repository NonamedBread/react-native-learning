import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CounterScreen from './src/presentation/screens/CounterScreen';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HelloWorldScreen name="Bread Bread Bread"/> */}
      <CounterScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
