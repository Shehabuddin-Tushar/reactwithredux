export const increase=(amount)=>{
    return{
        type:"INCREASE",
        payload:amount
    }
}

export const decrease=(amount)=>{
    return{
        type:"DECREASE",
        payload:amount
    }
}