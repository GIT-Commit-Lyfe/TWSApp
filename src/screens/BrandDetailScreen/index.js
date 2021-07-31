import React, {useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomSheet from '../../components/BottomSheet';
import {BasicButton} from '../../components/Buttons';
import {BasicHeader} from '../../components/Headers';
import {CollectionList} from '../../components/Lists';
import {Jost400, Jost500} from '../../components/StyledText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  ScrollingTabbedNavigator,
  TabbedNavigator,
} from '../../components/TabbedNavigator';
import colors from '../../constants/colors';
import {figmaWidth} from '../../utils/tools';
import {Watches} from '../HomeScreen/HomeScreenComponents';
import MarketDataModal from '../../components/MarketDataModal';
import FilterModal from '../../components/FilterModal';

const brandInfo = {
  id: 1,
  brand: 'Rolex',
  logo: 'https://via.placeholder.com/150.png',
  details: 'Rolex is lorem ipsum',
  website: 'https://www.rolex.com',
};

const collections = [
  {
    id: 1,
    collection: 'GMT Master II',
    productionYearStart: '2005',
    productionYearEnd: '2021',
    modelUrl: 'https://via.placeholder.com/150.png',
    currency: 'EUR',
    lowestAsk: 13450,
  },
  {
    id: 2,
    collection: 'GMT Master ',
    productionYearStart: '1954',
    productionYearEnd: '2007',
    modelUrl: 'https://via.placeholder.com/150.png',
    currency: 'EUR',
    lowestAsk: 10444,
  },
  {
    id: 3,
    collection: 'GMT Master II',
    productionYearStart: '2005',
    productionYearEnd: '2021',
    modelUrl: 'https://via.placeholder.com/150.png',
    currency: 'EUR',
    lowestAsk: 13450,
  },
  {
    id: 4,
    collection: 'GMT Master ',
    productionYearStart: '1954',
    productionYearEnd: '2007',
    modelUrl: 'https://via.placeholder.com/150.png',
    currency: 'EUR',
    lowestAsk: 10444,
  },
  {
    id: 5,
    collection: 'GMT Master II',
    productionYearStart: '2005',
    productionYearEnd: '2021',
    modelUrl: 'https://via.placeholder.com/150.png',
    currency: 'EUR',
    lowestAsk: 13450,
  },
  {
    id: 6,
    collection: 'GMT Master ',
    productionYearStart: '1954',
    productionYearEnd: '2007',
    modelUrl: 'https://via.placeholder.com/150.png',
    currency: 'EUR',
    lowestAsk: 10444,
  },
  {
    id: 7,
    collection: 'GMT Master II',
    productionYearStart: '2005',
    productionYearEnd: '2021',
    modelUrl: 'https://via.placeholder.com/150.png',
    currency: 'EUR',
    lowestAsk: 13450,
  },
  {
    id: 8,
    collection: 'GMT Master ',
    productionYearStart: '1954',
    productionYearEnd: '2007',
    modelUrl: 'https://via.placeholder.com/150.png',
    currency: 'EUR',
    lowestAsk: 10444,
  },
];

export default function BrandDetailScreen({navigation}) {
  const filterRef = useRef();
  const marketDataRef = useRef();
  const isReady = Math.random() < 0.8;
  // const isReady = true;
  const {brand, logo, details, website} = brandInfo;

  const collectionOnPress = item => {
    console.log(item);
    navigation.navigate('CollectionDetail', {data: item});
  };

  const tabbedPages = [
    {
      title: 'Collections',
      component: (
        <CollectionList data={collections} onPress={collectionOnPress} />
      ),
    },
    {title: 'Models', component: <CollectionList data={collections} />},
    {title: 'Collectibles', component: <CollectionList data={collections} />},
    {title: 'Parts', component: <CollectionList data={collections} />},
  ];

  const openFilter = () => {
    filterRef.current.open();
  };

  const openMarketData = () => {
    marketDataRef.current.open();
  };

  const prioritizeBrand = () => {
    console.log('Prioritize this brand!', brand);
  };

  return (
    <SafeAreaView style={styles.container}>
      {isReady ? (
        <View style={{flex: 1}}>
          <View style={styles.paddingHorizontal}>
            <BasicHeader
              title={brand}
              description={details}
              bottomText={website}
              imageUri={logo}
            />
            <View style={styles.buttonContainer}>
              <BasicButton
                text="Filter Models"
                backgroundColor="white"
                textColor={colors.primary}
                containerStyle={styles.flex}
                onPress={openFilter}
              />
              <View style={styles.separator} />
              <BasicButton
                text="View Market Data"
                containerStyle={styles.flex}
                onPress={openMarketData}
              />
            </View>
          </View>
          <View style={styles.tabbedSeparator}>
            <ScrollingTabbedNavigator data={tabbedPages} />
          </View>
        </View>
      ) : (
        <View>
          <View style={styles.paddingHorizontal}>
            <BasicHeader title={brand} description={details} imageUri={logo} />
            <Jost400>
              {`Since we value your time we aim to create each brand’s page after a long research. That’s why sometimes our team needs more time to create brand page’s. Just like this one. If you are interested with this brand let our team know. So, they can prioritize development for ${brand}.`}
            </Jost400>
            <BasicButton
              containerStyle={styles.prioritizeButton}
              text={`Prioritize ${brand}`}
              onPress={prioritizeBrand}
            />
            <TouchableOpacity style={styles.addToWatchlist}>
              <MaterialIcons
                name="add-circle-outline"
                size={16}
                color={colors.primary}
              />
              <Jost500 style={styles.watchlistText}>
                If you want a list a watch under this brand you can do it here.
              </Jost500>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <FilterModal ref={filterRef} />
      <BottomSheet ref={marketDataRef} title={brand} subtitle="(RLX)">
        <MarketDataModal />
      </BottomSheet>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  paddingHorizontal: {paddingHorizontal: figmaWidth(13)},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {width: 10},
  flex: {flex: 1},
  tabbedSeparator: {marginTop: 20, flex: 1},
  prioritizeButton: {marginVertical: 20},
  addToWatchlist: {flexDirection: 'row', alignItems: 'center'},
  watchlistText: {
    fontSize: 13,
    marginLeft: 10,
    width: '90%',
  },
});

const BrandCollections = ({data}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <CollectionList data={data} />
    </View>
  );
};
