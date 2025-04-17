var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import DitzyDooLogger from "./DitzyDooLogger.js";
export default class DitzyDooAdapter {
    static getCanvasSize() {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Do some funky shit to ping the server
            DitzyDooLogger.log("Fetched canvas size in 0ms");
            return {
                width: 1000,
                height: 1000
            };
        });
    }
    static getInitialCanvas() {
        return __awaiter(this, void 0, void 0, function* () {
            let start = new Date().getTime();
            let base64 = btoa(String.fromCharCode(...new Uint8Array(yield (yield window.fetch(this.endpoints.canvas)).arrayBuffer())));
            let end = new Date().getTime();
            DitzyDooLogger.log(`Fetched canvas image in ${end - start} ms`);
            return "data:image/png;base64," + base64;
        });
    }
}
DitzyDooAdapter.endpoints = {
    canvas: "/demo/canvas.png"
};
//# sourceMappingURL=DitzyDooAdapter.js.map