import { ProxyState } from '../AppState.js'
import { House } from '../Models/House.js'
import { api } from './AxiosService.js'

// @ts-ignore
class HousesService {
  async deleteHouse(houseid) {
    await api.delete('api/houses')
    ProxyState.houses = ProxyState.houses.filter(h => h.id !== houseid)
  }

  async addHouse(houseData) {
    const res = await api.post('api/houses')

    ProxyState.houses = [...ProxyState.houses, new House(res.data)]
  }

  async getHouses(houseData) {
    const res = await api.get('api/houses')

    ProxyState.houses = res.data.map(h => new House(h))
  }
}

export const housesService = new HousesService()
