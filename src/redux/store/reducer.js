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
      return {
        ...state,
        banners: state.banners.concat(action.newBanner)
      }

    case actionTypes.UPDATE_BANNER:
      const index = state.banners.findIndex((banner) => banner._id === action.updatedBannerId);
      let updatedBanners = [...state.banners];
      let updatedBanner = { ...updatedBanners[index] }
      updatedBanner.link = action.newLink;
      updatedBanners[index] = updatedBanner;

      return {
        ...state,
        banners: updatedBanners
      }

    case actionTypes.DELETE_BANNER:
      const updatedBannersAfterDeletion = state.banners.filter(banner => banner._id !== action.deletedBannerId);
      return {
        ...state,
        banners: updatedBannersAfterDeletion
      }

    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.newProduct)
      }

    case actionTypes.UPDATE_PRODUCT:
      const indexx = state.products.findIndex((product) => product._id === action.updatedProductId);
      let updatedProducts = [...state.products];
      updatedProducts[indexx] = action.data;

      return {
        ...state,
        products: updatedProducts
      }

    case actionTypes.DELETE_PRODUCT:
      const updatedProductsAfterDeletion = state.products.filter(product => product._id !== action.deletedProductId);
      return {
        ...state,
        products: updatedProductsAfterDeletion
      }

    default:
      return state;
  }
}

export default reducer;