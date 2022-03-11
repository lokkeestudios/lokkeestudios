import { Operation } from '..';
/**
 * `Path` arrays are a list of indexes that describe a node's exact position in
 * a Slate node tree. Although they are usually relative to the root `Editor`
 * object, they can be relative to any `Node` object.
 */
export declare type Path = number[];
export interface PathInterface {
    ancestors: (path: Path, options?: {
        reverse?: boolean;
    }) => Path[];
    common: (path: Path, another: Path) => Path;
    compare: (path: Path, another: Path) => -1 | 0 | 1;
    endsAfter: (path: Path, another: Path) => boolean;
    endsAt: (path: Path, another: Path) => boolean;
    endsBefore: (path: Path, another: Path) => boolean;
    equals: (path: Path, another: Path) => boolean;
    hasPrevious: (path: Path) => boolean;
    isAfter: (path: Path, another: Path) => boolean;
    isAncestor: (path: Path, another: Path) => boolean;
    isBefore: (path: Path, another: Path) => boolean;
    isChild: (path: Path, another: Path) => boolean;
    isCommon: (path: Path, another: Path) => boolean;
    isDescendant: (path: Path, another: Path) => boolean;
    isParent: (path: Path, another: Path) => boolean;
    isPath: (value: any) => value is Path;
    isSibling: (path: Path, another: Path) => boolean;
    levels: (path: Path, options?: {
        reverse?: boolean;
    }) => Path[];
    next: (path: Path) => Path;
    operationCanTransformPath: (operation: Operation) => boolean;
    parent: (path: Path) => Path;
    previous: (path: Path) => Path;
    relative: (path: Path, ancestor: Path) => Path;
    transform: (path: Path, operation: Operation, options?: {
        affinity?: 'forward' | 'backward' | null;
    }) => Path | null;
}
export declare const Path: PathInterface;
//# sourceMappingURL=path.d.ts.map