export class House {
  constructor(houseData) {
    this.bedrooms = houseData.bedrooms
    this.year = houseData.year
    this.bathrooms = houseData.bathrooms
    this.levels = houseData.levels
    this.imgUrl = houseData.imgUrl
    this.price = houseData.price
    this.description = houseData.description
  }

  get CardTemplate() {
    return /* html */`
  <div class="col-lg-3 mb-4 listing">
  <div class="card text-center">
  <img src="${this.imgUrl}" alt="listing image" class="rounded">
  <div class="card-body">
    <h5 class="d-flex justify-content-between">
    <span >Rooms:${this.bedrooms} - Levels:${this.levels}</span>
    <span>Built: ${this.year}
    Price: ${this.price}</span>
    </h5>
        <p>${this.description}</p>
        </div>
        </div>
        </div>
        `
  }
}

// <button class ="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
