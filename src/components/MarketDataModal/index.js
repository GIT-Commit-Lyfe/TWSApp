import React from 'react';
import {View, Text, FlatList} from 'react-native';
import colors from '../../constants/colors';
import {formatCurrency} from '../../utils/tools';
import {FilterSortModalButton} from '../Buttons';
import {Jost300, Jost400, Jost500} from '../StyledText';
import {CapsulNavigator} from '../TabbedNavigator';
import styles from './styles';

const MarketDataModal = () => {
  const data = [
    {
      id: 1,
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
    },
    {
      id: 2,
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
    },
  ];
  const tabbedPages = [
    {
      title: 'Asks',
      component: <Asks data={data} />,
    },
    {
      title: 'Bids',
      // component: <CollectionList data={collections} />
    },
    {
      title: 'Sales',
      // component: <CollectionList data={collections} />
    },
  ];
  return (
    <View style={{flex: 1}}>
      <CapsulNavigator data={tabbedPages} />
    </View>
  );
};

const Asks = ({data}) => {
  return (
    <View style={styles.flex}>
      <Jost400 style={styles.header}>
        The prices given below is regionally adjusted for your location.
      </Jost400>
      <View style={styles.rowContainer}>
        <View style={styles.flex}>
          <Jost500 style={styles.tableHeader}>Reference Nr.</Jost500>
        </View>
        <View style={styles.flex}>
          <Jost500 style={styles.tableHeader}>Collection</Jost500>
        </View>
        <View style={styles.flex}>
          <Jost500 style={styles.tableHeader}></Jost500>
        </View>
        <View style={styles.flex}>
          <Jost500 style={styles.tableHeader}>Ask Price</Jost500>
        </View>
      </View>
      <FlatList
        keyExtractor={(_, index) => index}
        data={data}
        renderItem={({item, index}) => {
          const isEvenIndex = index % 2 === 0;
          return (
            <View
              style={{
                backgroundColor: isEvenIndex ? colors.almostWhite : 'white',
              }}>
              <View style={styles.rowContainer}>
                <View style={styles.flex}>
                  <Jost400 style={styles.tableRowItem}>
                    {item.reference}
                  </Jost400>
                </View>
                <View style={styles.flex}>
                  <Jost400 style={styles.tableRowItem}>
                    {item.collection}
                  </Jost400>
                </View>
                <View style={styles.flex}>
                  <Jost300
                    style={
                      styles.tableStackedRowItem
                    }>{`${item.condition} Condition`}</Jost300>
                  <Jost300 style={styles.tableStackedRowItem}>
                    {item.accomodation}
                  </Jost300>
                </View>
                <View style={styles.flex}>
                  <Jost400 style={styles.tableRowItem}>
                    {formatCurrency(item.price)}
                  </Jost400>
                </View>
              </View>
            </View>
          );
        }}
      />
      <FilterSortModalButton />
    </View>
  );
};
export default MarketDataModal;
