import DitzyDooBase from "./DitzyDooBase.js";
import DitzyDooLogger from "./DitzyDooLogger.js";
import DitzyDoo from "./DitzyDoo.js";

export default class DitzyDooPicker implements DitzyDooBase {
    public static handleClick(event: MouseEvent, instance: DitzyDoo): void {
        DitzyDooLogger.start("Click on pixel");

        DitzyDooLogger.log("Resolving pixel coordinates from cursor at X" + event.clientX + ", Y" + event.clientY);

        let coordinates = DitzyDooPicker.resolveCoordinates(event.clientX, event.clientY, instance);
        DitzyDooLogger.log("Found pixel (" + coordinates["x"] + ", " + coordinates["y"] + ")");

        instance.context.fillStyle = "red";
        instance.context.fillRect(coordinates["x"], coordinates["y"], 1, 1);

        DitzyDooLogger.end();
    }

    public static resolveCoordinates(x: number, y: number, instance: DitzyDoo): { x: number, y: number } {
        let canvas = instance.canvas;
        let container = instance.container;

        let origin = {
            x: container.scrollLeft - 100,
            y: container.scrollTop - 100
        }

        let factor = document.getElementById("canvas").clientWidth / 1000;

        console.log(`${x} + ${origin.x} = ${x + origin.x}; ${x + origin.x} / ${factor} = ${(x + origin.x) / factor}`);

        return {
            x: Math.round((x + origin.x) / factor),
            y: Math.round((y + origin.y) / factor)
        }
    }
}