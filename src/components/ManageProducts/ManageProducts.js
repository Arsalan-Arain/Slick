import React, { useState } from "react";
import { connect } from "react-redux";
import classes from '../ManageBanners/ManageBanners.css';
import editBtn from '../../assets/editBtn.png';
import deltBtn from '../../assets/delBtn.png';
import coin from '../../assets/coin.svg';
import * as actionCreators from '../../redux/actions/index';
import Modal from '../UI/Modal/Modal';
import Form from '../UI/Form/FormUpdateProduct/FormUpdateProduct';
import DeleteConfirm from '../UI/DeleteConfirm/DeleteConfirm';

const manageProducts = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false);
  const [productId, setProductId] = useState();
  const [productData, setProductData] = useState();

  const closeModalHandler = () => {
    setShowModal(false);
    setShowDelModal(false);
  }

  const saveItemHandler = (productData) => {
    props.onUpdateProduct(productId, productData);
    closeModalHandler();
  }

  const updateProductHandler = (id, image, name, cat, price) => {
    setProductData({
      image: image,
      name: name,
      category: cat._id,
      price: price
    });
    setProductId(id);
    setShowModal(true);
  }

  const delConfirmHandler = () => {
    props.onDeleteProduct(productId);
    closeModalHandler();
  }

  const delProductHandler = (id) => {
    setProductId(id);
    setShowDelModal(true)
  }

  return (
    <React.Fragment>
      <Modal title={'Update Product'} show={showModal} modalClosed={closeModalHandler}><Form clicked={saveItemHandler} productData={productData} /></Modal>
      <Modal title={'Delete Product'} show={showDelModal} modalClosed={closeModalHandler}><DeleteConfirm item={'Product'} clicked={delConfirmHandler} /></Modal>
      <div>
        <div className={classes.manageProductHeader} style={{ display: 'flex' }}>
          <div className={classes.headerSection} style={{ width: '10.77%' }}></div>
          <div className={classes.headerSection} style={{ width: '21.28%' }}>CATEGORY</div>
          <div className={classes.headerSection.concat(" ", classes.productNameWidth)} >PRODUCT NAME</div>
          <div className={classes.headerSection.concat(" ", classes.productPriceWidth)}>PRICE</div>
        </div>

        <div className={classes.nestedPageBodyProduct}>

          {props.products.map(product => (
            <div key={product._id} className={classes.productItem}>
              <div style={{ width: '10.77%' }}>
                <div className={classes.productShowcase}>
                  <img src={product.image} alt="" />
                </div>
              </div>
              <div style={{ width: '21.28%' }}>{product.category.name}</div>
              <div className={classes.productNameWidth} style={{ fontWeight: '600' }}>{product.name}</div>
              <div className={classes.productPrice.concat(" ", classes.productPriceWidth)}>
                <div className={classes.displayFlex}>
                  <img src={coin} alt='icon' className={classes.marginRightCoin} />
                  {product.price}
                </div>
                <div className={classes.displayFlex}>
                  <img onClick={() => { updateProductHandler(product._id, product.image, product.name, product.category, product.price) }} src={editBtn} alt='btn' className={classes.smallBtn.concat(" ", classes.marginRight)} />
                  <img onClick={() => delProductHandler(product._id)} src={deltBtn} alt='btn' className={classes.smallBtn} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateProduct: (productId, data) => dispatch(actionCreators.updateProduct(productId, data)),
    onDeleteProduct: (ProductId) => dispatch(actionCreators.deleteProduct(ProductId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(manageProducts);