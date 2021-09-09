import React, {useReducer, createContext} from 'react';

export const BannerContext = createContext();

const initialState = {
  banners: [],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_BANNERS':
      return {...state, banners: action.payload};
    case 'SET_LOADING':
      return {...state, loading: action.payload};
    default:
      return state;
  }
};

export const BannerContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BannerContext.Provider value={[state, dispatch]}>
      {props.children}
    </BannerContext.Provider>
  );
};
