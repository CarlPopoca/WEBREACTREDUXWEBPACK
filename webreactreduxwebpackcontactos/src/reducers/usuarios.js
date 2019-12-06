
import {ADD_USUARIOS} from "../actions/actionsUsuarios";


export default function usuarios (state = [], action = {}){
    switch(action.type){      
        case ADD_USUARIOS:
            return [
                ...state,
                    action.usuarios
            ];
        
        default: return state;
    }
}