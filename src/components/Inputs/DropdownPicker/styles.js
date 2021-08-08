import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../../constants/colors';
import {figmaHeight, figmaWidth} from '../../../utils/tools';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingVertical: figmaHeight(10),
    paddingHorizontal: figmaWidth(16),
    borderColor: colors.greyE6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    color: colors.grey76,
  },
});

export default styles;
