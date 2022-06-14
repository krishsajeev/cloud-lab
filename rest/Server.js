var express = require('express');
var app = express();

var cors = require('cors');

let marks={'SAJEEV':{'CLOUD':100,'BLOCKCHAIN':100,'IOT':100},
   'KRISHNA':{'CLOUD':100,'BLOCKCHAIN':100,'IOT':100}};

app.use(cors());

app.get('/:person/:subject', function (req, res) {
   try{
      jsonlist=[marks[req.params.person][req.params.subject]];
      console.log(marks);
      res.send(jsonlist);
   }catch(err){
      res.sendStatus(404).send('NOT FOUND !')
   }
})

app.post('/:person/:subject/:score', function (req, res) {
   try{
      marks[req.params.person]={};
      marks[req.params.person][req.params.subject]=req.params.score;
      console.log(marks);
      res.sendStatus(200);
   }catch(err){
      res.sendStatus(204).send('SOME ERROR OCCURED !');
   }
})


app.put('/:person/:subject/:score', function (req, res) {
   try{
      console.log('visit');
      marks[req.params.person][req.params.subject]=parseInt(req.params.score);
      console.log(marks);
      res.sendStatus(201);
   }catch(err){
      res.sendStatus(204).send('NOT FOUND !');
   }
})


app.delete('/:person/:subject', function (req, res) {
   try{
      delete marks[req.params.person][req.params.subject];
      console.log(marks);
      res.sendStatus(200);
   }catch(err){
      res.sendStatus(204).send('NOT FOUND !');
   }
})


app.listen(5000);