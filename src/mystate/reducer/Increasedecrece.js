const initialvalue=0;
function increasedecreasereducer(state=initialvalue,action){

    switch(action.type){
        case 'INCREASE':{
            return state+action.payload;
        }
        case 'DECREASE':{
            return state-action.payload;
        }
        default:{
            return state;
        }
              
    }
}

export default increasedecreasereducer;