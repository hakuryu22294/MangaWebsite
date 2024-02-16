const HeaderComnponent = () => ` 
 <header id="header">
 <div class="container">
 <nav class="navbar navbar-expand-lg navbar-light">
     <div class="container-fluid">
         <a class="navbar-brand" href="#">Manganex</a>
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
         <form class="d-flex gap-2">
             <button class="btn btn-outline-light" type="submit">
                 <i class="fa-solid fa-user"></i>
                 Login
             </button>
             <button class="btn btn-outline-light" type="submit">
                 <i class="fa-solid fa-user-plus"></i>
                 Register
             </button>
         </form>
     </div>
 </nav>
</div>
 </header>
`;

export default HeaderComnponent;
