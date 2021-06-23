import { readDB, writeDB } from "../dbController.js";

const userorderRoute = [
  {
    method: "get",
    route: "/userorder",
    handler: (req, res) => {
      const lists = readDB("userorder");
      res.send(lists);
    },
  },
  {
    method: "post",
    route: "/userorder",
    handler: ({ body }, res) => {
      const order = readDB("userorder");
      const orderedItem = {
        id: body.id,
        productName: body.productName,
        productImage: body.productImage,
        price: body.price,
        grade: body.grade,
        category: body.category,
        categoryDetail: body.categoryDetail,
        releaseDate: body.releaseDate,
      };
      order.unshift(orderedItem);
      writeDB("userorder", order);
      res.send(order);
    },
  },
];

export default userorderRoute;
