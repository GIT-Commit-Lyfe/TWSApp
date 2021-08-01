import React from 'react';

import {View} from 'react-native';

import {Jost400, Jost600} from '../StyledText';

import styles from './styles';

const BuyAndSellSummary = () => {
  return (
    <View style={styles.buyAndSellSummaryContainer}>
      <View style={styles.bottomContainer}>
        <Jost400
          style={{
            ...styles.buttonTextSmall,
            ...styles.colorGray,
            ...styles.labelContainer,
          }}>
          Highest Bid
        </Jost400>

        <View style={styles.priceContainer}>
          <Jost600 style={{...styles.buttonText, ...styles.colorBlack}}>
            €14.350
          </Jost600>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Jost400
          style={{
            ...styles.buttonTextSmall,
            ...styles.colorGray,
            ...styles.labelContainer,
          }}>
          Last Sold
        </Jost400>

        <View style={styles.middlePriceContainer}>
          <Jost600 style={{...styles.buttonText, ...styles.colorBlack}}>
            €14.350
          </Jost600>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Jost400
          style={{
            ...styles.buttonTextSmall,
            ...styles.colorGray,
            ...styles.labelContainer,
          }}>
          Lowest Ask
        </Jost400>

        <View style={styles.priceContainer}>
          <Jost600 style={{...styles.buttonText, ...styles.colorBlack}}>
            €14.350
          </Jost600>
        </View>
      </View>
    </View>
  );
};

export default BuyAndSellSummary;
