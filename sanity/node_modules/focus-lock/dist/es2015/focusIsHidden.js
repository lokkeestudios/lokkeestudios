import { FOCUS_ALLOW } from './constants';
import { toArray } from './utils/array';
import { getActiveElement } from './utils/getActiveElement';
export var focusIsHidden = function () {
    var activeElement = document && getActiveElement();
    if (!activeElement) {
        return false;
    }
    return toArray(document.querySelectorAll("[".concat(FOCUS_ALLOW, "]"))).some(function (node) { return node.contains(activeElement); });
};
