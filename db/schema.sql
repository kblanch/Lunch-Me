create database lunch_db;

use lunch_db;

create table group(
    group_id int not null auto_increment,
    group_name varchar(255) not null,
    group_owner_id int not null,
    primary key( group_id ),
    foreign key( group_owner_id )
)

create table group_user_member (
    group_id int not null,
    user_id int not null
)

create table user {
    user_id int not null auto_increment,
    email varchar(255),
    user_name varchar(255),
    user_password varchar(255)
}

create table order {
    order_id int not null auto_increment,
    order_name varchar(255),
    order_code varchar(10),
    created_by int,
    group_id int,
    active BINARY,
    start_time datetime,
    duration int
}

-- create table sub_order {

-- }

create table order_line {
    order_line_id int not null auto_increment,
    order_id int not null,
    item varchar(20),
    qty int,
    unit_type varchar(5)
}