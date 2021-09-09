import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {upperCase} from 'lodash';
import {width, height, formatCurrency} from '../utils/tools';
import {Jost300, Jost400, Jost500, Jost600} from '../components/StyledText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BottomSheet from './BottomSheet';
import WatchlistModal from './WatchlistModal';
import ListingsModal from '../components/ListingsModal';
import colors from '../constants/colors';
import GreenArrow from '../assets/arrow-up.svg';
import {FilterSortModalButton} from './Buttons';

export const FullWidthCarousel = ({data}) => {
  const {buttonStyle, buttonTextStyle, imageStyle} = FullWidthCarouselStyle;

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity>
        <Image source={item.source} style={imageStyle} />
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      bounces={false}
      keyExtractor={(item, index) => index}
    />
  );
};

const FullWidthCarouselStyle = StyleSheet.create({
  buttonStyle: {
    position: 'absolute',
    top: 83,
    left: 3,
    backgroundColor: 'white',
    width: 116,
    paddingHorizontal: 10,
    paddingVertical: 5,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {color: 'black', fontSize: 14},
  imageStyle: {width: width},
});

export const BigImageCarousel = ({data}) => {
  const [shownItemIndex, setShownItemIndex] = useState(0);
  const onScroll = event => {
    // tracks which item index is currently shown based on x offset
    setShownItemIndex(Math.round(event.nativeEvent.contentOffset.x / width));
  };
  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image
          source={{uri: 'https://via.placeholder.com/120.png'}}
          style={BigImageCarouselStyle.imageStyle}
        />
      </View>
    );
  };
  return (
    <>
      <FlatList
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        bounces={false}
        keyExtractor={(item, index) => index}
        onScroll={onScroll}
      />
      <View style={BigImageCarouselStyle.dotsContainer}>
        {data.map((i, index) => {
          const isShown = index === shownItemIndex;
          return (
            <View
              key={index}
              style={{
                ...BigImageCarouselStyle.dots,
                backgroundColor: isShown ? colors.primary : colors.greyCD,
              }}
            />
          );
        })}
      </View>
    </>
  );
};

const BigImageCarouselStyle = StyleSheet.create({
  imageStyle: {width: width, height: width, resizeMode: 'cover'},
  dotsContainer: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dots: {
    height: 6,
    width: 6,
    borderRadius: 3,
    marginHorizontal: 2,
  },
});

