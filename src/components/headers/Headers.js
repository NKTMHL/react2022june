import {Link, useParams} from "react-router-dom";

import css from './Headers.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {LOAD_SINGLE_USER} from "../../redux/actions/actions";

const Headers = () => {

    const {user} = useSelector(state => state.usersReducer);

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch({type: LOAD_SINGLE_USER, payload: +id})
    },[id])

    return(
        <div className={css.nav_menu}>
            <div><Link to={'/'}>Main</Link></div>
            <div><Link to={'users'}>Users</Link></div>
            <div><Link to={'posts'}>Posts</Link></div>
            <div><Link to={'comments'}>Comments</Link></div>
            <div>{user && (<div>{user.name}</div>)}</div>
        </div>
    )
}

export {
    Headers
};