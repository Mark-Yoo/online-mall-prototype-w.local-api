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
    route: "/itemlist",
    handler: (req, res) => {
      const lists = readDB("itemlist");
      res.send(lists["totalList"]);
    },
  },
];

export default itemlistRoute;
