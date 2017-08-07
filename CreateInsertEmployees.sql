
--Create employee table--
CREATE TABLE `employees`(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `fname` VARCHAR(255) NOT NULL,
    `lname` VARCHAR(255) NOT NULL,
    `company` VARCHAR(255) NOT NULL,
    `dept` VARCHAR(255) NOT NULL,
    `position` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` BIGINT(11) NOT NULL,
    `availability` TINYINT NOT NULL,
    `start_time` DATETIME,
    `end_time` DATETIME,
    `work_loc` DOUBLE,
	PRIMARY KEY(`id`),
    UNIQUE KEY(`fname`, `lname`)
)ENGINE=InnoDB;


--Prepopulate table with example employees/information--

INSERT INTO employees(fname, lname, company, dept, position, email, phone, start_time, end_time)
VALUES ("Leslie", "Michaels", "TechCompXP", "Human Resources", "Manager", "lmichaels@techcompxp.ex", 
5005558989, "2020-05-05 09:00:00", "2020-05-05 17:00:00");


INSERT INTO employees(fname, lname, company, dept, position, email, phone, start_time, end_time)
VALUES ("Donald", "Weiss", "TechCompXP", "Sales", "Account Manager", "dweiss@techcompxp.ex", 
5005558900, "2020-05-05 09:00:00", "2020-05-05 16:00:00");


INSERT INTO employees(fname, lname, company, dept, position, email, phone, start_time, end_time)
VALUES ("Cindy", "Hernandez", "TechCompXP", "Research & Development", "Software Engineer", "chern@techcompxp.ex", 
5005558969, "2020-05-05 09:00:00", "2020-05-05 17:00:00");


INSERT INTO employees(fname, lname, company, dept, position, email, phone, start_time, end_time)
VALUES ("Joseph", "Patel", "TechCompXP", "Marketing", "Marketing Director", "jpatel@techcompxp.ex", 
5005558979, "2020-05-05 09:00:00", "2020-05-05 13:00:00");


INSERT INTO employees(fname, lname, company, dept, position, email, phone, start_time, end_time)
VALUES ("Jennifer", "Wong", "TechCompXP", "Research & Development", "QA Analyst", "jwong@techcompxp.ex", 
5005558959, "2020-05-05 09:00:00", "2020-05-05 16:00:00");


INSERT INTO employees(fname, lname, company, dept, position, email, phone, start_time, end_time)
VALUES ("Marcus", "Smith", "TechCompXP", "Human Resources", "HR Specialist", "msmith@techcompxp.ex", 
5005558929, "2020-05-05 09:00:00", "2020-05-05 17:00:00");


INSERT INTO employees(fname, lname, company, dept, position, email, phone, start_time, end_time)
VALUES ("Samantha", "Novack", "TechCompXP", "Research & Development", "Software Engineer", "snovack@techcompxp.ex", 
5005558939, "2020-05-05 09:00:00", "2020-05-05 17:00:00");

INSERT INTO employees(fname, lname, company, dept, position, email, phone, start_time, end_time)
VALUES ("Thomas", "McDaniels", "TechCompXP", "Sales", "Account Manager", "tmcdan@techcompxp.ex", 
5005558909, "2020-05-05 09:00:00", "2020-05-05 13:00:00");