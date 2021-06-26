import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {upperCase} from 'lodash';
import {Jost300, Jost400, Jost500, Jost600} from '../../components/StyledText';
import colors from '../../constants/colors';

export const ItemDescription = ({data}) => {
  return (
    <View style={styles.detailContainer}>
      <Jost600 style={styles.brand}>{`${upperCase(data.brand)} "${
        data.significantEdition
      }"`}</Jost600>
      <Jost600
        style={
          styles.collection
        }>{`${data.collection} (${data.year})`}</Jost600>
      <Jost600 style={styles.reference}>{`Ref. ${data.reference}`}</Jost600>
      <Jost300 style={styles.by}>
        {'by '}
        <Jost400 style={styles.seller}>Horea</Jost400>
      </Jost300>
      <View style={styles.tabletsContainer}>
        <View style={styles.tablets}>
          <Jost500
            style={styles.tabletText}>{`${data.condition} Condition`}</Jost500>
        </View>
        <View style={styles.tablets}>
          <Jost500
            style={styles.tabletText}>{`${data.condition} Condition`}</Jost500>
        </View>
      </View>
      <Jost300 style={styles.description}>
        Rolex GMT MASTER II from 2016, the watch has been professionally
        refurbished and maintained. With original box and papers lc 100. The
        warranty has been activated by an official dealer during 2016. WHAT YOU
        SEE IN THE PICTURES IS EXACTLY WHAT YOU WILL RECEIVE, the pics is
        copyright by Horae. 1 year warranty from date of purchase by Horae.{' '}
      </Jost300>
      {/* <Text>{JSON.stringify(data)}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {paddingHorizontal: 20, marginTop: 40},
  brand: {fontSize: 18, color: colors.primary},
  collection: {fontSize: 24, color: colors.primary},
  reference: {fontSize: 13, color: colors.grey58},
  by: {fontSize: 13, color: colors.grey58},
  seller: {fontSize: 13, color: colors.grey58, textDecorationLine: 'underline'},
  tabletsContainer: {marginTop: 20},
  tablets: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.primary,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  tabletText: {fontSize: 10, color: colors.primary},
  description: {fontSize: 18},
});
