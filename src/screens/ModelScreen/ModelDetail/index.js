import React, {useRef, useEffect, useState} from 'react';
import {Button, Image, View, Text, TouchableOpacity} from 'react-native';
import {Jost400, Jost500, Jost600} from '../../../components/StyledText';
import styles from './styles';
import SelectionModal from '../../../components/SelectionModal';
import FilterModal from '../../../components/FilterModal';
import {formatCurrency} from '../../../utils/tools';
import ModelsAPI from '../../../api/model';
import useWatchlist from '../../../customHooks/useWatchlist';
import Toast from 'react-native-toast-message';

const ModelDetail = ({data = {}}) => {
  const [model, setModel] = useState(data);
  const {addWatchList, removeWatchList, data: watchlist} = useWatchlist();

  const {
    brand = 'Rolex',
    collection,
    currency,
    id,
    marketPrice,
    modelUrl,
    raising,
    reference,
    significantEdition = '',
    status = '',
  } = model;

  const isInWatchlist = watchlist.filter(
    item => item.reference === reference,
  ).length;

  useEffect(() => {
    console.log(watchlist);
    console.log(isInWatchlist);
  }, [watchlist]);

  const getDetailedInfo = async () => {
    try {
      const res = await ModelsAPI.getDetails(id);
      // setModel(res.data);
      console.log(res, 'ini detailnya');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailedInfo();
  }, []);

  const filterModalRef = useRef();

  const openFilterModal = () => filterModalRef.current.open();

  const addToWatchlist = async () => {
    try {
      if (isInWatchlist) {
        await removeWatchList(model);
        Toast.show({
          type: 'success',
          text1: `${brand} ${collection}`,
          text2: 'Removed from watchlist',
          position: 'top',
          visibilityTime: 2000,
        });
      } else {
        await addWatchList(model);
        Toast.show({
          type: 'success',
          text1: `${brand} ${collection}`,
          text2: 'Added to watchlist',
          position: 'top',
          visibilityTime: 2000,
        });
      }
    } catch (error) {}
  };

  return (
    <View>
      <View style={styles.copywriting}>
        <Jost600 style={styles.statusText}>{status}</Jost600>
        <Jost600 style={styles.nameText}>{`${brand} ${collection}`}</Jost600>
        <Jost400
          style={
            styles.aliasText
          }>{`${reference} ${significantEdition}`}</Jost400>
      </View>

      <View style={styles.flexRow}>
        <View style={styles.halveWidth}>
          <View style={styles.selectionContainer}>
            <SelectionModal
              title="Year"
              placeholder="Select Year"
              items={[
                {id: 1, value: '1990 - 2000', label: '1990 - 2000'},
                {id: 2, value: '2000 - 2010', label: '2000 - 2010'},
                {id: 3, value: '2010 - 2020', label: '2010 - 2020'},
              ]}
            />
            <SelectionModal
              title="Condition"
              placeholder="Select Condition"
              items={[
                {id: 1, value: 'Good', label: 'Good'},
                {id: 2, value: 'Very Good', label: 'Very Good'},
                {id: 3, value: 'Fair', label: 'Fair'},
              ]}
            />
            <SelectionModal
              title="Accomodated with"
              placeholder="Select Accomodation"
              items={[
                {id: 1, value: 'Full Set', label: 'Full Set'},
                {
                  id: 2,
                  value: 'With Original Papers',
                  label: 'With Original Papers',
                },
                {id: 3, value: 'With Box', label: 'With Box'},
              ]}
            />
          </View>

          <View>
            <Jost400 style={styles.label}>Last Known Price</Jost400>
            <Jost500 style={styles.price}>
              {formatCurrency(marketPrice)}
            </Jost500>
            <Jost400 style={styles.updown}>{`${
              raising ? '+' : '-'
            }€350 (+2,5%)`}</Jost400>
          </View>
        </View>

        <View style={styles.halveWidth}>
          <Image style={styles.imageStyle} source={{uri: modelUrl}} />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={openFilterModal} style={styles.buttonWhite}>
          <Jost600 style={styles.buttonWhiteText}>More Filters</Jost600>
        </TouchableOpacity>

        <View style={styles.spacer} />

        <TouchableOpacity onPress={addToWatchlist} style={styles.buttonBlack}>
          <Jost600 style={styles.buttonBlackText}>
            {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
          </Jost600>
        </TouchableOpacity>
      </View>
      <FilterModal ref={filterModalRef} />
    </View>
  );
};

export default ModelDetail;
