import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';

import {Jost300, Jost500, Jost600} from '../../components/StyledText';
import GreyBox from '../../components/GreyBox';

import styles from './styles';

const ModelSell = () => {
  const years = ['2011 - 2020', '2016', '2017', '2019', '2020'];
  const conditions = ['Unwarn', 'Very Good', 'Very Good (Polished)'];
  const accomodates = ['Full Set', 'Only with Papers', 'Only with Box'];
  const locations = ['Berlin, Germany'];

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.list}>
          <Jost600 style={styles.headerText}>Details for Sell Order</Jost600>
        </View>

        <View style={styles.list}>
          <Jost500 style={{marginBottom: 5}}>Year</Jost500>

          <View style={styles.greyBoxContainer}>
            {years.map(year => (
              <GreyBox style={{marginRight: 10, marginBottom: 7}} text={year} />
            ))}
          </View>
        </View>

        <View style={styles.list}>
          <Jost500 style={{marginBottom: 5}}>Condition</Jost500>

          <View style={styles.greyBoxContainer}>
            {conditions.map(conndition => (
              <GreyBox
                style={{marginRight: 10, marginBottom: 7}}
                text={conndition}
              />
            ))}
          </View>
        </View>

        <View style={styles.list}>
          <Jost500 style={{marginBottom: 5}}>Accomodated with</Jost500>

          <View style={styles.greyBoxContainer}>
            {accomodates.map(accomodate => (
              <GreyBox
                style={{marginRight: 10, marginBottom: 7}}
                text={accomodate}
              />
            ))}
          </View>
        </View>

        <View style={styles.list}>
          <Jost500 style={{marginBottom: 5}}>Location of watch</Jost500>

          <View style={styles.greyBoxContainer}>
            {locations.map(location => (
              <GreyBox
                style={{marginRight: 10, marginBottom: 7}}
                text={location}
              />
            ))}
          </View>
        </View>

        <View style={styles.list}>
          <Jost500 style={{marginBottom: 5}}>Significant Edition</Jost500>
        </View>

        <View style={styles.list}>
          <Jost500 style={{marginBottom: 5}}>Add Custom Features</Jost500>
        </View>

        <View style={styles.list}>
          <Jost500 style={{marginBottom: 5}}>Product Description</Jost500>
          <Jost300>
            Let pottential buyers know; Did your watch ever serviced (If yes
            when); Where and when did you buy your watch?; Does it still have
            guarantee? Are there any replaced parts? Are there any scratches or
            dents?
          </Jost300>
        </View>

        <View style={styles.center}>
          <TouchableOpacity style={styles.button}>
            <Jost600 style={styles.buttonText}>Next Step (Add Photos)</Jost600>
          </TouchableOpacity>

          <Jost600>Step 1 of 3</Jost600>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ModelSell;
