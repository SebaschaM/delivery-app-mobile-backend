create table users (
    id bigint primary key auto_increment,
    email varchar(180) not null unique ,
    name varchar(90) not null,
    last_name varchar(90) not null,
    phone varchar(90) not null unique,
    image varchar(250) null,
    password varchar(90) not null,
    created_at timestamp(0) not null,
    updated_at timestamp(0) not null
)