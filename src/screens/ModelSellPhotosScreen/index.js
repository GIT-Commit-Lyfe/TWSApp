import React, {useState} from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import {times} from 'lodash';
import BuyAndSellSummary from '../../components/BuyAndSellSummary';
import {Jost300, Jost400, Jost500, Jost600} from '../../components/StyledText';
import styles from './styles';
import PillSelection from '../../components/Inputs/PillSelection';
import {figmaHeight} from '../../utils/tools';
import {BasicButton} from '../../components/Buttons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';
import {Formik} from 'formik';
import {Form} from '../../components/Inputs';
import * as yup from 'yup';

const ModelSellPhotosScreen = ({navigation}) => {
  const [additional, setAdditional] = useState(0);

  const handleSubmitPhoto = () => {
    navigation.navigate('ModelSellAskPrice');
  };

  const handleAdditional = () => {
    if (!additional) {
      setAdditional(6);
    } else setAdditional(p => p + 1);
  };

  const validationSchema = yup.object().shape({
    photo1: yup.string().required('Required'),
    photo2: yup.string().required('Required'),
    photo3: yup.string().required('Required'),
    photo4: yup.string().required('Required'),
    photo5: yup.string().required('Required'),
  });

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.innerContainer}>
        <BuyAndSellSummary />
      </View>

      <Formik
        initialValues={{}}
        validationSchema={validationSchema}
        validateOnMount
        onSubmit={handleSubmitPhoto}>
        {({values, handleSubmit, isValid}) => {
          return (
            <Form style={styles.contentContainer}>
              <ScrollView>
                <View style={styles.innerContainer}>
                  <View style={styles.list}>
                    <Jost600 style={styles.headerText}>
                      Photos for Sell Order
                    </Jost600>
                  </View>
                  <PillSelection
                    title="Photo 1: Top View"
                    type="photo"
                    name="photo1"
                  />
                  <PillSelection
                    title="Photo 2: Left View"
                    type="photo"
                    name="photo2"
                  />
                  <PillSelection
                    title="Photo 3: Right View"
                    type="photo"
                    name="photo3"
                  />
                  <PillSelection
                    title="Photo 4: Strap and Buckle Detailed"
                    type="photo"
                    name="photo4"
                  />
                  <PillSelection
                    title="Photo 5: Showcase (with all accompanied items)"
                    type="photo"
                    name="photo5"
                  />
                  {Boolean(additional) &&
                    times(additional - 5, index => {
                      const modifiedIndex = index + 6;
                      return (
                        <PillSelection
                          key={index}
                          title={`Photo ${modifiedIndex}: Additional`}
                          name={`photo${modifiedIndex}`}
                          type="photo"
                        />
                      );
                    })}

                  <TouchableOpacity
                    style={styles.additionalShots}
                    onPress={handleAdditional}>
                    <MaterialIcons
                      name="add-circle-outline"
                      size={16}
                      color={colors.primary}
                    />
                    <Jost300 style={styles.addText}>
                      Add additional shots
                    </Jost300>
                  </TouchableOpacity>
                </View>
              </ScrollView>
              <View style={styles.buttonContainer}>
                <BasicButton
                  text="Next Step (Listing Details)"
                  containerStyle={styles.button}
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
                <Jost400>
                  Step <Jost600>2</Jost600> of 3
                </Jost400>
              </View>
            </Form>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

export default ModelSellPhotosScreen;
