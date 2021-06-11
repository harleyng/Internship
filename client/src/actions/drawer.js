import { TOGGLE } from '../setting/constants/actionTypes';

export const toggle = (mobileOpen) => async (dispatch) => {
  try {
    dispatch({ type: TOGGLE, payload: mobileOpen });
  } catch (error) {
    console.log(error);
  }
}
