export function blur(node: HTMLElement, handler: () => void) {
    function listener(event: Event) {
        if (event.target instanceof Element && !node.contains(event.target)) {
            handler();
        }
    }

    document.addEventListener('click', listener, { capture: true, passive: true });
    document.addEventListener('keyup', listener, { capture: true, passive: true });

    return {
        update(newHandler: () => void) {
            handler = newHandler;
        },
        destroy() {
            document.removeEventListener('click', listener, { capture: true });
            document.removeEventListener('keyup', listener, { capture: true });
        },
    };
}