import React from 'react';
import { View, TextInput } from 'react-native';


const Input = ({value, onChangeText, placeholder}) => {

  const { containerStyle, inputStyle } = styles;

  return(
    <View style={containerStyle}>
      <TextInput
        style={inputStyle}
        value={value}
        onChangeText = {onChangeText}
        placeholder={placeholder}
        autoCorrect={false}
        editable={false}
      />
      </View>
    );
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007aff',
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1
  }
};

export { Input }
