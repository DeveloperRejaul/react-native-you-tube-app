import {StyleSheet, Text, View, Animated} from 'react-native';
import React, {useRef} from 'react';
import {FlatList} from 'native-base';

export default function Index() {
  const arr = new Array(40).fill('hello');
  const animation = useRef(new Animated.Value(0)).current;

  return (
    <View>
      <Animated.View></Animated.View>
      <FlatList
        data={arr}
        renderItem={({item}) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
