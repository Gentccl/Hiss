function PlotEkevator (p: number, DoPlot: boolean) {
    for (let index = 1; index <= 3; index++) {
        if (DoPlot) {
            led.plot(index, p)
        } else {
            led.unplot(index, p)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    MoveElavator(1, 0, 4)
})
input.onButtonPressed(Button.B, function () {
    MoveElavator(-1, 0, 4)
})
function MoveElavator (Step: number, min: number, Max: number) {
    PlotEkevator(p, false)
    p = p + Step
    if (p < min) {
        p = min
    }
    if (p < min) {
        p = min
    }
    PlotEkevator(p, true)
}
let p = 0
PlotEkevator(p, true)
basic.pause(500)
MoveElavator(1, 0, 4)
