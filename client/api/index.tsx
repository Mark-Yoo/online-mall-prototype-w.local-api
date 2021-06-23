import axios from 'axios';
import { Item } from '../typings/db';

const api = 'http://localhost:8000';

export const getItemList = () => axios.get(api + `/itemlist`);

export const getCategoryList = () => axios.get(api + `/itemlist/categorylist`);

export const postOrder = (params: Item) => axios.post(api + `/userorder`, params);
