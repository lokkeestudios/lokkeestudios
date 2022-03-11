import { Editor, Location, Node } from '..';
export interface TextTransforms {
    delete: (editor: Editor, options?: {
        at?: Location;
        distance?: number;
        unit?: 'character' | 'word' | 'line' | 'block';
        reverse?: boolean;
        hanging?: boolean;
        voids?: boolean;
    }) => void;
    insertFragment: (editor: Editor, fragment: Node[], options?: {
        at?: Location;
        hanging?: boolean;
        voids?: boolean;
    }) => void;
    insertText: (editor: Editor, text: string, options?: {
        at?: Location;
        voids?: boolean;
    }) => void;
}
export declare const TextTransforms: TextTransforms;
//# sourceMappingURL=text.d.ts.map