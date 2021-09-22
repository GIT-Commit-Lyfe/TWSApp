import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {Jost400, Jost600} from '../../../components/StyledText';

import colors from '../../../constants/colors';

const Parts = () => {
  const prioritizeParts = () => {
    console.log('Prioritize Parts!');
  };

  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 16}}>
        <Jost600 style={{fontSize: 24, color: colors.primary}}>
          Coming Soon!
        </Jost600>
        <Jost400 style={{fontSize: 14, color: colors.primary, marginTop: 10}}>
          Our team is still developing this section-to give you the most
          convenient trading experience for parts. If you are interested with
          this section let our team know. So, we can prioritize development.
        </Jost400>
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            padding: 10,
            marginVertical: 50,
          }}
          onPress={prioritizeParts}>
          <Jost600
            style={{
              fontSize: 14,
              color: colors.almostWhite,
              textAlign: 'center',
            }}>
            Prioritize
          </Jost600>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Parts;
