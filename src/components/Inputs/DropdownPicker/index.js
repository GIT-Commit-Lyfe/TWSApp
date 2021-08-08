import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../../../constants/colors';
import {figmaHeight, figmaWidth, isIos} from '../../../utils/tools';
import {Jost400, Jost500} from '../../StyledText';

const DropdownPicker = ({title = 'Select an item...', options = []}) => {
  const [selected, setSelected] = useState();
  const placeholder = {
    label: title,
    value: null,
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Jost500 style={styles.title}>{title}</Jost500>
      <MaterialIcons name="expand-more" size={30} color={colors.primary} />
    </TouchableOpacity>
  );
};

export default DropdownPicker;
