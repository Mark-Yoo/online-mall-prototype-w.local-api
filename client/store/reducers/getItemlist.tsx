import { handleActions } from 'redux-actions';
import { getCategoryList, getItemList, getFilteredList, getDetail, getDetailCategoryList } from '../../api';
import { ItemList, TypeDispatch } from '../../typings/db';

const initialState: ItemList = {
  loading: {
    GET_ITEMS: false,
    GET_CATEGORY: false,
    CHANGE_CATEGORY: false,
    CHANGE_DETAIL_CATEGORY: false,
  },
  itemList: [],
  categoryList: [],
  detailCategoryList: [],
  itemDetail: [],
  copiedItemList: [],
};

const GET_ITEMLIST = 'getItemlist/GET_ITEMLIST';
const GET_ITEMLIST_SUCCESS = 'getItemlist/GET_ITEMLIST_SUCCESS';
const GET_ITEMLIST_FAILURE = 'getItemlist/GET_ITEMLIST_FAILURE';

const GET_FILTERED_ITEMLIST = 'getItemlist/GET_FILTERED_ITEMLIST';
const GET_FILTERED_ITEMLIST_SUCCESS = 'getItemlist/GET_FILTERED_ITEMLIST_SUCCESS';
const GET_FILTERED_ITEMLIST_FAILURE = 'getItemlist/GET_FILTERED_ITEMLIST_FAILURE';

const GET_CATEGORYLIST = 'getItemlist/GET_CATEGORYLIST';
const GET_CATEGORYLIST_SUCCESS = 'getItemlist/GET_CATEGORYLIST_SUCCESS';
const GET_CATEGORYLIST_FAILURE = 'getItemlist/GET_ITEMLIST_FAILURE';

const GET_DETAIL_CATEGORYLIST = 'getItemlist/GET_DETAIL_CATEGORYLIST';
const GET_DETAIL_CATEGORYLIST_SUCCESS = 'getItemlist/GET_DETAIL_CATEGORYLIST_SUCCESS';
const GET_DETAIL_CATEGORYLIST_FAILURE = 'getItemlist/GET_DETAIL_CATEGORYLIST_FAILURE';

const COPY_CATEGORY = 'getItemlist/COPY_CATEGORY';
const COPY_CATEGORY_SUCCESS = 'getItemlist/COPY_CATEGORY_SUCCESS';
const COPY_CATEGORY_FAILURE = 'getItemlist/COPY_CATEGORY_FAILURE';

const GET_ITEM_DETAIL = 'getItemlist/GET_ITEM_DETAIL';
const GET_ITEM_DETAIL_SUCCESS = 'getItemlist/GET_ITEM_DETAIL_SUCCESS';
const GET_ITEM_DETAIL_FAILURE = 'getItemlist/GET_ITEM_DETAIL_FAILURE';

const CHANGE_DETAIL_FILTER = 'getItemlist/CHANGE_DETAIL_FILTER';
const CHANGE_DETAIL_FILTER_SUCCESS = 'getItemlist/CHANGE_DETAIL_FILTER_SUCCESS';
const CHANGE_DETAIL_FILTER_FAILURE = 'getItemlist/CHANGE_DETAIL_FILTER_FAILURE';

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

export const getCopyList = (payload: any) => async (dispatch: (arg0: TypeDispatch) => void) => {
  dispatch({ type: COPY_CATEGORY });
  try {
    dispatch({
      type: COPY_CATEGORY_SUCCESS,
      payload: payload,
    });
  } catch (e) {
    dispatch({
      type: COPY_CATEGORY_FAILURE,
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

export const getFilter = (payload: any) => async (dispatch: (arg0: TypeDispatch) => void) => {
  dispatch({ type: GET_FILTERED_ITEMLIST });
  try {
    const response = await getFilteredList(payload);
    dispatch({
      type: GET_FILTERED_ITEMLIST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_FILTERED_ITEMLIST_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

export const getDetailFilter = () => async (dispatch: (arg0: TypeDispatch) => void) => {
  dispatch({ type: GET_DETAIL_CATEGORYLIST });
  try {
    const response = await getDetailCategoryList();
    dispatch({
      type: GET_DETAIL_CATEGORYLIST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_DETAIL_CATEGORYLIST_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

export const getItemDetail = (payload: any) => async (dispatch: (arg0: TypeDispatch) => void) => {
  dispatch({ type: GET_ITEM_DETAIL });
  try {
    const response = await getDetail(payload);
    dispatch({
      type: GET_ITEM_DETAIL_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ITEM_DETAIL_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

export const changeDetailFilter = (filterDetail: string) => async (dispatch: (arg0: TypeDispatch) => void) => {
  dispatch({ type: CHANGE_DETAIL_FILTER });
  try {
    dispatch({
      type: CHANGE_DETAIL_FILTER_SUCCESS,
      payload: filterDetail,
    });
  } catch (e) {
    dispatch({
      type: CHANGE_DETAIL_FILTER_FAILURE,
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
      copiedItemList: action.payload,
    }),
    [GET_ITEMLIST_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_ITEMS: false,
      },
    }),
    [COPY_CATEGORY]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_ITEMS: true,
      },
    }),
    [COPY_CATEGORY_SUCCESS]: (state, action: any) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_ITEMS: false,
      },
      copiedItemList:
        action.payload === 'total'
          ? [...state.itemList]
          : [...state.itemList.filter((item) => item.categoryDetail === action.payload)],
    }),
    [COPY_CATEGORY_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_ITEMS: false,
      },
    }),
    [GET_FILTERED_ITEMLIST]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        CHANGE_DETAIL_CATEGORY: true,
      },
    }),
    [GET_FILTERED_ITEMLIST_SUCCESS]: (state, action: any) => ({
      ...state,
      loading: {
        ...state.loading,
        CHANGE_DETAIL_CATEGORY: false,
      },
      itemList: action.payload,
      copiedItemList: action.payload,
    }),
    [GET_FILTERED_ITEMLIST_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        CHANGE_DETAIL_CATEGORY: false,
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
    [GET_DETAIL_CATEGORYLIST]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_CATEGORY: true,
      },
    }),
    [GET_DETAIL_CATEGORYLIST_SUCCESS]: (state, action: any) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_CATEGORY: false,
      },
      detailCategoryList: action.payload,
    }),
    [GET_DETAIL_CATEGORYLIST_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_CATEGORY: false,
      },
    }),
    [GET_ITEM_DETAIL]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_ITEMS: true,
      },
    }),
    [GET_ITEM_DETAIL_SUCCESS]: (state, action: any) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_ITEMS: true,
      },
      itemDetail: action.payload,
    }),
    [GET_ITEM_DETAIL_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_ITEMS: false,
      },
    }),
    [CHANGE_DETAIL_FILTER]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        CHANGE_CATEGORY: true,
      },
    }),
    [CHANGE_DETAIL_FILTER_SUCCESS]: (state, action: any) => ({
      ...state,
      loading: {
        ...state.loading,
        CHANGE_CATEGORY: false,
      },
      copiedItemList: [
        ...state.copiedItemList.sort((a: any, b: any): number => {
          if (action.payload === 'lowerPrice') {
            return a['price'] - b['price'];
          } else if (action.payload === 'releaseDate') {
            a = new Date(a[action.payload]);
            b = new Date(b[action.payload]);
            return b - a;
          } else {
            return b[action.payload] - a[action.payload];
          }
        }),
      ],
    }),
    [CHANGE_DETAIL_FILTER_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        CHANGE_CATEGORY: false,
      },
    }),
  },
  initialState,
);

export default getItemlist;
