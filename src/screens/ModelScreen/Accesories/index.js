import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Jost600 } from '../../../components/StyledText';

import styles from './styles';

const Accesories = () => {
  return (
    <View style={styles.accesoriesContainer}>
      <View style={styles.header}>
        <Jost600 style={styles.headerText}>Accesories</Jost600>
      </View>
    </View>
  );
};

export default Accesories;
