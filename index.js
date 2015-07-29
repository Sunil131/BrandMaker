var http = require('http'),
	express = require('express'),
	path    = require('path'),
	port = process.env['PORT'] || 3096,
	app = express();


//app.use("/public", express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));	

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'/index.html'));
});



http.createServer(app).listen(port);
console.log('Brand Giver Server running at port 3096')


