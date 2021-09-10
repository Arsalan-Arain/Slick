import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addBanner = (newBanner) => {
  return {
    type: actionTypes.ADD_BANNER,
    newBanner: newBanner
  }
}

/////////////////////////////////////////////////////////////////////

export const updateBanner = (bannerId, data) => {
  return {
    type: actionTypes.UPDATE_BANNER,
    updatedBannerID: bannerId,
    data: data
  }
}

/////////////////////////////////////////////////////////////////////

// *********** delete banner start ************
export const removeBanner = (bannerId) => {
  return {
    type: actionTypes.DELETE_BANNER,
    deletedBannerId: bannerId
  }
}
export const deleteBanner = (bannerId) => {
  return dispatch => {
    axios.delete(`https://internship-slick-api.herokuapp.com/api/banners?id=${bannerId}`)
      .then(response => {
        dispatch(removeBanner(bannerId))
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  };
}
// ************ delete banner end *************

/////////////////////////////////////////////////////////////////////

// ********** fetching banners start **********
export const setBanners = (banners) => {
  return {
    type: actionTypes.SET_BANNERS,
    banners: banners
  }
}
export const initBanners = () => {
  return dispatch => {
    axios.get('https://internship-slick-api.herokuapp.com/api/banners')
      .then(response => {
        dispatch(setBanners(response.data.data))
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  };
};
// ********** fetching banners end ************