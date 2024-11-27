import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../Redux/Slice/wishListSlice'
import { addToCart } from '../Redux/Slice/cartSlice'


function Wishlist() {
  const {wishlist} = useSelector(state=>state.wishListReducer)
  const {allproducts,loading,error}=useSelector(state=>state.productReducer)
  const dispatch= useDispatch()

  const handleCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product?.id))
  }
  return (
  <>
   <Header/> 
    <div style={{marginTop:"50px"}} className='container-fluid'>
      <Row>
       { 
        wishlist?.length>0?wishlist.map(product=>(<Col>
        <Card style={{ width: '18rem' }}>

<Card.Img variant="top" src={product?.thumbnail} />
<Card.Body>
  <Card.Title>{product?.title.slice(0,10)}...</Card.Title>
  <Card.Text>
  {product?.description.slice(0,20)}....
  </Card.Text>
  <div className="d-flex justify-content-between">
  <Button className="btn btn-light" onClick={()=>handleCart(product)}><i class="fa-solid fa-cart-shopping text-info"></i></Button>
 <Button className="btn btn-light" onClick={()=>dispatch(removeFromWishlist(product?.id))}><i className='fa-solid fa-trash text-danger'>
</i></Button>
  </div>
</Card.Body>
</Card>
        </Col>)):<div className="text-center">
          <img src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="" />
          <h1 className="text-center text-danger mt-5">your wishlist is empty.......</h1>
        </div>
        }
      </Row>
    </div>
  </>
  )
}
export default Wishlist
