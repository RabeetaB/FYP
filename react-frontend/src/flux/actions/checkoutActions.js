  
import * as actionTypes from '../ActionTypes';
import axios from '../../../axios';



export const checkoutSuccess = (message) => {
    return {
        type: actionTypes.Checkout_Success,
        message: message
    };
};

export const checkoutFailed = (error) => {
    return {
        type: actionTypes.Checkout_Failed,
        error: error
    };
};

export const checkoutStart = () => {
    return {
        type: actionTypes.Checkout_Start
    };
};


export const PayWithCard = (cardtoken, carddetails) => {
    return dispatch => {
        dispatch(checkoutStart());
        axios.get('/api/payment/stripe/pay/checkoutViaCard, {
            params: {
                token: cardtoken,
                user: carddetails
            }
        })
            .then(res => {
                console.log(res);
                // console.log(res.data.success);
                dispatch(checkoutSuccess(res.data.success));
            })
            .catch(err => {
                dispatch(checkoutFailed(err.data.success));
            });
    }

}
