import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  containerCustomStyle: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  filterCloseButtonStyle: {alignItems: 'center'},
  filterTitleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.greyCD,
  },
  titleStyle: {
    fontSize: 24,
    textAlign: 'center',
  },
  filterCategoryContainer: {
    paddingVertical: 9,
    paddingHorizontal: 13,
  },
  titleButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterTitleText: {
    color: colors.grey58,
    fontSize: 14,
  },
  filterItemContainer: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  line: {height: 1, backgroundColor: colors.greyCD},
});

export default styles;
