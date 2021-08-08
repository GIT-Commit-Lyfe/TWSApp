import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import {BasicButton} from '../../components/Buttons';

import BuyAndSellSummary from '../../components/BuyAndSellSummary';
import {Jost300, Jost500, Jost600} from '../../components/StyledText';
import {ModelDetailBox} from '../CollectionListingsScreen.js';

import styles from './styles';

const ModelBuy = ({navigation}) => {
  const [mode, setMode] = useState('bid');
  const data = {
    id: 1,
    brand: 'Rolex',
    code: 'RLX',
    SECode: 'F4',
    reference: '16610LV',
    significantEdition: 'KERMIT FLAT 4',
    collection: 'Submariner Date',
    year: '2004',
    price: 13350,
    currency: 'EUR',
    condition: 'Fair',
    accomodation: 'Full Set',
    country: 'DE',
    city: 'Berlin',
    sellerType: 'Individual Investor',
    sellerId: 1,
    seller: 'Amazing World',
    description: 'Lorem ipsum',
    modelUrl: 'https://via.placeholder.com/150.png',
  };

  const handleReviewOrder = () => {
    navigation.navigate('ModelOrderDetails');
  };

  const handleBuyNow = () => {
    navigation.navigate('ModelOrderDetails');
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <BuyAndSellSummary />

        <View style={styles.buttonBidContainer}>
          <TouchableOpacity
            onPress={() => setMode('bid')}
            style={
              mode === 'bid'
                ? {...styles.buttonBidGreen}
                : {...styles.buttonBidGrey}
            }>
            <Jost500
              style={mode === 'bid' ? styles.textWhite : styles.textBlack}>
              Place a Bid
            </Jost500>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setMode('buy')}
            style={
              mode === 'buy'
                ? {...styles.buttonBidGreen}
                : {...styles.buttonBidGrey}
            }>
            <Jost500
              style={mode === 'buy' ? styles.textWhite : styles.textBlack}>
              Market Buy
            </Jost500>
          </TouchableOpacity>
        </View>

        {mode === 'bid' ? (
          <>
            <View style={{marginTop: 30}}>
              <TextInput
                style={styles.textInput}
                maxLength={10}
                placeholder="Enter Bid"
              />
            </View>

            <View style={{marginTop: 15}}>
              <TextInput
                style={styles.textInput}
                maxLength={10}
                placeholder="Enter Bid"
              />
            </View>
          </>
        ) : (
          <View style={styles.buyContainer}>
            <ModelDetailBox data={data} />

            <TouchableOpacity style={styles.buyButton}>
              <Jost600>Details</Jost600>
            </TouchableOpacity>

            <Jost300 style={{marginTop: 5}}>
              You are about to purchase <Jost600>this item.</Jost600>
            </Jost300>
          </View>
        )}

        <View style={{marginTop: 20}}>
          <View style={{marginBottom: 8, ...styles.specList}}>
            <Jost300>Sellers Asking Price</Jost300>
            <Jost300>13.350,00 €</Jost300>
          </View>

          <View style={{marginBottom: 8, ...styles.specList}}>
            <Jost300>Verification and Processing Fee</Jost300>
            <Jost300>250,00 €</Jost300>
          </View>

          <View style={{marginBottom: 8, ...styles.specList}}>
            <Jost300>Taxes and Custom Fees</Jost300>
            <Jost300>150,00 €</Jost300>
          </View>

          <View style={{marginBottom: 15, ...styles.specList}}>
            <Jost300>Shipping</Jost300>
            <Jost300>150,00 €</Jost300>
          </View>

          <View style={styles.total}>
            <Jost600>TOTAL* (EUR)</Jost600>
            <Jost600>13.900,00 €</Jost600>
          </View>

          {mode === 'bid' && (
            <View style={styles.tnc}>
              <Jost300 style={{fontSize: 10}}>
                *You will only be charged once your order is filled.
              </Jost300>
            </View>
          )}

          {mode === 'bid' ? (
            <BasicButton text="Review Order" onPress={handleReviewOrder} />
          ) : (
            <BasicButton text="Buy Now" onPress={handleBuyNow} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ModelBuy;
