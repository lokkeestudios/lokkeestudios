import { NEW_FOCUS, newFocus } from './solver';
import { getAllTabbableNodes, getTabbableNodes } from './utils/DOMutils';
import { getAllAffectedNodes } from './utils/all-affected';
import { pickFirstFocus } from './utils/firstFocus';
import { getActiveElement } from './utils/getActiveElement';
import { getDataset, isDefined, isNotAGuard } from './utils/is';
import { allParentAutofocusables, getTopCommonParent } from './utils/parenting';
const findAutoFocused = (autoFocusables) => (node) => { var _a; return node.autofocus || !!((_a = getDataset(node)) === null || _a === void 0 ? void 0 : _a.autofocus) || autoFocusables.indexOf(node) >= 0; };
const reorderNodes = (srcNodes, dstNodes) => {
    const remap = new Map();
    dstNodes.forEach((entity) => remap.set(entity.node, entity));
    return srcNodes.map((node) => remap.get(node)).filter(isDefined);
};
export const getFocusMerge = (topNode, lastNode) => {
    const activeElement = document && getActiveElement();
    const entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
    const commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);
    const visibilityCache = new Map();
    const anyFocusable = getAllTabbableNodes(entries, visibilityCache);
    let innerElements = getTabbableNodes(entries, visibilityCache).filter(({ node }) => isNotAGuard(node));
    if (!innerElements[0]) {
        innerElements = anyFocusable;
        if (!innerElements[0]) {
            return undefined;
        }
    }
    const outerNodes = getAllTabbableNodes([commonParent], visibilityCache).map(({ node }) => node);
    const orderedInnerElements = reorderNodes(outerNodes, innerElements);
    const innerNodes = orderedInnerElements.map(({ node }) => node);
    const newId = newFocus(innerNodes, outerNodes, activeElement, lastNode);
    if (newId === NEW_FOCUS) {
        const autoFocusable = anyFocusable
            .map(({ node }) => node)
            .filter(findAutoFocused(allParentAutofocusables(entries, visibilityCache)));
        return {
            node: autoFocusable && autoFocusable.length ? pickFirstFocus(autoFocusable) : pickFirstFocus(innerNodes),
        };
    }
    if (newId === undefined) {
        return newId;
    }
    return orderedInnerElements[newId];
};
