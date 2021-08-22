import React, {useRef} from 'react';
import {upperCase} from 'lodash';
import {SafeAreaView, View, TouchableOpacity} from 'react-native';
import {Jost400, Jost600} from '../../components/StyledText';
import colors from '../../constants/colors';
import {PriceTrendCarousel} from '../../components/Carousels';
import {BasicButton} from '../../components/Buttons';
import BottomSheet from '../../components/BottomSheet';
import MarketDataModal from '../../components/MarketDataModal';
import {TwoRowList} from '../../components/Lists';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FilterItem from '../../components/FilterItem';
import FilterModal from '../../components/FilterModal';
import styles from './styles';

const watchlist = [
  {
    reference: '126710BLRO',
    significantEdition: 'GMT Pepsi',
    collection: 'GMT Master II',
    marketPrice: 13350,
    currency: 'EUR',
    raising: true,
    modelUrl: 'https://via.placeholder.com/120.png',
  },
  {
    reference: '5711A',
    significantEdition: 'Olive Green',
    collection: 'Nautilus',
    marketPrice: 99850,
    currency: 'EUR',
    raising: true,
    modelUrl: 'https://via.placeholder.com/120.png',
  },
  {
    reference: '5711A',
    significantEdition: 'Olive Green',
    collection: 'Nautilus',
    marketPrice: 99850,
    currency: 'EUR',
    raising: true,
    modelUrl: 'https://via.placeholder.com/120.png',
  },
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
const filters = [
  'Stainless Steel',
  'Condition: Good or Better',
  'Location: EU',
];

const CollectionDetailScreen = ({navigation, route}) => {
  // const {data} = route.params;
  const data = {
    id: 1,
    brand: 'Rolex',
    collection: 'GMT Master II',
    description: 'Lorem ipsum',
  };

  const marketDataRef = useRef();
  const filterModalRef = useRef();

  const openMarketData = () => marketDataRef.current.open();
  const openFilterModal = () => filterModalRef.current.open();

  return (
    <SafeAreaView style={styles.container}>
      <TwoRowList
        data={products}
        navigation={navigation}
        ListHeaderComponent={
          <>
            <CollectionDetailHeader
              brand={data.brand}
              collection={data.collection}
              description={data.description}
            />
            <PriceTrendCarousel
              title={`${data.collection} Models`}
              fontSize={18}
              data={watchlist}
              navigation={navigation}
            />
            <View style={styles.buttonContainer}>
              <BasicButton
                text="Releases"
                backgroundColor="white"
                textColor={colors.primary}
                containerStyle={styles.flex}>
                Releases
              </BasicButton>
              <View style={styles.separator} />
              <BasicButton
                text="View Market Data"
                containerStyle={styles.flex}
                onPress={openMarketData}>
                Releases
              </BasicButton>
            </View>
            <View style={styles.listingHeaderContainer}>
              <Jost600
                style={
                  styles.listingHeaderText
                }>{`${data.collection} Listings`}</Jost600>
              <TouchableOpacity
                onPress={openFilterModal}
                style={styles.filterContainer}>
                <Jost400 style={styles.filterText}>Filter Models</Jost400>
                <MaterialIcons
                  name="filter-list"
                  color={colors.primary}
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.filterItemContainer}>
              {filters.length > 0 &&
                filters.map((filter, index) => (
                  <FilterItem key={index} filter={filter} />
                ))}
            </View>
          </>
        }
      />
      <BottomSheet ref={marketDataRef} title={data.brand} subtitle="(RLX)">
        <MarketDataModal />
      </BottomSheet>
      <FilterModal ref={filterModalRef} />
    </SafeAreaView>
  );
};

const CollectionDetailHeader = ({brand, collection, description}) => {
  return (
    <View style={styles.header}>
      <Jost600 style={styles.collectionTitle}>{`${upperCase(
        brand,
      )} ${collection} Collection`}</Jost600>
      <Jost400>
        {description} Designed to show the time in two different time zones
        simultaneously, the GMT-Master, launched in 1955, was originally
        developed as a navigation instrument for professionals criss-crossing
        the globe.
      </Jost400>
    </View>
  );
};

export default CollectionDetailScreen;
