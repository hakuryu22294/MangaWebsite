import { getUserInfo, clearUser } from "../utils/localStorage";

let dataUser = { username: "", email: "" };
const HeaderComnponent = {
  after_render: () => {
    document.getElementById("btn-login").addEventListener("click", (e) => {
      e.preventDefault();
      console.log("click");
      window.location.href = "/login";
    });
    document.getElementById("btn-register").addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "/register";
    });
    document.getElementById("btn-logout").addEventListener("click", (e) => {
      e.preventDefault();
      clearUser();
      window.location.href = "/";
    });
  },
  render: () => {
    dataUser = getUserInfo();
    console.log(dataUser.user);
    return `
        <header id="header">
        <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand micro-5-regular" href="#">MangaEx</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Products</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
                    <div class="d-flex gap-3 ${
                      dataUser.accessToken ? "d-none" : ""
                    }">
                    <button id="btn-login" class="btn btn-outline-light">
                        <i class="fa-solid fa-dataUser"></i>
                        Login
                    </button>
                    <button id="btn-register" class="btn btn-outline-light">
                        <i class="fa-solid fa-user-plus"></i>
                        Register
                    </button>
                    </div> 
                    <div class="d-flex align-items-center gap-3 ${
                      dataUser.accessToken ? "" : "d-none"
                    }">
                    ${
                      dataUser && dataUser.user?.avatar
                        ? `                           
                          <img class=""  src="${dataUser.user?.avatar}" class="rounded-circle" width="40" height="40" />                             
                          `
                        : `<div class="personal-avatar text-center text-white"><i class="fa-solid  fa-user"></i></div>`
                    }
                        
                    <div class="d-flex align-items-center gap-1">
                    <p class="m-0 text-white">Hi <span>${
                      dataUser && dataUser.user?.username
                    }</span></p>
                        <div id="user-option" class="dropdown">  
                        <button class="dropdown-toggle bg-transparent text-white border-0" data-bs-toggle="dropdown" aria-expanded="false">
                        </button>
                            <ul class="dropdown-menu">
                            ${
                              dataUser.user?.role === "admin"
                                ? `<li><a class="dropdown-item d-flex align-items-center gap-2" href="/admin"><i class="fa-solid fa-user-shield text-success"></i>Admin</a></li>`
                                : ""
                            }
                            <li><a class="dropdown-item" href="#">Update your Info</a></li>
                            <li id="btn-logout"><a class="dropdown-item d-flex align-items-center gap-2" href="#">Lougout<i class="fa-solid text-danger fa-right-from-bracket"></i></a></li>
                            </ul>
                        </div> 
                    </div>
                        <div>
                        <button id="btn-cart" class="btn btn-outline-light"><i class="fa-solid fa-cart-shopping"></i> Shopping Cart</button>
                        </div>
                    </div
            </div>
        </nav>
       </div>
        </header>
        `;
  },
};

export default HeaderComnponent;
