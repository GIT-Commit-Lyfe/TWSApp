import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {height} from '../utils/tools';
import colors from '../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Jost400} from './StyledText';
import Sort from '../assets/sort.svg';

export const FilterSortModalButton = () => {
  return (
    <View style={FilterSortModalButtonStyle.container}>
      <TouchableOpacity style={FilterSortModalButtonStyle.button}>
        <MaterialIcons
          name="filter-list"
          color={colors.almostWhite}
          size={15}
        />
        <Jost400 style={FilterSortModalButtonStyle.buttonText}>Filter</Jost400>
      </TouchableOpacity>
      <View style={FilterSortModalButtonStyle.separator} />
      <TouchableOpacity style={FilterSortModalButtonStyle.button}>
        <Sort height={15} />
        <Jost400 style={FilterSortModalButtonStyle.buttonText}>Sort</Jost400>
      </TouchableOpacity>
    </View>
  );
};

const FilterSortModalButtonStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: 200,
    padding: 10,
    alignSelf: 'center',
    position: 'absolute',
    top: height - 200,
    borderRadius: 25,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {alignItems: 'center', width: 90},
  buttonText: {fontSize: 13, color: colors.almostWhite},
  separator: {
    height: 35,
    width: 1,
    backgroundColor: colors.almostWhite,
  },
});
