import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import CarItem from '../CarItem'
import styles from './style';
import cars from './cars'

export default function CarsList (props) {

  return (
    <View style={styles.container}>
      <FlatList 
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        snapToAlignment="start"
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height}
      />
    </View> 
  );
}