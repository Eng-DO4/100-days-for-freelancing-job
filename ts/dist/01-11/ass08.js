"use strict";
function printInConsole(...params) {
    params.forEach(param => {
        console.log(`The Value Is ${param} And Type Is ${typeof (param)}`);
    });
    console.log('Done');
}
printInConsole(1, 2, 3, 4, 5);
printInConsole("A", "B", "C");
printInConsole(true, false, false, true, true);
//# sourceMappingURL=ass08.js.map