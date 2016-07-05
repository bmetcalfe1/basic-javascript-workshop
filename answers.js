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

// console.log(mathMachine(100, 5, "div"));

// Write a function that takes a string and a number, 
// and returns the string repeated that many number of times. 
// Test your function with various inputs.

function numMachine (str, num) {
    var i = 0;
    
    while (i < num) {
        console.log(str);
        i++;
    }
}

// numMachine('bro', 3);

// Write a function that takes a string, and returns the reverse of that string. 
// For example, if you pass the function the string “hello”, 
// it should return “olleh”. 
// Test your function on a few inputs, including the empty string.

function stringReverser (str) {
    var reversedString = '';
  
    for (var i = str.length - 1; i >= 0; i--)
    reversedString += str[i];
    return reversedString;   
}

// console.log(stringReverser('hello'));
// console.log(stringReverser('bro'));
// console.log(stringReverser(''));

//Write a function that takes a number and returns the factorial of a number. 
// The factorial of 5 is 5x4x3x2x1. The factorial of 0 is 1. 
// Test your input on a few numbers, including negative numbers.

function facGetter (num) {
    if (num === 0) {
        return 1;
    }
    else if (num > 0) {
        var result = num;
        
        while (num > 1) {
            result = result * (num-1);
            num--;
        }
        
        return result;
    }
    else {
        console.log("Can't make a factorial from a negative number.");
    }
    
}
// console.log(facGetter(4));

// Write a function that takes a phrase as a string, 
// and returns the longest word in that phrase. 
// If the phrase contains more than one such word, return the first occurrence. 
// Test your function on a few inputs.

function longestWordGetter (stringz) {
    var str = stringz.split(" ");
    var longest = 0;
    var word = null;
    
    for (var i = 0; i < str.length; i++) {
        
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
        
    }
    return word;
}

//console.log(longestWordGetter("Too much money"));
//console.log(longestWordGetter("Who da man"));

// Write a function that takes a phrase, 
// and returns the same phrase with every word capitalized. 
//For example, if you pass your function "hello world", 
// it should return “Hello World” and if you pass it “HELLO WORLD” 
//or even "HeLLo WoRLD", it will also return "Hello World". 
// Test your function of a few inputs.

function wordCapitalizer(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
}

console.log(wordCapitalizer("ball is life"));
console.log(wordCapitalizer("YOOOOO"));