require("./env.js");

const apiConfig = require('./api/config');
const app = require('./api/app');

app.listen(apiConfig.app.port, () => {
  console.log(`Uygulama ${apiConfig.app.port} portunda çalışıyor.`);
});