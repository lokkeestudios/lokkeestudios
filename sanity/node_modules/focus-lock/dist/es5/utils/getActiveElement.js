"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActiveElement = void 0;
var getActiveElement = function () {
    return (document.activeElement
        ? document.activeElement.shadowRoot
            ? document.activeElement.shadowRoot.activeElement
            : document.activeElement
        : undefined);
};
exports.getActiveElement = getActiveElement;
