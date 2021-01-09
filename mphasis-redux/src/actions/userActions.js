import axios from 'axios';

/**
 *  to fetch user details from server
 */
export function userDetailsFetch(){
   return (dispatch) =>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => dispatch( {type:"USER_FETCH_SUCCESS" , payload: response.data})
    );
   }
}