import { readDB } from "../dbController.js";

const itemlistRoute = [
  {
    method: "get",
    route: "/itemlist/categorylist",
    handler: (req, res) => {
      const lists = readDB("itemlist");
      res.send(lists["categoryList"]);
    },
  },
  {
    method: "get",
    route: "/itemlist/detailcategorylist",
    handler: (req, res) => {
      const lists = readDB("itemlist");
      res.send(lists["detailCateogyList"]);
    },
  },
  {
    method: "get",
    route: "/itemlist",
    handler: (req, res) => {
      const lists = readDB("itemlist");
      res.send(lists["totalList"]);
    },
  },
  {
    method: "get",
    route: "/itemlist/:categoryName",
    handler: ({ params: { categoryName } }, res) => {
      const lists = readDB("itemlist");
      const filteredItem = lists["totalList"].filter(
        (item) => item.category === categoryName
      );
      res.send(filteredItem);
    },
  },
  {
    method: "get",
    route: "/itemlist/detail/:id",
    handler: ({ params: { id } }, res) => {
      const lists = readDB("itemlist");
      const filteredItem = lists["totalList"].filter((item) => item.id === +id);
      res.send(filteredItem);
    },
  },
];

export default itemlistRoute;
