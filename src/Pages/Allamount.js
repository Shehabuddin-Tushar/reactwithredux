import React from 'react'
import {useSelector} from 'react-redux'
function Allamount() {
    const myamount=useSelector((state)=>{
        return(state.incdec)
    });

    const totalamount=myamount<0?0:myamount;
    return (
        <div className='container'>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Total amount</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <a className="nav-link disabled"><button className='btn btn-primary'>{totalamount} Tk</button></a>
                        </li>
                    </ul>
                    
                    </div>
                </div>
                </nav>  
        </div>
    )
}

export default Allamount
