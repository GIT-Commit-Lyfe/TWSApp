import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';

import DismissKeyboard from '../../components/DismissKeyboard';
import SearchBox from '../../components/Inputs/SearchBox';
import {Jost400} from '../../components/StyledText';
import colors from '../../constants/colors';
import {figmaHeight, figmaWidth, width} from '../../utils/tools';
import {InitialList, MultiScopeResult} from './components';

const SearchScreen = ({navigation}) => {
  const [query, setQuery] = useState('');
  const goBack = () => {
    navigation.goBack();
  };

  const searchBoxRef = useRef();

  useEffect(() => {
    searchBoxRef?.current?.focus();
  }, []);

  const recentSearches = [
    'Rolex Submariner',
    'Submariner Date 2019',
    'Rolex 116610',
    'GMT Master ii',
    'GMT Maste ii',
  ];

  const trending = [
    'Submariner',
    'GMT Master II',
    'Nautilus',
    'Dummy',
    'Dummy',
    'Dummy',
  ];

  const multiScopeData = [
    {
      label: 'Brands',
      amount: 102,
    },
    {
      label: 'Collections',
      amount: 590,
    },
    {
      label: 'Models',
      amount: 1207,
    },
    {
      label: 'Boutiques',
      amount: 1207,
    },
    {
      label: 'Accessories',
      amount: 1207,
    },
  ];

  const handleSearch = text => {
    console.log(text, 'di handle search');
    setQuery(text);
  };

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.searchBar}>
            <SearchBox
              ref={searchBoxRef}
              style={styles.searchBox}
              onChange={handleSearch}
            />
            <TouchableOpacity onPress={goBack}>
              <Jost400>Cancel</Jost400>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          {Boolean(query) ? (
            <>
              <MultiScopeResult
                onPress={goBack}
                query={query}
                data={multiScopeData}
              />
            </>
          ) : (
            <>
              <InitialList
                title="Recent Searches"
                data={recentSearches}
                onPress={goBack}
              />
              <InitialList title="Trending" data={trending} onPress={goBack} />
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </DismissKeyboard>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: 'white'},
  container: {
    paddingVertical: figmaHeight(12),
    paddingHorizontal: figmaWidth(20),
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBox: {
    flex: 1,
    marginRight: figmaWidth(20),
    backgroundColor: colors.lightGrey,
  },
});
