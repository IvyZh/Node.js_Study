var events  = require("events");
var enentEmitter = new events.EventEmitter();
enentEmitter.on("doSomething",function(){
	console.log("do...");
});



setTimeout(function(){
	enentEmitter.emit("doSomething");
},3000);
