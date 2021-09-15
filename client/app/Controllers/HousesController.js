
import { ProxyState } from '../AppState.js'
import { getHouseFormTemplate } from '../forms/houseform.js'
import { housesService } from '../Services/HousesService.js'

function _drawHouses() {
  let template = ''

  ProxyState.houses.forEach(house => template += house.CardTemplate)
  document.getElementById('listings').innerHTML = template
}

export class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
    housesService.getHouses('houseData')
  }

  async addHouse() {
    event.preventDefault()
    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form = event.target

    const houseData = {
      year: form.year.value,
      bathrooms: form.bathrooms.value,
      price: form.price.value,
      levels: form.levels.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value,
      bedrooms: form.bedrooms.value
    }
    try {
      await housesService.addHouse(houseData)
    } catch (e) {
      form.make.classList.add('border-danger')
      return
    }

    form.reset()
  }

  showHouses() {
    _drawHouses()
    document.getElementById('controls').innerHTML = `
      <button class="btn btn-success" onclick="app.housesController.toggleHouseForm()">Add House</button>
    `

    document.getElementById('forms').innerHTML = getHouseFormTemplate()
  }

  toggleHouseForm() {
    document.getElementById('house-form').classList.toggle('visually-hidden')
  }

  async deleteHouse(houseid) {
    try {
      // eslint-disable-next-line no-undef
      alert('are you positive?')
      await housesService.deleteHouse(houseid)
    } catch (error) {
      // eslint-disable-next-line no-undef
      alert(error.message)
    }
  }
}
