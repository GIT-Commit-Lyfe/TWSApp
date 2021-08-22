import React, {useState, useRef} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';
import {figmaHeight, height} from '../../utils/tools';
import {Jost300, Jost400, Jost500, Jost600} from '../StyledText';
import styles from './styles';
import {Formik} from 'formik';
import FilterSelection from './FilterSelection';

const FilterModal = React.forwardRef(
  ({title = 'Filters', setFilters, filters}, ref) => {
    return (
      <RBSheet
        ref={ref}
        closeOnDragDown={true}
        dragFromTopOnly={true}
        height={height - 100}
        customStyles={{
          container: containerCustomStyle,
          draggableIcon: {display: 'none'}, // The Draggable Icon (If you set closeOnDragDown to true)
        }}>
        <TouchableOpacity
          onPress={() => ref.current.close()}
          style={filterCloseButtonStyle}>
          <MaterialIcons name="expand-more" size={40} color={colors.primary} />
        </TouchableOpacity>

        <View style={filterTitleContainer}>
          <Jost600 style={titleStyle}>{title}</Jost600>
        </View>
        <Formik initialValues={{}} enableReinitialize={true}>
          {formikProps => {
            const {values} = formikProps;
            return (
              <>
                <FilterSelection
                  currentValues={values?.case_material}
                  name="case_material"
                  label="Case Material"
                  items={[
                    {value: 'Stainless Steel', label: 'Stainless Steel'},
                    {value: 'Bicolor Rose Gold', label: 'Bicolor Rose Gold'},
                  ]}
                />
                <FilterSelection
                  currentValues={values?.bezel_material}
                  name="bezel_material"
                  label="Bezel Material"
                  items={[
                    {value: 'Ceramic', label: 'Ceramic'},
                    {value: 'Aluminium', label: 'Aluminium'},
                    {value: 'Gem-Set', label: 'Gem-Set'},
                  ]}
                />
                <FilterSelection
                  currentValues={values?.bezel_color}
                  name="bezel_color"
                  label="Bezel Color"
                  items={[
                    {value: 'Black', label: 'Black'},
                    {value: 'Black / Blue', label: 'Black / Blue'},
                  ]}
                />
                <FilterSelection
                  currentValues={values?.bracelet}
                  name="bracelet"
                  label="Bracelet"
                  items={[
                    {value: 'Jubilee', label: 'Jubilee'},
                    {value: 'Oyster', label: 'Oyster'},
                    {value: 'Black Crocodile', label: 'Black Crocodile'},
                  ]}
                />
                <FilterSelection
                  currentValues={values?.case_diameter}
                  name="case_diameter"
                  label="Case Diameter"
                  items={[
                    {value: '39 mm', label: '39 mm'},
                    {value: '40 mm', label: '40 mm'},
                    {value: '42 mm', label: '42 mm'},
                  ]}
                />
                <FilterSelection
                  currentValues={values?.crystal}
                  name="crystal"
                  label="Crystal"
                  items={[
                    {value: 'Sapphire', label: 'Sapphire'},
                    {value: 'Plexyglass', label: 'Plexyglass'},
                  ]}
                />
                <FilterSelection
                  currentValues={values?.complications}
                  name="complications"
                  label="Complications"
                  items={[
                    {value: 'Date', label: 'Date'},
                    {value: 'Chronograph', label: 'Chronograph'},
                    {value: 'GMT', label: 'GMT'},
                  ]}
                />
                <FilterSelection
                  currentValues={values?.location}
                  name="location"
                  label="Location of Watch"
                  items={[
                    {value: 'Germany', label: 'Germany'},
                    {value: 'EU', label: 'EU'},
                  ]}
                />
                <FilterSelection
                  currentValues={values?.custom_features}
                  name="custom_features"
                  label="Custom Features"
                  items={[]}
                />
              </>
            );
          }}
        </Formik>
      </RBSheet>
    );
  },
);

const Line = () => <View style={line} />;
export default FilterModal;

const {
  containerCustomStyle,
  filterCloseButtonStyle,
  filterTitleContainer,
  titleStyle,
  filterCategoryContainer,
  titleButtonContainer,
  filterTitleText,
  filterItemContainer,
  line,
} = styles;
