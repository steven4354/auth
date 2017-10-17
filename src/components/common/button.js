import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
};
//onPress is a expected property of TouchableOpacity like onClick
//when the button is pressed the onPress function is ran, see album_list

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    //these two items will make the button stretch to fit the width of containerStyle
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
}
export default Button;
