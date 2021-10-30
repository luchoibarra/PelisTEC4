import Request from "./request.js";

export default class Cards {
  getImages(json) {
    const values = Object.values(json);
    const imgArray = [];

    while (imgArray.length <= 11) {
      let item = this.newItem(values);

      imgArray.push(item);
    }

    const request = new Request();
    request.getMultipleInfo(imgArray);
  }

  newItem(values) {
    const item = values[Math.floor(Math.random() * values.length)];
    return item;
  }

  async getMoviesExample() {
    const response = await fetch("/exampleDB.json");
    const json = await response.json();

    this.getImages(json);
  }
}
