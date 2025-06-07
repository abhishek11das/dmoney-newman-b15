const newman = require('newman');
require ('dotenv').config();

newman.run({
    collection: `https://api.postman.com/collections/45682289-3f1f4568-babc-4104-bd62-99817b79145a?access_key=${process.env.pmatKey}`,
    //collection:require('./collection/dmoney-user-api-collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/reports.html',
        }
    }

}, function(err){
    if(err) {throw err;}
    console.log('collection run complete!');
})