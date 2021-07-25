import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {Jost400, Jost600} from '../../../components/StyledText';

import styles from './styles';

const BuyAndSell = () => {
  return (
    <View style={styles.buyAndSellPosition}>
      <View style={styles.flexRow}>
        <View style={styles.priceContainer}>
          <Jost400 style={{...styles.buttonTextSmall, ...styles.colorGray}}>
            Highest Bid
          </Jost400>
          <Jost600 style={{...styles.buttonText, ...styles.colorBlack}}>
            €14.350
          </Jost600>
        </View>

        <View style={styles.middlePriceContainer}>
          <Jost400 style={{...styles.buttonTextSmall, ...styles.colorGray}}>
            Last Sold
          </Jost400>
          <Jost600 style={{...styles.buttonText, ...styles.colorBlack}}>
            €14.350
          </Jost600>
        </View>

        <View style={styles.priceContainer}>
          <Jost400 style={{...styles.buttonTextSmall, ...styles.colorGray}}>
            Lowest Ask
          </Jost400>
          <Jost600 style={{...styles.buttonText, ...styles.colorBlack}}>
            €14.350
          </Jost600>
        </View>
      </View>

      <View>
        <View style={styles.flexRow}>
          <TouchableOpacity style={styles.buttonRed}>
            <Jost600 style={styles.buttonText}>SELL</Jost600>
            <Jost600 style={styles.buttonTextSmall}>Or Ask</Jost600>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonGray}>
            <Jost600 style={styles.buttonTextSmall}>Listings</Jost600>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonGreen}>
            <Jost600 style={styles.buttonText}>BUY</Jost600>
            <Jost600 style={styles.buttonTextSmall}>Or Bid</Jost600>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BuyAndSell;
