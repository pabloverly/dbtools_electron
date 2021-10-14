const {app,BrowserWindow} = require('electron');

let janela = null;

app.on('ready', () => {
  janela = new BrowserWindow({
    width:1000,
    height:1000,
    // x: 20,
    // y: 30,
    // resizable: false,
    // alwaysOnTop: true,
    // show: false,
    frame: false,
     //titleBarStyle: 'hidden',
    // transparent: true
  });

  janela.webContents.openDevTools();
  janela.loadURL(`file://${__dirname}/index.html`);

  janela.on('ready-to-show', () => {
    janela.show();
  });
});


