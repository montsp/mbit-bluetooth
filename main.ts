bluetooth.onBluetoothConnected(function () {
    bluetooth.startButtonService()
})
input.onButtonPressed(Button.A, function () {
    devices.raiseAlertTo(MesAlertEvent.DisplayToast)
})
basic.forever(function () {
	
})
