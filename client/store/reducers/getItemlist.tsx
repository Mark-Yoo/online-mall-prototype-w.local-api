import { handleActions } from 'redux-actions';
import { getCategoryList, getItemList } from '../../api';
import { ItemList, TypeDispatch } from '../../typings/db';

const initialState: ItemList = {
  loading: {
    GET_ITEMS: false,
    GET_CATEGORY: false,
  },
  itemList: [],
  categoryList: [],
};

const GET_ITEMLIST = 'getItemlist/GET_ITEMLIST';
const GET_ITEMLIST_SUCCESS = 'getItemlist/GET_ITEMLIST_SUCCESS';
const GET_ITEMLIST_FAILURE = 'getItemlist/GET_ITEMLIST_FAILURE';

const GET_CATEGORYLIST = 'getItemlist/GET_CATEGORYLIST';
const GET_CATEGORYLIST_SUCCESS = 'getItemlist/GET_CATEGORYLIST/SUCCESS';
const GET_CATEGORYLIST_FAILURE = 'getItemlist/GET_ITEMLIST_FAILURE';

export const getList = () => async (dispatch: (arg0: TypeDispatch) => void) => {
  dispatch({ type: GET_ITEMLIST });
  try {
    const response = await getItemList();
    dispatch({
      type: GET_ITEMLIST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ITEMLIST_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

export const getCategory = () => async (dispatch: (arg0: TypeDispatch) => void) => {
  dispatch({ type: GET_CATEGORYLIST });
  try {
    const response = await getCategoryList();
    dispatch({
      type: GET_CATEGORYLIST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_CATEGORYLIST_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

const getItemlist = handleActions(
  {
    [GET_ITEMLIST]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_ITEMS: true,
      },
    }),
    [GET_ITEMLIST_SUCCESS]: (state, action: any) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_ITEMS: false,
      },
      itemList: action.payload,
    }),
    [GET_ITEMLIST_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_ITEMS: false,
      },
    }),
    [GET_CATEGORYLIST]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_CATEGORY: true,
      },
    }),
    [GET_CATEGORYLIST_SUCCESS]: (state, action: any) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_CATEGORY: false,
      },
      categoryList: action.payload,
    }),
    [GET_CATEGORYLIST_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_CATEGORY: false,
      },
    }),
  },
  initialState,
);

export default getItemlist;
