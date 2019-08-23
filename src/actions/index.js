import axios from 'axios';

const LOGIN = 'LOGIN';

const baseURL = 'https://3.122.114.239/api/';

export function login(email, password) {

    return dispatch => {
        axios.post(`${baseURL}auth/login` , {username: email, password: password}, {headers: {'Accept': 'application/json'}})
        .then( (response) => {
            dispatch({
                type: LOGIN,
                payload: response.data.data
            })

        })
    }
   
}
export function renewToken(token) {
    axios.get(`${baseURL}auth/renew-token`, { headers: { 'Authorization': 'Bearer' `${token}`}} ).then( (result) => {
        console.log(result);
    }) 
}
    
export function getGroups(token) {

    // axios.defaults.headers.common = {'Authorization': `Bearer-${token}`}
        return dispatch => {
            axios.get(`${baseURL}groups/all`, { headers: {'Authorization': `Bearer ${token}`}}).then( (response) => {
                console.log(response);
        });
    }
}

