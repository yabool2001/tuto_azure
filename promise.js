// Na podstawie JavaScript Promises In 10 Minutes (https://www.youtube.com/watch?v=DHvZLI7Db8E) by Web Dev Simplified

// Opcja z resolve () i then
const quest = {"q": "a"}

// Opcja z reject () i catch
//const quest = {"w": "a"}

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