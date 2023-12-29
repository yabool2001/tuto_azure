// First example with classic function
    
function one ( callback1 ) 
{
    console.log ( "step 1" ) ;
    callback1 () ;
}

function two ()
{
    console.log ( "step 2" ) ;
}

one ( two ) ;

// Second example with arrow function and additionally setTimeout
    
let third = ( callback2 ) => 
{
    setTimeout ( () => { 
        console.log ( "step 3" ) ;
        callback2 () ;
    } , 0 )
}

let fourth = () => 
{
    console.log ( "step 4" ) ;
}

third ( fourth ) ;
