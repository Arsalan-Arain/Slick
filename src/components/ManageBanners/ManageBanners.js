import React, { useState } from "react";
import { connect } from "react-redux";
import classes from './ManageBanners.css';
import editBtn from '../../assets/editBtn.png';
import deltBtn from '../../assets/delBtn.png';
import * as actionCreators from '../../redux/actions/index';
import Modal from '../UI/Modal/Modal';
import Form from '../UI/Form/FormUpdateBanner/FormUpdateBanner';

const manageBanners = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [bannerId, setBannerId] = useState();
  const [bannerLink, setBannerLink] = useState();

  const modalHandler = () => {
    setShowModal(true);
  }
  const closeModalHandler = () => {
    setShowModal(false);
  }
  const saveItemHandler = (updatedBanner) => {
    props.onUpdateBanner(bannerId, updatedBanner)
    closeModalHandler()
  }

  const updateBannerHandler = (id, link) => {
    setBannerId(id)
    setBannerLink(link);
    modalHandler();
  }

  return (
    <React.Fragment>
      <Modal title={'Update Banner'} show={showModal} modalClosed={closeModalHandler}><Form url={bannerLink} clicked={saveItemHandler} /></Modal>
      <div className={classes.nestedPageBody}>

        {props.banners.map(banner => (
          <div key={banner._id} className={classes.bannerItem}>
            <div className={classes.productImage}>
              <img src={banner.link} alt="" />
            </div>
            <div className={classes.productLink}>{banner.link}</div>
            <img onClick={() => { updateBannerHandler(banner._id, banner.link) }} src={editBtn} alt='btn' className={classes.smallBtn} />
            <img onClick={() => props.onDeleteBanner(banner._id)} src={deltBtn} alt='btn' className={classes.smallBtn} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    banners: state.banners
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateBanner: (bannerId, newLink) => dispatch(actionCreators.updateBanner(bannerId, newLink)),
    onDeleteBanner: (bannerId) => dispatch(actionCreators.deleteBanner(bannerId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(manageBanners);