import React from 'react';

import {
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

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
    </SafeAreaView>
  );
};

const Line = () => <View style={BoutiquesLocationStyles.line} />;

export default BoutiquesLocationScreen;
