import { Editor, Element, Location, Node, Path } from '..';
import { NodeMatch } from '../interfaces/editor';
export interface NodeTransforms {
    insertNodes: <T extends Node>(editor: Editor, nodes: Node | Node[], options?: {
        at?: Location;
        match?: NodeMatch<T>;
        mode?: 'highest' | 'lowest';
        hanging?: boolean;
        select?: boolean;
        voids?: boolean;
    }) => void;
    liftNodes: <T extends Node>(editor: Editor, options?: {
        at?: Location;
        match?: NodeMatch<T>;
        mode?: 'all' | 'highest' | 'lowest';
        voids?: boolean;
    }) => void;
    mergeNodes: <T extends Node>(editor: Editor, options?: {
        at?: Location;
        match?: NodeMatch<T>;
        mode?: 'highest' | 'lowest';
        hanging?: boolean;
        voids?: boolean;
    }) => void;
    moveNodes: <T extends Node>(editor: Editor, options: {
        at?: Location;
        match?: NodeMatch<T>;
        mode?: 'all' | 'highest' | 'lowest';
        to: Path;
        voids?: boolean;
    }) => void;
    removeNodes: <T extends Node>(editor: Editor, options?: {
        at?: Location;
        match?: NodeMatch<T>;
        mode?: 'highest' | 'lowest';
        hanging?: boolean;
        voids?: boolean;
    }) => void;
    setNodes: <T extends Node>(editor: Editor, props: Partial<T>, options?: {
        at?: Location;
        match?: NodeMatch<T>;
        mode?: 'all' | 'highest' | 'lowest';
        hanging?: boolean;
        split?: boolean;
        voids?: boolean;
    }) => void;
    splitNodes: <T extends Node>(editor: Editor, options?: {
        at?: Location;
        match?: NodeMatch<T>;
        mode?: 'highest' | 'lowest';
        always?: boolean;
        height?: number;
        voids?: boolean;
    }) => void;
    unsetNodes: <T extends Node>(editor: Editor, props: string | string[], options?: {
        at?: Location;
        match?: NodeMatch<T>;
        mode?: 'all' | 'highest' | 'lowest';
        split?: boolean;
        voids?: boolean;
    }) => void;
    unwrapNodes: <T extends Node>(editor: Editor, options?: {
        at?: Location;
        match?: NodeMatch<T>;
        mode?: 'all' | 'highest' | 'lowest';
        split?: boolean;
        voids?: boolean;
    }) => void;
    wrapNodes: <T extends Node>(editor: Editor, element: Element, options?: {
        at?: Location;
        match?: NodeMatch<T>;
        mode?: 'all' | 'highest' | 'lowest';
        split?: boolean;
        voids?: boolean;
    }) => void;
}
export declare const NodeTransforms: NodeTransforms;
//# sourceMappingURL=node.d.ts.map