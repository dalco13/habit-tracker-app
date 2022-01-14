import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HabitButton from './HabitButton';
import habitsData from '../habitsData.json';

const HabitButtonsContainer = () => {
  const row1 = [habitsData[0], habitsData[1], habitsData[2]];
  const row2 = [habitsData[3], habitsData[4], habitsData[5]];

  return(
    <View style={styles.container}>
      <View style={{flex: 1, width:'100%', flexDirection:'row', alignItems: 'center', justifyContent: 'space-around'}}>
        {
          row1.map((habit)=><HabitButton habit={habit}/>)
        }
      </View>
      <View style={{flex: 1, width: '100%', flexDirection:'row', alignItems: 'center', justifyContent: 'space-around'}}>
        {
          row2.map((habit)=><HabitButton habit={habit}/>)
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8
  },
});

export default HabitButtonsContainer;