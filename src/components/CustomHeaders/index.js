import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  figmaHeight,
  figmaWidth,
  formatCurrency,
  width,
} from '../../utils/tools';
import {Jost400, Jost500, Jost600} from '../StyledText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';
import TextTicker from 'react-native-text-ticker';
import TriangleUp from '../../assets/triangle-up.svg';
import TriangleDown from '../../assets/triangle-down.svg';
import WatchList from '../../assets/watchlist.svg';
import useBanners from '../../customHooks/useBanners';

const priceBanner = [
  {
    id: 1,
    code: 'RLX',
    reference: '22334',
    raising: true,
    price: 14500,
    currency: 'EUR',
  },
  {
    id: 2,
    code: 'RLX',
    reference: '44556',
    raising: false,
    price: 12500,
    currency: 'EUR',
  },
  {
    id: 3,
    code: 'RLX',
    reference: '22334',
    raising: true,
    price: 14500,
    currency: 'EUR',
  },
  {
    id: 4,
    code: 'RLX',
    reference: '44556',
    raising: false,
    price: 12500,
    currency: 'EUR',
  },
  {
    id: 5,
    code: 'RLX',
    reference: '22334',
    raising: true,
    price: 14500,
    currency: 'EUR',
  },
  {
    id: 6,
    code: 'RLX',
    reference: '44556',
    raising: false,
    price: 12500,
    currency: 'EUR',
  },
  {
    id: 7,
    code: 'RLX',
    reference: '22334',
    raising: true,
    price: 14500,
    currency: 'EUR',
  },
  {
    id: 8,
    code: 'RLX',
    reference: '44556',
    raising: false,
    price: 12500,
    currency: 'EUR',
  },
];

export const CustomHeader = ({
  withoutBack = false,
  withoutRight = false,
  withoutShare = false,
  withoutTicker = false,
  withWatchlist = false,
  tickerOnly = false,
  title = '',
  subtitle,
}) => {
  const navigation = useNavigation();
  const {data, refetch} = useBanners();

  return (
    <SafeAreaView style={styles.container}>
      {!tickerOnly && (
        <View style={styles.mainBar}>
          <View style={styles.leftContainer}>
            {!withoutBack && (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons
                  name="arrow-back-ios"
                  color={colors.primary}
                  size={20}
                />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.midContainer}>
            {subtitle ? (
              <View>
                <Jost600 style={styles.miniTitle}>{title}</Jost600>
                <Jost500 style={styles.subtitle}>{subtitle}</Jost500>
              </View>
            ) : (
              <Jost600 style={styles.title}>{title}</Jost600>
            )}
          </View>

          <View style={styles.rightContainer}>
            {!withoutRight && (
              <>
                {withWatchlist && (
                  <TouchableOpacity style={{marginRight: figmaWidth(10)}}>
                    <WatchList height={15} />
                  </TouchableOpacity>
                )}
                {!withoutShare && (
                  <TouchableOpacity style={{marginRight: figmaWidth(10)}}>
                    <MaterialIcons
                      name="ios-share"
                      color={colors.primary}
                      size={20}
                    />
                  </TouchableOpacity>
                )}
                <TouchableOpacity>
                  <MaterialIcons
                    name="search"
                    color={colors.primary}
                    size={20}
                  />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      )}
      {!withoutTicker && (
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: colors.greyC5,
            paddingTop: figmaHeight(5),
            justifyContent: 'center',
          }}>
          <TextTicker loop duration={5000 * data?.length} repeatSpacer={0}>
            <TickerContent data={data} />
          </TextTicker>
        </View>
      )}
    </SafeAreaView>
  );
};

const TickerContent = ({data}) => {
  return (
    <>
      {data?.map(item => {
        const {id, code, reference, raising, price, currency} = item;
        return (
          <View
            key={id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Jost500
              style={{
                fontSize: 14,
                color: colors.primary,
              }}>
              {`(${code})${reference} `}
              <Jost500
                style={{
                  color: raising ? colors.green : colors.red,
                }}>{`${formatCurrency(price, currency, true)} `}</Jost500>
            </Jost500>
            <View style={{paddingRight: figmaWidth(10)}}>
              {raising ? <TriangleUp /> : <TriangleDown />}
            </View>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', width},
  mainBar: {
    height: figmaHeight(42),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: figmaWidth(10),
    alignItems: 'center',
  },
  leftContainer: {flexDirection: 'row', flex: 1 / 3},
  midContainer: {alignSelf: 'center'},
  title: {
    fontSize: 18,
    textAlign: 'center',
  },
  miniTitle: {fontSize: 13, textAlign: 'center'},
  subtitle: {fontSize: 10, textAlign: 'center'},
  rightContainer: {
    flexDirection: 'row',
    flex: 1 / 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
