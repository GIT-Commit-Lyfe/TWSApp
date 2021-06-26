import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {
  SubmittedOrders,
  AcceptedOrders,
  HistoryOrders,
} from './OrdersAndTradesScreenComponents';
import {TabbedNavigator} from '../../components/TabbedNavigator';

export default function OrdersTradesScreen() {
  const tabbedPages = [
    {title: 'Submitted', component: <SubmittedOrders />},
    {title: 'Accepted', component: <AcceptedOrders />},
    {title: 'History', component: <HistoryOrders />},
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <TabbedNavigator data={tabbedPages} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
