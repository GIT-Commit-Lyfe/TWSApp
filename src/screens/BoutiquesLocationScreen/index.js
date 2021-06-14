import React from 'react';

import {Image, Text, TouchableOpacity, TextInput, View} from 'react-native';

import BoutiquesLocationStyles from './style';

const BoutiquesLocationScreen = ({navigation}) => {
  const brands = [
    {
      id: 1,
      name: 'Brand A',
      address: 'Address A, Berlin',
      profile_pict: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      name: 'Brand B',
      address: 'Address B, Jakarta',
      profile_pict: 'https://via.placeholder.com/50',
    },
  ];

  return (
    <View style={BoutiquesLocationStyles.container}>
      <View tyle={BoutiquesLocationStyles.textInputContainer}>
        <TextInput
          style={BoutiquesLocationStyles.textInput}
          placeholder="Search Boutiques or Locations"
          autoCorrect={false}
        />
      </View>

      {brands.length > 0 &&
        brands.map(brand => (
          <TouchableOpacity
            style={BoutiquesLocationStyles.list}
            onPress={() => navigation.navigate('Boutique', {name: brand.name})}>
            <Image
              style={BoutiquesLocationStyles.image}
              source={{uri: brand.profile_pict}}
            />

            <View style={BoutiquesLocationStyles.copywriting}>
              <View>
                <Text style={BoutiquesLocationStyles.brandName}>
                  {brand.name}
                </Text>
                <Text>{brand.address}</Text>
              </View>

              <View>
                <Text>3 min &gt; (300m)</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default BoutiquesLocationScreen;
