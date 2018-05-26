var mysql = require('mysql');
var faker = require("faker");

var connection = mysql.createConnection({
        host: 'localhost',
        user: 'devarajuvinoda',
        database: 'complaint_form',
        password: ''
    });

var complaint_type = ['Water supply', 'Electrical', 'Office maintanance', 'Internet connectivity', 'Food'];
var  designation = ['Analyst', 'Manager', 'Engineer', 'Project lead', 'Intern'];
var department = ['Engineering', 'Finance', 'Management', 'Sales and Marketing', 'Customer support'];


// console.log(faker.fake("{{name.lastName}} {{name.firstName}} "));
// console.log(faker.internet.email());
// console.log(faker.phone.phoneNumberFormat());
// console.log('complaint_type: '+complaint_type[Math.floor(Math.random()*complaint_type.length)]);
// console.log('designation: '+designation[Math.floor(Math.random()*designation.length)]);
// console.log('department: '+department[Math.floor(Math.random()*department.length)]);
// console.log(faker.random.words()+' '+faker.random.words());

var data = []
for(var i=0; i<100; i++){
    data.push([
            faker.fake("{{name.lastName}} {{name.firstName}} "),
            faker.internet.email(),
            faker.phone.phoneNumberFormat(),
            designation[Math.floor(Math.random()*designation.length)],
            department[Math.floor(Math.random()*department.length)],
            complaint_type[Math.floor(Math.random()*complaint_type.length)],
            faker.random.words(),
            faker.date.past()
        ])
}

console.log(data.length);
var q = 'INSERT INTO  complaintForm(name, email, phone, designation, department, complaint_type, description, received_at) VALUES ?'

connection.query(q, [data], function(error, results){
    if(error) throw error;
    console.log(results);
})
// var complaint = {
//             name: faker.fake("{{name.lastName}} {{name.firstName}} "),
//             email: faker.internet.email(),
//             phone: faker.phone.phoneNumberFormat(),
//             designation: designation[Math.floor(Math.random()*designation.length)],
//             department: department[Math.floor(Math.random()*department.length)],
//             complaint_type: complaint_type[Math.floor(Math.random()*complaint_type.length)],
//             description: faker.random.words()+' '+faker.random.words()
 
// };


// connection.query('INSERT INTO complaintForm SET ?', complaint, function(error, results){
//     if(error) throw error;
//     console.log(results);
// });

connection.end();
