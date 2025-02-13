//Immediate Invoked Function Expression (IIFE)
//A function that is invoked immediately after it is defined

//Named iife => 
(function coffe(){

    console.log(`DB CONNECTED`);

})();
//The IIFE is invoked immediately after it is defined, and it logs a message to the console

// (function aurCode() {
//     console.log(`DB CONNECTED TWO`);
    
// })();

//Un-Named iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('Aditya');


// coffe()