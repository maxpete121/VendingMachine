import { AppState } from "../AppState.js";
import { itemService } from "../services/itemService.js";

export class itemController{
    constructor(){
        console.log('yay')
    }

    grabItem(itemName){
        const activeCard = AppState.selectedItem
        console.log('yus')
        let content = activeCard.cartTemplate
        document.getElementById('item-cart').innerHTML += content
        itemService.grabItem(itemName)
    }

    drawItem(){

        
    }
}