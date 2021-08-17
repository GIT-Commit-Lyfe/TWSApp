import React from 'react';

import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SearchBox from '../../components/Inputs/SearchBox';
import {Jost600} from '../../components/StyledText';
import PopularList from './PopularList';

import PopularBrandsStyles from './styles';

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
        <SearchBox
          style={PopularBrandsStyles.textInput}
          placeholder="Search for a brand"
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
