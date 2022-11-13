const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : null

export const SET_CART = 'set_cart'
export const REMOVE_CART = 'remove_cart'

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      const stateData = {
        ...action.payload,
        items: action.payload.items,
        itemsCount: action.payload.items.length,
      }
      localStorage.setItem('cart', JSON.stringify(stateData))

      return stateData

    case REMOVE_CART:
      localStorage.removeItem('cart')
      return null

    default:
      return state
  }
}
export default cartReducer
