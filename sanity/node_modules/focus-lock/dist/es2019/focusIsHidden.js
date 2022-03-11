import { FOCUS_ALLOW } from './constants';
import { toArray } from './utils/array';
import { getActiveElement } from './utils/getActiveElement';
export const focusIsHidden = () => {
    const activeElement = document && getActiveElement();
    if (!activeElement) {
        return false;
    }
    return toArray(document.querySelectorAll(`[${FOCUS_ALLOW}]`)).some((node) => node.contains(activeElement));
};
