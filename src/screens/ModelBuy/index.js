import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

import {Jost300, Jost500, Jost600} from '../../components/StyledText';
import GreyBox from '../../components/GreyBox';

import styles from './styles';

const ModelBuy = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.buttonBidContainer}>
          <TouchableOpacity style={styles.buttonBidGreen}>
            <Jost500 style={styles.textWhite}>Place a Bid</Jost500>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBidGrey}>
            <Jost500 style={styles.textBlack}>Market Buy</Jost500>
          </TouchableOpacity>
        </View>

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

          <View style={styles.tnc}>
            <Jost300 style={{fontSize: 10}}>
              *You will only be charged once your order is filled.
            </Jost300>
          </View>

          <TouchableOpacity style={styles.blackButton}>
            <Jost600 style={styles.blackButtonText}>Review Order</Jost600>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ModelBuy;
