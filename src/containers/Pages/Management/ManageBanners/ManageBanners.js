import React from "react";
import { connect } from "react-redux";
import classes from './ManageBanners.css';
import editBtn from '../../../../assets/editBtn.png';
import deltBtn from '../../../../assets/delBtn.png';

const newBanner = {};
const updatedBanner = {};
const deletedBanner = 'id';

const manageBanners = (props) => {
  return (
    <div className={classes.nestedPageBody}>
      <div className={classes.bannerItem}>
        <div className={classes.productImage}></div>
        <div className={classes.productLink}></div>
        <img src={editBtn} alt='btn' className={classes.smallBtn} />
        <img src={deltBtn} alt='btn' className={classes.smallBtn} />
      </div>
      <div className={classes.bannerItem}>
        <div className={classes.productImage}></div>
        <div className={classes.productLink}>https://abc.com/images/123sdkfsjfdafkasjllasflkasdflkl123sdkfsjfdafkasjllasflkasdflkl123sdkfsjfdafkasjllasflkasdflkl</div>
        <img src={editBtn} alt='btn' className={classes.smallBtn} />
        <img src={deltBtn} alt='btn' className={classes.smallBtn} />
      </div>
      <div className={classes.bannerItem}>
        <div className={classes.productImage}></div>
        <div className={classes.productLink}></div>
        <img src={editBtn} alt='btn' className={classes.smallBtn} />
        <img src={deltBtn} alt='btn' className={classes.smallBtn} />
      </div>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     banners: state.banners
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddBanner: () => dispatch({ type: 'ADD_BANNER', payload: { newBanner } }),
//     onUpdateBanner: () => dispatch({ type: 'UPDATE_BANNER', payload: { updatedBannerID: updatedBannerID } }),
//     onDeleteBanner: () => dispatch({ type: 'DELETE_BANNER', payload: { deletedBannerID: deletedBannerID } })
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(manageBanners);
export default manageBanners;