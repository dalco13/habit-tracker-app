import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import DateDisplay from './src/components/DateDisplay';
import HabitButtonsContainer from './src/components/HabitButtonsContainer';
import ProgressVisual from './src/components/ProgressVisual';

/* IMPORT FONTS */
import { useFonts, Arvo_400Regular } from '@expo-google-fonts/arvo';
import { Merriweather_400Regular } from '@expo-google-fonts/merriweather';
import { RobotoCondensed_400Regular } from '@expo-google-fonts/roboto-condensed';
import { Staatliches_400Regular } from '@expo-google-fonts/staatliches';
import { WorkSans_400Regular, WorkSans_500Medium } from '@expo-google-fonts/work-sans';

export default function App() {
  let [fontsLoaded] = useFonts({
    Arvo_400Regular, Merriweather_400Regular, WorkSans_400Regular, WorkSans_500Medium, RobotoCondensed_400Regular, Staatliches_400Regular
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
