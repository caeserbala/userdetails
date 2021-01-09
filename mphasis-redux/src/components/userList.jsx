import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userDetailsFetch } from '../actions/userActions';
import UserDetails from './userDetails';

/**
 *  To display list of users
 */
export default function UserList() {

    const [userDetail, setuserDetail] = useState({});
    const dispatch = useDispatch();
    const userDetailsRedux = useSelector(state => state)
    useEffect(() => {
        dispatch(userDetailsFetch())
    }, []);

    const displayUserDetail = (value) => {
        setuserDetail(value);
    }

    return (
        <div>
            <ul>
                {userDetailsRedux?.userDetails?.map((value) => {
                    return <li onClick={(event) => displayUserDetail(value)}>  {value.name}</li>
                })}
            </ul>
            {!!Object(userDetail) && <UserDetails {...userDetail}></UserDetails>}
        </div>
    )
}
