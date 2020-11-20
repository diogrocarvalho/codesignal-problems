function checkPalindrome(inputString) {
    const array = inputString.split('');
    const reverse = array.reverse()
    return reverse.join('') === inputString;
}
