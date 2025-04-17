import DitzyDooBase from "./DitzyDooBase.js";
import DitzyDooLogger from "./DitzyDooLogger.js";

export default class DitzyDooAdapter implements DitzyDooBase {
    private static endpoints = {
        canvas: "/demo/canvas.png"
    }

    public static async getCanvasSize(): Promise<DitzyDooCanvasSize> {
        // TODO: Do some funky shit to ping the server
        DitzyDooLogger.log("Fetched canvas size in 0ms");

        return {
            width: 1000,
            height: 1000
        }
    }

    public static async getInitialCanvas(): Promise<string> {
        let start = new Date().getTime();

        let base64 = btoa(String.fromCharCode(...new Uint8Array(await (await window.fetch(this.endpoints.canvas)).arrayBuffer())));
        let end = new Date().getTime();

        DitzyDooLogger.log(`Fetched canvas image in ${end - start} ms`)
        return "data:image/png;base64," + base64;
    }
}