INSERT INTO department (name)
VALUES ("Human Resources"),
("IT"),
("Sales"),
("Accounting"),
("Processing");

INSERT INTO role (title, salary, department_id)
VALUES ("Specialist", 60000, 1),
("Support", 70000, 2),
("Lead", 60000, 3),
("CPA", 60000, 4),
("Engineer", 60000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Debra", "Johnson", 1, null),
("Nick", "Miller", 2, 1),
("Joe", "Allen", 5, null),
("Pam", "Benson", 4, 3),
("Jake", "Gottschalk", 3, 3);