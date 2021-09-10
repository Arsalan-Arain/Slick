import React from "react";
import { connect } from "react-redux";
import classes from './ManageBanners.css';
import editBtn from '../../assets/editBtn.png';
import deltBtn from '../../assets/delBtn.png';
import * as actionCreators from '../../redux/actions/index';

const manageBanners = (props) => {
  return (
    <div className={classes.nestedPageBody}>

      {props.banners.map(banner => (
        <div key={banner._id} className={classes.bannerItem}>
          <div className={classes.productImage}>
            <img src={banner.link} alt="" />
          </div>
          <div className={classes.productLink}>{banner.link}</div>
          <img src={editBtn} alt='btn' className={classes.smallBtn} />
          <img onClick={() => props.onDeleteBanner(banner._id)} src={deltBtn} alt='btn' className={classes.smallBtn} />
        </div>
      ))}




    </div>
  );
}

const mapStateToProps = state => {
  return {
    banners: state.banners
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddBanner: (newBanner) => dispatch(actionCreators.addBanner(newBanner)),
    onUpdateBanner: (bannerId, data) => dispatch(actionCreators.updateBanner(bannerId, data)),
    onDeleteBanner: (bannerId) => dispatch(actionCreators.deleteBanner(bannerId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(manageBanners);
// export default manageBanners;