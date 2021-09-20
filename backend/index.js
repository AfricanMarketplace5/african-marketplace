//Imports 
require("dotenv").config();
const server = require('./api/server.js');


//Environment Variables
const PORT = process.env.PORT || 5000;


//Start
server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});