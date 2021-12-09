const mongoose = require ('mongoose');



var QuotesSchema = new mongoose.Schema({
    name: {type:String, required:[true,"name field must not be blank"], minlength:[3,"name must be three characters or more"]},
    quote:{type:String, required:[true,"quote field must not be blank"],  maxlength:[60,"quote must be 60 characters or less"]}
}, {timestamps:true});
mongoose.model('Quotes',QuotesSchema);
var Quotes= mongoose.model('Quotes');
mongoose.connect('mongodb://localhost/Quotes', {useNewUrlParser: true, useUnifiedTopology: true});;
const moment = require('moment');

const QuotesModel = {

    createQuote: function(newQuote){
        return Quotes.create(newQuote);
    },
    findQuotes: function(){
    return Quotes.find();
    }
}




module.exports= {QuotesModel}