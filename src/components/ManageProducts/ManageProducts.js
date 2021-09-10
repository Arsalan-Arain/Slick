import React from "react";
import { connect } from "react-redux";
import classes from '../ManageBanners/ManageBanners.css';
import editBtn from '../../assets/editBtn.png';
import deltBtn from '../../assets/delBtn.png';
import coin from '../../assets/coin.svg';
import * as actionCreators from '../../redux/actions/index';

const manageProducts = (props) => {
  return (
    <div>
      <div className={classes.manageProductHeader} style={{ display: 'flex' }}>
        <div className={classes.headerSection} style={{ width: '9.77%' }}></div>
        <div className={classes.headerSection} style={{ width: '21.28%' }}>CATEGORY</div>
        <div className={classes.headerSection} style={{ width: '36.76%' }}>PRODUCT NAME</div>
        <div className={classes.headerSection} style={{ width: 'calc(100% - 67.81%)' }}>PRICE</div>
      </div>

      <div className={classes.nestedPageBodyProduct}>

        {props.products.map(product => (
          <div key={product._id} className={classes.productItem}>
            <div style={{ width: '9.77%' }}>
              <div className={classes.productShowcase}>
                <img src={product.image} alt="" />
              </div>
            </div>
            <div style={{ width: '21.28%' }}>{product.category.name}</div>
            <div style={{ width: '36.76%', fontWeight: '600' }}>{product.name}</div>
            <div className={classes.productPrice}>
              <div className={classes.displayFlex}>
                <img src={coin} alt='icon' style={{ marginRight: '0.375rem' }} />
                {product.price}
              </div>
              <div className={classes.displayFlex}>
                <img src={editBtn} alt='btn' className={classes.smallBtn} style={{ marginRight: '1.2rem' }} />
                <img onClick={() => props.onDeleteProduct(product._id)} src={deltBtn} alt='btn' className={classes.smallBtn} />
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddProduct: (newProduct) => dispatch(actionCreators.addProduct(newProduct)),
    onUpdateProduct: (productId, data) => dispatch(actionCreators.updateProduct(productId, data)),
    onDeleteProduct: (ProductId) => dispatch(actionCreators.deleteProduct(ProductId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(manageProducts);
// export default manageProducts;