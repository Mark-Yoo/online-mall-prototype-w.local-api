export interface Item {
  id: number;
  productName: string;
  productImage: string;
  price: number;
  grade: number;
  category: string;
  categoryDetail: string;
  releaseDate: string;
  discount: number;
}

export interface ItemList {
  loading: {
    GET_ITEMS: boolean;
    GET_CATEGORY: boolean;
    CHANGE_CATEGORY: boolean;
    CHANGE_DETAIL_CATEGORY: boolean;
  };
  itemList: Item[];
  categoryList: string[];
  detailCategoryList: string[];
  itemDetail: Item[];
  copiedItemList: Item[];
}

export interface TypeDispatch {
  type: string;
  payload?: string;
  error?: boolean;
}

export interface Order {
  loading: {
    GET_ORDER: boolean;
    DELETE_ORDER: boolean;
  };
  orderList: Item[];
}
