export function isPalindrome(word:string){
    const reverseString = ((word:string) => {
        let newString = "";
        for (let i = word.length - 1; i >= 0; i--) {
            newString += word[i];
        }
        return newString;
    });
    return word === reverseString(word);
};


