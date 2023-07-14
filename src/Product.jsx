import React from 'react'
import './Product.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { UserAuth } from './StateProvider';

function Product({id, title, price, image, rating}) {
  const {dispatch, basket} = UserAuth()
  // console.log('This is the basket', basket)

  const addToBasket = () => {
   // dispatch the items into the data layout
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating
        }
      })
  }
  console.log(basket)
  return (
    <div className='product'>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
        </p>


        <div className="product__rating">
           {Array(rating).fill().map((_, i) => (
            <p>
             <StarBorderIcon/>
            </p>
           ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button
      onClick={addToBasket}
      >Add to Basket  </button>
    </div>
  )
}

export default Product
