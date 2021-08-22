import React, {useRef} from 'react';
import {SafeAreaView, Image, TouchableOpacity, View} from 'react-native';
import {TwoRowList} from '../../components/Lists';
import {Jost300, Jost400, Jost500, Jost600} from '../../components/StyledText';
import colors from '../../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {formatCurrency} from '../../utils/tools';
import FilterItem from '../../components/FilterItem';
import {upperCase} from 'lodash';
import FilterModal from '../../components/FilterModal';
import {BasicButton} from '../../components/Buttons';
import SortBlack from '../../assets/sort-black.svg';
import styles from './styles';

const data = {
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
  country: 'DE',
  city: 'Berlin',
  sellerType: 'Individual Investor',
  sellerId: 1,
  seller: 'Amazing World',
  description: 'Lorem ipsum',
  modelUrl: 'https://via.placeholder.com/150.png',
};

const products = [
  {
    brand: 'Rolex',
    code: 'RLX',
    SECode: '',
    reference: '126710BLRO',
    significantEdition: 'BATMAN',
    collection: 'GMT Master II',
    year: '2016',
    price: 13350,
    currency: 'EUR',
    condition: 'Very Good',
    accomodation: 'With Original Papers',
    country: 'DE',
    city: 'Berlin',
    sellerType: 'Individual Investor',
    modelUrl: 'https://via.placeholder.com/150.png',
  },
  {
    brand: 'Rolex',
    code: 'RLX',
    SECode: 'F4',
    reference: '16610LV',
    significantEdition: 'KERMIT FLAT 4',
    collection: 'Submariner Date',
    year: '2004',
    price: 17900,
    currency: 'EUR',
    condition: 'Fair',
    accomodation: 'Full Set',
    country: 'DE',
    city: 'Berlin',
    sellerType: 'Individual Investor',
    modelUrl: 'https://via.placeholder.com/150.png',
  },
  {
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
    country: 'DE',
    city: 'Berlin',
    sellerType: 'Individual Investor',
    modelUrl: 'https://via.placeholder.com/150.png',
  },
  {
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
    country: 'DE',
    city: 'Berlin',
    sellerType: 'Individual Investor',
    modelUrl: 'https://via.placeholder.com/150.png',
  },
  {
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
    country: 'DE',
    city: 'Berlin',
    sellerType: 'Individual Investor',
    modelUrl: 'https://via.placeholder.com/150.png',
  },
];

const filters = ['Full Set', 'Condition: Good or Better', 'Location: EU'];

const CollectionListingsScreen = ({navigation}) => {
  const filterModalRef = useRef();
  const openFilterModal = () => filterModalRef.current.open();

  return (
    <SafeAreaView style={styles.container}>
      <TwoRowList
        data={products}
        navigation={navigation}
        ListHeaderComponent={
          <>
            <View style={styles.listingHeaderContainer}>
              <Jost600 style={styles.listingHeaderText}>{`${upperCase(
                data.brand,
              )} ${data.collection} Listings`}</Jost600>
              <TouchableOpacity
                onPress={openFilterModal}
                style={styles.filterContainer}>
                <Jost400 style={styles.filterText}>Filter Models</Jost400>
                <MaterialIcons
                  name="filter-list"
                  color={colors.primary}
                  size={20}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.filterItemContainer}>
              {filters.length > 0 &&
                filters.map((filter, index) => (
                  <FilterItem key={index} filter={filter} />
                ))}
            </View>

            <View style={styles.lowestAskContainer}>
              <Jost600 style={styles.lowestAskTitle}>Lowest Ask</Jost600>
              <ModelDetailBox data={data} />
              <View style={styles.buttonContainer}>
                <BasicButton
                  text="Follow Listing"
                  backgroundColor="white"
                  textColor={colors.primary}
                  containerStyle={styles.flex}>
                  Releases
                </BasicButton>
                <View style={styles.separator} />
                <BasicButton
                  text="Buy This Watch Now"
                  containerStyle={styles.flex}>
                  Releases
                </BasicButton>
              </View>
            </View>

            <View style={styles.listingHeaderContainer}>
              <Jost600 style={styles.listingHeaderText}>All Listings</Jost600>
              <TouchableOpacity style={styles.filterContainer}>
                <Jost400 style={styles.filterText}>Sort Listings</Jost400>
                <SortBlack />
              </TouchableOpacity>
            </View>

            <FilterModal ref={filterModalRef} />
          </>
        }
      />
    </SafeAreaView>
  );
};

export const ModelDetailBox = ({data}) => {
  return (
    <View style={styles.lowestListingContainer}>
      <View style={styles.row}>
        <View style={styles.leftContainer}>
          <TouchableOpacity style={styles.mainImageContainer}>
            <Image style={styles.mainImage} source={{uri: data.modelUrl}} />
          </TouchableOpacity>
          <View style={styles.listingBoxContainer}>
            <TouchableOpacity style={styles.secondaryImageContainer}>
              <Image
                style={styles.secondaryImage}
                source={{uri: data.modelUrl}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryImage}>
              <Image
                style={styles.secondaryImage}
                source={{uri: data.modelUrl}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryImage}>
              <Image
                style={styles.secondaryImage}
                source={{uri: data.modelUrl}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Jost500 style={styles.listingTitle}>{`${upperCase(data.brand)} ${
            data.significantEdition
          } ${data.collection} (${data.year})`}</Jost500>
          <Jost300 style={styles.description}>
            Rolex GMT II from 2016, the watch has been professionally
            refurbished and maintained. With original box and papers lc 100. 1
            year warranty from date of purchase.
            <TouchableOpacity style={styles.readMore}>
              <Jost400 style={styles.readMoreText}>{'read more >'}</Jost400>
            </TouchableOpacity>
          </Jost300>
          <Jost400
            style={styles.attributes}>{`${data.condition} Condition`}</Jost400>
          <Jost400 style={styles.attributes}>{`${data.accomodation}`}</Jost400>
          <Jost500 style={styles.price}>{formatCurrency(data.price)}</Jost500>
          <Jost300 style={styles.chronoCopy}>
            {'Incl. Chronobase Authentication'}
          </Jost300>
          <Jost600 style={styles.sellerType}>{`${data.sellerType}`}</Jost600>
          <View style={styles.bottomRowContainer}>
            <Jost400 style={styles.seller}>{`${data.seller}`}</Jost400>
            <Jost300
              style={styles.country}>{`${data.country}, ${data.city}`}</Jost300>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CollectionListingsScreen;
