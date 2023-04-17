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
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
}
