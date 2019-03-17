// Moduli per controllare la creazione e chiusura delle finestre
const {app, BrowserWindow} = require('electron')

// Bisogna tenere un riferimento globale all'oggetto finestra, altrimenti
// la finestra verrà chiusa non appena l'oggetto viene eliminato tramite 
// garbage collection.
let mainWindow

function createWindow () {
	// Creazione della finestra 
	mainWindow = new BrowserWindow({width: 1000, height: 600})

	// Caricamento di index.html 
	mainWindow.loadFile('index.html')

	// Quando la finestra viene chiusa
	mainWindow.on('closed', function () {
		mainWindow = null
	})
}

// Metodo chiamato quando Electron è pronto per creare finestre 
// del browser, finita l'inizializzaizione.
// Alcune APIs possono essere usate solo da ora.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', function () {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		createWindow()
	}
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
