import React, {useRef, useState} from 'react';
import {Button, Image, View, Text, TouchableOpacity} from 'react-native';
import {Jost400, Jost500, Jost600} from '../../../components/StyledText';
import styles from './styles';
import SelectionModal from '../../../components/SelectionModal';
import FilterModal from '../../../components/FilterModal';

const ModelDetail = () => {
  const model = {
    status: 'Discontiniued',
    name: 'Rolex GMT Master II',
    alias: '2116BLNR "GMT Batman"',
    modelUrl: 'https://via.placeholder.com/150.png',
  };

  const filterModalRef = useRef();

  const openFilterModal = () => filterModalRef.current.open();

  return (
    <View>
      <View style={styles.copywriting}>
        <Jost600 style={styles.statusText}>{model.status}</Jost600>
        <Jost600 style={styles.nameText}>{model.name}</Jost600>
        <Jost400 style={styles.aliasText}>{model.alias}</Jost400>
      </View>

      <View style={styles.flexRow}>
        <View style={styles.halveWidth}>
          <View style={styles.selectionContainer}>
            <SelectionModal
              title="Year"
              placeholder="Select Year"
              items={[
                {id: 1, value: '1990 - 2000', label: '1990 - 2000'},
                {id: 2, value: '2000 - 2010', label: '2000 - 2010'},
                {id: 3, value: '2010 - 2020', label: '2010 - 2020'},
              ]}
            />
            <SelectionModal
              title="Condition"
              placeholder="Select Condition"
              items={[
                {id: 1, value: 'Good', label: 'Good'},
                {id: 2, value: 'Very Good', label: 'Very Good'},
                {id: 3, value: 'Fair', label: 'Fair'},
              ]}
            />
            <SelectionModal
              title="Accomodated with"
              placeholder="Select Accomodation"
              items={[
                {id: 1, value: 'Full Set', label: 'Full Set'},
                {
                  id: 2,
                  value: 'With Original Papers',
                  label: 'With Original Papers',
                },
                {id: 3, value: 'With Box', label: 'With Box'},
              ]}
            />
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
        <TouchableOpacity onPress={openFilterModal} style={styles.buttonWhite}>
          <Jost600 style={styles.buttonWhiteText}>More Filters</Jost600>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonBlack}>
          <Jost600 style={styles.buttonBlackText}>Add to Watchlist</Jost600>
        </TouchableOpacity>
      </View>
      <FilterModal ref={filterModalRef} />
    </View>
  );
};

export default ModelDetail;
