import React from 'react';
import PropTypes from 'prop-types';

import {
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import BoutiqueStyles from './style';

const Boutique = ({boutique}) => {
  return (
    <View style={BoutiqueStyles.container}>
      <View style={BoutiqueStyles.boutiqueContainer}>
        <Image
          style={{width: 100, height: 100, borderRadius: 50, marginRight: 10}}
          source={{uri: boutique.profile_pict}}
        />

        <View style={BoutiqueStyles.textContainer}>
          <Text style={BoutiqueStyles.titleText}>{boutique.name}</Text>
          <Text>{boutique.description}</Text>
        </View>
      </View>
    </View>
  );
};

Boutique.propTypes = {
  boutique: PropTypes.object,
};

export default Boutique;
