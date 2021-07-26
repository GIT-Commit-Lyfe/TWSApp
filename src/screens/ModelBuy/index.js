import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';

import {Jost300, Jost500, Jost600} from '../../components/StyledText';

import styles from './styles';

const ModelBuy = () => {
  const [mode, setMode] = useState('bid');

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.buttonBidContainer}>
          <TouchableOpacity
            onPress={() => setMode('bid')}
            style={
              mode === 'bid'
                ? {...styles.buttonBidGreen, ...styles.buttonLeft}
                : {...styles.buttonBidGrey, ...styles.buttonLeft}
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
                ? {...styles.buttonBidGreen, ...styles.buttonRight}
                : {...styles.buttonBidGrey, ...styles.buttonRight}
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
            <View style={styles.flexRow}>
              <View style={styles.halveWidth}>
                <Image
                  source={{uri: 'https://via.placeholder.com/150.png'}}
                  style={styles.imageStyle}
                />
              </View>

              <View style={styles.halveWidth}>
                <Jost500 style={styles.buyTitleText}>
                  ROLEX “BATMAN” GMT Master II (2016)
                </Jost500>
                <Jost300 style={styles.buyDescriptionText}>
                  Rolex gmt ii from 2016, the watch has been professionally
                  refurbished and maintained. With original box and papers lc
                  100. 1 year warranty from date of purchase. read more>
                </Jost300>
              </View>
            </View>

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
            <TouchableOpacity style={styles.blackButton}>
              <Jost600 style={styles.blackButtonText}>Review Order</Jost600>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.blackButton}>
              <Jost600 style={styles.blackButtonText}>Buy Now</Jost600>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ModelBuy;
