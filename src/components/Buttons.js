import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import {formatCurrency, height, width} from '../utils/tools';
import colors from '../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Jost400, Jost500, Jost600} from './StyledText';
import Sort from '../assets/sort.svg';
import FilterModal from './FilterModal';

export const FilterSortModalButton = () => {
  const filterModalRef = useRef();
  const openFilter = () => filterModalRef.current.open();

  return (
    <View style={FilterSortModalButtonStyle.container}>
      <TouchableOpacity
        onPress={openFilter}
        style={FilterSortModalButtonStyle.button}>
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
      <FilterModal ref={filterModalRef} />
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
  onPress = () => {},
  backgroundColor = colors.primary,
  textColor = 'white',
  containerStyle,
  textStyle,
  text = 'Button',
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? colors.grey58 : backgroundColor,
        borderWidth: 1,
        borderColor: colors.primary,
        padding: 10,
        marginVertical: 10,
        ...containerStyle,
      }}>
      <Jost600 style={{...textStyle, color: textColor, textAlign: 'center'}}>
        {text}
      </Jost600>
    </TouchableOpacity>
  );
};

export const FloatingButton = ({
  title = 'Buy Now',
  price,
  reserved,
  containerStyle,
  fontSize = 11,
  onPress = () => {},
}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={onPress}
        style={{...FloatingButtonStyle.button, ...containerStyle}}>
        <Jost500
          style={{
            ...FloatingButtonStyle.title,
            fontSize: reserved ? 24 : fontSize,
          }}>
          {reserved ? 'Reserved' : title}
        </Jost500>
        {price && (
          <Jost500
            style={{
              ...FloatingButtonStyle.price,
              fontSize: reserved ? 11 : 24,
            }}>
            {formatCurrency(price)}
          </Jost500>
        )}
      </TouchableOpacity>
    </SafeAreaView>
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

export const DoubleCapsul = ({
  onPress = () => {},
  firstOption = 'Place a Bid',
  secondOption = 'Market Buy',
  containerStyle,
}) => {
  const [isLeft, setIsLeft] = useState(true);
  const handlePress = () => {
    setIsLeft(p => !p);
    onPress();
  };

  const {
    buttonBidContainer,
    buttonBidGreen,
    buttonBidGrey,
    textWhite,
    textBlack,
  } = StyleSheet.create({
    buttonBidContainer: {
      flexDirection: 'row',
      marginTop: 10,
      backgroundColor: colors.greyF5,
      borderRadius: 20,
      overflow: 'hidden',
      borderColor: colors.greyCD,
      borderWidth: 1,
      ...containerStyle,
    },
    buttonBidGreen: {
      backgroundColor: colors.green,
      flex: 0.5,
      paddingVertical: 8,
      alignItems: 'center',
      borderRadius: 20,
    },
    buttonBidGrey: {
      flex: 0.5,
      paddingVertical: 8,
      alignItems: 'center',
    },
    textWhite: {
      color: '#fff',
    },
    textBlack: {
      color: '#18110C',
    },
  });

  return (
    <View style={buttonBidContainer}>
      <TouchableOpacity
        onPress={handlePress}
        style={isLeft ? {...buttonBidGreen} : {...buttonBidGrey}}>
        <Jost500 style={isLeft ? textWhite : textBlack}>{firstOption}</Jost500>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handlePress}
        style={!isLeft ? {...buttonBidGreen} : {...buttonBidGrey}}>
        <Jost500 style={!isLeft ? textWhite : textBlack}>
          {secondOption}
        </Jost500>
      </TouchableOpacity>
    </View>
  );
};
