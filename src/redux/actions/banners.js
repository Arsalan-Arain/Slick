import axios from 'axios';
import * as actionTypes from './actionTypes';

/////////////////////////////////////////////////////////////////////
// *********************** Add Banner Start *************************
export const createBanner = (newBanner) => { // iska name addingBanner tha change ker diya agar masla kare to wohi kerna hai phir
  return {
    type: actionTypes.ADD_BANNER,
    newBanner: newBanner
  }
}
export const addBanner = (newBanner) => {
  return dispatch => {
    axios.post('https://internship-slick-api.herokuapp.com/api/banners', { link: newBanner })
      .then(response => {
        dispatch(createBanner(response.data.data))
      })
      .catch(err => {
        console.log('Error*********: ', err);
      })
  };
}
// ************************* Add Banner End *************************
/////////////////////////////////////////////////////////////////////

export const putBanner = (bannerId, newLink) => {
  return {
    type: actionTypes.UPDATE_BANNER,
    updatedBannerId: bannerId,
    newLink: newLink
  }
}
export const updateBanner = (bannerId, newLink) => {
  return dispatch => {
    axios.put(`https://internship-slick-api.herokuapp.com/api/banners/${bannerId}`, { link: newLink })
      .then(response => {
        dispatch(putBanner(bannerId, newLink))
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  };
}

/////////////////////////////////////////////////////////////////////
// ********************* delete banner start ************************
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
// *********************** delete banner end ************************
/////////////////////////////////////////////////////////////////////
// ******************* fetching banners start ***********************
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
// ********************* fetching banners end ***********************