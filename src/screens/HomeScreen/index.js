import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Banner from '../../assets/new-banner.png';
import SearchBox from '../../components/Inputs/SearchBox';
import {FullWidthCarousel} from '../../components/Carousels';
import {ScrollingTabbedNavigator} from '../../components/TabbedNavigator';
import {Watches, Boutiques, Straps, Buckles} from './HomeScreenComponents';

export default function HomeScreen() {
  const banner = [{source: Banner}, {source: Banner}, {source: Banner}];

  const tabbedPages = [
    {title: 'Watches', component: <Watches />},
    {title: 'Boutiques', component: <Boutiques />},
    {title: 'Straps/Bracelets', component: <Straps />},
    {title: 'Buckles', component: <Buckles />},
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView bounces={false}>
        <FullWidthCarousel data={banner} />
        <SearchBox
          placeholder="Search for Watches, Brands, Boutiques and more"
          onChange={text => console.log(text)}
          style={{marginHorizontal: 10}}
        />
        <ScrollingTabbedNavigator data={tabbedPages} scrolling />
      </ScrollView>
    </SafeAreaView>
  );
}
