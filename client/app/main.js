
import { AuthController } from './Controllers/AuthController.js'
import { HousesController } from './Controllers/HousesController.js'
import { ValuesController } from './Controllers/ValuesController.js'

class App {
  authController = new AuthController();
  valuesController = new ValuesController();

  housesController = new HousesController();
}

// @ts-ignore
window.app = new App()
