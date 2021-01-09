import React from 'react'

/**
 *  To display selected user details 
 * @param {name, username , email} param
 */
export default function UserDetails({name , username , email}) {

    if(!!name && !!username && !!email){
        return (
            <div>
                <ul>
                    <li>{name}</li>
                    <li>{username}</li>
                    <li>{email}</li>
                </ul>
            </div>
        )  
    } else {
        return null;
    }
   
}
