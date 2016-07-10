// Challenge: create a file called fortune.js in your Cloud9 project. 
// Running this file should output a random quote from a list of 10 different quotes. 
// Make sure to add/commit this file and push it to your GitHub.

var quotesArray = new Array;

quotesArray[0] = "\"Time is of the essence! Comb your hair.\"";
quotesArray[1] = "\"Sanity is a golden apple with no shoelaces.\"";
quotesArray[2] = "\"Repent! The end is coming, $9.95 at Amazon.\"";
quotesArray[3] = "\"Honesty blurts where deception sneezes.\"";
quotesArray[4] = "\"Pastry satisfies where art is unavailable.\"";
quotesArray[5] = "\"Delete not, lest you, too, be deleted.\"";
quotesArray[6] = "\"O! Youth! What a pain in the backside.\"";
quotesArray[7] = "\"Wishes are like goldfish with propellors.\"";
quotesArray[8] = "\"Love the river's \"beauty\", but live on a hill.\"";
quotesArray[9] = "\"Invention is the mother of too many useless toys.\"";

function quoteGenerator () {
    var quoteMachine = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[quoteMachine];
}

 console.log(quoteGenerator());