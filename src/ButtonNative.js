import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export function ButtonNative({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
