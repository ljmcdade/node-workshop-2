//comment

/* this function is to return and print the letter of a name: */

/*function firstLetter(string) { 
    console.log(string.charAt(0));
    }; */

//firstLetter("Lauren");

/* or I could use: */

//console.log(firstLetter("Lauren"));

/* testing it out: */

/*console.log(firstLetter("Peter"));
console.log(firstLetter(" ")); */

// using CPS:

function firstLetter(string, retFirst) {
    var result = string.charAt(0);
    // ....

    retFirst(result);
}

firstLetter("Lauren", function(fc) {
    console.log(fc);
});


// last letter

function lastLetter(string, retLast) {
    var result2 = string.charAt(string.length - 1);
    retLast(result2);
}

lastLetter("Lauren", function(lc) {
    console.log(lc);
});

// combine first and last letters into callback function

function getFirstAndLast(string, cb) {

    firstLetter(string, function(first) {
        lastLetter(string, function(last) {
            var finalResult = first + last;
            cb(finalResult);
        });

    });


    // function firstLetter(string, retFirst) {
    //     var result = string.charAt(0);
    //     retFirst(result);

    //     function lastLetter(string, retLast) {
    //         var result2 = string.charAt(string.length - 1);
    //         retLast(result2);
    //     }
    //     var newString = (retFirst, retLast) 


    // });
}

getFirstAndLast("Lauren", function(newString) {

    console.log(newString);
});


// getFirstAndLast("hello", function(newStr) { console.log(newStr); }); // should output "ho"

