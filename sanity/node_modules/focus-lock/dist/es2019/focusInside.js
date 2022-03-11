import { getAllAffectedNodes } from './utils/all-affected';
import { toArray } from './utils/array';
import { getActiveElement } from './utils/getActiveElement';
const focusInFrame = (frame) => frame === document.activeElement;
const focusInsideIframe = (topNode) => Boolean(toArray(topNode.querySelectorAll('iframe')).some((node) => focusInFrame(node)));
export const focusInside = (topNode) => {
    const activeElement = document && getActiveElement();
    if (!activeElement || (activeElement.dataset && activeElement.dataset.focusGuard)) {
        return false;
    }
    return getAllAffectedNodes(topNode).reduce((result, node) => result || node.contains(activeElement) || focusInsideIframe(node), false);
};
