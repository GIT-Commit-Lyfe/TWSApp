import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Jost300, Jost400, Jost600} from '../../components/StyledText';
import colors from '../../constants/colors';
import {figmaHeight, figmaWidth} from '../../utils/tools';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const InitialList = ({title = '', data, onPress = () => {}}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Jost600 style={styles.title}>{title}</Jost600>
      </View>
      {data.map((item, idx) => {
        return (
          <TouchableOpacity key={idx} onPress={onPress} style={styles.row}>
            <Jost400>{item}</Jost400>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export const MultiScopeResult = ({onPress, query, data}) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        const {label, amount} = item;
        return (
          <TouchableOpacity onPress={onPress} style={styles.multiScopeRow}>
            <Jost300 style={styles.multiScopeText}>
              <Jost600>{query}</Jost600>
              {' in ' + label}
            </Jost300>
            <View style={styles.flewRow}>
              <Jost300 style={styles.rightText}>{amount + ' Results'}</Jost300>
              <MaterialIcons
                name="arrow-forward-ios"
                color={colors.primary}
                size={15}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
  container: {
    paddingBottom: figmaHeight(12),
    paddingHorizontal: figmaWidth(20),
  },
  row: {
    paddingVertical: figmaHeight(10),
    borderBottomWidth: 1,
    borderBottomColor: colors.greyC5,
  },
  flewRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    lineHeight: 26,
  },
  multiScopeRow: {
    paddingVertical: figmaHeight(10),
    borderBottomWidth: 1,
    borderBottomColor: colors.greyC5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  multiScopeText: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.primary,
  },
  rightText: {
    fontSize: 11,
    lineHeight: 15.9,
    marginRight: figmaWidth(10),
  },
});
