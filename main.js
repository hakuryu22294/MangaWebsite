import "./style.css";
import HomePage from "./src/page/HomePage.js";
import HeaderComnponent from "./src/components/HeaderComponent";
import BannerComponent from "./src/components/BannerComponents.js";
import ProductPage from "./src/page/ProductPage.js";
import ErrorScreen from "./src/page/ErrorPage.js";
import Navigo from "navigo";

const app = document.getElementById("app");
const header = createElement("header", "header");
const banner = createElement("div", "banner");
app.appendChild(header);
app.appendChild(banner);
render({ target: header, content: HeaderComnponent });

const homePage = createElement("div", "homePage");
app.appendChild(homePage);

const router = new Navigo("/");

router
  .on("/", () => {
    render(
      { target: banner, content: BannerComponent },
      { target: homePage, content: HomePage }
    );
  })
  .on("/products/:id", async ({ data }) => {
    const id = data.id;
    const product = await ProductPage(id);
    render({ target: homePage, content: () => product });
  })
  .notFound(() => {
    render({ target: homePage, content: ErrorScreen });
  })
  .resolve();

function createElement(elem, id) {
  const element = document.createElement(elem);
  element.setAttribute("id", id);
  return element;
}

async function render(...targets) {
  targets.forEach(async ({ target, content }) => {
    target.innerHTML = await content();
  });
}
