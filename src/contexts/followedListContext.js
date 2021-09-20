import React, {useReducer, createContext} from 'react';

export const FollowedListContext = createContext();

const initialState = {
  followedList: [],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FOLLOWED_LIST':
      return {...state, followedList: action.payload};
    case 'ADD_FOLLOWED_LIST':
      return {...state, followedList: [action.payload, ...state.followedList]};
    case 'SET_LOADING':
      return {...state, loading: action.payload};
    default:
      return state;
  }
};

export const FollowedListContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FollowedListContext.Provider value={[state, dispatch]}>
      {props.children}
    </FollowedListContext.Provider>
  );
};
