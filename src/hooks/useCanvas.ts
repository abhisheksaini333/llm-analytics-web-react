import { useRef, useEffect } from 'react';

export function useCanvas() {
    const canvasRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (canvas) {
            const handleWheel = (e: WheelEvent) => {
                e.preventDefault();
                const scaleAmount = e.deltaY > 0 ? 0.9 : 1.1;
                canvas.style.transform = `scale(${scaleAmount})`;
            };

            const handleMouseDown = (e: MouseEvent) => {
                let startX = e.clientX;
                let startY = e.clientY;
                let panX = 0;
                let panY = 0;

                const handleMouseMove = (moveEvent: MouseEvent) => {
                    const dx = moveEvent.clientX - startX;
                    const dy = moveEvent.clientY - startY;
                    panX += dx;
                    panY += dy;
                    canvas.style.transform = `translate(${panX}px, ${panY}px)`;
                    startX = moveEvent.clientX;
                    startY = moveEvent.clientY;
                };

                const handleMouseUp = () => {
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('mouseup', handleMouseUp);
                };

                window.addEventListener('mousemove', handleMouseMove);
                window.addEventListener('mouseup', handleMouseUp);
            };

            canvas.addEventListener('wheel', handleWheel);
            canvas.addEventListener('mousedown', handleMouseDown);

            return () => {
                canvas.removeEventListener('wheel', handleWheel);
                canvas.removeEventListener('mousedown', handleMouseDown);
            };
        }
    }, []);

    return {
        canvasRef,
    };
}
