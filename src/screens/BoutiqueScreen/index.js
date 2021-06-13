import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Boutique from './Boutique';

export default function BoutiqueScreen() {
  const boutiqueMock = {
    profile_pict: 'https://via.placeholder.com/100',
    name: 'MENZE GOLDSCMIEDE',
    description:
      "We would like to welcome you to Juwelier Menze! Our jeweller's shop has been in our family for 120 years in the 5th generation.",
  };

  return (
    <View style={{flex: 1}}>
      <Boutique boutique={boutiqueMock} />
    </View>
  );
}
const styles = StyleSheet.create({});
