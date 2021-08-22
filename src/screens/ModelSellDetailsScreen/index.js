import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import BuyAndSellSummary from '../../components/BuyAndSellSummary';
import {Jost300, Jost400, Jost500, Jost600} from '../../components/StyledText';
import styles from './styles';
import {Form} from '../../components/Inputs';
import PillSelection from '../../components/Inputs/PillSelection';
import {figmaHeight} from '../../utils/tools';
import {BasicButton} from '../../components/Buttons';
import {Formik} from 'formik';
import * as yup from 'yup';

const ModelSellDetailsScreen = ({navigation}) => {
  const years = ['2010 - 2020', '2016', '2017', '2019', '2020'];
  const conditions = ['Unworn', 'Very Good', 'Very Good (Polished)'];
  const accomodates = ['Full Set', 'Only with Papers', 'Only with Box'];
  const locations = ['Berlin, Germany'];

  const handleSubmitDetails = values => {
    navigation.navigate('ModelSellPhotos');
  };

  const validationSchema = yup.object().shape({
    year: yup.string().required('Required'),
    condition: yup.string().required('Required'),
    accomodate: yup.string().required('Required'),
    location: yup.string().required('Required'),
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
        onSubmit={handleSubmitDetails}>
        {({values, handleSubmit, isValid}) => {
          return (
            <ScrollView contentContainerStyle={styles.innerContainer}>
              <View style={styles.list}>
                <Jost600 style={styles.headerText}>
                  Details for Sell Order
                </Jost600>
              </View>

              <Form>
                <PillSelection title="Years" options={years} name="year" />
                <PillSelection
                  title="Condition"
                  options={conditions}
                  name="condition"
                />
                <PillSelection
                  title="Accomodated With"
                  options={accomodates}
                  name="accomodate"
                />
                <PillSelection
                  title="Location of watch"
                  options={locations}
                  name="location"
                />
                <PillSelection title="Significant Edition" name="edition" />

                <PillSelection title="Add Custom Features" name="feature" />

                <View style={styles.list}>
                  <Jost500 style={{marginBottom: 5}}>
                    Product Description
                  </Jost500>
                  <Jost300 style={{fontSize: 14, lineHeight: figmaHeight(20)}}>
                    Let pottential buyers know; Did your watch ever serviced (If
                    yes when); Where and when did you buy your watch?; Does it
                    still have guarantee? Are there any replaced parts? Are
                    there any scratches or dents?
                  </Jost300>
                </View>

                <View style={styles.buttonContainer}>
                  <BasicButton
                    disabled={!isValid}
                    text="Next Step (Add Photos)"
                    containerStyle={{flex: 1, width: '100%'}}
                    onPress={handleSubmit}
                  />
                  <Jost400>
                    Step <Jost600>1</Jost600> of 3
                  </Jost400>
                </View>
              </Form>
            </ScrollView>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

export default ModelSellDetailsScreen;
