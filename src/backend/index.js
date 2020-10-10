const { ipcMain } = require('electron')

ipcMain.on('testeIPC', (event, arg) => {
  console.log(arg)

  event.reply('testeIPC', 'pong')
})