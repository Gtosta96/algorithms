/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    
    const morseMap = { a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--.." };
    const resultMap = {};
    let resultCount = 0;

    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];

        let morse = '';
        for (let j = 0; j < currentWord.length; j++) {
            morse += morseMap[currentWord[j]];
        }

        if (!resultMap[morse]) {
            resultMap[morse] = currentWord;
            resultCount++;
        }
    }

    return resultCount;
};


const result = uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
console.log(result);