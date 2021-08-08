import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SearchBox from '../../components/Inputs/SearchBox';
import OrderList from '../../components/OrderList';
import {Jost400} from '../../components/StyledText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';
import {figmaWidth, height, width} from '../../utils/tools';

export function SubmittedOrders() {
  return (
    <View style={SubmittedOrdersStyles.flex}>
      <View style={SubmittedOrdersStyles.searchFilterContainer}>
        <View style={SubmittedOrdersStyles.searchBoxContainer}>
          <SearchBox
            placeholder="Search"
            onChange={text => console.log(text)}
            style={SubmittedOrdersStyles.searchBox}
          />
        </View>
        <TouchableOpacity style={SubmittedOrdersStyles.filterContainer}>
          <Jost400 style={SubmittedOrdersStyles.filterText}>
            Filter Trades
          </Jost400>
          <MaterialIcons name="filter-list" color={colors.primary} size={20} />
        </TouchableOpacity>
      </View>
      <OrderList />
    </View>
  );
}

const SubmittedOrdersStyles = StyleSheet.create({
  flex: {flex: 1},
  searchFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: figmaWidth(10),
    alignItems: 'center',
  },
  searchBoxContainer: {flex: 3},
  searchBox: {marginRight: 10},
  filterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterText: {fontSize: 13, marginRight: 4},
});

export function AcceptedOrders() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>AcceptedOrders</Text>
    </View>
  );
}
export function HistoryOrders() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HistoryOrders</Text>
    </View>
  );
}
