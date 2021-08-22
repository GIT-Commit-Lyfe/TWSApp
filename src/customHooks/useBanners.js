import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setBanners} from '../redux/banners';

export default function useBanners() {
  const dispatch = useDispatch();
  const {banners, loading, error} = useSelector(state => state.banners);

  const initialGetBanners = async () => {
    try {
      dispatch(setBanners());
    } catch (error) {
      console.log(error);
    }
  };

  return {
    data: banners,
    error,
    loading,
    refetch: initialGetBanners,
  };
}
