import React from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from './style';

export default function StyledButton ({ type, content, onPress }) {

  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
  const color = type === 'primary' ? '#FFFFFF' : '#171A20';

  return (
    <View style={styles.container}>
      <Pressable 
        style={[styles.button, { backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color }]}>{ content }</Text>
      </Pressable>
    </View>
  );
}