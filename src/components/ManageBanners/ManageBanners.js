import React, { useState } from "react";
import { connect } from "react-redux";
import classes from './ManageBanners.css';
import editBtn from '../../assets/editBtn.png';
import deltBtn from '../../assets/delBtn.png';
import * as actionCreators from '../../redux/actions/index';
import Modal from '../UI/Modal/Modal';
import Form from '../UI/Form/FormBanner/FormBanner';

const manageBanners = (props) => {
  const [showModal, setShowModal] = useState(false);
  
  const modalHandler = () => {
    setShowModal(true);
  }
  const closeModalHandler = () => {
    setShowModal(false);
  }
  const saveItemHandler = (id, data) => {
    alert('saved')
    closeModalHandler()
  }

  // ESE LINK EK VAR MEIN HOGA OR USSE BHEJNA HOGA onClick PE
  // const newBanner = {
  //   link: "https://blog.creatopy.com/wp-content/uploads/2016/06/images-for-banner-ads.png"
  // }
  // onClick={()=>props.onAddBanner(newBanner)}

  // FOR UPDATE BANNER
  // const bannerLink = "https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg";
  // onClick={()=> props.onUpdateBanner(banner._id, bannerLink)}

  return (
    <React.Fragment>
      <Modal title={'Add New Banner'} show={showModal} modalClosed={closeModalHandler}><Form clicked={saveItemHandler} /></Modal>
      <div className={classes.nestedPageBody}>

        {props.banners.map(banner => (
          <div key={banner._id} className={classes.bannerItem}>
            <div className={classes.productImage}>
              <img src={banner.link} alt="" />
            </div>
            <div className={classes.productLink}>{banner.link}</div>
            <img onClick={modalHandler} src={editBtn} alt='btn' className={classes.smallBtn} />
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