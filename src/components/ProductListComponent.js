import { getAllPrducts } from "../apis/ProductApis/";
import RatingComponent from "./RatingComponent";
import Truncate from "../utils/Truncate";

const ProductList = {
  after_render: async () => {
    ProductList.after_render();
    document.addEventListener("click", async (event) => {
      const productLink = event.target.closest(".product-link");
      if (productLink) {
        const productId = productLink.getAttribute("href").split("/").pop();
        try {
          await updateView(productId);
        } catch (error) {
          console.error("Error increasing product view:", error);
        }
      }
    });
  },
  render: async () => {
    const products = (await getAllPrducts()).data.products;
    return `<div class="product-list grid grid-cols-4">
      ${products
        .map(
          (product) => `
        <div class="product-card shadow-lg col-span-1 w-[90%] mb-[20px] justify-self-center rounded-[20px] overflow-hidden relative">
          <div class="product-img h-full">
            <a href="/products/${
              product._id
            }" class="product-link"><img class="w-full h-full" src="${
            product.image
          }"/></a>
          </div>
          <div class="product-info absolute bottom-0 text-white left-0 w-full h-[42%] p-[10px]">
            <h3 class="font-bold">${Truncate(product.name, 50)}</h3>
            <span class="text-amber-300 text-[12px]">${RatingComponent(
              product.rating
            )}
           </span>
           <p>${product.categories
             .map(
               (cate) =>
                 `<span class="p-[5px] text-[10px] mr-[5px] rounded-[15px] bg-pink-500">${cate.name}</span>`
             )
             .join("")}</p>
            <div class="flex justify-between items-center mt-2">
              <span class="text-[20px] p-[5px] rounded-[50%] text-white bg-purple-500">$${
                product.price
              }</span>
              <div class="text-right">
                <div class="text-right">
                <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500  hover:bg-gradient-to-l   focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800  font-medium rounded-lg  text-sm p-[10px] text-center">Add to cart</button>
              </div>
              </div>
            </div>
          </div>
          </div>

      `
        )
        .join("")}
    </div>`;
  },
};

export default ProductList;
