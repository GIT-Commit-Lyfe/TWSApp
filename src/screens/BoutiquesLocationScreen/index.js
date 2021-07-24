import React from 'react';

import {
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

import MapView from 'react-native-maps';
import SwipeUpDown from 'react-native-swipe-up-down';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {SearchBox} from '../../components/Inputs';

import {Jost400, Jost500} from '../../components/StyledText';

import colors from '../../constants/colors';

import BoutiquesLocationStyles from './style';

const BoutiquesLocationScreen = ({navigation}) => {
  const boutiques = [
    {
      id: 1,
      avatar: 'https://via.placeholder.com/50',
      boutiqueName: 'Rolex Collections',
      address: 'Berlin',
      distance: 300,
      unit: 'm',
      approximateTimeInMin: 3,
    },
    {
      id: 2,
      avatar: 'https://via.placeholder.com/50',
      boutiqueName: 'Rolex Collections',
      address: 'Berlin',
      distance: 300,
      unit: 'm',
      approximateTimeInMin: 3,
    },
  ];

  return (
    <SafeAreaView style={BoutiquesLocationStyles.container}>
      <View tyle={BoutiquesLocationStyles.textInputContainer}>
        <SearchBox placeholder="Search Boutiques or Locations" />
      </View>

      <MapView
        style={{height: 500, width: '100%'}}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      />

      <SwipeUpDown
        swipeHeight={100}
        itemMini={
          <FlatList
            data={boutiques}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={BoutiquesLocationStyles.list}
                  onPress={() =>
                    navigation.navigate('Boutique', {name: item.boutiqueName})
                  }>
                  <Image
                    style={BoutiquesLocationStyles.image}
                    source={{uri: item.avatar}}
                  />

                  <View style={BoutiquesLocationStyles.copywriting}>
                    <View>
                      <Jost500 style={BoutiquesLocationStyles.boutiqueName}>
                        {item.boutiqueName}
                      </Jost500>
                      <Jost400 style={BoutiquesLocationStyles.address}>
                        {item.address}
                      </Jost400>
                    </View>

                    <View>
                      <Jost500 style={BoutiquesLocationStyles.estimatedTime}>
                        {item.approximateTimeInMin + ' min '}
                        <Jost400 style={BoutiquesLocationStyles.distance}>
                          {`(${item.distance}${item.unit})`}
                        </Jost400>
                      </Jost500>
                    </View>
                  </View>
                  <MaterialIcons
                    name="chevron-right"
                    size={40}
                    color={colors.primary}
                  />
                </TouchableOpacity>
              );
            }}
            ItemSeparatorComponent={() => <Line />}
            ListHeaderComponent={() => <Line />}
            ListFooterComponent={() => <Line />}
          />
        }
        disablePressToShow={false} // Press item mini to show full
      />
    </SafeAreaView>
  );
};

const Line = () => <View style={BoutiquesLocationStyles.line} />;

export default BoutiquesLocationScreen;
