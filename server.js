var express = require('express');
var app = express();

app.get('/palindrome/:originalWord', function (req, res) {

      var reversedWord="";

      // converting to lower case
     	originalWord = req.params.originalWord.toLowerCase();

      // removing whitespaces
      originalWord = originalWord.replace(/ /g, '');

      // line for debugging
      // console.log(originalWord);

      // reversing the originalWord
     	for (var i = originalWord.length - 1; i >= 0; i--) { 
      	 reversedWord += originalWord[i];
    	}

      // checking if they're palindrome
    	if(originalWord==reversedWord){
       		console.log('is palindrome');
       		res.sendStatus(200);
       }else{
	       	console.log('is NOT palindrome');
	       	res.sendStatus(400);
       }
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Palindrome app running at http://%s:%s", host, port)

})