import { getUserInfo, clearUser } from "../utils/localStorage";

const HeaderComnponent = {
  after_render: () => {
    //   document.getElementById("btn-login").addEventListener("click", (e) => {
    //     e.preventDefault();
    //     console.log("click");
    //     window.location.href = "/login";
    //   });
    //   document.getElementById("btn-register").addEventListener("click", (e) => {
    //     e.preventDefault();
    //     window.location.href = "/register";
    //   });
    //   document.getElementById("btn-logout").addEventListener("click", (e) => {
    //     e.preventDefault();
    //     clearUser();
    //     window.location.href = "/";
    //   });
  },

  render: () => {
    /* html */
    return `
    <header class="bg-gradient-to-r from-rose-100 to-teal-100 shadow mb-[30px]">
    <div class="container mx-auto py-[10px] flex justify-between items-center">
      <div class="logo">
        <img src="./public/logo.png" alt="logo" />
      </div>
      <nav>
        <ul class="flex text-[24px] justify-between gap-[20px]">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div class="btn-group">
        <button
          class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200">
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            <i class="fa-solid fa-user"></i>
            Sign In
          </span>
        </button>
        <button
          class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200">
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            <i class="fa-solid fa-user-plus"></i> Register
          </span>
        </button>
      </div>
    </div>
  </header>
       `;
  },
};

export default HeaderComnponent;
