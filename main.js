import "./style.css";
import HomePage from "./src/page/HomePage.js";
import HeaderComnponent from "./src/components/HeaderComponent";
import BannerComponent from "./src/components/BannerComponents.js";
import ProductPage from "./src/page/ProductPage.js";
import ProductListPage from "./src/page/ProductListPage.js";
import ErrorScreen from "./src/page/ErrorPage.js";
import RegisterPage from "./src/page/RegisterPage.js";
import LoginPage from "./src/page/LoginPage.js";
import { render } from "./src/utils/utils.js";
import Navigo from "navigo";
import AdminPage from "./src/page/admin/AdminPage.js";
import ProductsTable from "./src/page/admin/ProductsTable.js";

const app = document.getElementById("app");

const router = new Navigo("/", { linkSelector: "a" });

router
  .on("/", async () => {
    await render(
      app,
      () => HeaderComnponent.render(),
      BannerComponent,
      HomePage
    );
    HeaderComnponent.after_render();
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
  .on("/register", async () => {
    await render(app, () => RegisterPage.render());
    await RegisterPage.after_render();
  })
  .on("/login", async () => {
    await render(app, () => LoginPage.render());
    await LoginPage.after_render();
  })
  .on("/admin", async () => {
    await render(app, () => AdminPage.render());
    await AdminPage.after_render();
  })
  .on("/admin/all-products", async () => {
    await render(app, () => ProductsTable.render());
    await ProductsTable.after_render();
  })
  .notFound(() => {
    render(app, ErrorScreen);
  })
  .resolve();
