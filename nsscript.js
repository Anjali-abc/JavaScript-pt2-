var x=1;
const y =2;

console.log("global variable:"+ x);
console.log("global variable:"+ y);

function a() {
	var x=10;
	const y=20;
	console.log("inside function:"+ x);
	console.log("inside function:"+ y);
}
a();
console.log(x);
