import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  View,
} from 'react-native';
import {width, height, figmaHeight, figmaWidth} from '../utils/tools';
import colors from '../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useDebounce from '../customHooks/useDebounce';

export function SearchBox({
  onChange = () => console.log('searching'),
  placeholder = 'Search',
  style,
}) {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  useEffect(() => {
    onChange(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <View
      style={{
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 7,
        marginVertical: figmaHeight(14),
        backgroundColor: colors.lightGrey,
        padding: figmaWidth(8),
        flexDirection: 'row',
        ...style,
      }}>
      <MaterialIcons
        name="search"
        color={colors.greyButton}
        size={20}
        style={{marginRight: figmaWidth(8)}}
        returnKeyType="search"
      />
      <TextInput
        style={{
          paddingVertical: 0,
          fontFamily: 'Jost-Regular',
        }}
        placeholder={placeholder}
        placeholderTextColor={colors.grey83}
        autoCorrect={false}
        onChangeText={setSearch}
        width="90%"
      />
    </View>
  );
}
