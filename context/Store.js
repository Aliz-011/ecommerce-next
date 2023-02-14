import { createContext, useReducer, useContext, useEffect } from 'react';

const StoreContext = createContext();

export const initialState = {
  user: null,
  cart: null,
  favorites: null,
  products: [],
};

export const actionType = {
  SET_USER: 'SET_USER',
  SET_CART: 'SET_CART',
  SET_FAVORITES: 'SET_FAVORITES',
  SET_PRODUCTS: 'SET_PRODUCTS',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return { ...state, user: action.user };
    case actionType.SET_CART:
      return { ...state, cart: action.cart };
    case actionType.SET_FAVORITES:
      return { ...state, favorites: action.favorites };
    case actionType.SET_PRODUCTS:
      return { ...state, products: action.products };

    default:
      return state;
  }
};

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state]);

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export const useStateValue = () => useContext(StoreContext);
