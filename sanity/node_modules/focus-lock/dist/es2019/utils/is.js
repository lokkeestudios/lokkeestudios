const isElementHidden = (node) => {
    if (node.nodeType !== Node.ELEMENT_NODE) {
        return false;
    }
    const computedStyle = window.getComputedStyle(node, null);
    if (!computedStyle || !computedStyle.getPropertyValue) {
        return false;
    }
    return (computedStyle.getPropertyValue('display') === 'none' || computedStyle.getPropertyValue('visibility') === 'hidden');
};
const isVisibleUncached = (node, checkParent) => !node ||
    node === document ||
    (node && node.nodeType === Node.DOCUMENT_NODE) ||
    (!isElementHidden(node) &&
        checkParent(node.parentNode && node.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
            ?
                node.parentNode.host
            : node.parentNode));
export const isVisibleCached = (visibilityCache, node) => {
    const cached = visibilityCache.get(node);
    if (cached !== undefined) {
        return cached;
    }
    const result = isVisibleUncached(node, isVisibleCached.bind(undefined, visibilityCache));
    visibilityCache.set(node, result);
    return result;
};
export const getDataset = (node) => node.dataset;
export const isHTMLButtonElement = (node) => node.tagName === 'BUTTON';
export const isHTMLInputElement = (node) => node.tagName === 'INPUT';
export const isRadioElement = (node) => isHTMLInputElement(node) && node.type === 'radio';
export const notHiddenInput = (node) => !((isHTMLInputElement(node) || isHTMLButtonElement(node)) && (node.type === 'hidden' || node.disabled)) &&
    !node.ariaDisabled;
export const isGuard = (node) => { var _a; return Boolean(node && ((_a = getDataset(node)) === null || _a === void 0 ? void 0 : _a.focusGuard)); };
export const isNotAGuard = (node) => !isGuard(node);
export const isDefined = (x) => Boolean(x);
