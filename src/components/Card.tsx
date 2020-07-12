import React from 'react'
import { View, Text, StyleSheet, Button, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import { Separator } from './Separator';

interface CardProps {
  title: string
}

interface CardButtonProps {
  title: string,
  buttontitle: string,
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
}

export const Card: React.FC<CardProps> = props => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

export const CardButton: React.FC<CardButtonProps> = props => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <Separator vertical size={16}/>
      <View style={styles.button}>
        <Button 
          title={props.buttontitle}
          onPress={props.onPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  titleContainer: {
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'lightblue'
  },
  button: {
    margin: 10
  },
})