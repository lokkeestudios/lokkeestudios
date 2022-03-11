export const getActiveElement = () => {
    return (document.activeElement
        ? document.activeElement.shadowRoot
            ? document.activeElement.shadowRoot.activeElement
            : document.activeElement
        : undefined);
};
