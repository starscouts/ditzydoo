window.addEventListener("wheel", e => e.preventDefault(), { passive:false });

const ele = document.getElementById("container");
ele.scrollTop = 0;
ele.scrollLeft = 0;
let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = function (e) {
    pos = {
        // The current scroll
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};
const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
};
const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};
document.addEventListener('mousedown', mouseDownHandler);