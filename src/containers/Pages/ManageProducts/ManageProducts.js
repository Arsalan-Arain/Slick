import { connect } from "react-redux";

const newProduct = {};
const updatedProduct = {};
const deletedProduct = 'id';

const manageProducts = (props) => {
  return {};
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