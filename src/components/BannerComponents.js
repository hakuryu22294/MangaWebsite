import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { getAllPrducts } from "../apis/ProductApis";
const BannerComponent = {
  topPrdsList: async () => {
    const products = (await getAllPrducts()).data.products;
    return `
      <div class="h-[80%] overflow-y-auto product-container">
          ${products
            .map(
              (product) => `
             
            <div class="top-prds-items flex gap-[20px] items-center mb-[20px]">
              <div class="product-img rounded-[10px] overflow-hidden border-[2px] border-[#7E3AEC]">
                <img width="100px" src="${product.image}"/>
              </div>
              <div class="product-info text-white">
                <h3>${product.name}</h3>
                <p>${product.part}</p>
                <p class="text-[#7E3AEC]">$${product.price}</p>
              </div>
            </div>
          `
            )
            .join("")}
          </div>

    `;
  },
  after_render: async () => {
    const swiper = new Swiper(".swiper-banner", {
      loop: true,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true,
      },
    });
  },

  render: async function () {
    /*html*/
    return `
    <section id="banner" class="container mb-[30px] mx-auto ">
    <div class="mx-auto grid grid-cols-12 justify-items-start">
      <div class="swiper-banner mySlider  col-span-8 w-full h-[50vh] rounded-[30px] relative overflow-hidden">
        <div class="swiper-wrapper">
          <div class="slider swiper-slide  group bg-gradient-to-br from-purple-500 to-pink-500
          overflow-hidden w-full h-[500px] relative ">
            <img src="https://images2.alphacoders.com/694/694704.png" alt="banner" class="w-full h-full object-cover" />
            <div id="" class="slide-indicator absolute bottom-0 left-0 p-4 overflow-hidden">
              <div class="indicator-content w-[72%]">
                <h2 class="text-white text-[36px]
              ">Date A Live Vol-18</h2>
                <p class="text-white text-[24px]">Mio Game Over !</p>
                <p class="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eos quae itaque
                  molestias
                  magnam sapiente in
                  amet delectus minus commodi dolor nostrum eaque laborum vero hic molestiae sint quo fugit incidunt aut,
                  debitis ut facilis dicta tempora! Quaerat, repellendus illum.</p>
              </div>
            </div>
          </div>
          <div class="slider swiper-slide group bg-gradient-to-br from-purple-500 to-pink-500
          overflow-hidden w-full h-[500px] relative ">
            <img src="https://cdn.akamai.steamstatic.com/steam/apps/1566880/capsule_616x353.jpg?t=1706140024" alt="banner" class="w-full h-full object-cover" />
            <div id="" class="slide-indicator absolute bottom-0 left-0 p-4 overflow-hidden">
              <div class="indicator-content w-[72%]">
                <h2 class="text-white text-[36px]
              ">Date A Live Vol-18</h2>
                <p class="text-white text-[24px]">Mio Game Over !</p>
                <p class="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eos quae itaque
                  molestias
                  magnam sapiente in
                  amet delectus minus commodi dolor nostrum eaque laborum vero hic molestiae sint quo fugit incidunt aut,
                  debitis ut facilis dicta tempora! Quaerat, repellendus illum.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-scrollbar"></div>
      </div>
      <div class="best-seller col-span-4  rounded-[30px] h-[50vh] overflow-hidden justify-self-end w-[90%]">
        <div class="title bg-gradient-to-r from-pink-500 to-violet-600 w-full p-[16px] ">
          <h2 class="text-[36px] text-white">Best Seller</h2>
        </div>
        <div class="content-box p-[16px] bg-slate-900 h-full">
          ${await this.topPrdsList()}
        </div>
      </div>
    </div>
  </section>
        `;
  },
};

export default BannerComponent;
