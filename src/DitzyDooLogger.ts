import DitzyDooBase from "./DitzyDooBase.js";

export default class DitzyDooLogger implements DitzyDooBase {
    private static timer: Date;

    public static log(message: string): void {
        console.log(`%c[${new Date().toISOString()}] %c${message}`, "font-weight: bold;", "");
    }

    public static start(group: string): void {
        DitzyDooLogger.end();
        console.group(`%c[${new Date().toISOString()}] %c${group}`, "font-weight: bold;", "font-weight: normal;");
    }

    public static end(): void {
        console.groupEnd();
    }
}