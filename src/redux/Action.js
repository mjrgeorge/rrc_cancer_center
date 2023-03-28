import * as Constant from './Constant';

// eslint-disable-next-line import/prefer-default-export
export const mobileDrawerOpenAction = (data) => (dispatch) => {
    dispatch({
        type: Constant.DASHBOARD_MOBILE_DRAWER_OPEN,
        payload: data,
    });
};
