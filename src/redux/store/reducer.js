import * as actionTypes from '../actions/actionTypes';

const initialState = {
  banners: [],
  products: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.products
      }

    case actionTypes.SET_BANNERS:
      return {
        ...state,
        banners: action.banners
      }

    case actionTypes.ADD_BANNER:
      // console.log("[reducer] ", action.newBanner)
      return {
        ...state,
        banners: state.banners.concat(action.newBanner)
      }

    case actionTypes.UPDATE_BANNER:
      return {
        
      }

    case actionTypes.DELETE_BANNER:
      const updatedBanners = state.banners.filter(banner => banner._id !== action.deletedBannerId);
      return {
        ...state,
        banners: updatedBanners
      }

    case actionTypes.ADD_PRODUCT:
      return {}

    case actionTypes.UPDATE_PRODUCT:
      return {}

    case actionTypes.DELETE_PRODUCT:
      const updatedProducts = state.products.filter(product => product._id !== action.deletedProductId);
      return {
        ...state,
        products: updatedProducts
      }

    default:
      return state;
  }
}

export default reducer;