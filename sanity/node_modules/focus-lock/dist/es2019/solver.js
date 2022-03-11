import { correctNodes } from './utils/correctFocus';
import { pickFocusable } from './utils/firstFocus';
import { isGuard } from './utils/is';
export const NEW_FOCUS = 'NEW_FOCUS';
export const newFocus = (innerNodes, outerNodes, activeElement, lastNode) => {
    const cnt = innerNodes.length;
    const firstFocus = innerNodes[0];
    const lastFocus = innerNodes[cnt - 1];
    const isOnGuard = isGuard(activeElement);
    if (activeElement && innerNodes.indexOf(activeElement) >= 0) {
        return undefined;
    }
    const activeIndex = activeElement !== undefined ? outerNodes.indexOf(activeElement) : -1;
    const lastIndex = lastNode ? outerNodes.indexOf(lastNode) : activeIndex;
    const lastNodeInside = lastNode ? innerNodes.indexOf(lastNode) : -1;
    const indexDiff = activeIndex - lastIndex;
    const firstNodeIndex = outerNodes.indexOf(firstFocus);
    const lastNodeIndex = outerNodes.indexOf(lastFocus);
    const correctedNodes = correctNodes(outerNodes);
    const correctedIndex = activeElement !== undefined ? correctedNodes.indexOf(activeElement) : -1;
    const correctedIndexDiff = correctedIndex - (lastNode ? correctedNodes.indexOf(lastNode) : activeIndex);
    const returnFirstNode = pickFocusable(innerNodes, 0);
    const returnLastNode = pickFocusable(innerNodes, cnt - 1);
    if (activeIndex === -1 || lastNodeInside === -1) {
        return NEW_FOCUS;
    }
    if (!indexDiff && lastNodeInside >= 0) {
        return lastNodeInside;
    }
    if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
        return returnLastNode;
    }
    if (activeIndex >= lastNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
        return returnFirstNode;
    }
    if (indexDiff && Math.abs(correctedIndexDiff) > 1) {
        return lastNodeInside;
    }
    if (activeIndex <= firstNodeIndex) {
        return returnLastNode;
    }
    if (activeIndex > lastNodeIndex) {
        return returnFirstNode;
    }
    if (indexDiff) {
        if (Math.abs(indexDiff) > 1) {
            return lastNodeInside;
        }
        return (cnt + lastNodeInside + indexDiff) % cnt;
    }
    return undefined;
};
