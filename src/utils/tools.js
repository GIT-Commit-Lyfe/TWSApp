import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {upperCase} from 'lodash';
import numeral from 'numeral';

export const {width, height} = Dimensions.get('screen');
export const formatCurrency = (amount, currency = 'EUR') => {
  if (amount) {
    const formattedNumber = numeral(amount).format('0,0');
    let currencySign = '';
    if (upperCase(currency) === 'EUR') {
      currencySign = '€';
    }
    return `${formattedNumber} ${currencySign}`;
  }
  return amount;
};
