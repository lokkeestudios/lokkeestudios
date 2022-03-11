import { ExtendedType, Operation, Path, Point, PointEntry } from '..';
/**
 * `Range` objects are a set of points that refer to a specific span of a Slate
 * document. They can define a span inside a single node or a can span across
 * multiple nodes.
 */
export interface BaseRange {
    anchor: Point;
    focus: Point;
}
export declare type Range = ExtendedType<'Range', BaseRange>;
export interface RangeInterface {
    edges: (range: Range, options?: {
        reverse?: boolean;
    }) => [Point, Point];
    end: (range: Range) => Point;
    equals: (range: Range, another: Range) => boolean;
    includes: (range: Range, target: Path | Point | Range) => boolean;
    intersection: (range: Range, another: Range) => Range | null;
    isBackward: (range: Range) => boolean;
    isCollapsed: (range: Range) => boolean;
    isExpanded: (range: Range) => boolean;
    isForward: (range: Range) => boolean;
    isRange: (value: any) => value is Range;
    points: (range: Range) => Generator<PointEntry, void, undefined>;
    start: (range: Range) => Point;
    transform: (range: Range, op: Operation, options?: {
        affinity?: 'forward' | 'backward' | 'outward' | 'inward' | null;
    }) => Range | null;
}
export declare const Range: RangeInterface;
//# sourceMappingURL=range.d.ts.map