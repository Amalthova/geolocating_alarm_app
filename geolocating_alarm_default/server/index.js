const setupServer = require("./server");
const db = require('../db/knex');
const PORT = process.env.PORT || 4000;
const server = setupServer();

(async() => {
  try {
    await db.migrate.latest();
    server.listen(PORT, ()=>{
      console.log(`App is listening at localhost${PORT}`)
    });
  } catch(err) {
    console.error(err);
  }

})()