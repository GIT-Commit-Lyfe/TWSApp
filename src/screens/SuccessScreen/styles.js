import {StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';
import {figmaHeight, figmaWidth} from '../../utils/tools';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: figmaHeight(16),
  },
  scrollView: {
    justifyContent: 'space-between',
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
  title: {fontSize: 24},
  header: {fontSize: 12},
  subheader: {fontSize: 12, marginTop: figmaHeight(24)},
  goShare: {
    fontSize: 11,
    marginTop: figmaHeight(12),
  },
  reminders: {marginTop: figmaHeight(12)},
  reminderText: {
    color: colors.grey83,
  },
  shareLinks: {
    flexDirection: 'row',
    marginVertical: figmaHeight(16),
  },
  logoContainer: {
    borderRadius: 5,
    paddingVertical: figmaHeight(8),
    paddingHorizontal: figmaHeight(16),
    marginRight: figmaWidth(4),
    alignItems: 'center',
  },
});

export default styles;
