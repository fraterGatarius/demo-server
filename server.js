const express = require('express')
const app = express()
const port = process.argv[2] || 80
// do the port thing
// process.argv is an object in express; argv has array in it;
// [2] grab the third item; 0 is node; 1 is server.js; 2 is whatever follows
// the port should be whatever put in there, or 80

const www = express.static(`${__dirname}/www`)
// folder to serve statically
// use tick mark `` to enable passing the string into the line instead of ' '

app.use(www)

/* function ready () {
    console.log('running the server on port 80! visit http://localhost')
} */

// to run the function (1st method, with the above code)
// app.listen(80, ready)

//or use this following (2nd method)
/* app.listen(80, function() {
    console.log('running the server on port 80! visit http://localhost')
}
) */
// use ctrl C to quit the function

//or use this following
app.listen(8000, () => {
    console.log(`running the server on port ${port}! visit http://localhost:${port}`)
}
)
// enter http://localhost/ in browser after deploting the server
// localhost:portNumber if it is not 80

// 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 (token generated on 11/18)

// type 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@ before the github.com
