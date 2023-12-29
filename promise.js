// Na podstawie JavaScript Promises In 10 Minutes (https://www.youtube.com/watch?v=DHvZLI7Db8E) by Web Dev Simplified


// Scenariusz 1 z resolve:
let quest = {"q": "a"}

let p = new Promise
(
    ( resolve , reject ) =>
    {
        // Tutaj implementuję działania, które obicałem zrobić.
        let result = null
        if ( 'q' in quest )
        {
            // Jeśli udało mi się odczytać wartość, to używam resolve
            resolve ( `Wartość q = ${quest.q}` )
        }
        else
        {
            // Jeśli nie udało mi się odczytać wartość, to zwracam reject
            reject ( "No data" )
        }
    }
)

p.then
(
    ( r ) => console.log ( r )
).catch
(
    ( r ) => console.log ( r )
)



// Scenariusz 2 z reject:
quest = {"w": "a"}

function f ()
{
    return new Promise 
    (
        ( resolve , reject ) =>
        {
            if ( 'q' in quest )
            {
                // Jeśli udało mi się odczytać wartość, to używam resolve
                resolve ( `Wartość q = ${quest.q}` )
            }
            else
            {
                // Jeśli nie udało mi się odczytać wartość, to zwracam reject
                reject ( "No data" )
            }
        }
    )
}

f().then
(
    ( r ) => console.log ( r )
).catch
(
    ( r ) => console.log ( r )
)