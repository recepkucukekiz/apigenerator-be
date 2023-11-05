const dotenv = require('dotenv');
const path = require('path');

let envPath = ".env"; 

console.log("ENV: ", process.env.NODE_ENV);
if (process.env.NODE_ENV) {
  envPath = `.env.${process.env.NODE_ENV.trim()}`;
}

const resolvedPath = path.resolve(__dirname, envPath);

dotenv.config({ path: resolvedPath });