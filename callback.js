// First example with classic function
    
function one ( callback ) 
{
    console.log ( "step 1" ) ;
    callback () ;
}

function two ()
{
    console.log ( "step 2" ) ;
}

one ( two ) ;

// Second example with arrow function
    
let third = ( call_fourth ) => 
{
    console.log ( "third" ) ;
    call_fourth () ; 
}

let fourth = () => 
{
    console.log ( "fourth" ) ;
}

third ( fourth ) ;
