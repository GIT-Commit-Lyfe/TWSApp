import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';
import {figmaHeight, figmaWidth} from '../../utils/tools';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: figmaHeight(16),
  },
  innerContainer: {
    flex: 1,
  },
  title: {fontSize: 24},
  header: {fontSize: 12},
  model: {fontSize: 12, marginTop: figmaHeight(24)},
  footNote: {
    fontSize: 11,
    marginBottom: figmaHeight(24),
  },
  paymentContainer: {
    paddingVertical: figmaHeight(16),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: colors.greyCD,
  },
  paymentTextContainer: {
    flex: 1,
    marginLeft: figmaWidth(10),
  },
  line: {
    height: 1,
    backgroundColor: colors.greyCD,
  },
});

export default styles;
