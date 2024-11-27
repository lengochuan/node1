import express from 'express';
const app = express();
// const path = require("path");

app.get(`/`, function(req, res){
    res.send('Hello World');
})

app.listen(process.env.PORT, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});