const CarouselHeader = ({
  title,
  onPress,
  withoutSeeAll = false,
  fontSize = 24,
}) => {
  return (
    <View style={CarouselHeaderStyle.titleContainer}>
      <Jost600 style={{fontSize}}>{title}</Jost600>
      {!withoutSeeAll && (
        <TouchableOpacity
          onPress={onPress}
          style={CarouselHeaderStyle.seeAllContainer}>
          <Jost400 style={CarouselHeaderStyle.seeAllText}>See All</Jost400>
          <MaterialIcons
            name="chevron-right"
            size={40}
            color={colors.primary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
const CarouselHeaderStyle = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  seeAllContainer: {flexDirection: 'row', alignItems: 'center'},
  seeAllText: {fontSize: 14, color: colors.primary},
});

export const PriceTrendCarousel = ({title, data, navigation, fontSize}) => {
  const bottomSheetRef = useRef();
  const onPressSeeAll = () => {
    bottomSheetRef.current.open();
  };

  const onPressItem = item => {
    navigation.navigate('Model', {item});
  };

  return (
    <View style={PriceTrendCarouselStyle.container}>
      <CarouselHeader
        title={title}
        onPress={onPressSeeAll}
        fontSize={fontSize}
      />
      <FlatList
        style={PriceTrendCarouselStyle.flatListStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(_, index) => index}
        renderItem={({item, index}) => {
          const isFirst = index === 0;
          return (
            <TouchableOpacity
              style={{
                ...PriceTrendCarouselStyle.cardStyle,
                marginLeft: isFirst ? 10 : 8,
              }}
              onPress={() => onPressItem(item)}>
              <View style={{zIndex: 1}}>
                <Jost400 style={PriceTrendCarouselStyle.smallText}>
                  "{item.significantEdition}"
                </Jost400>
                <Jost600 style={PriceTrendCarouselStyle.mediumText}>
                  {item.collection}
                </Jost600>
                <Jost400 style={PriceTrendCarouselStyle.mediumText}>
                  {item.reference}
                </Jost400>
              </View>
              <Image
                style={PriceTrendCarouselStyle.imageStyle}
                source={{uri: item.modelUrl}}
              />
              <View>
                <View style={PriceTrendCarouselStyle.priceContainer}>
                  <Jost600 style={PriceTrendCarouselStyle.bigText}>
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
                <Jost300 style={PriceTrendCarouselStyle.smallText}>
                  Market Price
                </Jost300>
              </View>
            </TouchableOpacity>
          );
        }}
        ListEmptyComponent={() => {
          const addWatchModel = () => {
            console.log('Add Watch Model');
          };
          return (
            <View style={PriceTrendCarouselStyle.listEmptyContainer}>
              <Jost400 style={PriceTrendCarouselStyle.listEmptyText}>
                It looks like your watchlist is empty. Watchlist helps you to
                easily track and access your favorite watch models. And best you
                can apply filters.
              </Jost400>
              <TouchableOpacity
                onPress={addWatchModel}
                style={PriceTrendCarouselStyle.listEmptyButton}>
                <MaterialIcons
                  name="add-circle-outline"
                  size={16}
                  color={colors.primary}
                />
                <Jost500 style={PriceTrendCarouselStyle.listEmptyButtonText}>
                  Add a watch model in your watchlist.
                </Jost500>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <BottomSheet ref={bottomSheetRef} title={title}>
        <WatchlistModal />
      </BottomSheet>
    </View>
  );
};

const PriceTrendCarouselStyle = StyleSheet.create({
  container: {},
  flatListStyle: {paddingBottom: 30, paddingTop: 8},
  cardStyle: {
    borderRadius: 10,
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {height: 10, width: 0},
    padding: 6,
    marginBottom: 10,
    width: 130,
    height: 180,
    backgroundColor: colors.almostWhite,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  smallText: {fontSize: 9, textAlign: 'center', color: colors.primary},
  mediumText: {fontSize: 12, textAlign: 'center', color: colors.primary},
  bigText: {
    fontSize: 18,
    textAlign: 'center',
  },
  imageStyle: {
    width: 120,
    height: 120,
    position: 'absolute',
    top: 30,
    resizeMode: 'cover',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listEmptyContainer: {width: width, paddingHorizontal: 10},
  listEmptyText: {color: colors.primary, fontSize: 14},
  listEmptyButton: {
    flexDirection: 'row',
    fontSize: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  listEmptyButtonText: {color: colors.primary, fontSize: 14, marginLeft: 5},
});

export const ListingCarousel = ({
  title,
  data,
  navigation,
  withoutSeeAll = false,
}) => {
  const type =
    title === 'Followed Listings'
      ? 'followed'
      : title === 'Most Popular Around You'
      ? 'popular'
      : 'similar';
  const onPress = item => {
    navigation.push('ListingDetail', {data: item});
  };
  const bottomSheetRef = useRef();
  const onPressSeeAll = () => {
    bottomSheetRef.current.open();
  };
  return (
    <View style={ListingCarouselStyle.container}>
      <CarouselHeader
        title={title}
        onPress={onPressSeeAll}
        withoutSeeAll={withoutSeeAll}
      />
      <FlatList
        style={ListingCarouselStyle.flatListStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(_, index) => index}
        renderItem={({item, index}) => {
          const isFirst = index === 0;
          return (
            <TouchableOpacity
              onPress={() => onPress(item)}
              style={{
                ...ListingCarouselStyle.cardStyle,
                marginLeft: isFirst ? 10 : 8,
              }}>
              <View>
                <Jost500 style={ListingCarouselStyle.itemCode}>
                  {`(${item.code})${item.reference}${item.SECode && '-'}${
                    item.SECode
                  }`}
                </Jost500>
                <Image
                  style={ListingCarouselStyle.imageStyle}
                  source={{uri: item.modelUrl}}
                />
                <Jost500 style={ListingCarouselStyle.mediumText}>{`${upperCase(
                  item.brand,
                )} "${item.significantEdition}"`}</Jost500>
                <Jost500
                  style={
                    ListingCarouselStyle.mediumText
                  }>{`${item.collection} (${item.year})`}</Jost500>
                <Jost300
                  style={
                    ListingCarouselStyle.smallText
                  }>{`${item.condition} Condition`}</Jost300>
                <Jost300
                  style={
                    ListingCarouselStyle.smallText
                  }>{`${item.accomodation}`}</Jost300>
              </View>
              <View>
                <Jost600 style={ListingCarouselStyle.bigText}>
                  {formatCurrency(item.price)}
                </Jost600>
                <Jost300 style={ListingCarouselStyle.tinyCopy}>
                  Incl. Chronobase Authentication
                </Jost300>
                <View style={ListingCarouselStyle.sellerInfo}>
                  <Jost600 style={ListingCarouselStyle.smallGreyText}>
                    {item.sellerType}
                  </Jost600>
                  <Jost300 style={ListingCarouselStyle.smallGreyText}>
                    {`${item.country}, ${item.city}`}
                  </Jost300>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        ListEmptyComponent={() => {
          const howToFollowListing = () => {
            console.log('How to follow listing?');
          };
          return (
            <View style={ListingCarouselStyle.listEmptyContainer}>
              <Jost400 style={ListingCarouselStyle.listEmptyText}>
                It looks like you don't follow any listing. You can follow your
                favorite listings to easily track and access them.
              </Jost400>
              <TouchableOpacity
                onPress={howToFollowListing}
                style={ListingCarouselStyle.listEmptyButton}>
                <Jost500 style={ListingCarouselStyle.listEmptyButtonText}>
                  How to follow a listing?
                </Jost500>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <BottomSheet ref={bottomSheetRef} title={title}>
        <ListingsModal
          navigation={navigation}
          bottomSheetRef={bottomSheetRef}
        />
      </BottomSheet>
    </View>
  );
};

const ListingCarouselStyle = StyleSheet.create({
  container: {},
  flatListStyle: {paddingBottom: 30, paddingTop: 8},
  cardStyle: {
    padding: 2,
    width: 150,
    backgroundColor: colors.almostWhite,
    justifyContent: 'space-between',
  },
  smallText: {
    fontSize: 9,
    color: colors.grey58,
  },
  mediumText: {
    fontSize: 12,
    color: colors.primary,
  },
  bigText: {
    fontSize: 18,
    marginTop: 5,
    height: 20,
  },
  imageStyle: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  itemCode: {fontSize: 9, color: colors.primary},
  tinyCopy: {
    fontSize: 6,
    color: colors.grey58,
  },
  sellerInfo: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  smallGreyText: {fontSize: 9, color: colors.grey58},
  listEmptyContainer: {width: width, paddingHorizontal: 10},
  listEmptyText: {color: colors.primary, fontSize: 14},
  listEmptyButton: {
    flexDirection: 'row',
    fontSize: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  listEmptyButtonText: {color: colors.primary, fontSize: 14},
});

export const BoutiqueCarousel = ({title, data, navigation}) => {
  const onPressSeeAll = () => {
    navigation.navigate('Boutiques');
  };

  return (
    <View style={BoutiqueCarouselStyle.container}>
      <View style={BoutiqueCarouselStyle.titleContainer}>
        <Jost600 style={BoutiqueCarouselStyle.titleText}>{title}</Jost600>
        <TouchableOpacity
          style={BoutiqueCarouselStyle.seeAllContainer}
          onPress={onPressSeeAll}>
          <Jost400 style={BoutiqueCarouselStyle.seeAllText}>See All</Jost400>
          <MaterialIcons
            name="chevron-right"
            size={40}
            color={colors.primary}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        style={BoutiqueCarouselStyle.flatListStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(_, index) => index}
        renderItem={({item, index}) => {
          const isFirst = index === 0;
          return (
            <View
              style={{
                ...BoutiqueCarouselStyle.cardStyle,
                marginLeft: isFirst ? 10 : 8,
              }}>
              <View style={{zIndex: 1}}>
                <Jost600 style={BoutiqueCarouselStyle.mediumText}>
                  {item.boutiqueName}
                </Jost600>
              </View>
              <Image
                style={BoutiqueCarouselStyle.imageStyle}
                source={{uri: item.imageUrl}}
              />
              <View>
                <Jost600
                  style={
                    BoutiqueCarouselStyle.mediumText
                  }>{`${item.address}, ${item.country}`}</Jost600>
                <View style={BoutiqueCarouselStyle.distanceContainer}>
                  <Jost300 style={BoutiqueCarouselStyle.smallText}>
                    {`${item.distance}${item.unit}`}
                  </Jost300>
                  {Boolean(item.approximateTimeInMin) && (
                    <Jost300 style={BoutiqueCarouselStyle.smallText}>
                      {` (${item.approximateTimeInMin}min)`}
                    </Jost300>
                  )}
                </View>
              </View>
            </View>
          );
        }}
        // ListEmptyComponent={() => {
        //   const addWatchModel = () => {
        //     console.log('Add Watch Model');
        //   };
        //   return (
        //     <View style={{width: width, paddingHorizontal: 10}}>
        //       <Jost400 style={{color: colors.primary, fontSize: 14}}>
        //         It looks like your watchlist is empty. Watchlist helps you to
        //         easily track and access your favorite watch models. And best you
        //         can apply filters.
        //       </Jost400>
        //       <TouchableOpacity
        //         onPress={addWatchModel}
        //         style={{
        //           flexDirection: 'row',
        //           fontSize: 14,
        //           alignItems: 'center',
        //           marginTop: 20,
        //         }}>
        //         <MaterialIcons
        //           name="add-circle-outline"
        //           size={16}
        //           color={colors.primary}
        //         />
        //         <Jost500
        //           style={{color: colors.primary, fontSize: 14, marginLeft: 5}}>
        //           Add a watch model in your watchlist.
        //         </Jost500>
        //       </TouchableOpacity>
        //     </View>
        //   );
        // }}
      />
    </View>
  );
};

const BoutiqueCarouselStyle = StyleSheet.create({
  container: {},
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  titleText: {fontSize: 24, color: colors.primary},
  seeAllContainer: {flexDirection: 'row', alignItems: 'center'},
  seeAllText: {fontSize: 14, color: colors.primary},
  flatListStyle: {paddingBottom: 20, paddingTop: 8},
  cardStyle: {
    borderRadius: 10,
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {height: 10, width: 0},
    padding: 6,
    width: 130,
    height: 180,
    marginBottom: 10,
    backgroundColor: colors.almostWhite,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  smallText: {fontSize: 9, textAlign: 'center'},
  mediumText: {fontSize: 11, textAlign: 'center', color: colors.primary},
  imageStyle: {
    width: 120,
    height: 120,
    position: 'absolute',
    top: 30,
    resizeMode: 'cover',
  },
  distanceContainer: {flexDirection: 'row', justifyContent: 'center'},
});
