export default class DitzyDooEvents {
    static dragStart(event) {
        this.dragging = true;
    }
    static dragEnd(event) {
        this.dragging = false;
    }
    static move(event) {
        if (this.dragging) {
            // @ts-ignore
            let canvas = window.instance.canvas;
            let deltaX = 0;
            let deltaY = 0;
            if (this.lastMouseX && this.lastMouseY) {
                deltaX = event.screenX - this.lastMouseX;
                deltaY = event.screenY - this.lastMouseY;
                console.log(deltaX, deltaY);
                let canvasX = -parseInt(canvas.style.marginLeft.split("px")[0]);
                let canvasY = -parseInt(canvas.style.marginTop.split("px")[0]);
                canvas.style.marginLeft = (canvasX + deltaX) + "px";
                canvas.style.marginTop = (canvasY + deltaY) + "px";
            }
            this.lastMouseX = event.screenX;
            this.lastMouseY = event.screenY;
        }
    }
}
DitzyDooEvents.dragging = false;
//# sourceMappingURL=DitzyDooEvents.js.map