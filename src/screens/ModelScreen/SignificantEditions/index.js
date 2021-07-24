import React from 'react';
import {Image, View, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {formatCurrency} from '../../../utils/tools';
import {
  Jost300,
  Jost400,
  Jost500,
  Jost600,
} from '../../../components/StyledText';
import GreenArrow from '../../../assets/arrow-up.svg';

import styles from './styles';

const SignificantEditions = () => {
  const navigation = useNavigation();

  const data = [
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

  return (
    <View style={styles.significantEditionsContainenr}>
      <View style={styles.header}>
        <Jost600 style={styles.headerText}>Significant Editions</Jost600>
      </View>

      <View>
        <FlatList
          style={styles.flatListStyle}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(_, index) => index}
          renderItem={({item, index}) => {
            const isFirst = index === 0;
            return (
              <TouchableOpacity
                style={{
                  ...styles.cardStyle,
                  marginLeft: isFirst ? 10 : 8,
                }}
                onPress={() =>
                  navigation.navigate('Model', {name: item.collection})
                }>
                <View style={{zIndex: 1}}>
                  <Jost400 style={styles.smallText}>
                    "{item.significantEdition}"
                  </Jost400>
                  <Jost600 style={styles.mediumText}>{item.collection}</Jost600>
                  <Jost400 style={styles.mediumText}>{item.reference}</Jost400>
                </View>
                <Image
                  style={styles.imageStyle}
                  source={{uri: item.modelUrl}}
                />
                <View>
                  <View style={styles.priceContainer}>
                    <Jost600 style={styles.bigText}>
                      {formatCurrency(item.marketPrice)}
                    </Jost600>
                    {item.raising ? (
                      <GreenArrow
                        style={{marginLeft: 2}}
                        width={14}
                        height={10}
                      />
                    ) : (
                      <GreenArrow
                        style={{marginLeft: 2}}
                        width={14}
                        height={10}
                      />
                    )}
                  </View>
                  <Jost300 style={styles.smallText}>Market Price</Jost300>
                </View>
              </TouchableOpacity>
            );
          }}
          ListEmptyComponent={() => {
            const addWatchModel = () => {
              console.log('Add Watch Model');
            };
            return (
              <View style={styles.listEmptyContainer}>
                <Jost400 style={styles.listEmptyText}>
                  It looks like your watchlist is empty. Watchlist helps you to
                  easily track and access your favorite watch models. And best
                  you can apply filters.
                </Jost400>
                <TouchableOpacity
                  onPress={addWatchModel}
                  style={styles.listEmptyButton}>
                  <MaterialIcons
                    name="add-circle-outline"
                    size={16}
                    color={colors.primary}
                  />
                  <Jost500 style={styles.listEmptyButtonText}>
                    Add a watch model in your watchlist.
                  </Jost500>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default SignificantEditions;
