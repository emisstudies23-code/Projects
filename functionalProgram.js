// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    // Declare a variable for the message
    var message = "%c" + txt;
    
    // Declare a variable for the style and build it properly
    var style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;
    
    // Log the message with the applied style
    console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    // Declare a fontStyle variable with default styles
    var fontStyle = "color: tomato; font-size: 50px";
    
    // Check if the reason is "birthday"
    if (reason === "birthday") {
        console.log("%cHappy birthday", fontStyle);
    }
    // If reason is "champions", log a congrats message
    else if (reason === "champions") {
        console.log("%cCongrats on the title!", fontStyle);
    }
    // For any other reason, log a default message
    else {
        console.log("%cJust keep being awesome!", fontStyle);
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    // Call consoleStyler with the first four arguments
    consoleStyler(color, background, fontSize, txt);
    
    // Call celebrateStyler with the last argument
    celebrateStyler(reason);
}

// Call styleAndCelebrate with appropriate arguments
styleAndCelebrate('hotpink', 'lightyellow', '35px', 'You did it!', 'champions');