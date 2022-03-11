var isElementHidden = function (node) {
    if (node.nodeType !== Node.ELEMENT_NODE) {
        return false;
    }
    var computedStyle = window.getComputedStyle(node, null);
    if (!computedStyle || !computedStyle.getPropertyValue) {
        return false;
    }
    return (computedStyle.getPropertyValue('display') === 'none' || computedStyle.getPropertyValue('visibility') === 'hidden');
};
var isVisibleUncached = function (node, checkParent) {
    return !node ||
        node === document ||
        (node && node.nodeType === Node.DOCUMENT_NODE) ||
        (!isElementHidden(node) &&
            checkParent(node.parentNode && node.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                ?
                    node.parentNode.host
                : node.parentNode));
};
export var isVisibleCached = function (visibilityCache, node) {
    var cached = visibilityCache.get(node);
    if (cached !== undefined) {
        return cached;
    }
    var result = isVisibleUncached(node, isVisibleCached.bind(undefined, visibilityCache));
    visibilityCache.set(node, result);
    return result;
};
export var getDataset = function (node) {
    return node.dataset;
};
export var isHTMLButtonElement = function (node) { return node.tagName === 'BUTTON'; };
export var isHTMLInputElement = function (node) { return node.tagName === 'INPUT'; };
export var isRadioElement = function (node) {
    return isHTMLInputElement(node) && node.type === 'radio';
};
export var notHiddenInput = function (node) {
    return !((isHTMLInputElement(node) || isHTMLButtonElement(node)) && (node.type === 'hidden' || node.disabled)) &&
        !node.ariaDisabled;
};
export var isGuard = function (node) { var _a; return Boolean(node && ((_a = getDataset(node)) === null || _a === void 0 ? void 0 : _a.focusGuard)); };
export var isNotAGuard = function (node) { return !isGuard(node); };
export var isDefined = function (x) { return Boolean(x); };
