import { handleActions } from 'redux-actions';
import { getOrder, postOrder } from '../../api';
import { Item, Order, TypeDispatch } from '../../typings/db';

const initialState: Order = {
  loading: {
    GET_ORDER: false,
  },
  orderList: [],
};

const GET_ORDERLIST = 'getOrderlist/GET_ORDERLIST';
const GET_ORDERLIST_SUCCESS = 'getOrderlist/GET_ORDERLIST_SUCCESS';
const GET_ORDERLIST_FAILURE = 'getOrderlist/GET_ORDERLIST_FAILURE';

const POST_ORDERLIST = 'getOrderlist/POST_ORDERLIST';
const POST_ORDERLIST_SUCCESS = 'getOrderlist/POST_ORDERLIST_SUCCESS';
const POST_ORDERLIST_FAILURE = 'getOrderlist/POST_ORDERLIST_FAILURE';

export const getUserOrderList = () => async (dispatch: (arg0: TypeDispatch) => void) => {
  dispatch({ type: GET_ORDERLIST });
  try {
    const response = await getOrder();
    dispatch({
      type: GET_ORDERLIST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ORDERLIST_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

export const postOrderList = (payload: Item) => async (dispatch: (arg0: TypeDispatch) => void) => {
  dispatch({ type: POST_ORDERLIST });
  try {
    const response = await postOrder(payload);
    dispatch({
      type: POST_ORDERLIST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: POST_ORDERLIST_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

const getOrderlist = handleActions(
  {
    [GET_ORDERLIST]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_ORDER: true,
      },
    }),
    [GET_ORDERLIST_SUCCESS]: (state, action: any) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_ORDER: false,
      },
      orderList: action.payload,
    }),
    [GET_ORDERLIST_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_ORDER: false,
      },
    }),
    [POST_ORDERLIST]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_ORDER: true,
      },
    }),
    [POST_ORDERLIST_SUCCESS]: (state, action: any) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_ORDER: false,
      },
      orderList: action.payload,
    }),
    [POST_ORDERLIST_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_ORDER: false,
      },
    }),
  },
  initialState,
);

export default getOrderlist;
