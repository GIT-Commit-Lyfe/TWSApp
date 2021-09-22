import React from 'react';

import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Jost600} from '../../../components/StyledText';

import ArrowRightBlack from '../../../assets/arrow-right-black.svg';

import PopularListStyles from './styles';
import colors from '../../../constants/colors';

const PopularList = ({data}) => {
  const navigation = useNavigation();

  const onPress = () => navigation.navigate('BrandDetail');

  return (
    <ScrollView>
      {data.length > 0 &&
        data.map((item, index) => {
          return <BrandItem onPress={onPress} index={index} brand={item} />;
        })}
    </ScrollView>
  );
};

export const BrandItem = ({onPress, index = 0, brand, style = {}}) => {
  const {media_url, name, smallText} = brand;
  return (
    <TouchableOpacity
      onPress={onPress}
      key={index}
      style={{...PopularListStyles.listContainer, ...style}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={{uri: media_url}} style={PopularListStyles.imageStyle} />

        <View>
          {Boolean(smallText) && (
            <Jost600 style={{fontSize: 9, color: colors.grey58}}>
              {smallText}
            </Jost600>
          )}
          <Jost600>{name}</Jost600>
        </View>
      </View>

      <ArrowRightBlack />
    </TouchableOpacity>
  );
};

export default PopularList;
