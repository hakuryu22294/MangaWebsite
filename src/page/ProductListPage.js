import { getAllPrducts } from "../apis/ProductApis/";
import RatingComponent from "../components/RatingComponent";
import Truncate from "../utils/Truncate";
import SearchComponent from "../components/SearchComponent";

const ProductListPage = async () => {
  let originalProductList = [];
  let productList = [];

  const renderProductList = (products) => {
    const productListContent = products
      .map((prd) => {
        const truncate = Truncate(prd.name, 50);
        return `<div class="col-3 mb-3 product-item">
          <a class="product-link" href="/products/${prd._id}">
            <img class="card-img-top" src="${prd.image}" alt="Card image">
          </a>
          <div class="card-body pt-0">
            <div class="card-text rate-view d-flex justify-content-between align-items-center">
              ${RatingComponent(prd.rating)}
              <span class="views"><i class="fa-sharp fa-solid fa-eye me-1"></i>Views: ${
                prd.numReviews
              }</span>
            </div>
            <p class="card-title">${truncate}</p>
            <h5 class="card-text">
              <span class="text-danger">$${prd.price}</span>
            </h5>
            <button class="btn btn-success bg-gradient"><i class="fa-solid fa-cart-plus"></i> Add To Cart</button>
          </div>
        </div>`;
      })
      .join("");
    return productListContent;
  };
  originalProductList = (await getAllPrducts()).data.products;
  const handleSearch = async (searchTerm) => {
    if (searchTerm && searchTerm.length > 0) {
      console.log(searchTerm);
      const filteredProducts = originalProductList.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );

      return filteredProducts;
    } else {
      return originalProductList;
    }
  };
  productList = [...originalProductList];

  return `<section id="products" class="container p-0 mt-5">
    <div class="products-container">
        <div class="header d-flex justify-content-between align-items-center bg-danger bg-gradient">
            <h2 class="section-title m-0"><i class="fa-solid fa-arrow-trend-up me-2"></i>Choosen for you</h2>
            ${SearchComponent({ handleSearch })}
        </div>
        <div id="product-thumbs" class="product-thumbs row justify-content-between">
            ${renderProductList(productList)}
        </div>
    </div>
</section>`;
};

export default ProductListPage;
