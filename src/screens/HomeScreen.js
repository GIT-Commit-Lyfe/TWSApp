import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import Banner from '../assets/new-banner.png';
import {SearchBox} from '../components/Inputs';
import {FullWidthCarousel} from '../components/Carousels';
import TabbedNavigator from '../components/TabbedNavigator';
import {
  Watches,
  Boutiques,
  Straps,
  Buckles,
} from '../screenComponents/HomeScreenComponents';

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
      <ScrollView>
        <FullWidthCarousel data={banner} />
        <SearchBox onChange={text => console.log(text)} />
        <TabbedNavigator data={tabbedPages} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
