const SearchComponent = ({ handleSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = event.target
      .querySelector("#search-input")
      .value.toLowerCase();
    handleSearch(searchTerm);
  };

  document.addEventListener("submit", handleSubmit);

  return `<form id="search-form" class="input-group search"> 
    <input id="search-input" type="search" class="form-control" placeholder="Search input ...">
    <button type="submit" class="input-group-text btn btn-warning bg-gradient"><i class="fa-solid fa-magnifying-glass me-1"></i>Search</button>
  </form>`;
};

export default SearchComponent;
