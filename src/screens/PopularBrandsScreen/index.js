import React, {useEffect, useRef, useState} from 'react';

import {
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import PopularBrandsStyles from './styles';
import {Jost600} from '../../components/StyledText';
import PopularList from './PopularList';

export default function PopularBrandsScreen() {
  const navigation = useNavigation();

  const brands = [
    {
      name: 'Rolex',
      media_url: 'https://via.placeholder.com/50',
    },
    {
      name: 'Phatek Philipe',
      media_url: 'https://via.placeholder.com/50',
    },
    {
      name: 'Panerai',
      media_url: 'https://via.placeholder.com/50',
    },
  ];

  return (
    <SafeAreaView style={PopularBrandsStyles.container}>
      <View style={PopularBrandsStyles.searchBarContainer}>
        <TextInput
          placeholder="Search for a brand"
          style={PopularBrandsStyles.textInput}
        />

        <TouchableOpacity
          style={PopularBrandsStyles.button}
          onPress={() => navigation.navigate('All Brands')}>
          <Jost600 style={PopularBrandsStyles.whiteText}>All Brands</Jost600>
        </TouchableOpacity>
      </View>

      <Jost600 style={{fontSize: 24, marginBottom: 20}}>Popular Brands</Jost600>

      <PopularList data={brands} />
    </SafeAreaView>
  );
}
