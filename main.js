import "./style.css";
import HomePage from "./src/page/HomePage.js";
import HeaderComnponent from "./src/components/HeaderComponent";
import BannerComponent from "./src/components/BannerComponents.js";
import ProductPage from "./src/page/ProductPage.js";
import ProductListPage from "./src/page/ProductListPage.js";
import ErrorScreen from "./src/page/ErrorPage.js";
import { render } from "./src/utils/utils.js";
import Navigo from "navigo";

const app = document.getElementById("app");

const router = new Navigo("/", { linkSelector: "a" });

router
  .on("/", async () => {
    await render(app, HeaderComnponent);
    await render(app, BannerComponent, HomePage);
  })
  .on("/products", async (params, query) => {
    await render(app, () => ProductListPage(query ? query.query : ""));
  })
  .on("/products/search*", async ({ query }) => {
    const searchTerm = query ? query.query : "";
    router.navigate(`/products/search?query=${searchTerm}`);
    await render(app, () => ProductListPage(searchTerm));
  })
  .on("/products/:id", async ({ data }) => {
    const id = data.id;
    const product = await ProductPage(id);
    render(app, HeaderComnponent, () => product);
  })
  .notFound(() => {
    render(app, ErrorScreen);
  })
  .resolve();
