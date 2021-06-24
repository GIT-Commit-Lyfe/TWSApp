import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {formatCurrency, height} from '../utils/tools';
import colors from '../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Jost400, Jost500, Jost600} from './StyledText';
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
    bottom: 20,
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

export const BasicButton = ({
  onPress,
  backgroundColor = colors.primary,
  textColor = 'white',
  containerStyle,
  textStyle,
  text,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...containerStyle,
        backgroundColor: backgroundColor,
        borderWidth: 1,
        borderColor: colors.primary,
        padding: 10,
        marginVertical: 10,
        flex: 1,
      }}>
      <Jost600 style={{...textStyle, color: textColor, textAlign: 'center'}}>
        {text}
      </Jost600>
    </TouchableOpacity>
  );
};

export const FloatingButton = ({title = 'Buy Now', price, reserved}) => {
  return (
    <TouchableOpacity style={FloatingButtonStyle.button}>
      <Jost500
        style={{...FloatingButtonStyle.title, fontSize: reserved ? 24 : 11}}>
        {reserved ? 'Reserved' : title}
      </Jost500>
      <Jost500
        style={{
          ...FloatingButtonStyle.price,
          fontSize: reserved ? 11 : 24,
        }}>
        {formatCurrency(price)}
      </Jost500>
    </TouchableOpacity>
  );
};

const FloatingButtonStyle = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    marginHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 30,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 10,
    width: '90%',
  },
  title: {
    color: colors.greyCD,
    textAlign: 'center',
  },
  price: {
    color: colors.greyCD,
    textAlign: 'center',
  },
});
