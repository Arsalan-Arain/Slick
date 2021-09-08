import React from "react";
import { connect } from "react-redux";
import classes from '../ManageBanners/ManageBanners.css';
import editBtn from '../../../../assets/editBtn.png';
import deltBtn from '../../../../assets/delBtn.png';
import coin from '../../../../assets/coin.svg';

const newProduct = {};
const updatedProduct = {};
const deletedProduct = 'id';

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
        <div className={classes.productItem}>
          <div style={{ width: '9.77%' }}>
            <div className={classes.productShowcase}></div>
          </div>
          <div style={{ width: '21.28%' }}>Casual</div>
          <div style={{ width: '36.76%', fontWeight: '600' }}>Overcome basic sweatshirt</div>
          <div className={classes.productPrice}>
            <div className={classes.displayFlex}>
              <img src={coin} alt='icon' style={{ marginRight: '0.375rem' }} />
              3222
            </div>
            <div className={classes.displayFlex}>
              <img src={editBtn} alt='btn' className={classes.smallBtn} style={{ marginRight: '1.2rem' }} />
              <img src={deltBtn} alt='btn' className={classes.smallBtn} />
            </div>
          </div>
        </div>

        <div className={classes.productItem}>
          <div style={{ width: '9.77%' }}>
            <div className={classes.productShowcase}></div>
          </div>
          <div style={{ width: '21.28%' }}>Casual</div>
          <div style={{ width: '36.76%', fontWeight: '600' }}>Overcome basic sweatshirt</div>
          <div className={classes.productPrice}>
            <div className={classes.displayFlex}>
              <img src={coin} alt='icon' style={{ marginRight: '0.375rem' }} />
              3222
            </div>
            <div className={classes.displayFlex}>
              <img src={editBtn} alt='btn' className={classes.smallBtn} style={{ marginRight: '1.2rem' }} />
              <img src={deltBtn} alt='btn' className={classes.smallBtn} />
            </div>
          </div>
        </div>

        <div className={classes.productItem}>
          <div style={{ width: '9.77%' }}>
            <div className={classes.productShowcase}></div>
          </div>
          <div style={{ width: '21.28%' }}>Casual</div>
          <div style={{ width: '36.76%', fontWeight: '600' }}>Overcome basic sweatshirt</div>
          <div className={classes.productPrice}>
            <div className={classes.displayFlex}>
              <img src={coin} alt='icon' style={{ marginRight: '0.375rem' }} />
              3222
            </div>
            <div className={classes.displayFlex}>
              <img src={editBtn} alt='btn' className={classes.smallBtn} style={{ marginRight: '1.2rem' }} />
              <img src={deltBtn} alt='btn' className={classes.smallBtn} />
            </div>
          </div>
        </div>

        <div className={classes.productItem}>
          <div style={{ width: '9.77%' }}>
            <div className={classes.productShowcase}></div>
          </div>
          <div style={{ width: '21.28%' }}>Casual</div>
          <div style={{ width: '36.76%', fontWeight: '600' }}>Overcome basic sweatshirt </div>
          <div className={classes.productPrice}>
            <div className={classes.displayFlex}>
              <img src={coin} alt='icon' style={{ marginRight: '0.375rem' }} />
              3222
            </div>
            <div className={classes.displayFlex}>
              <img src={editBtn} alt='btn' className={classes.smallBtn} style={{ marginRight: '1.2rem' }} />
              <img src={deltBtn} alt='btn' className={classes.smallBtn} />
            </div>
          </div>
        </div>
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
    onAddProduct: () => dispatch({ type: 'ADD_PRODUCT', newProduct: newProduct }),
    onUpdateProduct: () => dispatch({ type: 'UPDATE_PRODUCT', updatedProduct: updatedProduct }),
    onDeleteProduct: () => dispatch({ type: 'DELETE_PRODUCT', deletedProduct: deletedProduct })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(manageProducts);