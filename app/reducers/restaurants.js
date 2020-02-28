import createReducer from '../createReducer';

export const GET_RESTRAURANTS = 'restraurant.GET_RESTRAURANTS';

const PAGE_SIZE = 30;
// ------------------------------------
// Actions
// ------------------------------------
export const getRestraurants = (search, isclear, callback) => (
  dispatch,
  getState,
  {fetch},
) => {
  const {restaurants} = getState().restaurants;
  return fetch(
    `/businesses/search?location=newyork&categories=restaurants&offset=${
      restaurants.length
    }&limit=${PAGE_SIZE}&term=${search ? search : ''}`,
    {
      method: 'GET',
      contentType: 'application/json',
      success: async res => {
        callback && callback();
        if (res && res.businesses) {
          await dispatch({
            type: GET_RESTRAURANTS,
            restaurants: isclear
              ? res.businesses
              : [...restaurants, ...res.businesses],
          });
        }
      },
      failure: err => {
        callback && callback();
        if (err.message) {
          alert(err.message);
        }
      },
    },
  );
};
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  restaurants: [],
};

export default createReducer(initialState, {
  [GET_RESTRAURANTS]: (state, {restaurants}) => ({
    restaurants,
  }),
});
