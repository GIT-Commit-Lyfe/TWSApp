import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BigImageCarousel} from '../../components/Carousels';
import {Jost300, Jost400, Jost500, Jost600} from '../../components/StyledText';
import {BasicButton, FloatingButton} from '../../components/Buttons';
import {PriceGraph} from '../../components/Graphs';
import {ItemDescription} from './ListingDetailScreenComponents';
import {SimpleList} from '../../components/Lists';
import {ListingCarousel} from '../../components/Carousels';
import colors from '../../constants/colors';
import {width, formatCurrency} from '../../utils/tools';
import styles from './styles';

export default function ListingDetailScreen({route, navigation}) {
  const {data: listing} = route.params;
  const images = [
    {
      url: 'https://via.placeholder.com/150.png',
    },
    {
      url: 'https://via.placeholder.com/150.png',
    },
    {
      url: 'https://via.placeholder.com/150.png',
    },
  ];
  const followedListings = [
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
  ];
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.flex}>
        <BigImageCarousel data={images} />
        <View style={styles.followedContainer}>
          <Jost400 style={styles.followed}>
            followed by <Jost600 style={styles.followed}>94 people</Jost600>
          </Jost400>
        </View>
        <ItemDescription data={listing} />
        <View style={styles.simpleListContainer}>
          <SimpleList
            title="Listing Details"
            items={[
              {
                label: 'Reference No.',
                value: `(${listing.code})${listing.reference}`,
              },
              {label: 'Retail Price', value: 'Discontinued'},
              {label: 'Seller Type', value: listing.sellerType},
              {label: 'Listed from', value: 'San Giovanni Valdarno, Italy'},
              {label: 'Listed since', value: '20.05.2021'},
            ]}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttons}>
            <MaterialIcons name="ios-share" size={26} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <MaterialIcons
              name="favorite-border"
              size={26}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.reportContainer}>
          <MaterialIcons name="error" size={12} color={colors.primary} />
          <Jost600 style={styles.reportText}>
            Report Listing as Suspicious
          </Jost600>
        </TouchableOpacity>
        <View style={styles.separator} />
        <View style={styles.referenceContainer}>
          <Jost600
            style={
              styles.reference
            }>{`(${listing.code})${listing.reference}`}</Jost600>
        </View>
        <View style={styles.sectionMargin}>
          <ListingCarousel
            title="Similar Listings"
            data={followedListings}
            navigation={navigation}
            withoutSeeAll
          />
        </View>
        <View style={styles.priceGraph}>
          <PriceGraph title="Price History" />
        </View>
        <View style={styles.basicButtonsContainer}>
          <BasicButton
            backgroundColor="white"
            textColor={colors.primary}
            text="Add to Watchlist"
            containerStyle={{flex: 1}}
          />
          <View style={styles.basicSeparator} />
          <BasicButton text="View Market Data" containerStyle={{flex: 1}} />
        </View>
        <View style={styles.simpleListContainer}>
          <SimpleList
            title="Model Analytics"
            items={[
              {
                label: '52 Week High',
                value: formatCurrency(14360),
              },
              {label: '52 Week Low', value: formatCurrency(12950)},
              {
                label: 'Trade Range',
                value: `${formatCurrency(13000)} - ${formatCurrency(16350)}`,
              },
              {label: 'Median Price', value: formatCurrency(14150)},
              {label: 'Volatility', value: '8%'},
              {label: 'YTD Gain', value: '19%'},
            ]}
          />
        </View>
        <View style={{height: 100}} />
      </ScrollView>
      <FloatingButton title="Buy Now" price={listing.price} reserved={false} />
    </SafeAreaView>
  );
}
