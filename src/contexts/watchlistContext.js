import React, {useReducer, createContext} from 'react';

export const WatchlistContext = createContext();

const initialState = {
  watchlist: [],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_WATCHLIST':
      return {...state, watchlist: action.payload};
    case 'ADD_WATCHLIST':
      return {...state, watchlist: [action.payload, ...state.watchlist]};
    case 'REMOVE_WATCHLIST':
      const filteredWatchlist = state.watchlist.filter(
        watch => watch.id !== action.payload.id,
      );
      return {...state, watchlist: filteredWatchlist};
    case 'SET_LOADING':
      return {...state, loading: action.payload};
    default:
      return state;
  }
};

export const WatchlistContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <WatchlistContext.Provider value={[state, dispatch]}>
      {props.children}
    </WatchlistContext.Provider>
  );
};
