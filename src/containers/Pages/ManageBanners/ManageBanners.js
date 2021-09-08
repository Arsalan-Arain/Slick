import { connect } from "react-redux";

const newBanner = {};
const updatedBanner = {};
const deletedBanner = 'id';

const manageBanners = (props) => {
  return {};
}

const mapStateToProps = state => {
  return {
    banners: state.banners
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddBanner: () => dispatch({ type: 'ADD_BANNER', newBanner: newBanner }),
    onUpdateBanner: () => dispatch({ type: 'UPDATE_BANNER', updatedBanner: updatedBanner }),
    onDeleteBanner: () => dispatch({ type: 'DELETE_BANNER', deletedBanner: deletedBanner })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(manageBanners);