const initialState = {
  banners: [],
  products: [
    {
      id: "1",
      productName: "Apple",
      category: "food",
      price: 200,
      imange: "https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-1200x628-facebook-1200x628.jpg"
    },
    {
      id: "2",
      productName: "Car",
      category: "vehical",
      price: 1000,
      imange: "https://cdn.shopify.com/s/files/1/0272/0409/1949/products/jeep-601-4_1.jpg?v=1600934400"
    },
    {
      id: "3",
      productName: "LED",
      category: "electronics",
      price: 300,
      imange: "https://image.made-in-china.com/2f0j00vjkEMBfaChzJ/China-LCD-TV-Factory-Wholesale-22-Inch-LED-TV.jpg"
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BANNER':
      return {}
    case 'UPDATE_BANNER':
      return {}
    case 'DELETE_BANNER':
      return {}
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