import { Ancestor, ExtendedType, Location, Node, NodeEntry, Operation, Path, PathRef, Point, PointRef, Range, RangeRef, Span, Text } from '..';
import { Descendant } from './node';
import { Element } from './element';
export declare type BaseSelection = Range | null;
export declare type Selection = ExtendedType<'Selection', BaseSelection>;
/**
 * The `Editor` interface stores all the state of a Slate editor. It is extended
 * by plugins that wish to add their own helpers and implement new behaviors.
 */
export interface BaseEditor {
    children: Descendant[];
    selection: Selection;
    operations: Operation[];
    marks: Omit<Text, 'text'> | null;
    isInline: (element: Element) => boolean;
    isVoid: (element: Element) => boolean;
    normalizeNode: (entry: NodeEntry) => void;
    onChange: () => void;
    addMark: (key: string, value: any) => void;
    apply: (operation: Operation) => void;
    deleteBackward: (unit: 'character' | 'word' | 'line' | 'block') => void;
    deleteForward: (unit: 'character' | 'word' | 'line' | 'block') => void;
    deleteFragment: (direction?: 'forward' | 'backward') => void;
    getFragment: () => Descendant[];
    insertBreak: () => void;
    insertFragment: (fragment: Node[]) => void;
    insertNode: (node: Node) => void;
    insertText: (text: string) => void;
    removeMark: (key: string) => void;
}
export declare type Editor = ExtendedType<'Editor', BaseEditor>;
export interface EditorInterface {
    above: <T extends Ancestor>(editor: Editor, options?: {
        at?: Location;
        match?: NodeMatch<T>;
        mode?: 'highest' | 'lowest';
        voids?: boolean;
    }) => NodeEntry<T> | undefined;
    addMark: (editor: Editor, key: string, value: any) => void;
    after: (editor: Editor, at: Location, options?: {
        distance?: number;
        unit?: 'offset' | 'character' | 'word' | 'line' | 'block';
        voids?: boolean;
    }) => Point | undefined;
    before: (editor: Editor, at: Location, options?: {
        distance?: number;
        unit?: 'offset' | 'character' | 'word' | 'line' | 'block';
        voids?: boolean;
    }) => Point | undefined;
    deleteBackward: (editor: Editor, options?: {
        unit?: 'character' | 'word' | 'line' | 'block';
    }) => void;
    deleteForward: (editor: Editor, options?: {
        unit?: 'character' | 'word' | 'line' | 'block';
    }) => void;
    deleteFragment: (editor: Editor, options?: {
        direction?: 'forward' | 'backward';
    }) => void;
    edges: (editor: Editor, at: Location) => [Point, Point];
    end: (editor: Editor, at: Location) => Point;
    first: (editor: Editor, at: Location) => NodeEntry;
    fragment: (editor: Editor, at: Location) => Descendant[];
    hasBlocks: (editor: Editor, element: Element) => boolean;
    hasInlines: (editor: Editor, element: Element) => boolean;
    hasPath: (editor: Editor, path: Path) => boolean;
    hasTexts: (editor: Editor, element: Element) => boolean;
    insertBreak: (editor: Editor) => void;
    insertFragment: (editor: Editor, fragment: Node[]) => void;
    insertNode: (editor: Editor, node: Node) => void;
    insertText: (editor: Editor, text: string) => void;
    isBlock: (editor: Editor, value: any) => value is Element;
    isEditor: (value: any) => value is Editor;
    isEnd: (editor: Editor, point: Point, at: Location) => boolean;
    isEdge: (editor: Editor, point: Point, at: Location) => boolean;
    isEmpty: (editor: Editor, element: Element) => boolean;
    isInline: (editor: Editor, value: any) => value is Element;
    isNormalizing: (editor: Editor) => boolean;
    isStart: (editor: Editor, point: Point, at: Location) => boolean;
    isVoid: (editor: Editor, value: any) => value is Element;
    last: (editor: Editor, at: Location) => NodeEntry;
    leaf: (editor: Editor, at: Location, options?: {
        depth?: number;
        edge?: 'start' | 'end';
    }) => NodeEntry<Text>;
    levels: <T extends Node>(editor: Editor, options?: {
        at?: Location;
        match?: NodeMatch<T>;
        reverse?: boolean;
        voids?: boolean;
    }) => Generator<NodeEntry<T>, void, undefined>;
    marks: (editor: Editor) => Omit<Text, 'text'> | null;
    next: <T extends Descendant>(editor: Editor, options?: {
        at?: Location;
        match?: NodeMatch<T>;
        mode?: 'all' | 'highest' | 'lowest';
        voids?: boolean;
    }) => NodeEntry<T> | undefined;
    node: (editor: Editor, at: Location, options?: {
        depth?: number;
        edge?: 'start' | 'end';
    }) => NodeEntry;
    nodes: <T extends Node>(editor: Editor, options?: {
        at?: Location | Span;
        match?: NodeMatch<T>;
        mode?: 'all' | 'highest' | 'lowest';
        universal?: boolean;
        reverse?: boolean;
        voids?: boolean;
    }) => Generator<NodeEntry<T>, void, undefined>;
    normalize: (editor: Editor, options?: {
        force?: boolean;
    }) => void;
    parent: (editor: Editor, at: Location, options?: {
        depth?: number;
        edge?: 'start' | 'end';
    }) => NodeEntry<Ancestor>;
    path: (editor: Editor, at: Location, options?: {
        depth?: number;
        edge?: 'start' | 'end';
    }) => Path;
    pathRef: (editor: Editor, path: Path, options?: {
        affinity?: 'backward' | 'forward' | null;
    }) => PathRef;
    pathRefs: (editor: Editor) => Set<PathRef>;
    point: (editor: Editor, at: Location, options?: {
        edge?: 'start' | 'end';
    }) => Point;
    pointRef: (editor: Editor, point: Point, options?: {
        affinity?: 'backward' | 'forward' | null;
    }) => PointRef;
    pointRefs: (editor: Editor) => Set<PointRef>;
    positions: (editor: Editor, options?: {
        at?: Location;
        unit?: 'offset' | 'character' | 'word' | 'line' | 'block';
        reverse?: boolean;
        voids?: boolean;
    }) => Generator<Point, void, undefined>;
    previous: <T extends Node>(editor: Editor, options?: {
        at?: Location;
        match?: NodeMatch<T>;
        mode?: 'all' | 'highest' | 'lowest';
        voids?: boolean;
    }) => NodeEntry<T> | undefined;
    range: (editor: Editor, at: Location, to?: Location) => Range;
    rangeRef: (editor: Editor, range: Range, options?: {
        affinity?: 'backward' | 'forward' | 'outward' | 'inward' | null;
    }) => RangeRef;
    rangeRefs: (editor: Editor) => Set<RangeRef>;
    removeMark: (editor: Editor, key: string) => void;
    setNormalizing: (editor: Editor, isNormalizing: boolean) => void;
    start: (editor: Editor, at: Location) => Point;
    string: (editor: Editor, at: Location, options?: {
        voids?: boolean;
    }) => string;
    unhangRange: (editor: Editor, range: Range, options?: {
        voids?: boolean;
    }) => Range;
    void: (editor: Editor, options?: {
        at?: Location;
        mode?: 'highest' | 'lowest';
        voids?: boolean;
    }) => NodeEntry<Element> | undefined;
    withoutNormalizing: (editor: Editor, fn: () => void) => void;
}
export declare const Editor: EditorInterface;
/**
 * A helper type for narrowing matched nodes with a predicate.
 */
export declare type NodeMatch<T extends Node> = ((node: Node, path: Path) => node is T) | ((node: Node, path: Path) => boolean);
//# sourceMappingURL=editor.d.ts.map