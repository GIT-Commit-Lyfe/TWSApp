import React, {useRef} from 'react';
import {upperCase} from 'lodash';
import {SafeAreaView, View, ScrollView} from 'react-native';
import {Jost400, Jost600} from '../../components/StyledText';
import {ListingCarousel, PriceTrendCarousel} from '../../components/Carousels';
import {BasicButton, DualButton} from '../../components/Buttons';
import BottomSheet from '../../components/BottomSheet';
import MarketDataModal from '../../components/MarketDataModal';
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

const CollectionDetailScreen = ({navigation, route}) => {
  // const {data} = route.params;
  const data = {
    id: 1,
    brand: 'Rolex',
    collection: 'GMT Master II',
    release_year: 1982,
    description: 'Lorem ipsum',
  };

  const marketDataRef = useRef();

  const openMarketData = () => marketDataRef.current.open();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Jost600 style={styles.collectionTitle}>
          {upperCase(`${data.collection} Collection`)}
        </Jost600>
        <Jost400
          style={
            styles.collectionSubtitle
          }>{`Released at ${data.release_year}`}</Jost400>
        <PriceTrendCarousel
          fontSize={18}
          data={watchlist}
          navigation={navigation}
          withoutSeeAll
        />
        <DualButton
          containerStyle={styles.buttonContainer}
          textLeft="Market Data"
          onPressLeft={openMarketData}
          textRight="View all 35 Models"
        />
        <CollectionDetailHeader title="Bio" description={data.description} />
        <CollectionDetailHeader title="Listings" />
        <ListingCarousel
          title="Listings for the Collection"
          data={products}
          navigation={navigation}
          withoutSeeAll
        />
        <BasicButton
          text="Discover All Listings"
          containerStyle={styles.buttonContainer}
        />
        <BottomSheet ref={marketDataRef} title={data.brand} subtitle="(RLX)">
          <MarketDataModal />
        </BottomSheet>
      </ScrollView>
    </SafeAreaView>
  );
};

const CollectionDetailHeader = ({title = '', collection, description = ''}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTitleContainer}>
        <Jost600 style={styles.headerTitle}>{title}</Jost600>
      </View>
      {Boolean(description) && (
        <Jost400 style={styles.description}>
          Designed to show the time in two different time zones simultaneously,
          the GMT-Master, launched in 1955, was originally developed as a
          navigation instrument for professionals criss-crossing the globe.
        </Jost400>
      )}
    </View>
  );
};

export default CollectionDetailScreen;
