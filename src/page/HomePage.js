import axios from "axios";
import TruncateDescription from "../ultils/Truncate";
import RatingComponent from "../components/RatingComponent";

const HomePage = async () => {
  const response = await axios.get("http://localhost:8080/api/products", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const products = response.data.products;

  const productsHtml = products
    .map((prd) => {
      const truncate = TruncateDescription(prd.name, 50);

      return `
        <div class="col-3 mb-3 product-item">
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
            <a href="#" class="btn btn-success"><i class="fa-solid fa-cart-plus"></i> Add To Card</a>
          </div>
        </div>
      `;
    })
    .join("");
  return `
    <section id="products" class="container p-0 mt-5">
          <div class="products-container">
            <div class="header d-flex justify-content-between align-items-center">
            <h2 class="section-title m-0"><i class="fa-solid fa-arrow-trend-up"></i>  Buy to day</h2>
            <form class="input-group search">
            
            <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Search input ...">
            <button type="submit" class="input-group-text btn btn-warning"><i class="fa-solid fa-magnifying-glass me-1"></i>Seach</button>
            </form>
            </div>
            <div class="product-thumbs row justify-content-between">
            ${productsHtml} 
            </div>
            <div class="text-center my-5">
            <button class="btn btn-success">View more <i class="fa-solid fa-arrow-right"></i></button>  
          </div>
          </div>
         
         
    </section>
  `;
};

document.addEventListener("click", async (event) => {
  const productLink = event.target.closest(".product-link");
  if (productLink) {
    const productId = productLink.getAttribute("href").split("/").pop();
    try {
      await axios.patch(`http://localhost:8080/api/products/view/${productId}`);
    } catch (error) {
      console.error("Error increasing product view:", error);
    }
  }
});

export default HomePage;
