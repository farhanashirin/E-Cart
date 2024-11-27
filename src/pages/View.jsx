import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Header from '../Components/Header'
import { addToWishlist } from '../Redux/Slice/wishListSlice'
import { useDispatch, useSelector } from 'react-redux'
function View() {
  const {id} = useParams()//can handle path related informations from components
  console.log(id);
  const[product,setProduct]=useState({})
  const{wishlist} =useSelector(state=>state.wishListReducer)
  const dispatch =useDispatch()
  const cart = useSelector((state)=>state.cartReducer)
  useEffect(()=>{
    if(localStorage.getItem("allProducts"))
    {
      const allProducts=JSON.parse(localStorage.getItem("allProducts"))
      setProduct(allProducts.find(item=>item.id==id))
    }
    else{
      setProduct("")
    }
  },[])
  console.log(product)

const handleWishlist=(product)=>{
  const existingProduct=wishlist.find(item=>item.id==product.id)
  if(existingProduct)
  {
    alert("product already exist")
  }
  else{
    dispatch(addToWishlist(product))
  }
}
const handleCart= (product)=> 
  {
    const existingProduct = cart?.find(item=>item.id==product.id)

if(existingProduct)
{
  alert("items added")
  dispatch(addToCart(product))
}
else{
  alert("items addedd")
  dispatch(addToCart(product))
}
}
return (
  <>
   <Header/> 
 <div className="container mt-5 row ms-5 ">
  <div className="col-lg-4 ">

<img src={product?.thumbnail} alt="" />
  </div>
  <div className="col-lg-2"> 
    </div>
    <div className="col-lg-6">
    <p className="text-warning fw-bolder">pid:{product?.id}</p>
    <h1>{product?.title}</h1>
    <p>{product?.description}</p>
    <h3>Price: <span className='text-danger'>{product?.price}</span></h3>
    <div className="d-flex justify-content-between">
    <Button className="btn btn-light" onClick={() => handleWishlist(product)}><i className='fa-solid fa-heart text-danger'>
</i>wishlist</Button>
<Button className="btn btn-light" onClick={()=>handleCart(product)}><i className='fa-solid fa-cart-shopping text-warning'>
</i></Button>
    </div>
    </div> 
 </div>
 </>
)
}
export default View
