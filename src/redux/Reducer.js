/* eslint-disable no-unreachable */
/* eslint-disable default-param-last */
import * as Constant from './Constant';

const initialState = {
    mobileDrawerOpen: false,
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case Constant.DASHBOARD_MOBILE_DRAWER_OPEN:
            return {
                ...state,
                mobileDrawerOpen: action.payload,
            };
            break;

        default:
            break;
    }
    return state;
};
export default Reducer;
