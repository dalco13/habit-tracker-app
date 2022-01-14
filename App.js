import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import DateDisplay from './src/components/DateDisplay';
import HabitButtonsContainer from './src/components/HabitButtonsContainer';
import ProgressVisual from './src/components/ProgressVisual';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_Condensed,
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>
        <DateDisplay />
      </View>
      <View style={{flex:3}}>
        <ProgressVisual />
      </View>
      <View style={{flex:3}}>
        <HabitButtonsContainer />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
