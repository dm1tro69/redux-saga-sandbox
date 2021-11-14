import {USER_POSTS_FETCH_SUCCEEDED} from "./actions";

const initialState = {
    posts: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_POSTS_FETCH_SUCCEEDED:
            const posts = action.payload.data
            return {...state, posts}
        default: return state
    }
}