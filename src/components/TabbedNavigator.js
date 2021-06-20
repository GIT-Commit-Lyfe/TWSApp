import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../constants/colors';
import {Jost400, Jost500} from './StyledText';

export function ScrollingTabbedNavigator({data}) {
  const [componentShownIndex, setComponentShownIndex] = useState(0); // stores index of component to be shown
  return (
    <>
      <FlatList
        style={{
          paddingHorizontal: 10,
          marginBottom: 10,
          borderBottomColor: colors.lightGrey,
          borderBottomWidth: 1,
        }}
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
                <Jost400
                  style={{
                    color: selected ? colors.primary : colors.grey62,
                    fontSize: 16,
                  }}>
                  {item.title}
                </Jost400>
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

export function TabbedNavigator({data}) {
  const [componentShownIndex, setComponentShownIndex] = useState(0); // stores index of component to be shown

  return (
    <View style={{marginTop: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        {data.map((item, index) => {
          const selected = componentShownIndex === index;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setComponentShownIndex(index)}>
              <View
                style={{
                  borderBottomColor: colors.primary,
                  borderBottomWidth: selected ? 2 : 0,
                  paddingBottom: 10,
                }}>
                <Jost400
                  style={{
                    color: selected ? colors.primary : colors.grey62,
                    fontSize: 16,
                  }}>
                  {item.title}
                </Jost400>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      {data[componentShownIndex].component}
    </View>
  );
}
