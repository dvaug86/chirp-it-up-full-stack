create schema chirpr;

use chirpr;

create table users(
id int not null auto_increment,
username varchar(50) not null unique,
email varchar(50) not null,
password varchar(25) not null unique,
created_at timestamp default now(),
primary key (id)
);

create table chirps(
id int not null auto_increment,
userid int not null,
message varchar(300) not null,
location varchar(25) not null,
created_at timestamp default now(),
primary key (id),
foreign key (userid) references users(id)
);

create table mentions(
userid int not null,
chirpid int not null,
primary key(userid, chirpid),
foreign key(userid) references users(id),
foreign key(chirpid) references chirps(id)
);

insert into users (username, email, password) values
('handle1', '1email@address1.com', 'password123'),
('handle2', '2email@address2.com', 'password223'),
('handle3', '3email@address3.com', 'password323'),
('handle4', '4email@address4.com', 'password423'),
('handle5', '5email@address5.com', 'password523'),
('handle6', '6email@address6.com', 'password623'),
('handle7', '7email@address7.com', 'password723'),
('handle8', '8email@address8.com', 'password823'),
('handle9', '9email@address9.com', 'password923'),
('handle10', '10email@address10.com', 'password1023');


insert into chirps (userid, message, location) values
	(10, 'message1', 'paradise'),
    (10,'message2', 'paradise'),
    (10, ',message3', 'paradise'),
    (10, 'message4', 'paradise'),
    (10, 'message5', 'paradise'),
    (10, 'message6', 'paradise'),
    (10, 'message7', 'paradise'),
    (10, 'message8', 'paradise'),
    (10, 'message9', 'paradise'),
    (10, 'message10', 'paradise');
select* from chirps;

insert into mentions(userid, chirpid) values
	(1,2),
    (8,3),
    (5,9),
    (5,8);
   
   select * from users;
   select * from mentions;
   select * from chirps;
  
  select users.username, chirps.* from chirps join users on users.id = chirps.userid;
  
