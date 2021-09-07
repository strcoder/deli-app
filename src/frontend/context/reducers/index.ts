/* eslint-disable no-param-reassign */
import { Notification } from '../../utils/interface/Notification';

const reducer = (state: any, payload: any) => {
  switch (payload.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: payload.theme,
      };
    default: return state;
  }
};

export default reducer;
