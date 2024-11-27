import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart,emptyCart } from '../Redux/Slice/cartSlice'
import { Link } from 'react-router-dom'




function Cart() {
  const cart = useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()
  const[total,setTotal]=useState(0)
  useEffect(()=>{
    if(cart?.length)
    {
      setTotal(cart?.map(product=>product?.totalPrice).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  })
  return (
  <>
<Header/> 
  {cart.length>0?(
      <div className="row container">
        <div className="col-lg-7">
          <div className="table shadow container mt-5">
<table>
  <tr>
    <th>#</th>
    <th>Title</th>
    <th>Image</th>
    <th>Price</th>
    <th>Action</th>
  </tr>
  
  {cart?.map((product,index)=>(
                <tr>
                <td>{index+1}</td>
                <td>{product.title}</td>
                <td><img src={product.thumbnail} alt="" width={"70%"} height={"200px"}/></td>
                <td><input type="text" readOnly value ={product.quantity} style={{width:"25px"}} /></td>
                <td>${product.totalPrice}</td>
                <td><button className='btn' onClick={()=>dispatch(removeFromCart(product?.id))}><i className='fa-solid fa-trash text-danger'></i></button></td>
                </tr>
              ))}
</table>

<div className="d-flex justify-content-between p-3">
  <button className="btn btn-primary" onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
  <Link to={'/'}><button className="btn btn-primary">Shop More</button></Link>
</div>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-3">
          <div className="card shadow rounded mt-5 p-5 w-100">
          <div className="table shadow mt-5">
           
          </div>
          <h2 className='text-dark fw-bolder'>Cart Summary</h2>
            <h2 className="text-dark fw-bolder"><span>
              Total Products:
              </span>{cart?.length}</h2>
              <h3>Total Price:<span className='text-danger fw-bolder'>${total}</span></h3>
          </div>
          <div className="d-grid">
            <button className="className btn btn-success mt-2">CheckOut</button>
          </div>
        </div>
      </div>):<div className="text-center">
          <img src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="" />
          <h1 className="text-center text-danger mt-5">your cart is empty.......</h1>
        </div>}
   
  </>

  )
}

export default Cart
