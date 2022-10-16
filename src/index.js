import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


import {App} from "./App";
import {store} from "./redux/store/store";


// let userReducer = ((state = {users: [], user: null}, action) => {
//     switch (action.type) {
//         case "LOAD_USERS":
//             return {...state, users: action.payload};
//         case "CHOOSE_USER":
//             let id = action.payload;
//             let user = state.user.find(value => value.id === id);
//             return {...state, user: user}
//
//         default:
//             return state;
//     }
//
//
// });
//
//
// let postReducer = ((state = {posts: [], post: null}, action) => {
//     switch (action.type) {
//         case "LOAD_POSTS":
//             return {...state, posts: action.payload};
//         case "CHOOSE_POST":
//             let id = action.payload;
//             let post = state.post.find(value => value.id === id);
//             return {...state, post}
//
//         default:
//             return state;
//     }
//
//
// });
//
//
// let commentReducer = ((state = {comments: [], comment: null}, action) => {
//     switch (action.type) {
//         case "LOAD_COMMENTS":
//             return {...state, comments: action.payload};
//         case "CHOOSE_COMMENT":
//             let id = action.payload;
//             let comment = state.comment.find(value => value.id === id);
//             return {...state, comment}
//
//         default:
//             return state;
//     }
//
//
// });
//
//
// let reducer = combineReducers({
//     userReducer,
//     postReducer,
//     commentReducer
// });
//
// let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

