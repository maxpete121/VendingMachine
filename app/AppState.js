import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { item, machine } from './models/items.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []


  vendorItems = [
    new item('Skittles',1.25),
    new item('Sour Ropes',1.00),
    new item('Kit Kat',1.50),
    new item('Hersheys',1.75),
    new item('Milky Way',1.50)
  ]

  machine =  new machine(0,0)

/**@type {item} */
  selectedItem = null

}

export const AppState = createObservableProxy(new ObservableAppState())