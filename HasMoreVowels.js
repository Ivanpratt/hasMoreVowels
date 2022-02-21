let array1 = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]
let vowelCount = 0

let hasMoreVowels = function(word){
    for(i = 0; i < word.length; i++) {

    if (array1.includes(word[i]) === true) {
        vowelCount++
    }

}

if(vowelCount > (word.length / 2)){
    return true
} else {
    return false
}


}

console.log(hasMoreVowels("moosE"))