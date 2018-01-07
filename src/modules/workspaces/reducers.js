import * as TYPES from './types';

const INITIAL_STATE = { all: [] };

export const workspaces = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.FETCH_WORKSPACES_SUCCESS:
            return {...state, all: action.payload };
        default:
            return state;
    }
}