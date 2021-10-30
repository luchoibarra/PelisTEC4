export default class Carousel {
  constructor() {
    this.carouselCont = document.querySelectorAll(".carousel-info");
    this.template = document.querySelector(".carousel-template").content;
    this.fragment = new DocumentFragment();
  }

  showCarouselInfo() {
    this.carouselCont.forEach((img) => {
      this.clone = this.template.cloneNode(true);
      this.fragment.appendChild(this.clone);
      img.appendChild(this.fragment);
    });
  }
}
