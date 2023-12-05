import { AppState } from "../AppState.js";


class ItemService{
    grabItem(itemName){
       const selectedOne = AppState.vendorItems.find(theitem => theitem.name == itemName)
        AppState.selectedItem = selectedOne
        
    }
}

export const itemService = new ItemService()