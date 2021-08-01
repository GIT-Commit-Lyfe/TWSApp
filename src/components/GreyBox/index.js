import React from 'react';

import {TouchableOpacity} from 'react-native';

import {Jost300} from '../../components/StyledText';

import styles from './styles';

const GreyBox = ({style, text}) => {
  return (
    <TouchableOpacity style={{...styles.greyBox, ...style}}>
      <Jost300 style={styles.greyBoxText}>{text}</Jost300>
    </TouchableOpacity>
  );
};

export default GreyBox;
