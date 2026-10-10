//% color="#7B61FF" icon="\uf086" block="Dialogue Maker"
namespace DialogueMaker {

    //% block="on $button pressed"
    //% blockId=dialogue_on_button
    //% button.shadow="controller_button_event_value"
    //% draggableParameters
    //% weight=100
    export function onButton(button: ControllerButton, handler: () => void) {
        controller.onEvent(button, ControllerButtonEvent.Pressed, handler)
    }

    //% block="show dialogue named $name saying $text"
    //% name.defl="Shopkeeper"
    //% text.defl="Welcome!"
    //% weight=90
    export function say(name: string, text: string) {
        game.showLongText(name + ": " + text, DialogLayout.Bottom)
    }

    //% block="ask $question and get typed answer"
    //% question.defl="What's your name?"
    //% weight=80
    export function ask(question: string): string {
        return game.askForString(question)
    }

    //% block="ask $question choice 1 $first or choice 2 $second"
    //% first.defl="Yes"
    //% second.defl="No"
    //% weight=70
    export function choose(question: string, first: string, second: string): number {
        game.showLongText(question + "\n1: " + first + "\n2: " + second, DialogLayout.Bottom)
        let answer = game.askForNumber("Enter 1 or 2", 1)
        return answer == 2 ? 2 : 1
    }
}
