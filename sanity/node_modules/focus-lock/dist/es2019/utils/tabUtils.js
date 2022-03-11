import { FOCUS_AUTO } from '../constants';
import { toArray } from './array';
import { tabbables } from './tabbables';
const queryTabbables = tabbables.join(',');
const queryGuardTabbables = `${queryTabbables}, [data-focus-guard]`;
export const getFocusables = (parents, withGuards) => parents.reduce((acc, parent) => acc.concat(toArray(parent.querySelectorAll(withGuards ? queryGuardTabbables : queryTabbables)), parent.parentNode
    ? toArray(parent.parentNode.querySelectorAll(queryTabbables)).filter((node) => node === parent)
    : []), []);
export const getParentAutofocusables = (parent) => {
    const parentFocus = parent.querySelectorAll(`[${FOCUS_AUTO}]`);
    return toArray(parentFocus)
        .map((node) => getFocusables([node]))
        .reduce((acc, nodes) => acc.concat(nodes), []);
};
