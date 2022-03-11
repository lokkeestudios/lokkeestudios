"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parentAutofocusables = exports.getAllTabbableNodes = exports.getTabbableNodes = exports.filterFocusable = void 0;
var array_1 = require("./array");
var is_1 = require("./is");
var tabOrder_1 = require("./tabOrder");
var tabUtils_1 = require("./tabUtils");
var filterFocusable = function (nodes, visibilityCache) {
    return (0, array_1.toArray)(nodes)
        .filter(function (node) { return (0, is_1.isVisibleCached)(visibilityCache, node); })
        .filter(function (node) { return (0, is_1.notHiddenInput)(node); });
};
exports.filterFocusable = filterFocusable;
var getTabbableNodes = function (topNodes, visibilityCache, withGuards) {
    return (0, tabOrder_1.orderByTabIndex)((0, exports.filterFocusable)((0, tabUtils_1.getFocusables)(topNodes, withGuards), visibilityCache), true, withGuards);
};
exports.getTabbableNodes = getTabbableNodes;
var getAllTabbableNodes = function (topNodes, visibilityCache) {
    return (0, tabOrder_1.orderByTabIndex)((0, exports.filterFocusable)((0, tabUtils_1.getFocusables)(topNodes), visibilityCache), false);
};
exports.getAllTabbableNodes = getAllTabbableNodes;
var parentAutofocusables = function (topNode, visibilityCache) {
    return (0, exports.filterFocusable)((0, tabUtils_1.getParentAutofocusables)(topNode), visibilityCache);
};
exports.parentAutofocusables = parentAutofocusables;
