import {StyleSheet} from 'react-native';

const BoutiquesLocationStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    flex: 1,
  },
  textInputContainer: {
    paddingVertical: 15,
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  copywriting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  textInput: {
    backgroundColor: '#EEEEEF',
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 25,
  },
  brandName: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 5,
  },
  list: {
    alignItems: 'center',
    borderTopColor: '#D1D1D1',
    borderTopWidth: 1,
    flexDirection: 'row',
    paddingVertical: 15,
  },
});

export default BoutiquesLocationStyles;
