input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # . . .
            . # . . .
            . # . . #
            . # # # .
            . # . # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # . . . .
            # # . . .
            . # # # .
            . . . # #
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # . . .
            # # # # #
            # . # # #
            . . # . #
            . . # . #
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # . .
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            # # . # #
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . . #
            . # # # .
            . # . # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            # # . # .
            . # # # #
            . # # # #
            . # . . #
            `)
    }
})
