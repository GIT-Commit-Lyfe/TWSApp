import React from 'react';
import {get} from 'lodash';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {Jost400, Jost600} from '../../components/StyledText';
import colors from '../../constants/colors';
import {figmaHeight, figmaWidth} from '../../utils/tools';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BasicButton} from '../../components/Buttons';

const PaymentMethodScreen = ({navigation, route}) => {
  const navigateTo = get(route, 'params.navigateTo', '');

  const handleSave = () => {
    if (navigateTo) navigation.navigate(navigateTo);
    else navigation.navigate('ModelSellPreview');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Jost600 style={styles.title}>Payment Methods</Jost600>
          <View style={styles.paymentMethods}>
            <TouchableOpacity style={styles.button}>
              <Jost400>Credit Card or Paypal</Jost400>
              <MaterialIcons name="expand-more" size={20} />
            </TouchableOpacity>

            <View style={styles.separator}>
              <View style={styles.line} />
              <Jost600 style={styles.or}>OR</Jost600>
              <View style={styles.line} />
            </View>

            <TouchableOpacity style={styles.button}>
              <Jost600>
                Buy Now <Jost400>for 281 US$ with Apple Pay</Jost400>
              </Jost600>
              <MaterialIcons name="expand-more" size={20} />
            </TouchableOpacity>

            <View style={styles.separator}>
              <View style={styles.line} />
              <Jost600 style={styles.or}>OR</Jost600>
              <View style={styles.line} />
            </View>

            <TouchableOpacity style={styles.button}>
              <Jost600>
                Buy Now <Jost400>for 281 US$ with Alipay</Jost400>
              </Jost600>
              <MaterialIcons name="expand-more" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <BasicButton text="Save" onPress={handleSave}></BasicButton>
      </View>
    </SafeAreaView>
  );
};

export default PaymentMethodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    paddingHorizontal: figmaWidth(10),
    paddingVertical: figmaHeight(20),
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 24,
  },
  paymentMethods: {
    marginVertical: figmaHeight(20),
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: figmaHeight(16),
    paddingHorizontal: figmaWidth(12),
    borderWidth: 1,
    borderColor: colors.greyCD,
  },
  separator: {
    paddingVertical: figmaHeight(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  or: {
    marginHorizontal: figmaWidth(10),
    color: colors.greyCD,
    fontSize: 12,
  },
  line: {
    height: 1,
    backgroundColor: colors.greyCD,
    flex: 1,
  },
});
