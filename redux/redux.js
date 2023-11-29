import { ADD_ITEM } from './action';
import { DEL_ITEM } from './action';

const init={item:[
//     {
//     name:"Saigon",
//     temp_c:"26",
//     temp_f:"30",
//     condition:"Cloudy",
//     wind_mph:"5"
//   }
],}
function  Redux(state=init,action){
    switch(action.type){                    
        case ADD_ITEM:
            return { ...state, item: [...state.item, action.payload],};
        case DEL_ITEM:
            return { ...state, item:state.item.filter(item=>item.name!==action.payload.name)};
        default:
            return  state;
    }
}

export default Redux;