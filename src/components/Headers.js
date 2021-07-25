import {upperCase} from 'lodash';
import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import {figmaHeight, figmaWidth} from '../utils/tools';
import {Jost400, Jost500, Jost600} from './StyledText';

export const BasicHeader = ({
  imageUri = 'https://via.placeholder.com/150.png',
  title = 'Rolex',
  description = 'Rolex SA (/ˈroʊlɛks/) is a luxury watch manufacturer based in Geneva, Switzerland',
  bottomText,
}) => {
  return (
    <View style={BasicHeaderStyles.container}>
      <View style={BasicHeaderStyles.imageTitleContainer}>
        <Image style={BasicHeaderStyles.image} source={{uri: imageUri}} />
        <View style={BasicHeaderStyles.textContainer}>
          <Jost600 style={BasicHeaderStyles.titleText}>
            {upperCase(title)}
          </Jost600>
          <Jost400>{description}</Jost400>
        </View>
      </View>
      {Boolean(bottomText) && (
        <Jost500 style={{marginTop: 10}}>{bottomText}</Jost500>
      )}
    </View>
  );
};

const BasicHeaderStyles = StyleSheet.create({
  container: {
    marginVertical: figmaHeight(20),
  },
  imageTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
    resizeMode: 'cover',
  },
  textContainer: {
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  titleText: {fontSize: 18, fontWeight: '600', marginBottom: 5},
});
