import { EditorProvider } from './editorProvider';
import Sidebar from './Sidebar';
import EditorContainer from './editorContainer';
import './styles.css';

// import Sidebar from '../docEditor-indexeddb/components/Sidebar';
// import EditorContainer from '../docEditor-indexeddb/components/EditorContainer';
import TopBar from '../docEditor-indexeddb/components/TopBar';

export const DocEditor = () => {
    const handleToggle = (state: boolean) => {
        console.log('Toggle state:', state);
    };
    return (
        <EditorProvider>
            <div className="docEditor-layout">
                <div className="docEditor-sidebar">
                    {/* <Sidebar /> */}
                    <Sidebar />
                </div>
                <div className="docEditor-container">
                    <TopBar title="Collaboration" onToggle={handleToggle} />
                    <EditorContainer />
                </div>
            </div>
        </EditorProvider>
    )
}