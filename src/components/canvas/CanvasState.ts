import { useState, useCallback } from 'react';

export interface Element {
    id: string;
    type: 'circle' | 'rect'; // Add more types as needed
    x: number;
    y: number;
    radius?: number; // For circle
    width?: number; // For rect
    height?: number; // For rect
}

export interface Connector {
    id: string;
    startElementId: string;
    endElementId: string;
}

export function useCanvasState() {
    const [elements, setElements] = useState<Element[]>([]);
    const [connectors, setConnectors] = useState<Connector[]>([]);
    const [selectedElementId, setSelectedElementId] = useState<string | null>(null);

    // Add a new shape
    const addElement = useCallback((element: Element) => {
        setElements((prevElements) => [...prevElements, element]);
    }, []);

    // Select an element
    const selectElement = useCallback((id: string) => {
        setSelectedElementId(id);
    }, []);

    // Move an element
    const moveElement = useCallback((id: string, x: number, y: number) => {
        setElements((prevElements) =>
            prevElements.map((el) => (el.id === id ? { ...el, x, y } : el))
        );
    }, []);

    // Delete selected element
    const deleteSelectedElement = useCallback(() => {
        if (selectedElementId) {
            setElements((prevElements) =>
                prevElements.filter((el) => el.id !== selectedElementId)
            );
            setConnectors((prevConnectors) =>
                prevConnectors.filter(
                    (conn) =>
                        conn.startElementId !== selectedElementId &&
                        conn.endElementId !== selectedElementId
                )
            );
            setSelectedElementId(null);
        }
    }, [selectedElementId]);

    // Add a connector between two elements
    const addConnector = useCallback((startElementId: string, endElementId: string) => {
        const newConnector: Connector = {
            id: `${startElementId}-${endElementId}`,
            startElementId,
            endElementId,
        };
        setConnectors((prevConnectors) => [...prevConnectors, newConnector]);
    }, []);

    // Save canvas state
    const saveState = useCallback(() => {
        const state = {
            elements,
            connectors,
        };
        localStorage.setItem('canvasState', JSON.stringify(state));
    }, [elements, connectors]);

    // Load canvas state
    const loadState = useCallback(() => {
        const state = localStorage.getItem('canvasState');
        if (state) {
            const parsedState = JSON.parse(state);
            setElements(parsedState.elements || []);
            setConnectors(parsedState.connectors || []);
        }
    }, []);

    return {
        elements,
        connectors,
        selectedElementId,
        addElement,
        selectElement,
        moveElement,
        deleteSelectedElement,
        addConnector,
        saveState,
        loadState,
    };
}
