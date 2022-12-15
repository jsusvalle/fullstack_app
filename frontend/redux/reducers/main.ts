import * as t from '../types';

const initialState = {
  listRates: [],
  listLabels: [],
  loading: false,
  error: null,
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case t.LOADING:
      return { ...state, loading: action.payload };

    case t.ERROR:
      return { ...state, listRates: [], error: action.payload };

    default:
      return { ...state };
  }
};

export default main;
