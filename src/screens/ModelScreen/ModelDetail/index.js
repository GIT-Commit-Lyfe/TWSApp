import React, {useState} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';

import {Jost400, Jost500, Jost600} from '../../../components/StyledText';

import styles from './styles';

const ModelDetail = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const model = {
    status: 'Discontiniued',
    name: 'Rolex GMT Master II',
    alias: '2116BLNR "GMT Batman"',
    modelUrl: 'https://via.placeholder.com/150.png',
  };

  const onChange = item => {
    setSelectedItem(item);
  };

  return (
    <View>
      <View style={styles.copywriting}>
        <Jost600 style={styles.statusText}>{model.status}</Jost600>
        <Jost600 style={styles.nameText}>{model.name}</Jost600>
        <Jost400 style={styles.aliasText}>{model.alias}</Jost400>
      </View>

      <View style={styles.flexRow}>
        <View style={styles.halveWidth}>
          <View style={styles.combobox}>
            <Jost400 style={styles.label}>Year</Jost400>
            <View>
              <Text>2010 - 2020</Text>
            </View>
          </View>

          <View style={styles.combobox}>
            <Jost400 style={styles.label}>Condition</Jost400>
            <View>
              <Text>Very Good</Text>
            </View>
          </View>

          <View style={styles.combobox}>
            <Jost400 style={styles.label}>Accomodated with</Jost400>
            <View>
              <Text>Full Set</Text>
            </View>
          </View>

          <View>
            <Jost400 style={styles.label}>Last Known Price</Jost400>
            <Jost500 style={styles.price}>€14.350</Jost500>
            <Jost400 style={styles.updown}>+€350 (+2,5%)</Jost400>
          </View>
        </View>

        <View style={styles.halveWidth}>
          <Image style={styles.imageStyle} source={{uri: model.modelUrl}} />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonWhite}>
          <Jost600 style={styles.buttonWhiteText}>More Filters</Jost600>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonBlack}>
          <Jost600 style={styles.buttonBlackText}>Add to Watchlist</Jost600>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModelDetail;
