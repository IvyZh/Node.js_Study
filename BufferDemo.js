
// 1. 创建 Buffer 类

const buff1 = Buffer.alloc(10)// 创建一个长度为 10、且用 0 填充的 Buffer。
const buff2 = Buffer.alloc(10,1);// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buff3 = Buffer.allocUnsafe(10);
const buff4 = Buffer.from([1,2,3,4]);// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buff5 = Buffer.from("test");// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buff6 = Buffer.from("test2","latin1");// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。

console.log("buff1:"+buff1);
console.log("buff2:"+buff2);
console.log("buff3:"+buff3);
console.log("buff4:"+buff4);
console.log("buff5:"+buff5);
console.log("buff6:"+buff6);
console.log("=================");

// 2. 创建 Buffer 类
// 语法：buf.write(string[, offset[, length]][, encoding])

const buf1 = Buffer.alloc(256);
var len = buf1.write("Hello Node.js!");
console.log("len:"+len+","+buf1);
console.log("=================");


// 3. 从缓冲区读取数据
//语法:buf.toString([encoding[, start[, end]]])

const buf = Buffer.alloc(256);
for(var i = 0;i<26;i++){
	buf[i]=i+97;
}
console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde
console.log("=================");


// 4. 将 Buffer 转换为 JSON 对象
// 语法：buf.toJSON() ，当字符串化一个 Buffer 实例时，JSON.stringify() 会隐式地调用该 toJSON()。

const b1 = Buffer.from([1,2,3,4,5]);
const json = JSON.stringify(b1);
console.log(json);//// 输出: {"type":"Buffer","data":[1,2,3,4,5]}

// 解析
const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ?
    Buffer.from(value.data) :
    value;
});

// 输出: <Buffer 01 02 03 04 05>
console.log(copy);
console.log("=================");



// 5. 缓冲区合并
//语法:Buffer.concat(list[, totalLength])

var c1 = Buffer.from("Hello");
var c2 = Buffer.from("Node.js");
var c3 = Buffer.concat([c1,c2]);
console.log(c3);//<Buffer 48 65 6c 6c 6f 4e 6f 64 65 2e 6a 73>
console.log(c3.toString());//HelloNode.js
console.log("=================");


// 6. 缓冲区比较
// 语法：buf.compare(otherBuffer);

var a1 = Buffer.from("ABC");
var a2 = Buffer.from("ABCD");
var a3 = Buffer.from("ABCDE");
var a4 = Buffer.from("ABCDE");
var res1 = a1.compare(a2);
var res2 = a3.compare(a2);
var res3= a3.compare(a4);
console.log(res1);//-1
console.log(res2);//1
console.log(res3);//0
console.log("=================");

// 7. 拷贝缓冲区
// 语法：buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])

var d1 = Buffer.from("123456789");
var d2 = Buffer.from("ABCD");
d2.copy(d1,1);
console.log(d1.toString());//1ABCD6789
console.log("=================");

// 8.缓冲区裁剪
//语法如下所示：buf.slice([start[, end]])


var s1 = Buffer.from("abcde");
var s2 = s1.slice(1,3);
console.log(s2.toString());//bc

// 9. 缓冲区长度
console.log(s2.length);//2


//END.

































