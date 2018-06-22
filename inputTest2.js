var fs = require("fs");

fs.readFile('input.txt',function(err,data){
	if(err){
		return console.error(err);
	}else{
		console.log(data.toString());
	}
});

console.log("非阻塞代码实例end");



var data = fs.readFileSync("input.txt");
console.log("data:"+data);
console.log("阻塞代码实例end");
