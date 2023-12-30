// Na podstawie JavaScript Promises In 10 Minutes (https://www.youtube.com/watch?v=DHvZLI7Db8E) by Web Dev Simplified

let quest = {"q": "a"}

// Scenariusz 1 z resolve:

console.log ( "Scenariusz 1 z resolve." )

let p = new Promise
(
    ( resolve , reject ) =>
    {
        // Tutaj implementuję działania, które obicałem zrobić.
        let result = null
        if ( 'q' in quest )
            // Jeśli udało mi się odczytać wartość, to używam resolve
            resolve ( `Wartość q = ${quest.q}` )
        else
            // Jeśli nie udało mi się odczytać wartość, to zwracam reject
            reject ( "No data" )
    }
)

p.then
(
    ( r ) => console.log ( r )
)
.catch
(
    ( r ) => console.log ( r )
)



// Scenariusz 2 z reject:

console.log ( "Scenariusz 2 z reject: No data." )

quest = {"w": "b"}

function f ()
{
    return new Promise 
    (
        ( resolve , reject ) =>
        {
            if ( 'q' in quest )
                // Jeśli udało mi się odczytać wartość, to używam resolve
                resolve ( `Wartość q = ${quest.q}` )
            else
                // Jeśli nie udało mi się odczytać wartość, to zwracam reject
                reject ( "No data" )
        }
    )
}

f().then
(
    ( r ) => console.log ( r )
)
.catch
(
    ( r ) => console.log ( r )
)


// Scenariusz 3 z Promise.all:

console.log ( "Scenariusz 3 z resolve i reject. I nie wiem czemu nie chce działać z resolve" )

quest = { "q": "a" , "w": "b" }
const data1 = new Promise
(
    ( resolve , reject ) => 
    {
        if ( 'q' in quest )
            // Jeśli udało mi się odczytać wartość, to używam resolve
            resolve ( `Wartość q = ${quest.q}` )
        else
            // Jeśli nie udało mi się odczytać wartość, to zwracam reject
            reject ( "No data" )
    }
)
const data2 = new Promise
(
    ( resolve , reject ) =>
    {
        if ( 'w' in quest )
            // Jeśli udało mi się odczytać wartość, to używam resolve
            resolve ( `Wartość w = ${quest.w}` )
        else
            // Jeśli nie udało mi się odczytać wartość, to zwracam reject
            reject ( "No data" )
    }
)

Promise.all
(
    [ data1 , data2 ]
).then
(
    ( r ) => console.log ( r )
)
.catch
(
    ( r ) => console.log ( r )
)



// Scenariusz 4 z Promise.race:
console.log ( "Scenariusz 4 z resolve." )
const data3 = new Promise
(
    ( resolve , reject ) => 
    {
        if ( 'q' in quest )
            // Jeśli udało mi się odczytać wartość, to używam resolve
            resolve ( `Wartość q = ${quest.q}` )
        else
            // Jeśli nie udało mi się odczytać wartość, to zwracam reject
            reject ( "No data" )
    }
)
const data4 = new Promise
(
    ( resolve , reject ) =>
    {
        if ( 'w' in quest )
            // Jeśli udało mi się odczytać wartość, to używam resolve
            resolve ( `Wartość w = ${quest.w}` )
        else
            // Jeśli nie udało mi się odczytać wartość, to zwracam reject
            reject ( "No data" )
    }
)

Promise.race
(
    [ data1 , data2 ]
).then
(
    ( r ) => console.log ( r )
)
.catch
(
    ( r ) => console.log ( r )
)