import { AppState } from "../AppState.js";


class ItemService{
    grabItem(itemName){
       const selectedOne = AppState.vendorItems.find(theitem => theitem.name == itemName)
        AppState.selectedItem = selectedOne
        let itemCount = AppState.machine
        itemCount.totalItem++
        console.log(itemCount.totalItem)
        
    }

    itemTotal(){


    }




    buyItem(item){
        let machine = AppState.machineStatus
        let itemGot = AppState.vendorItems
        let price = itemGot.find(cash => cash.price)
        let currentCash = machine.find(dough => dough.totalCash)
        currentCash.totalCash -= price.price
    }



    addCash(){
        let vMachine = AppState.machine
        vMachine.totalCash++
    }

}

export const itemService = new ItemService()