"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allParentAutofocusables = exports.getTopCommonParent = exports.getCommonParent = void 0;
var DOMutils_1 = require("./DOMutils");
var array_1 = require("./array");
var getParents = function (node, parents) {
    if (parents === void 0) { parents = []; }
    parents.push(node);
    if (node.parentNode) {
        getParents(node.parentNode, parents);
    }
    return parents;
};
var getCommonParent = function (nodeA, nodeB) {
    var parentsA = getParents(nodeA);
    var parentsB = getParents(nodeB);
    for (var i = 0; i < parentsA.length; i += 1) {
        var currentParent = parentsA[i];
        if (parentsB.indexOf(currentParent) >= 0) {
            return currentParent;
        }
    }
    return false;
};
exports.getCommonParent = getCommonParent;
var getTopCommonParent = function (baseActiveElement, leftEntry, rightEntries) {
    var activeElements = (0, array_1.asArray)(baseActiveElement);
    var leftEntries = (0, array_1.asArray)(leftEntry);
    var activeElement = activeElements[0];
    var topCommon = false;
    leftEntries.filter(Boolean).forEach(function (entry) {
        topCommon = (0, exports.getCommonParent)(topCommon || entry, entry) || topCommon;
        rightEntries.filter(Boolean).forEach(function (subEntry) {
            var common = (0, exports.getCommonParent)(activeElement, subEntry);
            if (common) {
                if (!topCommon || common.contains(topCommon)) {
                    topCommon = common;
                }
                else {
                    topCommon = (0, exports.getCommonParent)(common, topCommon);
                }
            }
        });
    });
    return topCommon;
};
exports.getTopCommonParent = getTopCommonParent;
var allParentAutofocusables = function (entries, visibilityCache) {
    return entries.reduce(function (acc, node) { return acc.concat((0, DOMutils_1.parentAutofocusables)(node, visibilityCache)); }, []);
};
exports.allParentAutofocusables = allParentAutofocusables;
