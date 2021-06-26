import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import menus from './constant';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../../constants/colors';

import AccountsStyles from './style';

export default function AccountScreen() {
  return (
    <ScrollView style={AccountsStyles.container}>
      {menus.map((menu, index) => (
        <TouchableOpacity key={index} style={AccountsStyles.listContainer}>
          <View style={AccountsStyles.list}>
            <MaterialIcons
              name={menu.material_icon_name}
              color={colors.primary}
              size={30}
              style={{marginRight: 15}}
            />

            <View>
              <Text style={AccountsStyles.menuName}>{menu.name}</Text>
              {menu.description !== '' && (
                <Text style={AccountsStyles.menuDescriptionn}>
                  {menu.description}
                </Text>
              )}
            </View>
          </View>

          <MaterialIcons
            name="arrow-forward-ios"
            color={colors.primary}
            size={20}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({});
