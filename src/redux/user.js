import api from '../utils/api';

const initialState = {};

export const setUser = user => async dispatch => {
  try {
    const res = await getUser();

    dispatch({type: 'SET_USER', payload: res});
  } catch (error) {}
};

const getUser = async () => {
  try {
    const res = await api.get('/api/my_info');
    return res.data.data;
  } catch (error) {}
};

// reducer
export default function user(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    default:
      return state;
  }
}
