-- sql script


CREATE DATABASE IF NOT EXISTS chat_db;
       CREATE USER IF NOT EXISTS 'chat_user'@'localhost' IDENTIFIED BY 'chat_pwd123@';
              GRANT ALL PRIVILEGES ON Phantom_db.* TO 'chat_user'@'localhost';
                                      GRANT SELECT ON performance_schema.* TO 'chat_user'@'localhost';
FLUSH PRIVILEGES;