import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Jost600} from '../../../components/StyledText';
import BuyAndSellSummary from '../../../components/BuyAndSellSummary';

import ArrowUpIcon from '../../../assets/arrow-up-white.svg';

import styles from './styles';

const BuyAndSell = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.buyAndSellPosition}>
        <View style={styles.buttonContainner}>
          <BuyAndSellSummary />
        </View>

        <View style={styles.buttonContainner}>
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
              <Jost600 style={styles.buttonTextSmall}>Listings</Jost600>

              <ArrowUpIcon />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonGreen}
              onPress={() => navigation.push('ModelBuy')}>
              <Jost600 style={styles.buttonText}>BUY</Jost600>
              <Jost600 style={styles.buttonTextSmall}>Or Bid</Jost600>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BuyAndSell;
