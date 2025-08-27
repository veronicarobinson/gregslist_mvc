import { CarsController } from './controllers/CarsController.js';
import { ExampleController } from './controllers/ExampleController.js';
import { HousesController } from './controllers/HousesController.js';

class App {
  carsController = new CarsController()
  housesController = new HousesController()
}

window['app'] = new App()


