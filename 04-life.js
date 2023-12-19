// Immediately Invoked Function Expressions (IIFE)


// +++++ // 2 IIFE ko likhana kye lye or unha saperate karna kye lye semicolon ; use hota ha ++++++


// Global scope kye polution sye problem hoti ha kahi bar to us global scope kye variables yeah jo bhi declaration ha us kye "Polution" ko hatana kye lye hum "Iife" ka use karta ha


(function chai() {
    // chai is named IIFE // because name is defined
    console.log(`DB CONNECTED`); // "Function" per prenthisis () laga kar usye "Execute" kar sakta ha
}) (); // Function Invoke to ho gye ha but isye pata nhi ha context rokana kha ha // to asii situation pye javascript me ap ko us line ko end karna parta ha // End kye lye semicolon ; lagata parta ha


( (name) => { // Iife method write in Arrow Function // This is simple IIFE // because name is not defined ha
    console.log(`DB CONNECTED TWO ${name}`);
}) ("Coach") // Pass the name // kue kye yeah brackets () ise execute kar rahi ha