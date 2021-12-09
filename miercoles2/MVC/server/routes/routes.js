const express= require('express');
const Routes= express.Router();
const {QuotesController}=require('./../controllers/quotesController');




Routes
    .get('/', QuotesController.loadmainPage);
Routes

    .post('/new', QuotesController.postNew);
Routes
    .get('/show', QuotesController.showQuotes);


module.exports = {Routes};