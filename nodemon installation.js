@@ -1,4 +1,4 @@
//  https://drive.google.com/drive/folders/1JkO8gw7GwlAT25tDdqVbwVWv--8PLZ2j?usp=share_link
///  https://drive.google.com/drive/folders/1JkO8gw7GwlAT25tDdqVbwVWv--8PLZ2j?usp=share_link
(video to 2 t0 6 if not understand this step down mentioned)
intallation package nodeman for development and production
1)Make a package.json file
PS C:\Users\Dell\backend devlopement> npm init
it look like error but keep on enter
  ie: ask couple of question (click on enter and enter and enter)if u get author :kiran
again enter,enter
package json.file will be create at left
if u open  package json.file
{
  "name": "backend-devlopement",
  "version": "1.0.0",
  "description": "complete node.js guide",
  "main": "Writingandreadingfrom a file.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
 
  },
  "author": "kiran",
  "license": "ISC"
}
look like this
here app,js  assignged to start
2)PS C:\Users\Dell\backend devlopement> npm  start
or
PS C:\Users\Dell\backend devlopement> npm run start
3)Install the nodemon package. What problem does nodemon solve?
sol:make development easy
4)When would you use --save-dev and --save?
sol: use first one
PS C:\Users\Dell\backend devlopement> npm install nodemon --save-dev  (this production and development)
or
[PS C:\Users\Dell\backend devlopement> npm install nodemon --save    (this for production)
or
PS C:\Users\Dell\backend devlopement> npm install nodemon -g     ( this for gobally)  ]
after using any one 
package-lock-json files appered on left and another one (node-modules)
and again type down mentioned
PS C:\Users\Dell\backend devlopement> npm install (this u can type   if missed or deleted (node-modules) )
again it will downloaded
*some package is addded t0 package.json ie last 2 line ie(   "devDependencies":{
    "nodemon": "^2.0.22") and 
    another one line is
      "start-server": "node app.js"
 *   name is foldername it should in be ifun(-) and small letters another
     eg:"name": "chat-app",
  eg2:"name": "backend-devlopement",
*"nodemon": "^2.0.22" this depennd on laptop if it like error 
if laptop ask to overwrite
click on overwrite


this is ur adding 3 lines in package.json

"start": "nodemon app.js",
           "start-server": "node app.js",
            "dev": "nodemon app.js"

(app.js is ur file runing and "dev"is used  is automatically  to run and,,,  
 an one time type in terminal  type (npm run dev) shown below

 **PS D:\TODOS-APP> npm run dev )



----------------------------------------------------------------------------------
    {
        "name": "backend-devlopement",
        "version": "1.0.0",
        "description": "complete node.js guide",
        "main": "Writingandreadingfrom a file.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "start": "nodemon app.js",
           "start-server": "node app.js",
            "dev": "nodemon app.js"

        },
        "author": "kiran",
        "license": "ISC",
        "devDependencies":{
          "nodemon": "^2.0.22"
      }
      }
-----------------------------------------------------------------------------------
      again Now
      PS C:\Users\Dell\backend devlopement> npm start
      //
 ------     -----------------------------------------------------------------------------------------
concept2
      DEBUGING
      ----------
      continue adding file
      https://drive.google.com/drive/folders/1JkO8gw7GwlAT25tDdqVbwVWv--8PLZ2j?usp=share_link
Watch the videos 7 till the end from this link
DEBUUGGING steps
-------------
click on run-debugger
take breakpoint
click on view-debug console
clear all ur terminal 
installation start now 
again start steps below
      now click on Run-addconfiguration
      (.vscode) folder apper -with (launch.json)
itshows like yhis in launch.json
      {
        // Use IntelliSense to learn about possible attributes.
        // Hover to view descriptions of existing attributes.
        // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
        "version": "0.2.0",
        "configurations": [
            {
                "type": "pwa-node",
                "request": "launch",
                "name": "Launch Program",
                "skipFiles": [
                    "<node_internals>/**"
                ],
                "program": "${workspaceFolder}\\Writingandreadingfrom a file.js"
            }
        ]
    }
