import DashboardMenu from "../../components/DashBoardComponent";
import {
  getAllPrducts,
  createPrduct,
  deletePrduct,
} from "../../apis/ProductApis";
import Truncate from "../../utils/Truncate";
import SearchComponent from "../../components/SearchComponent";

const ProductsTable = {
  products: [],
  after_render: async function () {
    await this.updateList();
    await SearchComponent.after_render(this.handleSearch.bind(this));
  },
  renderProducts: async function (products) {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    if (products.length > 0) {
      tbody.innerHTML = products
        .map((prd) => {
          return `
              <tr>
                  <td>${Truncate(prd._id, 10)}</td>
                  <td>${prd.name}</td>
                  <td>$${prd.price}</td>
                  <td>${
                    prd.categories &&
                    prd.categories.map((cate) => cate.name).join(",")
                  }</td>
                  <td><img src="${prd.image}" width="80"/></td>
                  <td>${prd.numReviews}</td>
                  <td>
                      <button class="btn btn-danger btn-sm delete-product" data-id="${
                        prd._id
                      }"><i class="fa-solid fa-trash"></i></button>
                      <button class="btn btn-primary btn-sm edit-product" data-id="${
                        prd._id
                      }"><i class="fa-solid fa-pen"></i></button>
                  </td>
              </tr>
              `;
        })
        .join("");
    } else {
      tbody.innerHTML = `<tr>No products</tr>`;
    }
  },
  handleSearch: async function (searchTerm) {
    let filteredProducts = [];
    if (searchTerm && searchTerm.length > 0) {
      filteredProducts = this.products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      filteredProducts = this.products;
    }
    await this.renderProducts(filteredProducts);
  },
  async updateList() {
    this.products = (await getAllPrducts()).data.products;
    await this.renderProducts(this.products);
  },
  render: async function () {
    return `
        <div class="dashboard">
            ${DashboardMenu.render({ selected: "products" })}
            <div class="dashboard-content mt-3">
                <div class="dashboard-heading d-flex justify-content-between align-items-center p-2 bg-success">
                    <h1 class="dashboard-heading">Products</h1>
                    <div style="width: 300px;" class="search">
                        ${SearchComponent.render()}
                    </div>
                    <button class="btn btn-primary" id="add-product">Add Product</button>
                </div>
                <table class="table table-bordered table-hover table-striped">
                    <thead class="table-success">
                        <tr>
                            <th>#ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Views</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                        
                    </tbody>
                </table>
            </div>
        </div>
    `;
  },
};
export default ProductsTable;
