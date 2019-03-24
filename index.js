const express  = require('express');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');
//app.get('/', (req, res) =>{
//res.send('<h1>Hello World!!lol</h1>');
//res.sendFile(path.join(__dirname, 'public', 'index.html'));
//});


// Init middleware
//app.use(logger);

//Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Homepage Route
app.get('/', (req, res) => res.render('index', {
  title: 'Member App',
  members
}));

//Gets All Members
//app.get('/api/members', (req, res) => 
//return in JSON format
//res.json(members));

//Get Single Member
//app.get('/api/members/:id', (req, res) => {
  //res.send(req.params.id);
  //const found = members.some(member => member.id === parseInt(req.params.id));

  //if(found) {
    //res.json(members.filter(member => member.id === parseInt(req.params.id)))
  //}
  //else {
    //res.status(400).json({msg: `No Member with id of ${req.params.id}`});
 // }
  
//});

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));
//Members API Routes
app.use('/api/members', require('./routes/api/members'));
const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));

