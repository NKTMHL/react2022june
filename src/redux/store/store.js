import {createStore} from "redux";

import {reduser} from "./combine";

const store = createStore(reduser);

export {
    store
};