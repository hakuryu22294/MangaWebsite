import { getDeatilsProduct } from "../apis/ProductApis";
import TruncateDescription from "../utils/Truncate";
const ProductPage = async (prdID) => {
  try {
    const product = (await getDeatilsProduct(prdID)).data.product;
    const truncate = TruncateDescription(product.description, 200);
    return `
        <div class="product-page container mt-5">
        <div class="product-details">
            <div class="row p-3">
                <div class="col-4">
                    <img src="${product.image}"
                        class="card-img-top" alt="...">
                </div>
                <div class="col-8">
                    <h2>${product.name}</h2>
                    <h4>${product.part}</h4>
                    <p>${product.categories
                      .map(
                        (cate) => `<span class="category">${cate.name}</span>`
                      )
                      .join("")}</p>
                    <p class="font-weight-bold">Description: <span>${truncate}<a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  View more >></a></span></p>
                  <p class="font-weight-bold">${
                    product.countInStock < 0
                      ? `<span class="status-instock success"><i class="fa-solid fa-check me-1"></i>Còn hàng</span>`
                      : `<span class="status-instock danger"><i class="fa-solid fa-xmark me-1"></i>Hết hàng</span>`
                  }</p>
                    <p class="font-weight-bold text-danger">Price: $${
                      product.price
                    }</p>
                    <button class="btn btn-danger"><i class="fa-solid fa-cart-plus"></i> Add To Card</button>
                </div>
            </div>
        </div>    
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content">
            <div class="modal-header bg-success">
                <h5  class="modal-title text-light" id="exampleModalLabel">Description</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ${product.description}
            </div>
            </div>
        </div>
        </div>
    `;
  } catch (err) {
    console.error("Error fetching product:", err);
  }
  var myModal = document.getElementById("myModal");
  var myInput = document.getElementById("readMoreLink");

  myModal.addEventListener("shown.bs.modal", function () {
    myInput.focus();
  });
};

export default ProductPage;
