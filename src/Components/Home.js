import React, { useState } from 'react';
// import { removeElements } from 'react-flow-renderer'; // Import removeElements from react-flow-renderer
import { useSelector, useDispatch } from 'react-redux';
import { addNode, deleteNode, addEdgeAction, deleteEdge ,updateNode} from '../redux/action';
import ReactFlow from 'react-flow-renderer'; // Import ReactFlow from react-flow-renderer
import removeElements from 'react-flow';




const Home = () => {
    const nodes = useSelector((state) => state.nodes);
    const edges = useSelector((state) => state.edges);
    const dispatch = useDispatch();
    const [showPopup, setShowPopup] = useState(false);
    const [selectedNodeId, setSelectedNodeId] = useState('');

    const onElementsRemove = (elementsToRemove) => {
        dispatch(removeElements(elementsToRemove));
    };

    const onConnect = (params) => {
        dispatch(addEdgeAction(params));
    };

    const handleAddNode = () => {
        const newNode = {
            id: `node_${nodes.length + 1}`,
            data: { label: 'Node', popupVisible: false, title: '' },
            position: { x: 100, y: 100 },
        };
        dispatch(addNode(newNode));
    };

    const handleDeleteNode = (id) => {
        dispatch(deleteNode(id));
        dispatch(deleteEdge(id)); // Delete connected edges as well
    };

    const handleNodeClick = (event, node) => {
        event.stopPropagation();
        setSelectedNodeId(node.id);
        setShowPopup(true);
    };

    const handlePopupSave = (title) => {
        dispatch(updateNode(selectedNodeId, { ...nodes.find((node) => node.id === selectedNodeId), title, popupVisible: false }));
        setShowPopup(false);
    };

    const handlePopupCancel = () => {
        setShowPopup(false);
    };

    return (
        <div className="home-container" style={{backgroundColor:'blueviolet'}}>
            
            <div className="graph-container">
                <ReactFlow
                    elements={[...nodes, ...edges]}
                    onElementsRemove={onElementsRemove}
                    onConnect={onConnect}
                    deleteKeyCode={46} // Use delete key for deletion
                    onElementClick={handleNodeClick}
                />
            </div>
            <div className="sidebar">
                <button onClick={handleAddNode}>Create Node</button>
            </div>
            {showPopup && (
                <div className="popup-container">
                    <input type="text" placeholder="Enter title" onChange={(e) => handlePopupSave(e.target.value)} />
                    <button onClick={handlePopupCancel}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default Home;
