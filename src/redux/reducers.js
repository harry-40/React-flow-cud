
import { ADD_NODE, DELETE_NODE, UPDATE_NODE } from './action';

const initialState = {
    nodes: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NODE:
            return {
                ...state,
                nodes: [...state.nodes, action.payload],
            };
        case DELETE_NODE:
            return {
                ...state,
                nodes: state.nodes.filter((node) => node.id !== action.payload),
            };
        case UPDATE_NODE:
            return {
                ...state,
                nodes: state.nodes.map((node) =>
                    node.id === action.payload.id ? action.payload.updatedNode : node
                ),
            };
        default:
            return state;
    }
};

export default rootReducer;
