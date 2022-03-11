import { VisibilityCache } from './is';
import { NodeIndex } from './tabOrder';
export declare const filterFocusable: (nodes: HTMLElement[], visibilityCache: VisibilityCache) => HTMLElement[];
export declare const getTabbableNodes: (topNodes: Element[], visibilityCache: VisibilityCache, withGuards?: boolean | undefined) => NodeIndex[];
export declare const getAllTabbableNodes: (topNodes: Element[], visibilityCache: VisibilityCache) => NodeIndex[];
export declare const parentAutofocusables: (topNode: Element, visibilityCache: VisibilityCache) => Element[];
