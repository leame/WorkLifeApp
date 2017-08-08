/*Create email and phone table*/
CREATE TABLE `workContacts`(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	coID VARCHAR(255) INDEX NOT NULL
    fname VARCHAR(255),
    lname VARCHAR(255),
    email VARCHAR(255), 
    phone BIGINT(11),
)ENGINE=InnoDB;


/*Populate table with test information*/

INSERT INTO workContacts(coID, fname, lname, email, phone) 
VALUES ("testCO", "Boss", "Man", "theBoss@testCO.com", "5005551111") ("testCO", "Bob", "Ross", "art@testCO.com", "5005551112");

INSERT INTO workContacts(coID, fname, lname, email) 
VALUES ("testCO", "Gotno", "Number", "noCalls@testCO.com");

INSERT INTO workContacts(coID, fname, lname, phone)
VALUES ("testCO", "Front", "Desk", "5005550000");

