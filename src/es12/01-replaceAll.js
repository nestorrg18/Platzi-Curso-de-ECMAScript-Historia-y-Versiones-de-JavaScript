const string = "JavaScript es un maravilloso lenguaje de  programacion, COn JavaScript cambiare el mundo";

const replacedString = string.replace("JavaScript", "TypeScript");
console.log(replacedString);

const replacedAllString = string.replaceAll("JavaScript", "TypeScript")
console.log(replacedAllString);

///
const inputText = "If you're :) and you know it :clap your hands :clap :clap"

const emojiReplace = (text) => {
    let emojized = ""
    emojized = text.replaceAll(':)', '😀')
    emojized = emojized.replaceAll(':clap', '👏🏻')
    return emojized
}

console.log(emojiReplace(inputText))