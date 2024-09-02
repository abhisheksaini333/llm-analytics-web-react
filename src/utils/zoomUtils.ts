export const applyZoom = (scale: number, element: HTMLElement) => {
    element.style.transform = `scale(${scale})`;
};

export const applyPanning = (dx: number, dy: number, element: HTMLElement) => {
    element.style.transform = `translate(${dx}px, ${dy}px)`;
};
