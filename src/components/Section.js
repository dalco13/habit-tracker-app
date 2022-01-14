import * as React from 'react';
import { View, Text } from 'react-native';

const Section = ({flex, color, children}) => {
  return(
    <View style={{flex:flex, backgroundColor:color}}>
      {children}
    </View>
  );  
};

export default Section;