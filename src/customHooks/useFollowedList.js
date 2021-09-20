import {useContext, useEffect} from 'react';
import ListingsAPI from '../api/list';
import {FollowedListContext} from '../contexts/followedListContext';

export default function useFollowedList() {
  const [state, dispatch] = useContext(FollowedListContext);
  const {followedList, loading, error} = state;

  const initialGetFollowedList = async () => {
    try {
      dispatch({type: 'SET_LOADING', payload: true});
      const data = await getFollowedList();
      dispatch({type: 'SET_FOLLOWED_LIST', payload: data});
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({type: 'SET_LOADING', payload: false});
    }
  };

  const getFollowedList = async () => {
    try {
      const {data} = await ListingsAPI.getFollowedListings();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const addFollowedList = async list => {
    // try {
    //   dispatch({type: 'SET_LOADING', payload: true});
    //   dispatch({type: 'ADD_FOLLOWED_LIST', payload: list});
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   dispatch({type: 'SET_LOADING', payload: false});
    // }
  };

  useEffect(() => {
    if (!followedList.length) {
      initialGetFollowedList();
    }
  }, []);

  return {
    data: followedList,
    addFollowedList,
    error,
    loading,
    refetch: initialGetFollowedList,
  };
}
