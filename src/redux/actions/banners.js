import axios from 'axios';
import * as actionTypes from './actionTypes';

/////////////////////////////////////////////////////////////////////
export const addingBanner = (newBanner) => { // iske arg mein api ka res aye ga q k us mein id hogi
  return {
    type: actionTypes.ADD_BANNER,
    newBanner: newBanner
  }
}
export const addBanner = (link) => {
  return dispatch => {
    axios.post('https://internship-slick-api.herokuapp.com/api/banners', link)
      .then(response => {
        dispatch(putBanner(response.data.data))
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  };
}

/////////////////////////////////////////////////////////////////////

export const putBanner = (bannerId, newLink) => {
  return {
    type: actionTypes.UPDATE_BANNER,
    updatedBannerID: bannerId,
    newLink: newLink
  }
}
export const updateBanner = (bannerId, newLink) => {
  // yahan par bhi ek obj bana sakte hain data bhejne k liye api pe
  return dispatch => {
    axios.put(`https://internship-slick-api.herokuapp.com/api/banners/${bannerId}`, newLink)
      .then(response => {
        dispatch(putBanner(bannerId, newLink))
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  };  
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