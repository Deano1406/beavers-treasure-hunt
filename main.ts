function Warmer () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("Colder")
    Colder()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Colder") {
        Colder()
    }
    if (receivedString == "Warmer") {
        Warmer()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Warmer")
    Warmer()
})
function Colder () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . . . # .
            . . # # #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . # .
            . . # # #
            . # . # .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . # .
            . . # # #
            . . . . .
            # . # . #
            . . . . .
            `)
    }
}
radio.setGroup(1)
basic.forever(function () {
	
})
