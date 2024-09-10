import { useEffect, useRef, useState } from 'react';
import { EditorProvider } from './editorProvider';
import Sidebar from './Sidebar';
import EditorContainer from './editorContainer';
import './styles.css';

// import Sidebar from '../docEditor-indexeddb/components/Sidebar';
// import EditorContainer from '../docEditor-indexeddb/components/EditorContainer';
import TopBar from '../docEditor-indexeddb/components/TopBar';
import { createEmptyDoc, EdgelessEditor } from '@blocksuite/presets';
import '@blocksuite/presets/themes/affine.css';

export const DocEditor = () => {
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = (state: boolean) => {
        setIsToggled(state);
    };

    const Edgeless = () => {
        const doc = createEmptyDoc().init();
        const editor = new EdgelessEditor();
        editor.doc = doc;
        //document.body.append(editor);
        const editorContainerRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            if (editorContainerRef.current && editor) {
                editorContainerRef.current.innerHTML = '';
                editorContainerRef.current.appendChild(editor);
            }
        }, [editor]);
        return <div className="edgeless-container" ref={editorContainerRef}></div>;
    }

    return (
        <EditorProvider>
            <div className="docEditor-layout">
                <div className="docEditor-sidebar">
                    <Sidebar />
                </div>
                <div className="docEditor-container">
                    <TopBar title="Collaboration" onToggle={handleToggle} />
                    {
                        isToggled ?
                            <Edgeless />
                            :
                            <EditorContainer />
                    }
                </div>
            </div>
        </EditorProvider>
    )
}