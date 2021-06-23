import express from "express";
import cors from "cors";
import itemlistRoute from "./routes/itemlist.js";
import userorderRoute from "./routes/userorder.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

itemlistRoute.forEach(({ method, route, handler }) => {
  app[method](route, handler);
});
userorderRoute.forEach(({ method, route, handler }) => {
  app[method](route, handler);
});

app.listen(8000, () => {
  console.log("server listening on 8000...");
});
