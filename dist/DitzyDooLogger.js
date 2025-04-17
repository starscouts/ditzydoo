export default class DitzyDooLogger {
    static log(message) {
        console.log(`%c[${new Date().toISOString()}] %c${message}`, "font-weight: bold;", "");
    }
    static start(group) {
        DitzyDooLogger.end();
        console.group(`%c[${new Date().toISOString()}] %c${group}`, "font-weight: bold;", "font-weight: normal;");
    }
    static end() {
        console.groupEnd();
    }
}
//# sourceMappingURL=DitzyDooLogger.js.map