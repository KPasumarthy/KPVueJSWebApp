/***KP : Generic node server.js program to connect to the mssql as a backend db ***/
/*** KP : Commented Out Lines of Code - to start http/https Server with out "npm install -g @angular/cli" Packages  ***/
/*** KP : NodeJS Web Server - Install MSSQL : npm install mssql ***/


//// KP :  Get dependencies by installing mssql, express and cors packages
/// KP : npm init -y
/// KP : npm install express
/// KP : npm install express cors
/// KP : npm install mssql
/// KP : To run the server: node server.js
/// KP : Vue.js Replace const with import statements for express, cors and mssql packages as shown below for ES Modules syntax (Recommended for modern Vue.js projects) and remove the require statements for express, cors and mssql packages as shown below
// const express = require('express');
// const cors = require('cors');  with imports
import express from 'express';
import cors from 'cors';

const app = express();
const port = 5436; ///5000;

// Use CORS to allow requests from your React app domain (e.g., http://localhost:3000)
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());



// // // /******************************************************************************************************************/
// // /*** KP : Microsoft MSSQLDB Connection  ***/
// // //KP : Trial 1

import mssql from 'mssql';

// Configuration details for your SQL Server instance
const config = {
    user: 'sa',                                 // e.g., 'sa'
    password: 'KPSQLServer2022sysadmin!', //'MSSQLServerPasswordsysadmin!',       // e.g., 'mypassword'
    server: 'localhost',           // e.g., 'your_server.database.windows.net' for Azure
    database: 'AdventureWorks2022',
    port: 1433,                    // Default MS SQL port, can be optional
    options: {
        encrypt: true,             // Use this for Azure SQL Database
        trustServerCertificate: true // Use this for local development if you don't have an SSL cert
    }
};

var persons = "";

async function connectAndQuery() {
    try {
        // Establishes the connection using the config object
        await mssql.connect(config);
        console.log("KP : Microsoft SQL & NodeJS Connection  was Successful!");

        // //// Execute a sample query using template literals
        // //const sqlQuery = 'SELECT TOP 5 * FROM Person.Person';
        // //const result = await mssql.query`SELECT TOP 5 * FROM Person.Person`;

        // //const sqlQuery = 'SELECT TOP 5 * FROM Person.Person';
        // //const result = await mssql.query(sqlQuery);

        const result = await mssql.query`SELECT TOP 5 * FROM Person.Person`;
        console.log("KP : Microsoft SQL & NodeJS Connection  was Successful!");
        console.log(result.recordset);
        persons = result;

        // // Close the connection when the application is finished
        // // A connection pool is typically kept open in a running application (like an Express server)
        await mssql.close();

    } catch (err) {
        console.error('KP : Microsoft SQL & NodeJS Connection  or query failed:', err.message);
        mssql.close();
    }
}

connectAndQuery();


// // /*** KP : Microsoft MSSQLDB Connection  ***/
// // /******************************************************************************************************************/








// // // /******************************************************************************************************************/
// // // /*** KP : OracleDB Connection  ***/
// // //KP : Trial 3

// var oracledb = require('oracledb');
// //var dbConfig = require('./dbconfig.js');
// oracledb.autoCommit = true;

// oracledb.getConnection(
//   {
//     user      : "SYS as SYSDBA",
//     password  : "NodeJSORAPassword2020",
//     privilege : oracledb.SYSDBA,
//     connectionString: `(DESCRIPTION=
//                           (ADDRESS=
//                               (PROTOCOL=TCP)
//                               (HOST=localhost)
//                               (PORT=1521)
//                             )
//                             (CONNECT_DATA=
//                               (SERVICE_NAME=orcl)
//                               (SERVER=DEDICATED)
//                             )
//                           )`
//     },
//   function (err, connection) {
//     if (err) {
//       console.error("KP : " + err.message );
//       return;
//     }
//     console.log('KP : Oracle & NodeJS Connection  was Successful!');
//     connection.close(
//       function (err) {
//         if (err) {
//           console.error("KP : " + err.message);
//           return;
//         }
//       });
//   });
// // /*** KP : OracleDB Connection  ***/
// // /******************************************************************************************************************/




// // /******************************************************************************************************************/
// // /*** KP : OracleDB Connection  ***/
// //KP : Trial 2
// var oracledb = require('oracledb');
// oracledb.getConnection({
//   user      : "SYS as SYSDBA",
//   password  : "NodeJSORAPassword2020",
//   privilege : oracledb.SYSDBA,
//   connectionString: `(DESCRIPTION=
//                         (ADDRESS=
//                             (PROTOCOL=TCP)
//                             (HOST=localhost)
//                             (PORT=1521)
//                           )
//                           (CONNECT_DATA=
//                             (SERVICE_NAME=orcl)
//                             (SERVER=DEDICATED)
//                           )
//                         )`
//   })
//   .then(function (conn) {
//     console.log('KP : Oracle & NodeJS Connection  was Successful!');
//     return conn.execute("Select name, open_mode, cdb from v$database")
//       .then(function (result) {
//         console.log(result.rows);
//         return conn.close();
//       })
//       .catch(function (err) { console.error(err); return conn.close(); });
//   })
//   .catch(function (err) { console.error(err); });
// // /******************************************************************************************************************/ //



