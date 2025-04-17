import DitzyDooLogger from "./DitzyDooLogger.js";
import DitzyDooBuild from "./DitzyDooBuild.js";
import DitzyDooError from "./DitzyDooError.js";
import DitzyDooAdapter from "./DitzyDooAdapter.js";
import DitzyDooPicker from "./DitzyDooPicker.js";
export default class DitzyDoo {
    constructor() {
        console.log(DitzyDooAdapter.endpoints);
        DitzyDooAdapter.endpoints.canvas = "hello";
        console.log(DitzyDooAdapter.endpoints);
        DitzyDooLogger.log(`DitzyDoo v${DitzyDooBuild.VERSION}`);
        DitzyDooLogger.start("Fetch DOM elements");
        DitzyDooLogger.log("Finding container element...");
        try {
            this.container = document.getElementById("container");
        }
        catch (_) {
            throw new DitzyDooError("Cannot find container element");
        }
        DitzyDooLogger.log("Found container element");
        DitzyDooLogger.log("Finding canvas element...");
        try {
            this.canvas = document.getElementById("canvas");
            this.context = this.canvas.getContext("2d");
        }
        catch (_) {
            throw new DitzyDooError("Cannot find canvas element");
        }
        DitzyDooLogger.log("Found canvas element");
        this.canvas.onclick = (event) => {
            DitzyDooPicker.handleClick(event, this);
        };
        DitzyDooLogger.end();
        DitzyDooLogger.start("Fetch server data");
        DitzyDooLogger.log("Looking for required canvas size...");
        DitzyDooAdapter.getCanvasSize().then((size) => {
            this.canvas.width = size.width;
            this.canvas.height = size.height;
            DitzyDooLogger.log(`Canvas is required to be ${this.canvas.width}x${this.canvas.height}`);
            DitzyDooLogger.log("Fetching initial canvas...");
            DitzyDooAdapter.getInitialCanvas().then((url) => {
                DitzyDooLogger.end();
                DitzyDooLogger.start("Drawing");
                DitzyDooLogger.log("Drawing initial canvas to canvas element");
                let img = new Image();
                img.src = url;
                img.onload = () => {
                    this.context.drawImage(img, 0, 0);
                    DitzyDooLogger.log("Done drawing");
                    DitzyDooLogger.log("Setting position to center");
                    this.container.scrollTop = this.container.scrollHeight / 2 - this.container.clientHeight / 2;
                    this.container.scrollLeft = this.container.scrollWidth / 2 - this.container.clientWidth / 2;
                    DitzyDooLogger.log("Scroll offset is now center of canvas");
                    DitzyDooLogger.end();
                };
            });
        });
    }
}
//# sourceMappingURL=DitzyDoo.js.map