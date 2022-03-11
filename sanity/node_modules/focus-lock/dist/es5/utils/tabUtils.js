"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParentAutofocusables = exports.getFocusables = void 0;
var constants_1 = require("../constants");
var array_1 = require("./array");
var tabbables_1 = require("./tabbables");
var queryTabbables = tabbables_1.tabbables.join(',');
var queryGuardTabbables = "".concat(queryTabbables, ", [data-focus-guard]");
var getFocusables = function (parents, withGuards) {
    return parents.reduce(function (acc, parent) {
        return acc.concat((0, array_1.toArray)(parent.querySelectorAll(withGuards ? queryGuardTabbables : queryTabbables)), parent.parentNode
            ? (0, array_1.toArray)(parent.parentNode.querySelectorAll(queryTabbables)).filter(function (node) { return node === parent; })
            : []);
    }, []);
};
exports.getFocusables = getFocusables;
var getParentAutofocusables = function (parent) {
    var parentFocus = parent.querySelectorAll("[".concat(constants_1.FOCUS_AUTO, "]"));
    return (0, array_1.toArray)(parentFocus)
        .map(function (node) { return (0, exports.getFocusables)([node]); })
        .reduce(function (acc, nodes) { return acc.concat(nodes); }, []);
};
exports.getParentAutofocusables = getParentAutofocusables;
