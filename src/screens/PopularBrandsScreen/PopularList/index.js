import React from 'react';

import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Jost600} from '../../../components/StyledText';

import ArrowRightBlack from '../../../assets/arrow-right-black.svg';

import PopularListStyles from './styles';

const PopularList = ({data}) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      {data.length > 0 &&
        data.map((item, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('BrandDetail')}
            key={index}
            style={PopularListStyles.listContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={{uri: item.media_url}}
                style={PopularListStyles.imageStyle}
              />

              <Jost600>{item.name}</Jost600>
            </View>

            <ArrowRightBlack />
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

export default PopularList;
