const {QuotesModel}= require('./../models/quotesModel');
const moment = require('moment');
const QuotesController = {

    mainPage: function(request, response) {
    response.render('index');
    },
    postNew: function(request,response){
        
    
        QuotesModel
        .createQuote({
            name:request.body.name, 
            quote:request.body.quote })
            .then (result =>{

            response.redirect('/quotes/show');
            })
            .catch ( err=> {
                console.log ("something went wrong",err);
                for(var key in err.errors){
                request.flash('quotes',err.errors[key].message);
                
                }
            response.redirect('/quotes');


            })
        

    },
    showQuotes: function(request,response){

        QuotesModel
        .findQuotes().sort({createdAt:"desc"}).exec(function(err,allQuotes){

                response.render('quotes',{quotes:allQuotes,moment:moment});
        }); 
}



}

module.exports={QuotesController}