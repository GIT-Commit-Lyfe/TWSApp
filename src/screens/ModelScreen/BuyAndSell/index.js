import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Jost400, Jost600} from '../../../components/StyledText';

import ArrowUpIcon from '../../../assets/arrow-up-white.svg';

import styles from './styles';

import {formatCurrency, width} from '../../../utils/tools';

const BuyAndSell = ({summary = false, containerStyle}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View
        style={
          summary ? {width, ...containerStyle} : styles.buyAndSellPosition
        }>
        <View style={styles.buttonContainner}>
          <View style={styles.flexRow}>
            <View style={styles.topContainer}>
              <Jost400
                style={{
                  ...styles.buttonTextSmall,
                  ...styles.colorGray,
                  ...styles.labelContainer,
                }}>
                Highest Bid:
              </Jost400>
              <Jost600 style={styles.blackText}>
                {formatCurrency(14350)}
              </Jost600>
            </View>
            <View style={styles.topContainerMiddle}>
              <Jost400
                style={{
                  ...styles.buttonTextSmall,
                  ...styles.colorGray,
                  ...styles.labelContainer,
                }}>
                Last Sold:
              </Jost400>
              <Jost600 style={styles.blackText}>
                {formatCurrency(14350)}
              </Jost600>
            </View>
            <View style={styles.topContainer}>
              <Jost400
                style={{
                  ...styles.buttonTextSmall,
                  ...styles.colorGray,
                  ...styles.labelContainer,
                }}>
                Lowest Ask:
              </Jost400>
              <Jost600 style={styles.blackText}>
                {formatCurrency(14350)}
              </Jost600>
            </View>
          </View>

          {!summary && (
            <View style={styles.flexRow}>
              <TouchableOpacity
                style={styles.buttonRed}
                onPress={() => navigation.navigate('ModelSellDetails')}>
                <Jost600 style={styles.buttonText}>SELL</Jost600>
                <Jost600 style={styles.buttonTextSmall}>Or Ask</Jost600>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonGray}
                onPress={() => navigation.navigate('CollectionListings')}>
                <View style={styles.greyInnerContainer}>
                  <Jost600 style={styles.buttonTextSmall}>Listings</Jost600>
                  <View style={{marginTop: 5}}>
                    <ArrowUpIcon />
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonGreen}
                onPress={() => navigation.push('ModelBuy')}>
                <Jost600 style={styles.buttonText}>BUY</Jost600>
                <Jost600 style={styles.buttonTextSmall}>Or Bid</Jost600>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BuyAndSell;
