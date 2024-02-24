import TruncateDescription from "../utils/Truncate";
import RatingComponent from "../components/RatingComponent";
import { getAllPrducts, updateView } from "../apis/ProductApis";
import ProductList from "../components/ProductListComponent";

const HomePage = {
  after_render: async () => {
    document.addEventListener("click", async (event) => {
      const viewMoreBtn = event.target.closest("#view-more");
      if (viewMoreBtn) {
        window.location.href = "/products";
      }
    });
  },
  render: async () =>
    `
    <div class="container mx-auto grid grid-cols-8">
      <div class="col-span-2">
      </div>
      <div class="col-span-6 bg-slate-900 rounded-[20px] overflow-hidden">
        <div class="bg-gradient-to-r from-pink-500 to-violet-600 w-full">
          <h2 class="text-3xl text-white p-4 font-bold">Featured Products</h2>
        </div>
        <div class="product-thumbs p-4">
        ${await ProductList.render()}
        </div>
      </div>
    </div>
    `,
};

export default HomePage;
