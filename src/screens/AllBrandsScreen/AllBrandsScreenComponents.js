import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from '../../constants/colors';
import {Jost400, Jost600} from '../../components/StyledText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const BrandsList = ({title, index}) => {
  return (
    <TouchableOpacity style={BrandsListStyles.container}>
      <Jost400 style={BrandsListStyles.text}>{title}</Jost400>
      <MaterialIcons name="chevron-right" size={20} color={colors.primary} />
    </TouchableOpacity>
  );
};

const BrandsListStyles = StyleSheet.create({
  container: {
    height: 50,
    paddingLeft: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: colors.grey58,
  },
});

export const SectionHeader = ({title}) => {
  return (
    <View style={SectionHeaderStyles.container}>
      <Jost600 style={SectionHeaderStyles.text}>{title}</Jost600>
    </View>
  );
};

const SectionHeaderStyles = StyleSheet.create({
  container: {
    height: 30,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingVertical: 3,
    backgroundColor: colors.lightGrey,
  },
  text: {
    fontSize: 14,
    color: colors.primary,
  },
});
