function sayHello(theName, theGender) {
    // Your Code Here
    switch (theGender) {
        case "Male":
            console.log(`Hello Mr ${theName}`);
            break;
        case "Female":
            console.log(`Hello Miss ${theName}`);
            break;
        default:
            console.log(`Hello ${theName}`)
    }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"