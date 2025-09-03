const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
    },
  });

  if (process.env.NODE_ENV === "development") {
    // 개발 모드: Next.js dev 서버 로드
    win.loadURL("https://ha-janus-timer.vercel.app/");
    win.webContents.openDevTools();
  } else {
    // 프로덕션 모드: Next.js 빌드 파일 로드
    win.loadFile(path.join(__dirname, "renderer/index.html"));
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
