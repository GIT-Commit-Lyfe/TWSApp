import React, {useRef} from 'react';
import {TouchableOpacity, View} from 'react-native';
import WatchListingStyles from './style';
import FilterItem from '../../../components/FilterItem';
import {TwoRowList} from '../../../components/Lists';
import colors from '../../../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {Jost400, Jost600} from '../../../components/StyledText';
import FilterModal from '../../../components/FilterModal';

const WatchListing = ({ListHeaderComponent, title = 'All Listings'}) => {
  const navigation = useNavigation();
  const filterModalRef = useRef();
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
      navigation={navigation}
      ListHeaderComponent={
        <>
          {ListHeaderComponent}
          <View style={WatchListingStyles.container}>
            <View style={WatchListingStyles.filterContainer}>
              <Jost600 style={WatchListingStyles.filterText}>{title}</Jost600>

              <TouchableOpacity
                onPress={() => filterModalRef.current.open()}
                style={WatchListingStyles.flexRow}>
                <Jost400>Filter Models</Jost400>

                <MaterialIcons
                  name="filter-list"
                  color={colors.primary}
                  size={25}
                  style={{marginLeft: 5}}
                />
              </TouchableOpacity>
            </View>
            <View style={WatchListingStyles.filterItemContainer}>
              {filters.length > 0 &&
                filters.map((filter, index) => (
                  <FilterItem key={index} filter={filter} />
                ))}
            </View>
          </View>
          <FilterModal ref={filterModalRef} />
        </>
      }
    />
  );
};

export default WatchListing;
