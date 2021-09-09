const initialState = {
  banners: [],
  products: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BANNER':
      return {
        // yahan api call hogi
        // is k liye array ka concat() ka method hai redux--lec14--9:40
        // jo k push ki tarha nahi balke element add ker k copy bana deta hai array ki
      }
    case 'UPDATE_BANNER':
      return {}
    case 'DELETE_BANNER':
      // api call
      // const updatedBanners = state.banners.filter(banner => banner.id !== payload.bannerId);
      // filter array ki copy banata hai original ko nahi cherta  
      return {
        // ...state, updatedBanners

      }
    case 'ADD_PRODUCT':
      return {}
    case 'UPDATE_PRODUCT':
      return {}
    case 'DELETE_PRODUCT':
      return {}
    default:
      return state;
  }
}

export default reducer;