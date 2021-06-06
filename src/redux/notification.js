import api from '../utils/api';

const initialState = {loading: false, notifications: []};

// Action Types
const COUNT_NOTIFICATION = 'COUNT_NOTIFICATION';
const GET_NOTIFICATION_START = 'GET_NOTIFICATION_START';
const GET_NOTIFICATION_SUCCESS = 'GET_NOTIFICATION_SUCCESS';
const GET_NOTIFICATION_FAILED = 'GET_NOTIFICATION_FAILED';

// Action Creator
export const countNotification = data => ({
  type: COUNT_NOTIFICATION,
  payload: data,
});

export const getNotifications = () => async dispatch => {
  dispatch({type: GET_NOTIFICATION_START});
  try {
    const res = await getNotificationsApi();
    dispatch({type: GET_NOTIFICATION_SUCCESS, payload: res});
  } catch (error) {
    dispatch({type: GET_NOTIFICATION_FAILED, error});
  }
};

const getNotificationsApi = async () => {
  try {
    const res = await api.get('api/notifications');
    return {data: res.data.data, unread: res.data.unread};
  } catch (error) {}
};

// Reducer
export default function notification(state = initialState, action) {
  switch (action.type) {
    case COUNT_NOTIFICATION:
      return {
        ...action.payload,
      };
    case GET_NOTIFICATION_START:
      return {
        ...state,
        loading: true,
      };
    case GET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        notifications: action.payload,
      };
    case GET_NOTIFICATION_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
