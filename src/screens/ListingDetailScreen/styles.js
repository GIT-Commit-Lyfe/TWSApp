import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {width} from '../../utils/tools';

const styles = StyleSheet.create({
  safeContainer: {flex: 1, backgroundColor: 'white'},
  flex: {flex: 1},
  followedContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 10,
    position: 'absolute',
    alignSelf: 'flex-end',
    top: width,
    right: 20,
  },
  followed: {fontSize: 12, color: colors.almostWhite},
  simpleListContainer: {marginVertical: 25},
  buttonsContainer: {flexDirection: 'row', justifyContent: 'space-evenly'},
  buttons: {
    paddingVertical: 12,
    width: width * 0.45,
    height: 56,
    borderRadius: 23,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.greyCD,
  },
  reportContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reportText: {
    fontSize: 11,
    marginLeft: 8,
    color: colors.primary,
  },
  separator: {
    height: 1,
    width: width,
    backgroundColor: colors.greyCD,
    marginTop: 24,
  },
  referenceContainer: {
    backgroundColor: colors.primary,
    marginLeft: 20,
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  reference: {
    fontSize: 12,
    color: colors.almostWhite,
  },
  sectionMargin: {
    marginVertical: 30,
  },
  priceGraph: {
    paddingHorizontal: 10,
  },
  basicButtonsContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  basicSeparator: {
    width: 10,
  },
});

export default styles;
