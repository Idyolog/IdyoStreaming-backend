create table OutputTypes(
	id int NOT NULL,
	outputType varchar(64),
	PRIMARY KEY (id)
);

create table InputTypes(
	id int NOT NULL,
	inputType varchar(64),
	PRIMARY KEY (id)
);

create table Outputs(
	output varchar(255) NOT NULL,
	outputType int NOT NULL,
	active int,
	PRIMARY KEY (output),
	FOREIGN KEY (outputType) REFERENCES OutputTypes(id)
);

create table Inputs (
	input varchar(255) NOT NULL,
	inputType int NOT NULL,
	active int,
	PRIMARY KEY (input),
	FOREIGN KEY (inputType) REFERENCES InputTypes(id)
);

insert into InputTypes(id, inputType)
values (1,'webcam');

insert into InputTypes(id, inputType)
values (2,'microphone');

insert into OutputTypes(id, outputType)
values (1, 'file');

insert into OutputTypes(id, outputType)
values (2, 'twitch');