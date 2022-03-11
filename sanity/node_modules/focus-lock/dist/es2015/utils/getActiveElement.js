export var getActiveElement = function () {
    return (document.activeElement
        ? document.activeElement.shadowRoot
            ? document.activeElement.shadowRoot.activeElement
            : document.activeElement
        : undefined);
};
