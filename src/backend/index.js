const { ipcMain } = require('electron')

ipcMain.on('process-subtitles', (event, paths) => {
  console.log(paths)

  event.reply('process-subtitles', [
    { name: 'you', amount: 1234 },
    { name: 'I', amount: 952 },
    { name: 'what', amount: 756 },
    { name: 'do', amount: 856 },
    { name: 'she', amount: 85 },
    { name: 'does', amount: 1856 },
    { name: 'fuck', amount: 135 },
  ])
})