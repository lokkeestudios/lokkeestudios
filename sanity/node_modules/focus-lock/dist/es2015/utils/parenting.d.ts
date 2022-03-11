import { VisibilityCache } from './is';
export declare const getCommonParent: (nodeA: Element, nodeB: Element) => Element | false;
export declare const getTopCommonParent: (baseActiveElement: Element | Element[], leftEntry: Element | Element[], rightEntries: Element[]) => Element;
export declare const allParentAutofocusables: (entries: Element[], visibilityCache: VisibilityCache) => Element[];
