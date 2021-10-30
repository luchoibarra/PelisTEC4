import Display from "./display.js";
import Checker from "./checker.js";

export default class Request {
  constructor() {
    this.template = document.querySelector(".card-template").content;
  }

  async getInfo(inputValue) {
    try {
      const url = `https://api.themoviedb.org/3/movie/550?api_key=95240fc590b402d89d2ce68f87e7e8a2`;
      const response = await fetch(url);
      const json = await response.json();

      const container = document.querySelector(".new-row");

      const display = new Display(json.Search, this.template, container);
      display.displayUserCards();
    } catch (error) {
      const checker = new Checker();
      checker.getErrorContainer("Movie not found!");
    }
  }

  getMultipleInfo(moviesName) {
    const moviesInfo = [[], []];
    const result = moviesName.map((item) => {
      return new Promise(async (resolve) => {
        try {
          const url = `https://api.themoviedb.org/3/movie/550?api_key=95240fc590b402d89d2ce68f87e7e8a2`;
          const response = await fetch(url);
          const json = await response.json();

          moviesInfo[0].push(json.Poster);
          moviesInfo[1].push(json.Title);

          resolve();
        } catch (error) {
          console.log(error);
        }
      });
    });

    Promise.all(result).then(() => {
      const container = document.querySelectorAll(".default-row");
      const display = new Display(moviesInfo, this.template, container);
      display.displayDefaultCards();
    });
  }
}
