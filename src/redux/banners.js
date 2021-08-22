import BannersAPI from '../api/banner';

const initialState = {banners: [], loading: false, error: null};

export const setBanners = () => async dispatch => {
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

// reducer
export default function banners(state = initialState, action) {
  switch (action.type) {
    case 'SET_BANNERS':
      return {...state, banners: action.payload};
    case 'SET_LOADING':
      return {...state, loading: action.payload};
    default:
      return state;
  }
}
