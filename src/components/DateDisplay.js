import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DateDisplay = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.dayOfWeekText}>Friday</Text>
      <Text style={styles.dateText}>January 14th, 2022</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 18
  },
  dayOfWeekText: {
    fontFamily: 'Staatliches_400Regular',
    fontSize: 36,
    fontWeight: 'bold'
  },
  dateText: {
    fontFamily: 'Merriweather_400Regular',
    fontSize: 18,
    marginLeft: 1
  }
});

export default DateDisplay;

