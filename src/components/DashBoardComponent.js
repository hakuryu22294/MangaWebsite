import { getUserInfo } from "../utils/localStorage";

const DashboardMenu = {
  after_render: () => {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = `admin/${navLink.getAttribute("data-target")}`;
      });
    });
  },
  render: (props) => {
    const admin = getUserInfo().user;
    return `
    <div class="d-flex dash-menu flex-column fixed flex-shrink-0 p-3 bg-gradient bg-success" style="width: 280px; height: 100vh">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32"></svg>
      <span class="fs-4 text-white">MangaEX</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="/" class="nav-link text-white ${
          props.selected === "home" ? "selected" : ""
        }" aria-current="page">
          <i class="fas fa-home-alt"></i>
          Home
        </a>
      </li>
      <li>
        <a href="" data-target="dashboard" class="nav-link text-white ${
          props.selected === "dashboard" ? "selected" : ""
        }">
          <i class="fas fa-chart-line"></i>
          Dashboard
        </a>
      </li>
      <li>
        <a href="" data-target="all-orders" class="nav-link text-white ${
          props.selected === "orders" ? "selected" : ""
        }">
          <i class="fas fa-shopping-cart"></i>
          Orders
        </a>
      </li>
      <li>
        <a href="" data-target="all-products" class="nav-link text-white ${
          props.selected === "products" ? "selected" : ""
        }">
          <i class="fas fa-box"></i>
          Products
        </a>
      </li>
      <li>
        <a href="" data-target="all-users" class="nav-link text-white ${
          props.selected === "users" ? "selected" : ""
        }">
            <i class="fas fa-users"></i>
          Customers
        </a>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center  text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong class="text-white">${admin.username}</strong>
      </a>
      <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
      `;
  },
};
export default DashboardMenu;
