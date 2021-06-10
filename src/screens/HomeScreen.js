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
import {FullWidthCarousel} from '../components/Carousels';

export default function HomeScreen() {
  const banner = [{source: Banner}, {source: Banner}];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <FullWidthCarousel data={banner} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
