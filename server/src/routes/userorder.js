import { readDB, writeDB } from "../dbController.js";

const userorderRoute = [
  {
    method: "get",
    route: "/userorder",
    handler: (req, res) => {
      const order = readDB("userorder");
      res.send(order);
    },
  },
  {
    method: "delete",
    route: "/userorder/delete/:id",
    handler: ({ params: { id } }, res) => {
      try {
        const order = readDB("userorder");

        const deletedOrder = order.filter((item) => item.id !== +id);

        writeDB("userorder", deletedOrder);
        res.send(deletedOrder);
      } catch (err) {
        res.status(500).send({ error: err });
      }
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
        discount: body.discount,
      };
      order.unshift(orderedItem);
      writeDB("userorder", order);
      res.send(order);
    },
  },
];

export default userorderRoute;
