input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    while (true) {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    pausa += 50
})
input.onButtonPressed(Button.B, function () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.PINK)
    basic.pause(pausa)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.YELLOW)
    basic.pause(pausa)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
    pausa += -50
})
let pausa = 0
DFRobotMaqueenPlus.I2CInit()
pausa = 1000
basic.forever(function () {
    basic.showNumber(pausa)
})
