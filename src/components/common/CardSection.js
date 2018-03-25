import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 5,
    // backgroundColor: 'black',
    // justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#005005',
    borderRadius: 4,
    // position: 'relative'
  }
};

export { CardSection };
