import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  PriceTrendCarousel,
  ListingCarousel,
  BoutiqueCarousel,
} from '../../components/Carousels';
import {Jost400, Jost600} from '../../components/StyledText';
import colors from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color} from 'react-native-reanimated';

export const Watches = () => {
  const navigation = useNavigation();
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
    <View>
      <PriceTrendCarousel
        title="My Watchlist"
        data={watchlist}
        navigation={navigation}
      />
      <ListingCarousel
        title="Followed Listings"
        data={followedListings}
        navigation={navigation}
      />
      <PriceTrendCarousel
        title="Popular Models"
        data={watchlist}
        navigation={navigation}
      />
      <ListingCarousel
        title="Most Popular Around You"
        data={followedListings}
        navigation={navigation}
      />
      <PriceTrendCarousel
        title="What's Trending"
        data={watchlist}
        navigation={navigation}
      />
      <Footer />
    </View>
  );
};

const Footer = () => {
  return (
    <View
      style={{
        height: 250,
        paddingLeft: 28,
        paddingRight: 48,
        paddingTop: 18,
        backgroundColor: colors.primary,
      }}>
      <Jost600 style={{fontSize: 36, color: 'white'}}>
        Are you new to watch game?
      </Jost600>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Ionicons name="logo-instagram" size={27} color="white" />
        <Jost600 style={{fontSize: 18, color: 'white', marginLeft: 10}}>
          Follow us to step up your game
        </Jost600>
      </View>
    </View>
  );
};

export const Boutiques = () => {
  const navigation = useNavigation();
  const nearestBoutiques = [
    {
      boutiqueName: 'Menze Goldschmiede',
      address: 'Berlin',
      country: 'DE',
      distance: 300,
      unit: 'm',
      approximateTimeInMin: 3,
      imageUrl: 'https://via.placeholder.com/150.png',
    },
    {
      boutiqueName: 'HORAE Orologeria Giolielleria',
      address: 'San Giovanni',
      country: 'IT',
      distance: 1650,
      unit: 'km',
      approximateTimeInMin: 0,
      imageUrl: 'https://via.placeholder.com/150.png',
    },
    {
      boutiqueName: 'Rolex Collections',
      address: 'Berlin',
      country: 'DE',
      distance: 300,
      unit: 'm',
      approximateTimeInMin: 3,
      imageUrl: 'https://via.placeholder.com/150.png',
    },
  ];
  return (
    <View>
      <BoutiqueCarousel
        title="Followed Boutiques"
        data={nearestBoutiques}
        navigation={navigation}
      />
      <BoutiqueCarousel
        title="Popular Boutiques"
        data={nearestBoutiques}
        navigation={navigation}
      />
      <BoutiqueCarousel
        title="Nearest Boutiques"
        data={nearestBoutiques}
        navigation={navigation}
      />
      <Footer />
    </View>
  );
};

export const Straps = () => {
  const prioritizeStraps = () => {
    console.log('Prioritize Straps!');
  };
  return (
    <View>
      <View style={{paddingHorizontal: 16}}>
        <Jost600 style={{fontSize: 24, color: colors.primary}}>
          Coming Soon!
        </Jost600>
        <Jost400 style={{fontSize: 14, color: colors.primary, marginTop: 10}}>
          Our team is still developing this section-to give you the most
          convenient trading experience for straps and bracelets. If you are
          interested with this section let our team know. So, we can prioritize
          development.
        </Jost400>
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            padding: 10,
            marginVertical: 50,
          }}
          onPress={prioritizeStraps}>
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
      <Footer />
    </View>
  );
};

export const Buckles = () => {
  const prioritizeBuckles = () => {
    console.log('Prioritize Buckles!');
  };
  return (
    <View>
      <View style={{paddingHorizontal: 16}}>
        <Jost600 style={{fontSize: 24, color: colors.primary}}>
          Coming Soon!
        </Jost600>
        <Jost400 style={{fontSize: 14, color: colors.primary, marginTop: 10}}>
          Our team is still developing this section-to give you the most
          convenient trading experience for buckles. If you are interested with
          this section let our team know. So, we can prioritize development.
        </Jost400>
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            padding: 10,
            marginVertical: 50,
          }}
          onPress={prioritizeBuckles}>
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
      <Footer />
    </View>
  );
};

export const Model = () => {
  const navigation = useNavigation();
  const model = [
    {
      boutiqueName: 'Menze Goldschmiede',
      address: 'Berlin',
      country: 'DE',
      distance: 300,
      unit: 'm',
      approximateTimeInMin: 3,
      imageUrl: 'https://via.placeholder.com/150.png',
    },
  ];

  return (
    <View>
      <Text>Test</Text>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({});
