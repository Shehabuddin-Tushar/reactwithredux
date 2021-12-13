import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increase,decrease} from '../mystate/action/Index'
function Increasedecreaseamount() {
    const myamount=useSelector((state)=>{
        return(state.incdec)
    });
    const dispatch=useDispatch();
    const totalamount=myamount<0?0:myamount;
    return (
        <div className='container'>
           <button className='btn btn-success' onClick={()=>dispatch(increase(10))}>increase</button>
            <input type="text" disabled value={totalamount}/>
           <button disabled={totalamount==0?"disabled":""} className='btn btn-danger'onClick={()=>dispatch(decrease(10))}>Decrease</button>  
        </div>
    )
}

export default Increasedecreaseamount
