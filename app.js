import express from 'express';
const app = express();
// const path = require("path");

app.get(`/`, function(req, res){
    res.send('Hello World');
})

let port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});