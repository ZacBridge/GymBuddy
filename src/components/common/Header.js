// Imports libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// Make a Component
//Props (properties) gets called from the parent (App) to the child (Header)
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      {/*Parent component should be providing a property called headerText*/}
     <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#005005',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    // paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 50 },
    shadowOpacity: 0.5,
    elevation: 5,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: '#fff',
  }
};


// Make the component available to other parts of the App
export { Header };
