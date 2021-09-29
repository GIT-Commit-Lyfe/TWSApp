import React, {useEffect, useState} from 'react';
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

import ModelsAPI from '../../api/model';
import ListingsAPI from '../../api/list';
import useWatchlist from '../../customHooks/useWatchlist';
import {figmaHeight} from '../../utils/tools';

export const Watches = () => {
  const [popularModels, setPopularModels] = useState([]);
  const {data: watchLists} = useWatchlist();
  const [followedListings, setFollowedListings] = useState([]);
  const [popularNearby, setPopularNearby] = useState([]);
  const [trendingModels, setTrendingModels] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const getPopularModels = async () => {
      try {
        const {data} = await ModelsAPI.get('popular-models');
        setPopularModels(data);
      } catch (error) {
        console.log(error);
      }
    };

    const getFollowedListings = async () => {
      try {
        const {data} = await ListingsAPI.getFollowedListings();

        setFollowedListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    const getPopularNearby = async () => {
      try {
        const {data} = await ModelsAPI.getPopularNearby();
        setPopularNearby(data);
      } catch (error) {
        console.log(error);
      }
    };

    const getTrendingModels = async () => {
      try {
        const {data} = await ModelsAPI.getTrendingModels();
        setTrendingModels(data);
      } catch (error) {
        console.log(error);
      }
    };

    getPopularModels();
    getFollowedListings();
    getPopularNearby();
    getTrendingModels();

    // return setPopularModels([]);
  }, []);

  return (
    <View>
      <PriceTrendCarousel
        title="My Watchlist"
        data={watchLists}
        navigation={navigation}
        containerStyle={{marginTop: figmaHeight(27)}}
      />
      <ListingCarousel
        title="Followed Listings"
        data={followedListings}
        navigation={navigation}
      />
      <PriceTrendCarousel
        title="Popular Models"
        data={popularModels}
        navigation={navigation}
      />
      <ListingCarousel
        title="Most Popular Around You"
        data={popularNearby}
        navigation={navigation}
      />
      <PriceTrendCarousel
        title="What's Trending"
        data={trendingModels}
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
