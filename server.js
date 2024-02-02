const inquirer = require("inquirer");
const mysql = require("mysql2");


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_management_db'
    },
    console.log(`Connected to the employee_management_db database.`)
);

db.connect((err) => {
    if (err) throw err;
    start ();
});

function start() {
    inquirer
        .prompt({
            name: 'mainMenu',
            type: 'list', 
            message: 'What would you like to do?',
            choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            ],
        })
        }

const mainMenu = [
    {
        name: 'mainMenu',
        type: 'list', 
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role'
        ]
    }
];

function viewAllDepartments() {
    const query = "SELECT * FROM departments";
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    })
}

