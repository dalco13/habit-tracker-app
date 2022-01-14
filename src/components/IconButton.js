import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { CircularIcons } from '../IconsLibrary';

const IconButton = (props) => {
  const { icon, size } = props;
  return(
    <Image
      style={{width:size?size:64, height:size?size:64}}
      source={CircularIcons[icon]}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default IconButton;