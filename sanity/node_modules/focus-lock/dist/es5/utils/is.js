"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDefined = exports.isNotAGuard = exports.isGuard = exports.notHiddenInput = exports.isRadioElement = exports.isHTMLInputElement = exports.isHTMLButtonElement = exports.getDataset = exports.isVisibleCached = void 0;
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
var isVisibleCached = function (visibilityCache, node) {
    var cached = visibilityCache.get(node);
    if (cached !== undefined) {
        return cached;
    }
    var result = isVisibleUncached(node, exports.isVisibleCached.bind(undefined, visibilityCache));
    visibilityCache.set(node, result);
    return result;
};
exports.isVisibleCached = isVisibleCached;
var getDataset = function (node) {
    return node.dataset;
};
exports.getDataset = getDataset;
var isHTMLButtonElement = function (node) { return node.tagName === 'BUTTON'; };
exports.isHTMLButtonElement = isHTMLButtonElement;
var isHTMLInputElement = function (node) { return node.tagName === 'INPUT'; };
exports.isHTMLInputElement = isHTMLInputElement;
var isRadioElement = function (node) {
    return (0, exports.isHTMLInputElement)(node) && node.type === 'radio';
};
exports.isRadioElement = isRadioElement;
var notHiddenInput = function (node) {
    return !(((0, exports.isHTMLInputElement)(node) || (0, exports.isHTMLButtonElement)(node)) && (node.type === 'hidden' || node.disabled)) &&
        !node.ariaDisabled;
};
exports.notHiddenInput = notHiddenInput;
var isGuard = function (node) { var _a; return Boolean(node && ((_a = (0, exports.getDataset)(node)) === null || _a === void 0 ? void 0 : _a.focusGuard)); };
exports.isGuard = isGuard;
var isNotAGuard = function (node) { return !(0, exports.isGuard)(node); };
exports.isNotAGuard = isNotAGuard;
var isDefined = function (x) { return Boolean(x); };
exports.isDefined = isDefined;
