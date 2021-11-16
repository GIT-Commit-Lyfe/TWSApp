import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import Slider from '@react-native-community/slider';
import {withFormikControl} from 'react-native-formik';
import colors from '../../../constants/colors';
import SliderCircle from '../../../assets/slider-circle.png';

const SliderInput = ({
  minValue = 0,
  maxValue = 1,
  step = 1,
  style = {},
  value,
  setFieldValue = () => {},
  name = '',
}) => {
  const onValueChange = value => {
    console.log('Slider value: ', name, value);
    setFieldValue(value);
  };
  return (
    <Slider
      style={style}
      minimumValue={minValue}
      maximumValue={maxValue}
      step={step}
      minimumTrackTintColor={colors.greyD9}
      maximumTrackTintColor={colors.greyD9}
      thumbImage={SliderCircle}
      onValueChange={onValueChange}
      value={value}
    />
  );
};

export default withFormikControl(SliderInput);

const styles = StyleSheet.create({});
