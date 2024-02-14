import {jwtDecode} from "jwt-decode";

let instance;
let token;

class TokenService {
    constructor(instance) {
        if (instance) {
            throw new Error("New instance cannot be created!!");
        }
        token = this.getTokenFromLocalStorage()
        instance = this;
    }

    getTokenFromLocalStorage () {
        let getToken = function () {
            let tokenCur = null
            const strToken = localStorage.getItem("token")
            if (strToken) {
                const tokenObj = JSON.parse(strToken);
                const decoded = jwtDecode(tokenObj.access);
                if (Date.now() >= decoded.exp * 1000) {
                    tokenCur = null
                    localStorage.removeItem('token')
                } else {
                    tokenCur = tokenObj
                }
            }
            return tokenCur;
        }
        let tokenCur = null
        try {
            tokenCur = getToken()
        } catch (e) {}
        return tokenCur;
    }

    valid () {
        let token = this.getTokenFromLocalStorage()
        if (token == null) {
            return false
        }
        if ((!!token && !!token.access)) {
            return true
        }
        return false
    }

    getAccessToken = function () {
        if (this.valid()) {
            return token.access
        }
        return null
    }

    getExpired() {
        let token = this.getAccessToken()
        if (token != null) {
            const decoded = jwtDecode(token);
            return decoded.exp;
        }
        return null
    }

    saveToken (tokenObj) {
        const str = JSON.stringify(tokenObj);
        localStorage.setItem('token', str);
        token = tokenObj
    }

    logout () {
        token = null
        localStorage.removeItem('token')
    }
}

let stateUtilityInstance = Object.freeze(new TokenService());

export default stateUtilityInstance;
