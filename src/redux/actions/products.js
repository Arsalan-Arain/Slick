import axios from 'axios';

import * as actionTypes from './actionTypes';

export const addProduct = (newProduct) => {
  return {
    type: actionTypes.ADD_PRODUCT,
    newProduct: newProduct
  }
}

// async code
export const removeProduct = (productId) => {
  // logics wagaira yahan aye gi e.g. price*2 ker dain
  // or phir is new price ko return se bhej dain
  // ya phir reducer mein bhi ker sakte hain 
  return {
    type: actionTypes.DELETE_PRODUCT,
    deletedProductId: productId
  }
}

export const deleteProduct = (productId) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(removeProduct(productId));
    }, 1000);
  }
}
//async

export const updateProduct = (productId, data) => {
  return {
    type: actionTypes.UPDATE_PRODUCT,
    updatedProductId: productId,
    data: data
  }
}

// fetching products
export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products: products
  }
}
export const initProucts = () => {
  return dispatch => {
    axios.get('https://internship-slick-api.herokuapp.com/api/products')
    .then( response => {
      dispatch(setProducts(response.data.data))
    })
    .catch(err => {
       console.log('Error: ', err);
    })
  };
};