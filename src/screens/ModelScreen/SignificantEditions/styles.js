import {StyleSheet} from 'react-native';

import colors from '../../../constants/colors';

import {width} from '../../../utils/tools';

const styles = StyleSheet.create({
  significantEditionsContainenr: {
    marginVertical: 20,
  },
  header: {
    backgroundColor: '#18110C',
    paddingVertical: 5,
    marginHorizontal: 10,
    width: 160,
    marginBottom: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
  },
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

export default styles;
