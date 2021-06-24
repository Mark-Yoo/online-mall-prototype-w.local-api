export interface Item {
  id: number;
  productName: string;
  productImage: string;
  price: number;
  grade: number;
  category: string;
  categoryDetail: string;
  releaseDate: string;
}

export interface ItemList {
  loading: {
    GET_ITEMS: boolean;
    GET_CATEGORY: boolean;
    CHANGE_CATEGORY: boolean;
  };
  itemList: Item[];
  categoryList: string[];
  filteredList: Item[];
  itemDetail: Item[];
}

export interface TypeDispatch {
  type: string;
  payload?: string;
  error?: boolean;
}

export interface Order {
  loading: {
    GET_ORDER: boolean;
  };
  orderList: Item[];
}