now u should add last 3 line  and add filename to this line "program": "${workspaceFolder}/app.js",
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
      {
          "type": "node",
          "request": "launch",
          "name": "Launch Program",
          "skipFiles": [
              "<node_internals>/**"
          ],
          "program": "${workspaceFolder}/app.js",
          "restart":true,
          "runtimeExecutable": "nodemon",
          "console": "integratedTerminal"
      }
  ]
}
type 
PS C:\Users\Dell\backend devlopement> npm install -g
or
PS C:\Users\Dell\backend devlopement> sudo npm install -g (this is for linux users)
clear all terminal 
PS C:\Users\Dell\backend devlopement> npm start(if did not (npm start) follow (nodemon installation) in github)
link: https://github.com/kirankiranbang/nodemoninstallation/commit/b9e5925828541000b55c497042538f8c68fca08c
open new terminal-run program (server.js)
*now click on run-debugger
*take a breakpoint (click it shows like red point on left of code)
*now go to front end and pass any message and click on SubmitEvent
*now debugger is locked like (shows arrow mark for locked that line)
*click on VIEW-DEBUGCONSOLE
*now type any code in (DEBUG CONSOLE)
*eg:parsedBODY.split('=') this code made breakpoint and this locked
now enter
how it showing it shows
to QUIT shift+f5
////
-------------------------------------------------------------------------------------
concept3
express installation
-----------------------
1)Why are we using Express JS ? Any reasons?
Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.
2)Install Express Js
PS C:\Users\Dell\backend devlopement>npm install --save express
PS C:\Users\Dell\backend devlopement> npm start
3)when using parser in code need it
PS C:\Users\Dell\backend devlopement>npm install --save body-parser
-----------------------------------------------------------------------------------------------
concept4
PS C:\Users\Dell\backend devlopement>npm audit fix --force
PS C:\Users\Dell\backend devlopement>npm fund
concept5     SQL
-----------------------------------------
Installation in vs code
--------------------------------------
PS C:\Users\Dell\backend devlopement>npm install --save mysql2
or 
*(dont use this)PS C:\Users\Dell\backend devlopement>npm install mysql2-promise --save
PS C:\Users\Dell\backend devlopement>npm audit fix --force
or 
PS C:\Users\Dell\backend devlopement>npm install --save express(this is for every time if opening new one)
PS C:\Users\Dell\backend devlopement>npm install -g
https://www.npmjs.com/package/mysql2-promise(google)
concept 6 sequlaize
--------------------
PS C:\Users\Dell\backend devlopement>npm install --save mysql2
PS C:\Users\Dell\backend devlopement>﻿npm install --save sequelize
concept 7 core installaion
-------------------------
https://www.npmjs.com/package/cors(google for understand)
PS C:\Users\Dell\backend devlopement>npm install cors
or
PS C:\Users\Dell\backend devlopement>npm install i cors
or
PS C:\Users\Dell\backend devlopement>npm install cors.js
in main app , my main application is app.js

var cors = require('cors')
app.use(cors())


this is all in one
----------------------
npm install mysql2 express body-parser cors sequelize

 ///



some of sql command in command promt this is not needed no installtion
------------------------------------------------------------------------

sql command
---------------

to change direct from c to d

type d:

D:>
and move login page file

type D:\>cd D:\loginPage

D:\loginPage>mysql -u root -p
enter
password:password of mysql database

and appers like error 
not error
continue 
with next command


mysql> show databases;
mysql> use Node-complete

mysql> ALTER TABLE signups AUTO_INCREMENT = 1;    (this is only for increment if or 16 it increment 17)


mysql>TRUNCATE TABLE signups; (this is start from 1 ,by deleting all id in backend)




mysql> create table student(username varchar(50),rolnum int(10),brnach varchar(5));
show databases;

mysql> desc student;       ie(desc:description)
mysql> INSERT INTO student VALUES ('JohnDoe', '1234567890', '23');

mysql> insert into values('ram','3434','cs');

mysql> Select name from student;
-//-/---//-----------------------------------------------------------------------------------------------