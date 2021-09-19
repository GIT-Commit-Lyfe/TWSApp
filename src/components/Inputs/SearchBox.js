import React, {useEffect, useState} from 'react';
import {TextInput, View, Pressable} from 'react-native';
import {figmaHeight, figmaWidth} from '../../utils/tools';
import colors from '../../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useDebounce from '../../customHooks/useDebounce';

const SearchBox = React.forwardRef(
  (
    {
      onChange = text => console.log(text),
      onPress,
      placeholder = 'Search',
      style,
      isHomeScreen = false,
    },
    ref,
  ) => {
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 500);

    useEffect(() => {
      onChange(debouncedSearch);
    }, [debouncedSearch]);

    const Container = isHomeScreen ? Pressable : View;
    const handleOnPress = isHomeScreen ? onPress : () => {};

    return (
      <Container
        onPress={handleOnPress}
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
          ref={ref}
          editable={!isHomeScreen}
          onPressIn={handleOnPress}
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
      </Container>
    );
  },
);

export default SearchBox;
