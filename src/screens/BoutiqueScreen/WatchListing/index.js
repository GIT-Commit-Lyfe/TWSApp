import React from 'react';

import {FlatList, Text, View} from 'react-native';

import WatchListingStyles from './style';

import FilterItem from '../../../components/FilterItem';
import TransparentCard from '../../../components/TransparentCard';
import {TwoRowList} from '../../../components/Lists';

const WatchListing = ({ListHeaderComponent, title = 'All Listings'}) => {
  const filters = [
    'Stainless Steel',
    'Condition: Good or Better',
    'Location: EU',
  ];

  const products = [
    {
      brand: 'Rolex',
      code: 'RLX',
      SECode: '',
      reference: '126710BLRO',
      significantEdition: 'BATMAN',
      collection: 'GMT Master II',
      year: '2016',
      price: 13350,
      currency: 'EUR',
      condition: 'Very Good',
      accomodation: 'With Original Papers',
      country: 'DE',
      city: 'Berlin',
      sellerType: 'Individual Investor',
      modelUrl: 'https://via.placeholder.com/150.png',
    },
    {
      brand: 'Rolex',
      code: 'RLX',
      SECode: 'F4',
      reference: '16610LV',
      significantEdition: 'KERMIT FLAT 4',
      collection: 'Submariner Date',
      year: '2004',
      price: 17900,
      currency: 'EUR',
      condition: 'Fair',
      accomodation: 'Full Set',
      country: 'DE',
      city: 'Berlin',
      sellerType: 'Individual Investor',
      modelUrl: 'https://via.placeholder.com/150.png',
    },
    {
      brand: 'Rolex',
      code: 'RLX',
      SECode: 'F4',
      reference: '16610LV',
      significantEdition: 'KERMIT FLAT 4',
      collection: 'Submariner Date',
      year: '2004',
      price: 13350,
      currency: 'EUR',
      condition: 'Fair',
      accomodation: 'Full Set',
      country: 'DE',
      city: 'Berlin',
      sellerType: 'Individual Investor',
      modelUrl: 'https://via.placeholder.com/150.png',
    },
    {
      brand: 'Rolex',
      code: 'RLX',
      SECode: 'F4',
      reference: '16610LV',
      significantEdition: 'KERMIT FLAT 4',
      collection: 'Submariner Date',
      year: '2004',
      price: 13350,
      currency: 'EUR',
      condition: 'Fair',
      accomodation: 'Full Set',
      country: 'DE',
      city: 'Berlin',
      sellerType: 'Individual Investor',
      modelUrl: 'https://via.placeholder.com/150.png',
    },
    {
      brand: 'Rolex',
      code: 'RLX',
      SECode: 'F4',
      reference: '16610LV',
      significantEdition: 'KERMIT FLAT 4',
      collection: 'Submariner Date',
      year: '2004',
      price: 13350,
      currency: 'EUR',
      condition: 'Fair',
      accomodation: 'Full Set',
      country: 'DE',
      city: 'Berlin',
      sellerType: 'Individual Investor',
      modelUrl: 'https://via.placeholder.com/150.png',
    },
  ];

  return (
    <TwoRowList
      data={products}
      ListHeaderComponent={
        <>
          {ListHeaderComponent}
          <View style={WatchListingStyles.container}>
            <View style={WatchListingStyles.filterContainer}>
              <Text style={WatchListingStyles.filterText}>{title}</Text>
              <Text>Filter Models</Text>
            </View>
            <View style={WatchListingStyles.filterItemContainer}>
              {filters.length > 0 &&
                filters.map((filter, index) => (
                  <FilterItem key={index} filter={filter} />
                ))}
            </View>
          </View>
        </>
      }
    />
  );
};

export default WatchListing;
