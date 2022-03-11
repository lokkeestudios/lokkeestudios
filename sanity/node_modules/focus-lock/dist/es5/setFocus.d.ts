export declare const focusOn: (target: Element | HTMLFrameElement | HTMLElement, focusOptions?: FocusOptions | undefined) => void;
interface FocusLockFocusOptions {
    focusOptions?: FocusOptions;
}
export declare const setFocus: (topNode: HTMLElement, lastNode: Element, options?: FocusLockFocusOptions) => void;
export {};
