import { AppState } from "../AppState.js";
import { itemService } from "../services/itemService.js";

export class itemController{
    constructor(){
        console.log('yay')
    }

    grabItem(itemName){
        itemService.grabItem(itemName)
        this.drawItem()
        
    }

    drawItem(){
        const activeCard = AppState.selectedItem
        console.log('yus')
        let content = activeCard.cartTemplate
        document.getElementById('item-cart').innerHTML += content
    }

    drawTotals(){
        const theTotal = AppState.machine
        document.getElementById('has-cash').innerText = theTotal.totalCash
        document.getElementById('item-total').innerText = theTotal.totalItem
    }

    buyItem(itemName){
        itemService.buyItem(itemName)
        
    }

    addCash(){
        itemService.addCash()
        this.drawTotals()
    }
}