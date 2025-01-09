import React, { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Pressable
        onPress={() => setCount(prev => prev + 1)}
        onPressIn={() => console.log('터치 시작')}
        onPressOut={() => console.log('터치 종료')}
        onLongPress={() => console.log('길게 누르기')}
        delayLongPress={1000}  // 1초 후 롱프레스 활성화
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}  // 터치 영역 확장
        pressRetentionOffset={{ top: 20, bottom: 20, left: 20, right: 20 }}
        style={({ pressed }) => [
          styles.button,
    {
      opacity: pressed ? 0.7 : 1,
      transform: [{ scale: pressed ? 0.95 : 1 }],
    },
  ]}
>
  <Text style={styles.buttonText}>Increment</Text>
</Pressable>
      <Button title="Decrement" onPress={() => setCount(prev => prev - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 80,
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CounterScreen;
