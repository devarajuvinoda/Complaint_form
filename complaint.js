var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyparser = require('body-parser');


app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));

var connection = mysql.createConnection({
   host: 'localhost',
   user: 'devarajuvinoda',
   database: 'complaint_form',
   password: ''
});

app.listen(8080, function(){
    console.log('Server running on 8080');
});

app.get('/', function(req, res){
      res.render('home');  
});

app.post('/newcomplaint', function(req, res){
    res.render('complaint_form');
});

app.post('/checkstatus', function(req, res){
    res.render('status')
});

app.post('/submitcomplaint', function(req, res){
    var complaint = {
        name: req.body.emp_name,
        email: req.body.email,
        phone: req.body.phone_num,
        designation: req.body.designation,
        department: req.body.department,
        complaint_type: req.body.comp_type,
        description: req.body.descrip
    };
    console.log(req.body);
    var q = 'INSERT INTO complaintForm SET ?';
    connection.query(q, complaint, function(error, results){
        if(error) throw error;
        res.render('thanks');
    });
});

app.post('/submitstatus', function(req, res){
    
    var   name = req.body.emp_name;
    var    email = req.body.email;
    var    phone = req.body.phone_num;
    var    complaint_type = req.body.comp_type;
    
    var q = "SELECT status AS stat FROM complaintForm WHERE name='"+String(name)+"' AND email='"+String(email)+"' AND phone='"+String(phone)+"' AND complaint_type='"+String(complaint_type)+"'";
    console.log(q);
    connection.query(q, function(error, results){
      if(error) throw error;
      console.log(results[0].stat);
      if(results[0].stat == 'no'){
          res.render('willbe', {complaint_type: complaint_type});
      }
      else{
          res.render('resolved', {complaint_type: complaint_type})
      }
    });
});
