function index(req , res ){
    //res.send('<h1>Hello From Main Controller <h1>')

    const students = ['Ahmed' , ['Mohammed'] , ['Mahmoud']]

    res.render('pages/index.ejs', {title : "Home Page" ,  students});
}
function about(req , res){
    res.render('pages/about.ejs' , {title : "About Page"});
}
function contact(req , res){
    res.render('pages/contact.ejs' , {title : "Contact Page"});
}


module.exports = {
    index,
    about,
    contact
}