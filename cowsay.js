// The Cow Whisperer

// Challenge: create a file called cowsay.js in your Cloud9 project. 
//Running this file should output a cow saying a random fortune. 
// This is reproducing the cowsay command-line app. 
//Make sure to add/commit this file and push it to your GitHub. 
// If the fortune is longer than 30 characters, you have to wrap it on a new line. 
//For extra brownie points, wrap your fortune at the word level instead of the letter level.


// we want you to recreate a basic version of it

// not in a text file, but with code
// code that outputs the drawing with the text. ideally you'd wrap the text at 40-ish characters and make a real speech bubble
// multi-line text

//ANSWER

// var quotesArray = new Array;

// quotesArray[0] = "\"Time is of the essence! Comb your hair.\"";
// quotesArray[1] = "\"Sanity is a golden apple with no shoelaces.\"";
// quotesArray[2] = "\"Repent! The end is coming, $9.95 at Amazon.\"";
// quotesArray[3] = "\"Honesty blurts where deception sneezes.\"";
// quotesArray[4] = "\"Pastry satisfies where art is unavailable.\"";
// quotesArray[5] = "\"Delete not, lest you, too, be deleted.\"";
// quotesArray[6] = "\"O! Youth! What a pain in the backside.\"";
// quotesArray[7] = "\"Wishes are like goldfish with propellors.\"";
// quotesArray[8] = "\"Love the river's \"beauty\", but live on a hill.\"";
// quotesArray[9] = "\"Invention is the mother of too many useless toys.\"";


var cowSayChar = [
"_________________________",
"Motivational quote!",
"-------------------------",
"        \   ^__^ ",
"         \  (oo)\_______",
"            (__)\       )\/\ ",
"                ||----w |",
"                ||     ||",
"     "
];

// function quoteGenerator () {
//     var quoteMachine = Math.floor(Math.random() * quotesArray.length);
//     return quotesArray[quoteMachine];
// }

console.log(cowSayChar);