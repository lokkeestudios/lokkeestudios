import { Editor, Location, Point, Range } from '..';
export interface SelectionTransforms {
    collapse: (editor: Editor, options?: {
        edge?: 'anchor' | 'focus' | 'start' | 'end';
    }) => void;
    deselect: (editor: Editor) => void;
    move: (editor: Editor, options?: {
        distance?: number;
        unit?: 'offset' | 'character' | 'word' | 'line';
        reverse?: boolean;
        edge?: 'anchor' | 'focus' | 'start' | 'end';
    }) => void;
    select: (editor: Editor, target: Location) => void;
    setPoint: (editor: Editor, props: Partial<Point>, options?: {
        edge?: 'anchor' | 'focus' | 'start' | 'end';
    }) => void;
    setSelection: (editor: Editor, props: Partial<Range>) => void;
}
export declare const SelectionTransforms: SelectionTransforms;
//# sourceMappingURL=selection.d.ts.map