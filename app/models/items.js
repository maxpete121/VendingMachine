import { generateId } from "../utils/GenerateId.js"
import { AppState } from "../AppState.js"


export class item{
    Id
    name
    price


    constructor(itemName,itemPrice){
        this.Id = generateId()
        this.name = itemName
        this.price = itemPrice
    }

    get cartTemplate(){
        return`
        <div class="d-flex mt-2 bg-dark col-2 text-light align-items-baseline">
        <h4 class="me-4" id="item-name">${this.name}</h4>
        <h4 class="me-2">Price: <h4 id="price">${this.price}</h4></h4>
        <i class="mdi mdi-food-drumstick ms-3 fs-3"></i>
      </div>
        `
    }
}

export class machine{
    totalCash
    totalItem

    constructor(cash, item){
        this.totalCash = cash
        this.totalItem = item
    }
}