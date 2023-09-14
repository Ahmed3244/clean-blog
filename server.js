require('dotenv').config();
const express =require('express'),
      app     =express(),
      port    =process.env.PORT || 5000;
      webRouter =require('./routes/web');

    //app.get('/' , (req , res) => {
    //    res.send('<h1>Home Page<h1>')
    //})

    app.use(express.static(__dirname + "/public"))

    app.set('view engine' , 'ejs');
       
    app.use(webRouter);

app.listen(port , ()=> {
    console.log(`Server Running On Localhost:${port}`);
})      