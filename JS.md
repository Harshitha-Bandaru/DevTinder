JS
Microtasks can also schedule other microtasks! This could create a scenario where we create en infinite microtask loop, delaying the Task Queue indefinitely and freezing the rest of the program. So be careful!

Such a scenario cannot (!) happen on the Task Queue. The Event Loop processes tasks on the Task Queue one by one, then it "starts over" by checking the Microtask Queue

ESS6 introduced let, const - they are stored uninitalized
var - undefined
In order to prevent being able to accidentally reference an undefined variable, like we could with the var keyword, a ReferenceError gets thrown whenever we try to access uninitialized variables. The "zone" before their actual declaration, is called the temporal dead zone: you cannot reference the variables (this includes ES6 classes as well!) before their initialization.
First, memory space is set up for the different contexts. We have the default global context (window in a browser, global in Node), and a local context for the getPersonInfo function which has been invoked. Each context also has a scope chain.
Besides global and local scopes, there is also a block scope. Variables declared with the let or const keyword are scoped to the nearest curly brackets ({}).
prototypal inheritance
(Macro)task setTimeout | setInterval | setImmediate
Microtask process.nextTick | Promise callback | queueMicrotask
