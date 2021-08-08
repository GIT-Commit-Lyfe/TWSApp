import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Jost300, Jost400, Jost500, Jost600} from '../../components/StyledText';
import colors from '../../constants/colors';
import {figmaHeight, figmaWidth, formatCurrency} from '../../utils/tools';
import {TransactionDetails} from '../ModelSellAskPriceScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BasicButton} from '../../components/Buttons';
import styles from './styles';

const ModelOrderDetailsScreen = ({navigation}) => {
  const handleConfirm = () => {
    navigation.navigate('Success');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.innerContainer}>
          <Jost600 style={styles.title}>Order Details</Jost600>
          <Jost400 style={styles.header}>
            Confirm your bid details below
          </Jost400>

          <Jost500 style={styles.model}>
            ROLEX "BATMAN" GMT Master II (2016)
          </Jost500>
          <TransactionDetails
            data={[
              {label: 'Sellers Asking Price', value: formatCurrency(13350)},
              {
                label: 'Verification and Processing Fee',
                value: formatCurrency(250),
              },
              {label: 'Sellers Asking Price', value: formatCurrency(150)},
              {label: 'Sellers Asking Price', value: formatCurrency(150)},
            ]}
            total={{label: 'TOTAL* (EUR)', value: formatCurrency(13900)}}
          />
          <Jost300 style={styles.footNote}>
            *All applicable import duties and taxes included in price
          </Jost300>

          <AdditionalInfo title="Shipping Address" value="Riehlstr. 9" />

          <AdditionalInfo
            title="Payment Method"
            value="Paypal for canbork@gmail.com"
            onPress={() =>
              navigation.navigate('PaymentMethods', {
                navigateTo: 'ModelOrderDetails',
              })
            }
          />

          <View style={styles.line} />
        </View>
        <BasicButton text="Confirm" onPress={handleConfirm} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ModelOrderDetailsScreen;

const AdditionalInfo = ({title, value, onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.paymentContainer}>
      <FontAwesome name="id-card" size={figmaHeight(20)} />
      <View style={styles.paymentTextContainer}>
        <Jost600>{title}</Jost600>
        <Jost400>{value}</Jost400>
      </View>
      <MaterialIcons
        name="chevron-right"
        size={figmaHeight(20)}
        color={colors.primary}
      />
    </TouchableOpacity>
  );
};
