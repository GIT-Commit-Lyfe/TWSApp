import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

const Accesories = () => {
  return (
    <View style={styles.accesoriesContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Accesories</Text>
      </View>
    </View>
  );
};

export default Accesories;
