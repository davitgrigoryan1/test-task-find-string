const getLongestString = (string) => {
    const wordsList = string.match(/[A-z]+/g) || [];
    const vowelsPattern = /[aeiouwy]/g;
    const longeastWordList = wordsList.reduce((acc, item) => {
        if (item.length > acc[0].length) {
            acc = []
            acc[0] = item;
        } else if(item.length === acc[0].length) {
            acc.push(item);
        }
        return acc
    }, [wordsList[0]])
    const result = longeastWordList.reduce((acc, word) => {
        const count = (word.match(vowelsPattern) || []).length;
        if(acc.length < count) {
            acc.length = count;
            acc.word = word;
        }
        return acc
    }, {length: 0, word: ''})
    return result.word;
}

console.log(getLongestString(`Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers`));

const getPValue = (index) => {
    const contaienr = document.getElementById('main');
    const p = contaienr.querySelectorAll(`p`)[index];
    const text = (p || {}).innerHTML
    document.getElementById('demo').innerHTML = text;
} 