import { Editor, Path, Range, Text } from '..';
import { Element, ElementEntry } from './element';
/**
 * The `Node` union type represents all of the different types of nodes that
 * occur in a Slate document tree.
 */
export declare type BaseNode = Editor | Element | Text;
export declare type Node = Editor | Element | Text;
export interface NodeInterface {
    ancestor: (root: Node, path: Path) => Ancestor;
    ancestors: (root: Node, path: Path, options?: {
        reverse?: boolean;
    }) => Generator<NodeEntry<Ancestor>, void, undefined>;
    child: (root: Node, index: number) => Descendant;
    children: (root: Node, path: Path, options?: {
        reverse?: boolean;
    }) => Generator<NodeEntry<Descendant>, void, undefined>;
    common: (root: Node, path: Path, another: Path) => NodeEntry;
    descendant: (root: Node, path: Path) => Descendant;
    descendants: (root: Node, options?: {
        from?: Path;
        to?: Path;
        reverse?: boolean;
        pass?: (node: NodeEntry) => boolean;
    }) => Generator<NodeEntry<Descendant>, void, undefined>;
    elements: (root: Node, options?: {
        from?: Path;
        to?: Path;
        reverse?: boolean;
        pass?: (node: NodeEntry) => boolean;
    }) => Generator<ElementEntry, void, undefined>;
    extractProps: (node: Node) => NodeProps;
    first: (root: Node, path: Path) => NodeEntry;
    fragment: (root: Node, range: Range) => Descendant[];
    get: (root: Node, path: Path) => Node;
    has: (root: Node, path: Path) => boolean;
    isNode: (value: any) => value is Node;
    isNodeList: (value: any) => value is Node[];
    last: (root: Node, path: Path) => NodeEntry;
    leaf: (root: Node, path: Path) => Text;
    levels: (root: Node, path: Path, options?: {
        reverse?: boolean;
    }) => Generator<NodeEntry, void, undefined>;
    matches: (node: Node, props: Partial<Node>) => boolean;
    nodes: (root: Node, options?: {
        from?: Path;
        to?: Path;
        reverse?: boolean;
        pass?: (entry: NodeEntry) => boolean;
    }) => Generator<NodeEntry, void, undefined>;
    parent: (root: Node, path: Path) => Ancestor;
    string: (node: Node) => string;
    texts: (root: Node, options?: {
        from?: Path;
        to?: Path;
        reverse?: boolean;
        pass?: (node: NodeEntry) => boolean;
    }) => Generator<NodeEntry<Text>, void, undefined>;
}
export declare const Node: NodeInterface;
/**
 * The `Descendant` union type represents nodes that are descendants in the
 * tree. It is returned as a convenience in certain cases to narrow a value
 * further than the more generic `Node` union.
 */
export declare type Descendant = Element | Text;
/**
 * The `Ancestor` union type represents nodes that are ancestors in the tree.
 * It is returned as a convenience in certain cases to narrow a value further
 * than the more generic `Node` union.
 */
export declare type Ancestor = Editor | Element;
/**
 * `NodeEntry` objects are returned when iterating over the nodes in a Slate
 * document tree. They consist of the node and its `Path` relative to the root
 * node in the document.
 */
export declare type NodeEntry<T extends Node = Node> = [T, Path];
/**
 * Convenience type for returning the props of a node.
 */
export declare type NodeProps = Omit<Editor, 'children'> | Omit<Element, 'children'> | Omit<Text, 'text'>;
//# sourceMappingURL=node.d.ts.map