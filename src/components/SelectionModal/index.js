import React, {useRef, useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {Jost400, Jost600} from '../StyledText';
import styles from './styles';
import ArrowDown from '../../assets/arrow-down-black.svg';
import RBSheet from 'react-native-raw-bottom-sheet';
import {figmaHeight} from '../../utils/tools';
import colors from '../../constants/colors';

const SelectionModal = ({
  title = '',
  placeholder = '',
  items = [],
  containerStyle,
  fontSize = 14,
  fontColor = colors.primary,
}) => {
  const bottomSheetRef = useRef();
  const [value, setValue] = useState();

  const handleSelect = item => {
    setValue(item);
    bottomSheetRef.current.close();
  };

  return (
    <View>
      <Jost400 style={styles.label}>{title}</Jost400>
      <View>
        <TouchableOpacity
          style={{...styles.combobox, ...containerStyle}}
          onPress={() => bottomSheetRef.current.open()}>
          <Jost400 style={{fontSize, color: fontColor}}>
            {value ? value.label : placeholder}
          </Jost400>
          <ArrowDown />
        </TouchableOpacity>
      </View>
      <RBSheet
        ref={bottomSheetRef}
        closeOnDragDown={true}
        customStyles={{
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, .2)',
            width: '100%',
          },
        }}>
        <View style={styles.flex}>
          <Jost600 style={styles.headingSheet}>{placeholder}</Jost600>
          <ScrollView contentContainerStyle={styles.selectionContainer}>
            {items.map((item, idx) => {
              const isFirst = idx === 0;
              return (
                <TouchableOpacity
                  onPress={() => handleSelect(item)}
                  key={idx}
                  style={{
                    ...styles.selectionItem,
                    borderTopWidth: isFirst ? 0.5 : 0,
                  }}>
                  <Jost400 style={styles.selectionItemText} key={idx}>
                    {item.label}
                  </Jost400>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </RBSheet>
    </View>
  );
};

export default SelectionModal;
