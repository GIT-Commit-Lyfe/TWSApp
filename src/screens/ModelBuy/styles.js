import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {width} from '../../utils/tools';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 6,
  },
  scrollContainer: {
    paddingHorizontal: 10,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  buttonBidContainer: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: colors.greyF5,
    borderRadius: 20,
    overflow: 'hidden',
    borderColor: colors.greyCD,
    borderWidth: 1,
  },
  buttonBidGreen: {
    backgroundColor: colors.green,
    flex: 0.5,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonBidGrey: {
    flex: 0.5,
    paddingVertical: 8,
    alignItems: 'center',
  },
  textWhite: {
    color: '#fff',
  },
  textBlack: {
    color: '#18110C',
  },
  textInput: {
    borderColor: '#E6E6E6',
    borderWidth: 1,
    paddingVertical: 10,
    paddingLeft: 15,
  },
  specList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 13,
    borderTopColor: '#C5C5C5',
    borderTopWidth: 1,
    marginBottom: 17,
  },
  tnc: {
    flex: 1,
    alignItems: 'flex-end',
  },
  blackButton: {
    backgroundColor: '#18110C',
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buyContainer: {
    marginTop: 25,
    marginBottom: 5,
  },
  halveWidth: {
    width: width / 2 - 20,
  },
  imageStyle: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  blackButtonText: {
    color: '#fff',
  },
  buyTitleText: {
    fontSize: 14,
    marginBottom: 5,
  },
  buyDescriptionText: {
    fontSize: 12,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buyButton: {
    alignItems: 'center',
    borderColor: '#18110C',
    borderWidth: 1,
    flex: 1,
    paddingVertical: 10,
    marginTop: 15,
  },
});

export default styles;
