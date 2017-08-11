--Create company table--
CREATE TABLE `company` (
	`co_id` VARCHAR(255) NOT NULL,
	`company` VARCHAR(255) NOT NULL,
	`domain_name` VARCHAR(255),
	`password` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`co_id`)
)ENGINE=InnoDB; 

--Prepopulate company table--
INSERT INTO company(co_id, company, password)
VALUES ("TechCompXP", "TechCompXP", "default");