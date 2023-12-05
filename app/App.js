import { itemController } from "./controllers/itemController.js"

class App {

  itemController = new itemController()

}


const app = new App()
// @ts-ignore
window.app = app
