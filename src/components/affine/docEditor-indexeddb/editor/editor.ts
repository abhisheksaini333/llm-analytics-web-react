import { AffineEditorContainer } from '@blocksuite/presets';
import { provider } from './provider/provider';
import { Doc } from '@blocksuite/store';
import '@blocksuite/presets/themes/affine.css';

export async function initEditor() {
    const { collection } = provider;
    const editor = new AffineEditorContainer();

    const docs = [...collection.docs.values()].map(blocks => blocks.getDoc());
    editor.doc = docs[0];
    //@ts-ignore
    editor.slots.docLinkClicked.on(({ docId }) => {
        const target = <Doc>collection.getDoc(docId);
        editor.doc = target;
    });
    return { editor, provider, collection };
}