//% color="#7B61FF" icon="\uf086" block="Dialogue Maker"
namespace DialogueMaker {

    //% block="show dialogue named $name saying $text"
    //% name.defl="Shopkeeper"
    //% text.defl="Welcome!"
    export function say(name: string, text: string) {
        game.showLongText(name + ": " + text, DialogLayout.Bottom)
    }

    //% block="ask $question and get typed answer"
    //% question.defl="What's your name?"
    export function ask(question: string): string {
        return game.askForString(question)
    }

    //% block="ask $question choice 1 $first or choice 2 $second"
    //% first.defl="Yes"
    //% second.defl="No"
    export function choose(question: string, first: string, second: string): number {
        game.showLongText(question + "\n1: " + first + "\n2: " + second, DialogLayout.Bottom)
        let answer = game.askForNumber("Enter 1 or 2", 1)
        if (answer == 2) {
            return 2
        }
        return 1
    }
}
