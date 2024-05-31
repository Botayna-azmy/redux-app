import React from 'react'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import { Incrementer,Decrementer,Reset, Incrementerpar5 } from '../Config/action'

const AppRdux = (props) => {
    const num = useSelector(data => data.num)
  return (
    <div className='App'>
        <div> {num} </div>
        <button onClick={props.inc}>Incrementer</button>
        <button onClick={props.inc5}>Incrementer par 5</button>
        <button onClick={props.dec}>Decrementer</button>
        <button onClick={props.res}>Reset</button>
    </div>
  )
}
// const mapStateToProps = (state) =>{
//     return {num:state.num}
// }
const mapDispatchtoProps = (dispatch)=>{
    return {
        inc: () => dispatch(Incrementer()),
        inc5: () => dispatch(Incrementerpar5(5)),
        dec: () => dispatch(Decrementer()),
        res: () => dispatch(Reset())
    }
}
// export default connect(mapStateToProps) (AppRdux);
// export default AppRdux;
export default connect(null,mapDispatchtoProps) (AppRdux);