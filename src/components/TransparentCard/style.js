import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const TransparentCardStyles = StyleSheet.create({
  transparentCardContainer: {
    marginVertical: 10,
    flex: 0.5,
    padding: 2,
    backgroundColor: colors.almostWhite,
  },
  transparentCardAlias: {
    fontSize: 11,
    marginBottom: 3,
  },
  transparentCardImage: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  transparentCardName: {
    fontSize: 14,
    marginBottom: 5,
  },
  transparentCardCondition: {
    fontSize: 11,
    color: colors.grey58,
  },
  transparentCardPrice: {
    fontSize: 22,
    height: 24,
    marginTop: 5,
  },
  transparentCardAuthentication: {
    fontSize: 8,
  },
  transparentCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  transparentCardSeller: {
    fontSize: 11,
  },
  transparentCardLocation: {
    fontSize: 11,
  },
});

export default TransparentCardStyles;
