"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.focusIsHidden = void 0;
var constants_1 = require("./constants");
var array_1 = require("./utils/array");
var getActiveElement_1 = require("./utils/getActiveElement");
var focusIsHidden = function () {
    var activeElement = document && (0, getActiveElement_1.getActiveElement)();
    if (!activeElement) {
        return false;
    }
    return (0, array_1.toArray)(document.querySelectorAll("[".concat(constants_1.FOCUS_ALLOW, "]"))).some(function (node) { return node.contains(activeElement); });
};
exports.focusIsHidden = focusIsHidden;
