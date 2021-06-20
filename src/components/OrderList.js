import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Jost400, Jost500, Jost600} from './StyledText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';
import {formatCurrency, width} from '../utils/tools';

export default function OrderList() {
  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.columnContainer,
            width: width / 3.3,
          }}>
          <Jost600>ITEM</Jost600>
          <MaterialIcons name="expand-more" size={14} color={colors.primary} />
        </View>
        <View style={{...styles.columnContainer}}>
          <Jost600>EXPIRATION</Jost600>
          <MaterialIcons name="expand-more" size={14} color={colors.primary} />
        </View>
        <View style={{...styles.columnContainer, width: width / 3}}>
          <Jost600>BID</Jost600>
          <MaterialIcons name="expand-more" size={14} color={colors.primary} />
        </View>
      </View>
      <FlatList
        bounces={false}
        data={[
          {
            brand: 'ROLEX',
            collection: 'GMT Master II',
            year: 2016,
            code: 'RLX',
            reference: '126710BLRO',
            condition: 'Very Good',
            accomodation: 'With Original Papers',
            expiration: '12.07.2021',
            bid: 13350,
          },
          {
            brand: 'ROLEX',
            collection: 'GMT Master II',
            year: 2016,
            code: 'RLX',
            reference: '126710BLRO',
            condition: 'Very Good',
            accomodation: 'With Original Papers',
            expiration: '12.07.2021',
            bid: 13350,
          },
        ]}
        keyExtractor={(_, index) => index}
        renderItem={({item}) => <OrderItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomColor: colors.greyCD,
    borderBottomWidth: 1,
  },
  columnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const OrderItem = ({item}) => {
  console.log(item);
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: colors.greyCD,
        borderBottomWidth: 1,
      }}>
      <View style={{width: width / 3.3}}>
        <View>
          <Jost400 style={{color: colors.grey58, fontSize: 10}}>
            {item.brand}
          </Jost400>
          <Jost400 style={{color: colors.grey58, fontSize: 10}}>
            {item.collection}
          </Jost400>
          <Jost500 style={{color: colors.primary, fontSize: 14}}>
            {`(${item.code})${item.reference}`}
          </Jost500>
          <Jost400 style={{color: colors.grey58, fontSize: 9}}>
            {`${item.condition} Condition`}
          </Jost400>
          <Jost400 style={{color: colors.grey58, fontSize: 9}}>
            {item.accomodation}
          </Jost400>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View>
          <Jost400
            style={{color: colors.grey58, fontSize: 14, textAlign: 'center'}}>
            {item.expiration}
          </Jost400>
          <Jost600
            style={{color: colors.primary, fontSize: 9, textAlign: 'center'}}>
            Extend Expiration
          </Jost600>
        </View>
      </View>
      <View
        style={{
          width: width / 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Jost500 style={{color: colors.green, fontSize: 18, marginRight: 10}}>
            {formatCurrency(item.bid)}
          </Jost500>
          <TouchableOpacity>
            <MaterialIcons name="edit" color={colors.primary} size={14} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
