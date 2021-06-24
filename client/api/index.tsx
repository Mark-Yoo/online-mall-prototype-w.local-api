import axios from 'axios';
import { Item } from '../typings/db';

const api = 'http://localhost:8000';

export const getItemList = () => axios.get(api + `/itemlist`);

export const getFilteredList = (params: any) => axios.get(api + `/itemlist/${params}`);

export const getCategoryList = () => axios.get(api + `/itemlist/categorylist`);

export const getDetail = (params: any) => axios.get(api + `/itemlist/detail/${params}`);

export const getOrder = () => axios.get(api + `/userorder`);

export const postOrder = (params: Item) => axios.post(api + `/userorder`, params);
