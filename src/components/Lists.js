import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../constants/colors';
import {Jost400, Jost600} from './StyledText';

export const SimpleList = ({title, items}) => {
  return (
    <View>
      <Jost600 style={styles.title}>{title}</Jost600>
      {items.map((item, index) => {
        const isFirst = index === 0;
        return (
          <View
            key={index}
            style={{...styles.listContainer, borderTopWidth: isFirst ? 1 : 0}}>
            <Jost400 style={styles.label}>{item.label}</Jost400>
            <Jost600 style={styles.value}>{item.value}</Jost600>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: colors.primary,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  listContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: colors.greyCD,
  },
  label: {
    color: colors.grey58,
    fontSize: 14,
    textAlign: 'right',
    paddingHorizontal: 20,
  },
  value: {
    color: colors.grey58,
    fontSize: 14,
    textAlign: 'right',
    paddingHorizontal: 20,
  },
});

