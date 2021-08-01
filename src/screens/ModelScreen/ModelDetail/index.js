import React, {useRef, useState} from 'react';
import {Button, Image, View, Text, TouchableOpacity} from 'react-native';

import RBSheet from 'react-native-raw-bottom-sheet';

import {Jost400, Jost500, Jost600} from '../../../components/StyledText';

import ArrowUpIcon from '../../../assets/arrow-down-black.svg';

import styles from './styles';

const ModelDetail = () => {
  const refRBSheetYear = useRef();
  const refRBSheetCondition = useRef();
  const refRBSheetAccomodation = useRef();

  const [selectedItem, setSelectedItem] = useState({});
  const [year, setYear] = useState('');
  const [condition, setCondition] = useState('');
  const [accomodation, setAccomodation] = useState('');

  const model = {
    status: 'Discontiniued',
    name: 'Rolex GMT Master II',
    alias: '2116BLNR "GMT Batman"',
    modelUrl: 'https://via.placeholder.com/150.png',
  };

  const onChange = item => {
    setSelectedItem(item);
  };

  const handleYear = value => {
    setYear(value);

    refRBSheetYear.current.close();
  };

  const handleCondition = value => {
    setCondition(value);

    refRBSheetCondition.current.close();
  };

  const handleAccomodation = value => {
    setAccomodation(value);

    refRBSheetAccomodation.current.close();
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
          <View>
            <Jost400 style={styles.label}>Year</Jost400>
            <View>
              <TouchableOpacity
                style={styles.combobox}
                onPress={() => refRBSheetYear.current.open()}>
                <Jost400>{year === '' ? ' Select Year' : year}</Jost400>

                <ArrowUpIcon />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Jost400 style={styles.label}>Condition</Jost400>
            <View>
              <TouchableOpacity
                style={styles.combobox}
                onPress={() => refRBSheetCondition.current.open()}>
                <Jost400>
                  {condition === '' ? ' Select Condition' : condition}
                </Jost400>

                <ArrowUpIcon />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Jost400 style={styles.label}>Accomodated with</Jost400>
            <View>
              <TouchableOpacity
                style={styles.combobox}
                onPress={() => refRBSheetAccomodation.current.open()}>
                <Jost400>
                  {accomodation === '' ? ' Select Accomodation' : accomodation}
                </Jost400>

                <ArrowUpIcon />
              </TouchableOpacity>
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

      <RBSheet
        ref={refRBSheetYear}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
            width: '100%',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View style={{paddingHorizontal: 20}}>
          <Jost600 style={styles.headingSheet}>Select Year</Jost600>
          <Jost400
            style={{paddingBottom: 5}}
            onPress={() => handleYear('1990 - 2000')}>
            1990 - 2000
          </Jost400>
          <Jost400
            style={{paddingBottom: 5}}
            onPress={() => handleYear('2000 - 2010')}>
            2000 - 2010
          </Jost400>
          <Jost400 onPress={() => handleYear('2010 - 2020')}>
            2010 - 2020
          </Jost400>
        </View>
      </RBSheet>

      <RBSheet
        ref={refRBSheetCondition}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
            width: '100%',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View style={{paddingHorizontal: 20}}>
          <Jost600 style={styles.headingSheet}>Select Condition</Jost600>
          <Jost400
            style={{paddingBottom: 5}}
            onPress={() => handleCondition('Good')}>
            Good
          </Jost400>
          <Jost400
            style={{paddingBottom: 5}}
            onPress={() => handleCondition('Very Good')}>
            Very Good
          </Jost400>
        </View>
      </RBSheet>

      <RBSheet
        ref={refRBSheetAccomodation}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
            width: '100%',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View style={{paddingHorizontal: 20}}>
          <Jost600 style={styles.headingSheet}>Select Accomodation</Jost600>
          <Jost400
            style={{paddingBottom: 5}}
            onPress={() => handleAccomodation('Full Set')}>
            Full Set
          </Jost400>
          <Jost400
            style={{paddingBottom: 5}}
            onPress={() => handleAccomodation('Lost some parts')}>
            Lost some parts
          </Jost400>
        </View>
      </RBSheet>
    </View>
  );
};

export default ModelDetail;
