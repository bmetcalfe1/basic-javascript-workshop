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

//console.log(stringCharReturner("money"));

// Write a function that takes a string and a number, 
// and returns the character at the position represented by the number. 
// The indexing of number should start at 0. 
// Test your function on a few inputs, including the empty string.

function positionReturner (theString, theNumber) {
    return theString[theNumber];
}

// console.log(positionReturner("money", 3));
// console.log(positionReturner("money", 1));

//Write a function that takes two numbers and adds them together. 
//Test your function on a few inputs. 
// Write in the comments what happens when you pass something 
//other than a number to your function.

function numAdder (num1, num2) {
    return (num1 + num2);
}

// console.log(numAdder(2, 200));
// console.log(numAdder("cheese", 200));
// console.log(numAdder(true, 200));
// when you pass something other than a number it concatenates them!!


// Write a function that takes two numbers and multiplies them together. 
// Test your function on a few inputs. 
// Write in your comments what happens 
//when you pass something other than a number to your function.

function numAdder (num1, num2) {
    return (num1 * num2);
}

//console.log(numAdder(2, 200));
//console.log(numAdder("cheese", 200));
//console.log(numAdder(true, 200));
// when you pass something other than a number it says NaN!!

// Write a function that takes two numbers and a string. 
// If the string is ‘add’, then return the sum of the numbers. 
// If the string is ‘subtract’, return the difference. 
// If the string is ‘mult’, return the product. 
// If the string is ‘div’, return the ratio. Otherwise return 0.

function mathMachine (num1, num2, str) {
    if (str === 'add') {
        return (num1 + num2);
    }
    else if (str === 'subtract') {
        return (num1 - num2);
    }
    else if (str === 'mult') {
        return (num1 * num2);
    }
    else if (str === 'div') {
        return (num1 / num2);
    }
    else {
        return 0;
    }
}

console.log(mathMachine(100, 5, "div"));


