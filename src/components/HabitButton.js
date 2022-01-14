import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconButton from './IconButton';

const HabitButton = (props) => {
  const { habit } = props;
  return(
    <View style={styles.container}>
      <IconButton icon={habit ? habit.icon : 'bed'} size={100}/>
      <Text style={styles.titleText}>{habit ? habit.title : "{Habit Title}"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontFamily: 'roboto-condensed',
    fontSize: 18,
    margin: 8
  }
});

export default HabitButton;