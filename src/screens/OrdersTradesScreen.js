import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {
  SubmittedOrders,
  AcceptedOrders,
  HistoryOrders,
} from '../screenComponents/OrdersAndTradesScreenComponents';
import {TabbedNavigator} from '../components/TabbedNavigator';

export default function OrdersTradesScreen() {
  const tabbedPages = [
    {title: 'Submitted', component: <SubmittedOrders />},
    {title: 'Accepted', component: <AcceptedOrders />},
    {title: 'History', component: <HistoryOrders />},
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView bounces={false}>
        <TabbedNavigator data={tabbedPages} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
