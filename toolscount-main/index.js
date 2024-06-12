const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const dotenv= require('dotenv');
dotenv.config({
    path:'./env/.env'
})

app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname+'public'));

app.set('view engine', 'ejs');

const bcryptjs = require('bcryptjs');

const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));

const connection=require('./database/db');
const { async } = require('rxjs');

app.get('/login',(req, res)=>{
    res.render('login');
})


app.get('/register',(req, res)=>{
    res.render('add_users');
})

app.post('/register',  async (req,res)=>{
    const user = req.body.user;
    const role = req.body.role;
    const pass = req.body.pass;
    let passwordHash = await bcryptjs.hash(pass,8);
    connection.query('INSERT INTO users SET ?', {user:user, role:role, pass:passwordHash}, async(error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.render('add_users',{
                alert: true,
                alertTitle: "Registration",
                alertMessage: "User succesfully added ",
                alertIcon: "success",
                showConfirmButton: false,
                timer:1500,
                ruta:''
            })
        }
    })
})

app.post('/auth', async (req,res)=>{
    const user = req.body.user;
    const pass = req.body.pass;
    let passwordHassh = await bcryptjs.hash(pass,8);
    if(user && pass){
        connection.query('SELECT * FROM users WHERE user = ?', [user], async (error, results)=>{
            if(results.length == 0 || !(await bcryptjs.compare(pass, results[0].pass))){
                res.render('login',{
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "Usuario y/o password incorrectas",
                    alertIcon: "error",
                    showConfirmButton: true,
                    timer:false,
                    ruta:'login'
                });
            }else{
                req.session.loggedin=true;
                req.session.name = results[0].user;
                res.render('login',{
                    alert: true,
                    alertTitle: "Connection Succesfull",
                    alertMessage: "You are logged",
                    alertIcon: "success",
                    showConfirmButton: false,
                    timer:1500,
                    ruta:''
                });
            }
        })
    }
})

app.get('/', (req,res)=>{
    if (req.session.loggedin) {
        const username = req.session.name;
        const sql = "SELECT role FROM users WHERE user = ?";
        
        connection.query(sql, [username], function (error, results) {
          if (error) {
            throw error;
          } else {
            const role = results[0].role;
            if (role === 'admin') {
              res.render('home', {
                login: true,
                name: req.session.name,
                isAdmin: true
              });
            } else {
              res.render('home', {
                login: true,
                name: req.session.name,
                role: role,
                isAdmin: false
              });
            }
          }
        });
      } else {
        res.render('home', {
          login: false,
          name: 'You need to be logged in!!'
        });
      }
})

app.use(function(req, res, next) {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});

app.get('/logout', (req, res) =>{
	req.session.destroy(() => {
        res.redirect('/') 
    })
});

app.listen(3000, (req,res)=>{
    console.log('Server running');
})

app.get('/inquiry-form', (req, res) => {
    res.render('inquiry-form');
});

app.get('/add_tool', (req, res) => {
    res.render('add_tools');
});

app.post('/add_tool',  async (req,res)=>{
  const name = req.body.name;
  const counter = req.body.count;
  const id_mechanic = req.body.mechanic;
  connection.query('INSERT INTO tools SET ?', {name:name, counter:counter, id_mechanic:id_mechanic}, async(error, results)=>{
      if(error){
          console.log(error);
      }else{
          res.render('add_tools',{
              alert: true,
              alertTitle: "Tool Added",
              alertMessage: "Tool succesfully added",
              alertIcon: "success",
              showConfirmButton: false,
              timer:1500,
              ruta:''
          })
      }
  })
})

app.get('/toolsadmin', (req, res) => {
    const sql = 'SELECT * FROM tools';
  
    connection.query(sql, (error, results) => {
      if (error) {
        throw error;
      }
  
      res.render('toolsadmin', { tools: results });
    });
  });

  app.get('/toolsuser', (req, res) => {
    if (req.session.loggedin) {
        const username = req.session.name;
        const sql = "SELECT * FROM tools WHERE id_mechanic = ?";
        
        connection.query(sql, [username], function (error, results) {
          if (error) {
            throw error;
          }
          res.render('toolsuser', { tools: results });
 
        });
      } else {
        res.render('home', {
          login: false,
          name: 'You need to be logged'
        });
      }
  });
  
app.post('/send-query', (req, res) => {
    const messageSent = true;
    
    res.render('inquiry-form', { messageSent });
});