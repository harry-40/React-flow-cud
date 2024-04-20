
export const ADD_NODE = 'ADD_NODE';
export const DELETE_NODE = 'DELETE_NODE';
export const UPDATE_NODE = 'UPDATE_NODE';

export const addNode = (node) => ({
    type: ADD_NODE,
    payload: node,
});

export const deleteNode = (id) => ({
    type: DELETE_NODE,
    payload: id,
});

export const updateNode = (id, updatedNode) => ({
    type: UPDATE_NODE,
    payload: { id, updatedNode },
});
export const addEdgeAction = (edge) => ({
    type: 'ADD_EDGE', // Example action type for adding an edge
    payload: edge,
});
export const deleteEdge = (id) => ({
    type: 'DELETE_EDGE', // Example action type for deleting an edge
    payload: id,
});
