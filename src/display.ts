export function querySelectorNotNull(
    element: Element | Document | DocumentFragment,
    selector: string,
) {
    /** @type {?T} */
    const result = element.querySelector(selector);
    if (result === null) {
        throw createError(selector);
    }
    return result;
}

function createError(selector: string) {
    const error = new Error(
        `Performing querySelectorNotNull(element, ${JSON.stringify(selector)}) returned null`,
    );
    return error;
}
