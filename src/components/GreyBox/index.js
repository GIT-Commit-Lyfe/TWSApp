import React from 'react';

import {TouchableOpacity} from 'react-native';

import {Jost300} from '../../components/StyledText';

import styles from './styles';

const GreyBox = ({style, text, onPress = () => {}, ...props}) => {
  return (
    <TouchableOpacity
      style={{...styles.greyBox, ...style}}
      onPress={onPress}
      {...props}>
      <Jost300 style={styles.greyBoxText}>{text}</Jost300>
    </TouchableOpacity>
  );
};

export default GreyBox;
