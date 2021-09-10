import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addBanner = (newBanner) => {
  return {
    type: actionTypes.ADD_BANNER,
    newBanner: newBanner
  }
}

export const updateBanner = (bannerId, data) => {
  return {
    type: actionTypes.UPDATE_BANNER,
    updatedBannerID: bannerId,
    data: data
  }
}

export const deleteBanner = (bannerId) => {
  return {
    type: actionTypes.DELETE_BANNER,
    deletedBannerId: bannerId
  }
}

// fetching banners
export const setBanners = (banners) => {
  return {
    type: actionTypes.SET_BANNERS,
    banners: banners
  }
}
export const initBanners = () => {
  return dispatch => {
    axios.get('https://internship-slick-api.herokuapp.com/api/banners')
    .then( response => {
      dispatch(setBanners(response.data.data))
    })
    .catch(err => {
       console.log('Error: ', err);
    })
  };
};