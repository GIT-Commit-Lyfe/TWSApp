import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {width, height} from '../utils/tools';
import colors from '../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useDebounce from '../customHooks/useDebounce';

export function SearchBox({onChange}) {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  useEffect(() => {
    onChange(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <View
      style={{
        alignSelf: 'center',
        width: width - 20,
        marginVertical: 14,
        backgroundColor: colors.lightGrey,
        padding: 8,
        flexDirection: 'row',
      }}>
      <MaterialIcons
        name="search"
        color={colors.greyButton}
        size={20}
        style={{marginRight: 8}}
        returnKeyType="search"
      />
      <TextInput
        placeholder="Search for Watches, Brands, Boutiques and more"
        placeholderTextColor={colors.grey83}
        autoCorrect={false}
        onChangeText={setSearch}
        width="90%"
      />
    </View>
  );
}
