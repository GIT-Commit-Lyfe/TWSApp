import {StyleSheet} from 'react-native';

const TransparentCardStyles = StyleSheet.create({
  transparentCardContainer: {
    marginVertical: 10,
    width: '48%',
  },
  transparentCardAlias: {
    fontSize: 11,
    marginBottom: 3,
  },
  transparentCardImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  transparentCardName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  transparentCardCondition: {
    fontWeight: '300',
    fontSize: 11,
  },
  transparentCardPrice: {
    fontSize: 22,
    marginTop: 5,
  },
  transparentCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  transparentCardSeller: {
    fontWeight: '600',
    fontSize: 11,
  },
  transparentCardLocation: {
    fontWeight: '300',
    fontSize: 11,
  },
});

export default TransparentCardStyles;
