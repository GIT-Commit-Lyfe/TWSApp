import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../constants/colors';
import {Jost600} from './StyledText';

export default function TabbedNavigator({data}) {
  const [componentShownIndex, setComponentShownIndex] = useState(0); // stores index of component to be shown

  return (
    <>
      <FlatList
        style={{padding: 10}}
        data={data}
        keyExtractor={(_, index) => index}
        renderItem={({item, index}) => {
          const selected = componentShownIndex === index;
          return (
            <TouchableOpacity onPress={() => setComponentShownIndex(index)}>
              <View
                style={{
                  marginRight: 30,
                  borderBottomColor: colors.primary,
                  borderBottomWidth: selected ? 2 : 0,
                  paddingBottom: 10,
                }}>
                <Text
                  style={{
                    color: selected ? colors.primary : colors.grey62,
                  }}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      {data[componentShownIndex].component}
    </>
  );
}

const styles = StyleSheet.create({});
