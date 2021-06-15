import React from 'react';

import {Text, View} from 'react-native';

import WatchListingStyles from './style';

import FilterItem from '../../../components/FilterItem';
import TransparentCard from '../../../components/TransparentCard';

const WatchListing = props => {
  const filters = [
    'Stainless Steel',
    'Condition: Good or Better',
    'Location: EU',
  ];

  const products = [
    {
      id: 1,
      name: 'Product A',
      alias: 'AA-11-X',
      price: 13350,
      profile_pict: 'https://via.placeholder.com/150',
      conditions: ['Full Set', 'Fair Condition'],
      seller: 'Proffesional Trader',
      location: 'BE',
    },
    {
      id: 2,
      name: 'Product B',
      alias: 'AA-11-X',
      price: 13350,
      profile_pict: 'https://via.placeholder.com/150',
      conditions: ['Full Set', 'Fair Condition'],
      seller: 'Proffesional Trader',
      location: 'BE',
    },
    {
      id: 3,
      name: 'Product C',
      alias: 'AA-11-X',
      price: 13350,
      profile_pict: 'https://via.placeholder.com/150',
      conditions: ['Full Set', 'Fair Condition'],
      seller: 'Proffesional Trader',
      location: 'BE',
    },
    {
      id: 4,
      name: 'Product D',
      alias: 'AA-11-X',
      price: 13350,
      profile_pict: 'https://via.placeholder.com/150',
      conditions: ['Full Set', 'Fair Condition'],
      seller: 'Proffesional Trader',
      location: 'BE',
    },
    {
      id: 5,
      name: 'Product E',
      alias: 'AA-11-X',
      price: 13350,
      profile_pict: 'https://via.placeholder.com/150',
      conditions: ['Full Set', 'Fair Condition'],
      seller: 'Proffesional Trader',
      location: 'BE',
    },
    {
      id: 6,
      name: 'Product F',
      alias: 'AA-11-X',
      price: 13350,
      profile_pict: 'https://via.placeholder.com/150',
      conditions: ['Full Set', 'Fair Condition'],
      seller: 'Proffesional Trader',
      location: 'BE',
    },
  ];

  return (
    <View style={WatchListingStyles.container}>
      <View style={WatchListingStyles.filterContainer}>
        <Text style={WatchListingStyles.filterText}>All Listings</Text>
        <Text>Filter Models</Text>
      </View>

      <View style={WatchListingStyles.filterItemContainer}>
        {filters.length > 0 &&
          filters.map((filter, index) => (
            <FilterItem key={index} filter={filter} />
          ))}
      </View>

      <View style={WatchListingStyles.watchListContainer}>
        {products.length > 0 &&
          products.map((product, index) => (
            <TransparentCard key={index} content={product} />
          ))}
      </View>
    </View>
  );
};

export default WatchListing;
