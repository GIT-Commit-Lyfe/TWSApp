import {useContext, useEffect} from 'react';
import BannersAPI from '../api/banner';
import {BannerContext} from '../contexts/bannerContext';

export default function useBanners() {
  const [state, dispatch] = useContext(BannerContext);
  const {banners, loading, error} = state;

  const initialGetBanners = async () => {
    try {
      dispatch({type: 'SET_LOADING', payload: true});
      const data = await getBanners();
      dispatch({type: 'SET_BANNERS', payload: data});
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({type: 'SET_LOADING', payload: false});
    }
  };

  const getBanners = async () => {
    try {
      const res = await BannersAPI.getPriceBanners();
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!banners?.length) {
      initialGetBanners();
    }
  }, []);

  return {
    data: banners,
    error,
    loading,
    refetch: initialGetBanners,
  };
}
