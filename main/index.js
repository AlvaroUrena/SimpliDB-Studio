"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Packages
const electron_1 = require("electron");
const electron_is_dev_1 = __importDefault(require("electron-is-dev"));
const http_1 = require("http");
const url_1 = require("url");
const next_1 = __importDefault(require("next"));
const nextApp = (0, next_1.default)({ dev: electron_is_dev_1.default, dir: electron_1.app.getAppPath() + '/renderer' });
const handle = nextApp.getRequestHandler();
// Prepare the renderer once the app is ready
electron_1.app.on('ready', async () => {
    await nextApp.prepare();
    const port = process.argv[2] || 3000;
    (0, http_1.createServer)((req, res) => {
        const parsedUrl = (0, url_1.parse)(req.url, true);
        handle(req, res, parsedUrl);
    }).listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
    const mainWindow = new electron_1.BrowserWindow({
        width: 1200,
        height: 1050,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: false
        }
    });
    mainWindow.loadURL(`http://localhost:${port}/`);
});
// Quit the app once all windows are closed
electron_1.app.on('window-all-closed', electron_1.app.quit);
