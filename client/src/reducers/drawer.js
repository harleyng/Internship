import { TOGGLE } from "../setting/constants/actionTypes"

const drawerReducer = (mobileOpen = false, action) => {
  switch (action.type) {
    case TOGGLE:
      return action.payload;
    default:
      return mobileOpen;
  }
} 

export default drawerReducer;