// // /******************************************************************************************************************/
// // /*** KP : OracleDB Connection  ***/

// //KP : Trial 1
// // // This example uses Node 8's async/await syntax.
// const oracledb = require('oracledb');
// oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
// const mypw = ""; ///"NodeJSORAPassword2020";  // set mypw to the hr schema password
// // Use btoa() to encode the string into Base64
// const encodedPassword = btoa(mypw);
// var oraExeResult = "";
// var oraExeAllUsers = "";

// async function run() {

//   let connection;

//   console.log('KP : Oracle & NodeJS Connection User Name : SYS as SYSDBA ' +  ' & Password : ' + mypw + ' & Encrypted Password : ' + encodedPassword + ' !');

//   try {
//     connection = await oracledb.getConnection(
//       {
//         user: "SYS as SYSDBA",
//         password: "",//"NodeJSORAPassword2020",
//         //password: encodedPassword, // "",//"NodeJSORAPassword2020",
//         //privilege: oracledb.SYSDBA,
//         connectionString: "localhost:1521/orcl"
//         //connectString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=orcl)))"

//       }
//     );

//     console.log('KP : Oracle & NodeJS Connection  was Successful!');

//     //KP: Execute Queries on v$Database
//     var result = await connection.execute(
//       //"SELECT * FROM All_Users"
//       "Select name, open_mode, cdb from v$database"
//       // `SELECT manager_id, department_id, department_name
//       //  FROM departments
//       //  WHERE manager_id = :id`,
//       // [103],  // bind value for :id
//     );
//     console.log(result.rows);
//     oraExeResult = result;


//     //KP: Execute Queries on v$All_Users
//     result = await connection.execute(
//       "SELECT * FROM All_Users"
//       //"Select name, open_mode, cdb from v$database"
//       // `SELECT manager_id, department_id, department_name
//       //  FROM departments
//       //  WHERE manager_id = :id`,
//       // [103],  // bind value for :id
//     );
//     console.log(result.rows);
//     oraExeAllUsers = result;

//     //result = await connection.getConnection();
//     //console.log(result.rows);

//   } catch (err) {
//     console.error(err);
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   }
// }
// run();

// // /*** KP : OracleDB Connection  ***/
// // /******************************************************************************************************************/

// /******************************************************************************************************************** */
// /*** KP : OracleDB Documents served on Node APIs ***/
// ///KP : http get v$ api endpoint
// ///CRUD : Retrieve Operation : $http.get()
// app.get('/oracledbapi/ORAv3database', function (req, res) {
//   //res.setHeader('Content-Type','text/html');
//   res.setHeader('Content-Type', 'application/json');
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   console.log("KP : OracleDB Service APIs app.get(ORAv3database) : " + JSON.stringify(oraExeResult));
//   console.log("KP : OracleDB Service APIs app.get(ORAv3database.rows) : " + JSON.stringify(oraExeResult.rows));
//   res.send(oraExeResult);
// });
// /******************************************************************************************************************** */

// /******************************************************************************************************************** */
// /*** KP : OracleDB Documents served on Node APIs ***/
// ///KP : http get v$ api endpoint
// ///CRUD : Retrieve Operation : $http.get()
// app.get('/oracledbapi/ORAAllUsers', function (req, res) {
//   //res.setHeader('Content-Type','text/html');
//   res.setHeader('Content-Type', 'application/json');
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   console.log("KP : OracleDB Service APIs app.get(ORAAllUsers) : " + JSON.stringify(oraExeAllUsers));
//   console.log("KP : OracleDB Service APIs app.get(ORAAllUsers.rows) : " + JSON.stringify(oraExeAllUsers.rows));
//   res.send(oraExeAllUsers);
// });
// /******************************************************************************************************************** */


// /******************************************************************************************************************** */
// /*** KP : MSSQLServerDB Documents served on Node APIs ***/
// ///KP : http get v$ api endpoint
// ///CRUD : Retrieve Operation : $http.get()
app.get('/api/Person', function (req, res) {
  //res.setHeader('Content-Type','text/html');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  console.log("KP : MSSQLServer  APIs app.get('/api/Person') : " + JSON.stringify(persons));
  console.log("KP : MSSQLServer  APIs app.get('/api/Person') : " + JSON.stringify(persons.recordset));
  res.send(persons);
});
// /******************************************************************************************************************** */







// Define routes for your API
app.get('/api/data', (req, res) => {
  // Logic to fetch data from the DB and send as JSON
  res.json({ message: 'Data from server' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

////KP : 'module.exports = app' - Command exports the app as ng-App
//module.exports = app;
///KP : Use ES Modules Syntax (Recommended for modern Vue.js projects)
export default app;

/***KP : Generic node server.js program to connect to the mongodb as a backend db ***/

// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 5000;

// // Use CORS to allow requests from your React app domain (e.g., http://localhost:3000)
// app.use(cors({
//     origin: 'http://localhost:3000'
// }));
// app.use(express.json());

// // Connect to your database (example with Mongoose for MongoDB)
// const mongoose = require('mongoose');
// mongoose.connect('YOUR_DB_CONNECTION_STRING', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// // Define routes for your API
// app.get('/api/data', (req, res) => {
//   // Logic to fetch data from the DB and send as JSON
//   res.json({ message: 'Data from server' });
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
