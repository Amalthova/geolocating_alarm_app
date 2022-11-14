const e = require("express");
const express = require("express");
const db = require('../db/knex');

function setupServer () {
  const app = express();
  app.use(express.json());
  app.get("/api/test", (request, response) => {
    response.status(200).send("hello")
  })

  app.get('/api/alarms', async (request, response) => {
    try {
      const alarm = await db('alarms')
        .select('*')
        .timeout(1500);
      alarm.length > 0  //if array greater than 0
        ? response.status(200).send(alarm) // send array
        : response.status(404).send("no alarm found"); // else, send "nothing found"
    } catch(err) {
      response.status(500).send(err);
    }
  })
  
  app.post('/api/alarms', async (request, response) => {
    let newAlarm = request.body;
    try {
      await db('alarms')
        .insert(newAlarm);
      response.status(200).send("New alarm added")
    } catch(err) {
      response.status(500).send(err);
    }
  })

  app.patch('/api/alarms/:id', async (request, response) => { //update
    let changesToApply = request.body;
    let id = request.params.id;
    console.log(changesToApply);
    try {
      await db('alarms')
        .where({"id": id})
        .update(changesToApply)
        .then(response.status(200).send("update success"));

    } catch(err) {
      response.status(500).send(err);
    }
  })

  app.delete('/api/alarms/:id', async (request, response) => {
    console.log("hello");
    let deleteTarget = request.params.id;
    try {
      await db('alarms')
        .where({id: deleteTarget})
        .del()
        .then(response.status(200).send("alarm deleted") );
    } catch(err) { 
      response.status(500).send(err);
    }
  })

  app.get('/api/alarms/:id', async (request, response) => { // FindbyID
    try {
      const query = request.params.id; //Get id from request
      const selectedAlarm = await db('alarms')
        .where( 'id', query )
        
      selectedAlarm.length > 0  //if something is in the array
      ? response.status(200).send(selectedAlarm) // send array
      : response.status(404).send("no alarm found", query); // else, send "nothing found"
    } catch(err) {
      response.status(500).send(err);
    }
  })

  app.get('/api/alarms/all', async (request, response) => { // FindAll
    try {
      await db('alarms')
    } catch(err) {
      response.status(500).send(err);
    }
  })

return app;
}

module.exports = setupServer;