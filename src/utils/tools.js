import React from 'react';
import {StyleSheet, Text, View, Dimensions, Platform} from 'react-native';
import {upperCase} from 'lodash';
import numeral from 'numeral';

export const {width, height} = Dimensions.get('screen');

export const figmaHeight = number => (number * height) / 840;
export const figmaWidth = number => (number * width) / 390;

export const formatCurrency = (amount, currency = 'EUR') => {
  if (amount) {
    const formattedNumber = numeral(amount).format('0,0').replace(',', '.');
    let currencySign = '';
    if (upperCase(currency) === 'EUR') {
      currencySign = '€';
    }
    return `${formattedNumber} ${currencySign}`;
  }
  return amount;
};

export const isIos = Platform.OS === 'ios';
