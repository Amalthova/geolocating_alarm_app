const e = require("express");
const express = require("express");
const db = require('../db/knex');

function setupServer () {
  const app = express();
  app.use(express.json());
  app.get("/api/test", (request, response) => {
    response.status(200).send("hello")
  })

  app.get('/api/songs', async (request, response) => {
    try {
      const songs = await db('songs')
        .select('*')
        .timeout(1500);
      songs.length > 0
        ? response.status(200).send(songs)
        : response.status(404).send("no songs found");
    } catch(err) {
      response.status(500).send(err);
    }
  })
  
  app.post('/api/songs', async (request, response) => {
    let newSong = request.body;
    try {
      await db('songs')
        .insert(newSong);
      response.status(200).send("New Song Added Committed")
    } catch(err) {
      response.status(500).send(err);
    }
  })

  app.patch('/api/songs/:id', async (request, response) => { //update
    let changesToApply = request.body;
    let id = request.params.id;
    console.log(songToUpdate);
    try {
      await db('songs')
        .where("id", id).update(changesToApply);

      if (songs) {response.status(200).send(songs)
      response.status(200).send("Database has been Updated")
      } else {
        response.status(404).send("Could not find item to update")
      }
    } catch(err) {
      response.status(500).send(err);
    }
  })

  app.delete('/api/songs/:id', async (request, response) => {
    // let deleteTarget = request.params.id;
    try {
      await db('songs')
        .select({'id': request.params.id})
        .del()
        .then(response.status(200).send("song deleted") );
    } catch(err) { 
      response.status(500).send(err);
    }
  })

  app.get('/api/songs/:id', async (request, response) => { // FindbyID
    try {
      const query = request.params.id; //Get id from request
      // const targetId = 
      const songs = await db('songs')
        .select(songs.id)
        .timeout(1500);
    } catch(err) {
      response.status(500).send(err);
    }
  })

  app.get('/api/songs/all', async (request, response) => { // FindAll
    try {
      await db('songs')
    } catch(err) {
      response.status(500).send(err);
    }
  })

return app;
}

module.exports = setupServer;