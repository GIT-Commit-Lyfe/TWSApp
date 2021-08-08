import React, {useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {withFormikControl} from 'react-native-formik';
import colors from '../../../constants/colors';
import GreyBox from '../../GreyBox';
import {Jost300, Jost500} from '../../StyledText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {figmaHeight} from '../../../utils/tools';
import styles from './styles';

const PillSelection = ({
  title = 'Title',
  options,
  setFieldValue,
  value,
  type,
  onPress = () => {},
}) => {
  const navigation = useNavigation();

  const isPhoto = type === 'photo';

  const onItemPressed = item => {
    setFieldValue(item);
  };

  const onRightButtonPress = () => {
    if (value) {
      setFieldValue('');
    } else if (isPhoto) {
      navigation.navigate('Camera', {setFieldValue});
    } else {
      onPress();
    }
  };

  return (
    <View
      style={{
        borderBottomColor: '#C5C5C5',
        borderBottomWidth: 0.5,
        paddingVertical: 11,
      }}>
      <TouchableOpacity
        onPress={onRightButtonPress}
        style={{...styles.titleContainer, marginBottom: options ? 5 : 0}}>
        <View style={styles.titleCheckContainer}>
          {Boolean(value) && isPhoto && (
            <MaterialIcons
              name={'done'}
              size={figmaHeight(20)}
              color={colors.primary}
              style={styles.checkStyle}
            />
          )}
          <Jost500 style={styles.titleText}>{title}</Jost500>
        </View>
        <MaterialIcons
          name={value ? 'highlight-off' : 'chevron-right'}
          size={figmaHeight(20)}
          color={colors.primary}
        />
      </TouchableOpacity>
      {!isPhoto && (
        <View style={styles.bottomContainer}>
          {value ? (
            <View style={styles.selectedTextContainer}>
              <Jost300>{value}</Jost300>
            </View>
          ) : (
            <FlatList
              horizontal={true}
              data={options}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index) => index}
              renderItem={({item}) => {
                return (
                  <GreyBox
                    onPress={() => onItemPressed(item)}
                    style={{marginRight: 10}}
                    text={item}
                  />
                );
              }}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default withFormikControl(PillSelection);
