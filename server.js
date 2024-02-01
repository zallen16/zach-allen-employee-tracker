const inquirer = require("inquirer");
const mySql = require("mysql2");

const PORT = express.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_management_db'
    },
    console.log(`Connected to the employee_management_db database.`)
);

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

