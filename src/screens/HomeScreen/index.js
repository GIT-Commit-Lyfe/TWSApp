import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Banner from '../../assets/new-banner.png';
import SearchBox from '../../components/Inputs/SearchBox';
import {FullWidthCarousel} from '../../components/Carousels';
import {ScrollingTabbedNavigator} from '../../components/TabbedNavigator';
import {Watches, Boutiques, Straps, Buckles} from './HomeScreenComponents';

export default function HomeScreen({navigation}) {
  const banner = [{source: Banner}, {source: Banner}, {source: Banner}];

  const tabbedPages = [
    {title: 'Watches', component: <Watches />},
    {title: 'Boutiques', component: <Boutiques />},
    {title: 'Straps/Bracelets', component: <Straps />},
    {title: 'Buckles', component: <Buckles />},
  ];

  const openSearchScreen = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView bounces={false}>
        <SearchBox
          isHomeScreen
          placeholder="Search for Watches, Brands, Boutiques and more"
          onPress={openSearchScreen}
          style={{marginHorizontal: 10}}
        />
        <FullWidthCarousel data={banner} />
        <ScrollingTabbedNavigator data={tabbedPages} scrolling />
      </ScrollView>
    </SafeAreaView>
  );
}
