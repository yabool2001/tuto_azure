function callback_hell () 
{
    setTimeout
    (
        () =>
        {
            const data = { user: "Johnny"}
            console.log ( data )
            setTimeout
            (
                () => console.log ( "Data has been Updated" )
                , 1000 
            )
        }
        , 500
    )
}

callback_hell ()
