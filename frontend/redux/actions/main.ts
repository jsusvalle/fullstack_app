import * as t from '../types';

export const example = () => dispatch => {
  dispatch({
    type: t.LOADING,
    payload: true,
  });
};
