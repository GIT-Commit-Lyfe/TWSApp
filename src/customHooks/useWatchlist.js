import {useContext, useEffect} from 'react';
import ListingsAPI from '../api/list';
import {WatchlistContext} from '../contexts/watchlistContext';

export default function useWatchlist() {
  const [state, dispatch] = useContext(WatchlistContext);
  const {watchlist, loading, error} = state;

  const initialGetWatchlist = async () => {
    try {
      dispatch({type: 'SET_LOADING', payload: true});
      const data = await getWatchLists();
      dispatch({type: 'SET_WATCHLIST', payload: data});
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({type: 'SET_LOADING', payload: false});
    }
  };

  const getWatchLists = async () => {
    try {
      const {data} = await ListingsAPI.getWatchLists();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const addWatchList = async watch => {
    try {
      dispatch({type: 'SET_LOADING', payload: true});
      dispatch({type: 'ADD_WATCHLIST', payload: watch});
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({type: 'SET_LOADING', payload: false});
    }
  };

  useEffect(() => {
    if (!watchlist.length) {
      initialGetWatchlist();
    }
  }, []);

  return {
    data: watchlist,
    addWatchList,
    error,
    loading,
    refetch: initialGetWatchlist,
  };
}
