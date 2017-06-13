//require all the installed modiules
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");


//creating the instance of express and instantitiase the bodyParser and cors
var app = express();
app.use(bodyParser.json());
app.use(cors());


//GET call that returns json that formats natural and unix date
app.get("/dateValues/:dateVal",function(req,res,next){

//get res data for date
var dateVal= req.params.dateVal;


// options used for formatting date
 var dateFormattingOptions ={ weekday: "long", year: "numeric", month: "short",
    day: "numeric" };

if(isNaN(dateVal)){

  var naturalDate=new Date(dateVal);
  naturalDate= naturalDate.toLocaleDateString("hi-IN", dateFormattingOptions);

  var unixDate= new Date(dateVal).getTime()/1000;

}
else{

  var unixDate= dateVal;
  var naturalDate= new Date(dateVal*1000);
  naturalDate= naturalDate.toLocaleDateString("hi-IN",dateFormattingOptions);


}



res.json({unix: unixDate, natural: naturalDate});


});


// listenig to the port
app.listen("3000",function(err){
  if(err) throw err;
  console.log("connected to port 3000!");
});

//console.log(__dirname);
