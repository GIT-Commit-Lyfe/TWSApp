import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {
  SubmittedOrders,
  AcceptedOrders,
  HistoryOrders,
} from './OrdersAndTradesScreenComponents';
import {TabbedNavigator} from '../../components/TabbedNavigator';
import {DoubleCapsul} from '../../components/Buttons';
import {figmaHeight, figmaWidth} from '../../utils/tools';

export default function OrdersTradesScreen() {
  const [isBuy, setIsBuy] = useState(true);

  const tabbedPages = [
    {title: 'Submitted', component: <SubmittedOrders />},
    {title: 'Accepted', component: <AcceptedOrders />},
    {title: 'History', component: <HistoryOrders />},
  ];

  const toggleOrders = () => {
    setIsBuy(p => !p);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <TabbedNavigator data={tabbedPages} />
      <DoubleCapsul
        firstOption="Buy Orders"
        secondOption="Sell Orders"
        onPress={toggleOrders}
        containerStyle={{
          marginHorizontal: figmaWidth(12),
          marginVertical: figmaHeight(18),
        }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
