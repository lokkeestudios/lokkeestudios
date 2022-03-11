import { focusOn } from './setFocus';
import { getTabbableNodes } from './utils/DOMutils';
const getRelativeFocusable = (element, scope) => {
    if (!element || !scope || !scope.contains(element)) {
        return {};
    }
    const focusables = getTabbableNodes([scope], new Map());
    const current = focusables.findIndex(({ node }) => node === element);
    if (current === -1) {
        return {};
    }
    return {
        prev: focusables[current - 1],
        next: focusables[current + 1],
        first: focusables[0],
        last: focusables[focusables.length - 1],
    };
};
const defaultOptions = (options) => Object.assign({
    scope: document.body,
    cycle: true,
}, options);
export const focusNextElement = (baseElement, options = {}) => {
    const { scope, cycle } = defaultOptions(options);
    const { next, first } = getRelativeFocusable(baseElement, scope);
    const newTarget = next || (cycle && first);
    if (newTarget) {
        focusOn(newTarget.node, options.focusOptions);
    }
};
export const focusPrevElement = (baseElement, options = {}) => {
    const { scope, cycle } = defaultOptions(options);
    const { prev, last } = getRelativeFocusable(baseElement, scope);
    const newTarget = prev || (cycle && last);
    if (newTarget) {
        focusOn(newTarget.node, options.focusOptions);
    }
};
