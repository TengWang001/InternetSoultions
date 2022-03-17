var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var loginTable = [];

var findAllUsers = async function () {
  // Connection URL
  const url = 'mongodb://localhost:27017/Example';
  let client;
  try {
    // Use connect method to connect to the Server
    client = await MongoClient.connect(url);
    const db = client.db(); // MongoDB would return client and you need to call DB on it.
    let dbResp = await db.collection('login').find({}).toArray(); // As .find() would return a cursor you need to iterate over it to get an array of documents.
    // let dbResp = await db.collection('users').find({}).limit(1).toArray(); - For one document
    client.close();
    loginTable = dbResp;
    return dbResp;
  } catch (err) {
    (client) && client.close();
    console.log(err);
    throw err
  }
};

var insertUserData = async function (obj) {
  // Connection URL
  const url = 'mongodb://localhost:27017/Example';
  let client;
  try {
    // Use connect method to connect to the Server
    client = await MongoClient.connect(url);
    const db = client.db(); // MongoDB would return client and you need to call DB on it.
    // console.log(obj);
    await db.collection('login').insert(obj);
    client.close();
    return;
  } catch (err) {
    (client) && client.close();
    console.log(err);
    throw err
  }
}

//This is really sloppy way of doing this
findAllUsers();
findAllUsers();

function checkIfEmailExists(email) {
  let user = loginTable.filter(user => user.email === email);
  //no email found.
  if (user.length === 0)
    return false;
  else
    return true
}

//login
module.exports.login = function (email, password) {
  //no email found.
  if (checkIfEmailExists(email) === false)
    return;

  //compares the table
  let user = loginTable.filter(user => user.email === email);

  //if the password right return the object id
  if (user[0].password == password) {
    return user[0].email;
  } else {
    return;
  }
}

//Register
module.exports.register = function (email, password) {
  //no email found.
  if (checkIfEmailExists(email) == false) {
    var obj = {"email": email,  "password": password};
    insertUserData(obj);
    return "register user";
  } else {
    return
  }
}
