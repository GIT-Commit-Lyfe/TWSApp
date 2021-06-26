import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Jost500, Jost600} from '../../components/StyledText';
import colors from '../../constants/colors';
import {SectionHeader, BrandsList} from './AllBrandsScreenComponents';

export default function AllBrandsScreen() {
  const brands = [
    'Accurist',
    'ADINA Watches',
    'Adidas',
    'Adriatica',
    'A.L.B Atelier Le Brézéguet',
    'Alba',
    'Alexandre Christie',
    'American Waltham Watch Company',
    'Anonimo',
    'Ansonia Clock Company',
    'Apple Inc.',
    'Aquastar',
    'Aragon',
    'Armand Nicolet',
    'Armani Exchange',
    'Armitron',
    'John Arnold',
    'ASUAG',
    'Audemars Piguet',
    'Ateliers deMonaco',
    'A. Lange & Sohne',
    'ABP Paris',
    'Aerowatch',
    'Aigner',
    'Backes & Strauss',
    'Baume et Mercier',
    'Ball Watch Company',
    'Webb C. Ball',
    'Bedat & Co',
    'Beijing Watch Factory',
    'Bell & Ross',
    'Benetton Group',
    'Benrus',
    'Binda Group',
    'Blancpain',
    'Blumarine',
    'Ernest Borel',
    'Bovet Fleurier',
    'Edouard Bovet',
    'Bozeman Watch Company',
    'Abraham-Louis Breguet',
    'Breguet',
    'Breil',
    'Breitling SA|Breitling',
    'Bremont Watch Company',
    'Gustav Bruemmer',
    'Buccellati',
    'Bulgari',
    'Bulova',
    'Burberry',
    'Cartier',
    'Chrono Swiss',
    'Chanel',
    'Dior',
    'Diesel',
    'Dolce & Gabbana',
    'Eberhard & Co.',
    'Fendi',
    'Fossil',
  ];

  const [sortedBrands, setSortedBrands] = useState([]);
  const sectionListRef = useRef();

  // groups and sort brands into array of objects based on first letter
  // const DATA = [
  //   {
  //     title: 'A',
  //     data: ['ABP Paris', 'Aigner', 'Alfred Dunhill'],
  //   },
  //   {
  //     title: 'B',
  //     data: ['Balmain', 'Boucheron', 'Bulgari'],
  //   },
  // ];
  const brandsSorter = brands => {
    let startingAlphabet = 'A';
    const sorted = [];
    let alphabeticalObj = {title: 'A', data: []};
    brands.sort().forEach((brand, idx) => {
      if (brand[0] === startingAlphabet) {
        alphabeticalObj.data.push(brand);
      } else if (brand[0] !== startingAlphabet) {
        sorted.push(alphabeticalObj);
        startingAlphabet = brand[0];
        alphabeticalObj = {title: brand[0], data: [brand]};
      }
      if (idx === brands.length - 1) {
        sorted.push(alphabeticalObj);
      }
    });
    return sorted;
  };

  useEffect(() => {
    setSortedBrands(brandsSorter(brands));
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Jost600
            style={{fontSize: 24, paddingHorizontal: 10, paddingVertical: 20}}>
            Brands
          </Jost600>
          <SectionList
            contentContainerStyle={{paddingBottom: 100}}
            ref={sectionListRef}
            showsVerticalScrollIndicator={false}
            sections={sortedBrands}
            keyExtractor={(item, index) => item + index}
            ItemSeparatorComponent={() => (
              <View style={{height: 1, backgroundColor: colors.lightGrey}} />
            )}
            renderItem={({item, index}) => (
              <BrandsList title={item} index={index} />
            )}
            renderSectionHeader={({section: {title}}) => (
              <SectionHeader title={title} />
            )}
          />
        </View>
        <Navigator list={sortedBrands} sectionListRef={sectionListRef} />
      </View>
    </SafeAreaView>
  );
}

const Navigator = ({list, sectionListRef}) => {
  return (
    <View style={{alignSelf: 'center'}}>
      {list.map((section, idx) => {
        return (
          <TouchableOpacity
            key={section + idx}
            style={{paddingHorizontal: 10}}
            onPress={() => {
              sectionListRef.current.scrollToLocation({
                itemIndex: 0,
                sectionIndex: idx,
              });
            }}>
            <Jost500 style={{fontSize: 10, color: colors.grey58}}>
              {section.title}
            </Jost500>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
