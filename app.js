var express = require('express')

app = express()

app.use(express.static(__dirname + '/static'))
var port = 5000 || process.env.port
app.use(function (req, res) {
	console.log('OUR MIDDLE WARE')
})


// GET /
// POST /pictures
app.get('/', function(request, response){
	response.sendFile(__dirname + '/index.html')

})

app.listen(port, function() {
	console.log('Server listening on port: '+port)
})
