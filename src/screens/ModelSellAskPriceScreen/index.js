import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import BuyAndSellSummary from '../../components/BuyAndSellSummary';
import {Jost300, Jost400, Jost500, Jost600} from '../../components/StyledText';
import styles from './styles';
import {figmaHeight, formatCurrency} from '../../utils/tools';
import {BasicButton} from '../../components/Buttons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';
import CustomTextInput from '../../components/Inputs/CustomTextInput';
import DropdownPicker from '../../components/Inputs/DropdownPicker';
import SelectionModal from '../../components/SelectionModal';

const ModelSellAskPriceScreen = ({navigation}) => {
  const handleSubmit = () => {
    navigation.navigate('ModelSellPreview');
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.innerContainer}>
        <BuyAndSellSummary />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.innerContainer}>
          <Jost300 style={styles.median}>Median Price of Listings*</Jost300>
          <Jost500 style={styles.medianPrice}>{formatCurrency(14350)}</Jost500>

          <CustomTextInput
            placeholder="Enter Desired Selling Price (Ask)"
            keyboardType="decimal-pad"
          />

          <SelectionModal
            placeholder="Order Expiration: 30 days"
            containerStyle={{borderColor: colors.greyE6}}
            fontColor={colors.grey76}
            items={[
              {label: '7 days', value: '7 days', key: 0},
              {label: '14 days', value: '14 days', key: 1},
              {label: '30 days', value: '30 days', key: 2},
            ]}
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
        </View>

        <View style={styles.buttonContainer}>
          <BasicButton
            text="Review Order"
            containerStyle={styles.button}
            onPress={handleSubmit}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const TransactionDetails = ({data, containerStyle, total}) => {
  return (
    <View style={{...styles.transactionDetailsContainer, ...containerStyle}}>
      <View style={styles.transactionDetailsInnerContainer}>
        {data.map((item, idx) => {
          return (
            <View style={styles.transactionItemsContainer} key={idx}>
              <Jost300 style={styles.itemLabel}>{item.label}</Jost300>
              <Jost300 style={styles.itemValue}>{item.value}</Jost300>
            </View>
          );
        })}
      </View>
      {Boolean(total) && (
        <View style={styles.transactionTotalContainer}>
          <Jost600 style={styles.totalLabel}>{total.label}</Jost600>
          <Jost600 style={styles.totalValue}>{total.value}</Jost600>
        </View>
      )}
    </View>
  );
};

export default ModelSellAskPriceScreen;
