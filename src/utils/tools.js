import React from 'react';
import {Dimensions, Platform} from 'react-native';
import {upperCase} from 'lodash';
import numeral from 'numeral';

export const {width, height} = Dimensions.get('screen');

export const figmaHeight = number => (number * height) / 840;
export const figmaWidth = number => (number * width) / 390;

export const formatCurrency = (amount, currency = 'EUR', shortened = false) => {
  if (amount) {
    let formattedNumber = amount;
    if (shortened) {
      formattedNumber = numeral(amount).format('0[.]0a');
      const numbers = formattedNumber.slice(0, formattedNumber.length - 1);
      const letter = formattedNumber.slice(formattedNumber.length - 1);
      formattedNumber = numbers + letter.toUpperCase();
    } else {
      formattedNumber = numeral(amount).format('0,0').replace(',', '.');
    }
    let currencySign = '';
    if (upperCase(currency) === 'EUR') {
      currencySign = '€';
    }
    return `${formattedNumber} ${currencySign}`;
  }
  return amount;
};

export const isIos = Platform.OS === 'ios';
