
import { NAVBAR_VALUE } from "../Action/Nav";

const initStore = {
    nav: true
}

export const navReducer = (store=initStore, action) => {
    switch(action.type) {
        case NAVBAR_VALUE:
            return {...store, nav: action.payload}

        default :
        return store    
    }
}