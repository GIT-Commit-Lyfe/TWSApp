import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import {Jost300, Jost400, Jost500, Jost600} from '../../components/StyledText';
import styles from './styles';
import {figmaHeight, formatCurrency} from '../../utils/tools';
import {BasicButton, FloatingButton} from '../../components/Buttons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';
import {TransactionDetails} from '../ModelSellAskPriceScreen';
import {ModelDetailBox} from '../CollectionListingsScreen.js';
import BuyAndSell from '../ModelScreen/BuyAndSell';

const ModelSellPreviewScreen = ({navigation}) => {
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

  const handleSubmitOrder = () => {
    navigation.navigate('Home');
    // navigation.popToTop();
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.innerContainer}>
        <BuyAndSell
          summary
          containerStyle={{
            marginTop: figmaHeight(20),
            marginBottom: figmaHeight(12),
          }}
        />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.innerContainer}>
          <Jost600 style={styles.title}>Listing Preview</Jost600>
          <ModelDetailBox data={data} />

          <Jost600 style={styles.expirationPeriod}>
            {'Expiration Period: '}
            <Jost400>{'30 days'}</Jost400>
          </Jost600>

          <View style={styles.separator} />
          <EditInfoButton
            title="Edit Item Details"
            onPress={() => navigation.push('ModelSellDetails')}
          />
          <EditInfoButton
            title="Edit Photos"
            onPress={() => navigation.push('ModelSellPhotos')}
          />
          <EditInfoButton
            title="Edit Listing Details"
            onPress={() => navigation.push('ModelSellAskPrice')}
          />

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
            * You will only be charged once your order is filled.
          </Jost300>
          <PaymentSelection navigation={navigation} />
        </View>
      </ScrollView>
      <FloatingButton
        containerStyle={styles.buttonContainer}
        title="Submit Order"
        onPress={handleSubmitOrder}
        fontSize={14}
      />
    </SafeAreaView>
  );
};

const EditInfoButton = ({title = 'Edit Item Details', onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.middleButtons}>
      <Jost500 style={styles.buttonTitle}>{title}</Jost500>
      <MaterialIcons
        name="chevron-right"
        size={figmaHeight(20)}
        color={colors.primary}
      />
    </TouchableOpacity>
  );
};

const PaymentSelection = ({navigation}) => {
  const handleOnPress = () => {
    navigation.navigate('PaymentMethods');
  };
  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.paymentContainer}>
      <FontAwesome name="id-card" size={figmaHeight(20)} />
      <View style={styles.paymentTextContainer}>
        <Jost600>Payment Method</Jost600>
        <Jost400>Paypal to canbork@gmail.com</Jost400>
      </View>
      <MaterialIcons
        name="chevron-right"
        size={figmaHeight(20)}
        color={colors.primary}
      />
    </TouchableOpacity>
  );
};

export default ModelSellPreviewScreen;
