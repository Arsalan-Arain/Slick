import React, { useState } from "react";
import { connect } from "react-redux";
import Header from '../../../components/Header/Header';
import classes from './Management.css';
import ManageBanners from '../../../components/ManageBanners/ManageBanners';
import ManageProducts from '../../../components/ManageProducts/ManageProducts';
import * as actionCreators from '../../../redux/actions/index';
import Modal from '../../../components/UI/Modal/Modal';
import FormBanner from '../../../components/UI/Form/FormBanner/FormBanner';
import FormProduct from '../../../components/UI/Form/FormProduct/FormProduct';

const managementPage = (props) => {
  const [productPage, setProductPage] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const togglePageHandler = () => {
    setProductPage(!productPage)
  }

  const modalHandler = () => {
    setShowModal(true)
  }
  const closeModalHandler = () => {
    setShowModal(false)
  }
  const saveItemHandler = (newItem) => {
    productPage ? props.onAddProduct(newItem) : props.onAddBanner(newItem)
    closeModalHandler()
  }


  let pageBody = <ManageBanners />
  if (productPage) {
    pageBody = <ManageProducts />
  }

  const activePageStyle = {
    fontWeight: '600',
    color: '#6F8AE8'
  }

  const modalAddBanner = <Modal title={'Add New Banner'} show={showModal} modalClosed={closeModalHandler}><FormBanner clicked={saveItemHandler} /></Modal>;
  const modalAddProduct = <Modal title={'Add New Product'} show={showModal} modalClosed={closeModalHandler}><FormProduct clicked={saveItemHandler} /></Modal>;

  return (
    <div className={classes.Management}>
      {productPage ? modalAddProduct : modalAddBanner}
      <Header text={""} heading={"Management"} />
      <div className={classes.pageBody}>
        <div className={classes.pageBodyHeader}>
          <div className={classes.headerItem}>
            <div onClick={togglePageHandler} className={`${classes.togglePageButton} ${!productPage ? classes.pageActive : null}`}>
              Manage Banners
              <div className={`${classes.activeBar} ${productPage ? classes.hide : null}`}></div>
            </div>
            <div onClick={togglePageHandler} className={`${classes.marginLeft} ${classes.togglePageButton} ${productPage ? classes.pageActive : null}`}>
              Manage Products
              <div className={`${classes.activeBar} ${!productPage ? classes.hide : null}`}></div>
            </div>
          </div>

          <div className={classes.headerItem}>
            <button onClick={modalHandler}>+ Add New</button>
          </div>
        </div>
        {pageBody}
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onAddBanner: (newBanner) => dispatch(actionCreators.addBanner(newBanner)),
    onAddProduct: (newProduct) => dispatch(actionCreators.addProduct(newProduct))
  };
};

export default connect(null, mapDispatchToProps)(managementPage);