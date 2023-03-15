import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();
const port = 8082;

// Create a repository for this challenge named cookies-challenge

// Create an Express application that sets a cookie when routed to /login with their name.
//  If a cookie is present with a name key, then it says "Welcome {name}! when the user routes to /hello".

app.use(express.json(), cookieParser( ))
// {httpOnly: true, secure: true, signed:true}
app.post('/login', (req,res) =>{
    let {name} = req.cookies;
    res.cookie('name', 'Jarhym');
    res.redirect('/hello')   
})

app.get('/hello', (req,res) =>{
    let name = req.cookies.name;
    if(name){
        res.status(200).send(`Welcome ${name}!`)
    }else{
        res.redirect('/login')
    }

})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))