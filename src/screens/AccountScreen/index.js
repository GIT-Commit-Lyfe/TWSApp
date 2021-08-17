import React from 'react';
import {FlatList, SafeAreaView, TouchableOpacity, View} from 'react-native';

import menus from './constant';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../../constants/colors';
import BrandsTab from '../../assets/brands-tab.svg';

import AccountsStyles from './style';

import {Jost400, Jost600} from '../../components/StyledText';

export default function AccountScreen() {
  return (
    <SafeAreaView style={AccountsStyles.safeAreaView}>
      <FlatList
        contentContainerStyle={AccountsStyles.container}
        data={menus}
        keyExtractor={(_, index) => index}
        ItemSeparatorComponent={() => <Line />}
        renderItem={({item: menu, index}) => {
          return (
            <TouchableOpacity key={index} style={AccountsStyles.listContainer}>
              <View style={AccountsStyles.list}>
                {menu.material_icon_name !== '' ? (
                  <MaterialIcons
                    name={menu.material_icon_name}
                    color={colors.primary}
                    size={30}
                    style={{marginRight: 15}}
                  />
                ) : (
                  <BrandsTab style={{marginRight: 15}} />
                )}

                <View>
                  <Jost600 style={AccountsStyles.menuName}>{menu.name}</Jost600>
                  {menu.description !== '' && (
                    <Jost400 style={AccountsStyles.menuDescription}>
                      {menu.description}
                    </Jost400>
                  )}
                </View>
              </View>

              <MaterialIcons
                name="arrow-forward-ios"
                color={colors.primary}
                size={20}
              />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}
const Line = () => <View style={AccountsStyles.line} />;
