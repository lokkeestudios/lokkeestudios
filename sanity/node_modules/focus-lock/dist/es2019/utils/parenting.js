import { parentAutofocusables } from './DOMutils';
import { asArray } from './array';
const getParents = (node, parents = []) => {
    parents.push(node);
    if (node.parentNode) {
        getParents(node.parentNode, parents);
    }
    return parents;
};
export const getCommonParent = (nodeA, nodeB) => {
    const parentsA = getParents(nodeA);
    const parentsB = getParents(nodeB);
    for (let i = 0; i < parentsA.length; i += 1) {
        const currentParent = parentsA[i];
        if (parentsB.indexOf(currentParent) >= 0) {
            return currentParent;
        }
    }
    return false;
};
export const getTopCommonParent = (baseActiveElement, leftEntry, rightEntries) => {
    const activeElements = asArray(baseActiveElement);
    const leftEntries = asArray(leftEntry);
    const activeElement = activeElements[0];
    let topCommon = false;
    leftEntries.filter(Boolean).forEach((entry) => {
        topCommon = getCommonParent(topCommon || entry, entry) || topCommon;
        rightEntries.filter(Boolean).forEach((subEntry) => {
            const common = getCommonParent(activeElement, subEntry);
            if (common) {
                if (!topCommon || common.contains(topCommon)) {
                    topCommon = common;
                }
                else {
                    topCommon = getCommonParent(common, topCommon);
                }
            }
        });
    });
    return topCommon;
};
export const allParentAutofocusables = (entries, visibilityCache) => entries.reduce((acc, node) => acc.concat(parentAutofocusables(node, visibilityCache)), []);
