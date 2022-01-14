import * as React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const ProgressVisual = () => {
  return(
    <View style={styles.container}>
      <ImageBackground
        style={styles.protoImage}
        source={require('../../assets/images/sisyphus_drawing.jpg')}
        resizeMode='cover'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },
  protoImage: {
    flex: 1
  }
});

export default ProgressVisual;
