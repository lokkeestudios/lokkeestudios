import { toArray } from './array';
import { isVisibleCached, notHiddenInput } from './is';
import { orderByTabIndex } from './tabOrder';
import { getFocusables, getParentAutofocusables } from './tabUtils';
export const filterFocusable = (nodes, visibilityCache) => toArray(nodes)
    .filter((node) => isVisibleCached(visibilityCache, node))
    .filter((node) => notHiddenInput(node));
export const getTabbableNodes = (topNodes, visibilityCache, withGuards) => orderByTabIndex(filterFocusable(getFocusables(topNodes, withGuards), visibilityCache), true, withGuards);
export const getAllTabbableNodes = (topNodes, visibilityCache) => orderByTabIndex(filterFocusable(getFocusables(topNodes), visibilityCache), false);
export const parentAutofocusables = (topNode, visibilityCache) => filterFocusable(getParentAutofocusables(topNode), visibilityCache);
