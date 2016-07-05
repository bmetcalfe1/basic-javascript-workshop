// Write a function that takes a string 
// and returns the first character of the string. 
//Test your function on a few inputs, including the empty string.

function stringCharReturner (myString) {
        var firstCharOfString = myString[0];
        return firstCharOfString;
}

//console.log(stringCharReturner("money"));


//Write a function that takes a string 
//and returns the last character of a string. 
// Test your function on a few inputs, including the empty string.

function stringCharReturner (myString) {
        var lastCharOfString = (myString.length - 1);
        return myString[lastCharOfString];
}

console.log(stringCharReturner("money"));