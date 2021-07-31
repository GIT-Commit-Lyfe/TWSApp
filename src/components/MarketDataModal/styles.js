import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  flex: {flex: 1},
  header: {
    fontSize: 12,
    color: colors.grey58,
    textAlign: 'center',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  tableHeader: {fontSize: 14, color: colors.primary, textAlign: 'center'},
  tableRowItem: {fontSize: 12, textAlign: 'center', paddingVertical: 14},
  tableStackedRowItem: {fontSize: 9, textAlign: 'center'},
});

export default styles;
