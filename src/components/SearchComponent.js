// const SearchComponent = ({ handleSearch }) => {
//   const searchInput = createElement("input", {
//     id: "search-input",
//     class: "form-control",
//     placeholder: "Search input ...",
//   });
//   const searchResults = createElement("div", {
//     id: "search-results",
//     class: "autocomplete-results",
//     style: "display:none",
//   });
//   const searchForm = createElement("form", {
//     id: "search-form",
//     class: "input-group search",
//   });
//   searchForm.appendChild(searchInput);
//   searchForm.appendChild(searchResults);
//   document.addEventListener("submit", (event) => {
//     event.preventDefault();
//   });

//   document.addEventListener("input", async (event) => {
//     const searchTerm = event.target.value.trim().toLowerCase();
//     console.log(searchTerm);
//     const products = await handleSearch(searchTerm);
//     renderAutocompleteResults(products);
//   });

//   const renderAutocompleteResults = (products) => {
//     document.getElementById("search-results").innerHTML = "";
//     document.getElementById("search-results").style.display = "block";
//     if (products.length > 0) {
//       products.forEach((product) => {
//         const resultItem = createElement("div", {
//           id: "results-item",
//           class: "autocomplete-item",
//         });
//         resultItem.textContent = product.name;
//         resultItem.addEventListener("click", () => {
//           window.location.href = `/products/${product._id}`;
//         });
//         document.getElementById("search-results").appendChild(resultItem);
//         console.log(searchResults);
//       });
//     } else {
//       const noResultItem = createElement("div", {
//         class: "autocomplete-item",
//       });
//       noResultItem.textContent = "No results found";
//       document.getElementById("search-results").appendChild(noResultItem);
//     }
//   };

//   return searchForm.outerHTML;
// };

const SearchComponent = {
  after_render: async (handleSearch) => {
    const searchInput = document.getElementById("search-input");
    const searchForm = document.getElementById("search-form");
    const searchResults = document.getElementById("search-results");
    searchForm.addEventListener("submit", async (event) => {
      event.preventDefault();
    });
    searchInput.addEventListener("input", async (event) => {
      const searchTerm = event.target.value.trim().toLowerCase();
      await handleSearch(searchTerm);

      if (searchTerm.length > 0) {
        window.location.hash = "/search?q=" + searchTerm;
      } else {
        const url = new URL(window.location.href);
        url.searchParams.delete("q");
        window.location.hash = "";
      }
    });
  },

  render: () => {
    return `
      <form id="search-form" class="input-group search">
        <input id="search-input" class="form-control" placeholder="Search input ...">
        <div id="search-results" class="autocomplete-results" style="display:none"></div>
        <button id="btn-search" class="btn btn-warning" type="submit">Search</button>
      </form>
    `;
  },
};

export default SearchComponent;
