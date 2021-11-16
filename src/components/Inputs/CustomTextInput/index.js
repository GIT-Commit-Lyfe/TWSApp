import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import colors from '../../../constants/colors';
import {figmaHeight, figmaWidth} from '../../../utils/tools';
import styles from './styles.js';

const CustomTextInput = ({
  placeholder = '',
  style,
  keyboardType = 'default',
  value = '',
  onChange = () => {},
}) => {
  const [text, setText] = useState('');

  const onChangeText = text => {
    console.log(text);
    onChange(text);
  };

  return (
    <View>
      <TextInput
        style={{
          ...styles.textInputDefaultStyle,
          ...style,
        }}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.grey83}
        autoCorrect={false}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CustomTextInput;
