// Write The Function Here
function printInConsole(...params: (string | number | boolean)[]) {
    params.forEach(param => {
        console.log(`The Value Is ${param} And Type Is ${typeof(param)}`);
    });
    console.log('Done');
}

// Using The Function => Do Not Edit
printInConsole(1, 2, 3, 4, 5)
printInConsole("A", "B", "C")
printInConsole(true, false, false, true, true)

// Output
// The Value Is 1 And Type Is number
// The Value Is 2 And Type Is number
// The Value Is 3 And Type Is number
// The Value Is 4 And Type Is number
// The Value Is 5 And Type Is number
// Done
// The Value Is A And Type Is string
// The Value Is B And Type Is string
// The Value Is C And Type Is string
// Done
// The Value Is true And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is true And Type Is boolean
// The Value Is true And Type Is boolean
// Done