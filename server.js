const inquirer = require("inquirer");
const mySql = require("mysql2");

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

