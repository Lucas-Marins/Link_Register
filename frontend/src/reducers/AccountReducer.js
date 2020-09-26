import {setAccount, setToken, setRefreshToken,removeAccount,removeRefreshToken,removeToken} from '../helpers/account'
import {SIGN_IN, SIGN_OUT, SIGN_UP} from '../actions/AccountActions'


const initialState = {
    account: null,
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case SIGN_UP:
        case SIGN_IN:
            const response = payload ? payload.data : null;
            const account = response ? response.data : null;
            const metadata = response ? response.metadata : null;

            const token = payload ? metadata.token : null;
            const refreshToken = payload ? metadata.refreshToken : null;

            if(account) setAccount(account);
            if(token) setToken(token);
            if(refreshToken) setRefreshToken(refreshToken)

            return {...state, account}
        case SIGN_OUT:{
            removeAccount();
            removeToken();
            removeRefreshToken();

            return {...initialState, account:null}
        }
        default:
            return state;
    }
}