"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.focusInside = void 0;
var all_affected_1 = require("./utils/all-affected");
var array_1 = require("./utils/array");
var getActiveElement_1 = require("./utils/getActiveElement");
var focusInFrame = function (frame) { return frame === document.activeElement; };
var focusInsideIframe = function (topNode) {
    return Boolean((0, array_1.toArray)(topNode.querySelectorAll('iframe')).some(function (node) { return focusInFrame(node); }));
};
var focusInside = function (topNode) {
    var activeElement = document && (0, getActiveElement_1.getActiveElement)();
    if (!activeElement || (activeElement.dataset && activeElement.dataset.focusGuard)) {
        return false;
    }
    return (0, all_affected_1.getAllAffectedNodes)(topNode).reduce(function (result, node) { return result || node.contains(activeElement) || focusInsideIframe(node); }, false);
};
exports.focusInside = focusInside;
