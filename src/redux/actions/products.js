import axios from 'axios';
import * as actionTypes from './actionTypes';

/////////////////////////////////////////////////////////////////////
export const addingProduct = (newProduct) => {
  return {
    type: actionTypes.ADD_PRODUCT,
    newProduct: newProduct
  }
}

export const addProduct = (newProduct) => {

}

///////////////////////////////////////////////////////////////////
export const putProduct = (productId, data) => {
  return {
    type: actionTypes.UPDATE_PRODUCT,
    updatedProductId: productId,
    data: data
  }
}

export const updateProduct = (productId, data) => {
  
}

///////////////////////////////////////////////////////////////////

// ************* delete product start *************
export const removeProduct = (productId) => {
  return {
    type: actionTypes.DELETE_PRODUCT,
    deletedProductId: productId
  }
}
export const deleteProduct = (productId) => {
  return dispatch => {
    axios.delete(`https://internship-slick-api.herokuapp.com/api/products?id=${productId}`)
      .then(response => {
        dispatch(removeProduct(productId))
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  };
}
// ************** delete product end **************

///////////////////////////////////////////////////////////////////

// *********** fetching products start ************
export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products: products
  }
}
export const initProucts = () => {
  return dispatch => {
    axios.get('https://internship-slick-api.herokuapp.com/api/products')
      .then(response => {
        dispatch(setProducts(response.data.data))
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  };
};
// ************ fetching products end *************