const express = require("express");
const { get } = require("http");
const ApiRouter = express.Router();
const {PersonController} = require('../controllers/controllers');


ApiRouter
    .get( '/', PersonController.allPeople );
ApiRouter
    .get('/new/:name', PersonController.addName);
ApiRouter
    .get('/remove/:name', PersonController.removeName );
ApiRouter
    .get('/:name', PersonController.findByName );


module.exports = {ApiRouter}